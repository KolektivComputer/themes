#!/usr/bin/env python3
"""Regenerate Palettes.kt from a tokens.json that includes hex (SNAPSHOT.3+)."""
import json, sys
from pathlib import Path

def camel(key: str) -> str:
    parts = key.split("-")
    return parts[0] + "".join(p[:1].upper() + p[1:] for p in parts[1:])

def pascal(id: str) -> str:
    return "".join(p[:1].upper() + p[1:] for p in id.split("-"))

def id_camel(id: str) -> str:
    p = pascal(id)
    return p[:1].lower() + p[1:]

def hex_to_color(h: str) -> str:
    return f"Color(0xFF{h.lstrip('#').upper()})"

def main() -> None:
    src = Path(sys.argv[1] if len(sys.argv) > 1 else "packages/themes/dist/tokens.json")
    out = Path(sys.argv[2] if len(sys.argv) > 2 else "compose/src/commonMain/kotlin/dev/kolektiv/themes/Palettes.kt")
    tokens = json.loads(src.read_text())
    color_keys = tokens["colorKeys"]
    themes = tokens["themes"]
    version = tokens["version"]
    palette_blocks = []
    object_vals = []
    all_entries = []
    alias_vals = []
    for t in themes:
        pid = pascal(t["id"])
        cid = id_camel(t["id"])
        lines = [f"    {camel(key)} = {hex_to_color(t['hex'][key])}," for key in color_keys]
        palette_blocks.append(
            f"/** {t['label']} (`{t['id']}`). */\n"
            f"val {pid}Colors = DaisyColors(\n" + "\n".join(lines) + "\n)\n"
        )
        object_vals.append(f"    val {cid}: DaisyColors = {pid}Colors")
        all_entries.append(f'        "{t["id"]}" to {cid},')
        for alias in t.get("aliases") or []:
            acid = id_camel(alias)
            alias_vals.append(
                f"    /** CSS alias `{alias}`. */\n"
                f"    val {acid}: DaisyColors get() = {cid}"
            )
            all_entries.append(f'        "{alias}" to {cid},')
    text = (
        "package dev.kolektiv.themes\n\n"
        "import androidx.compose.ui.graphics.Color\n\n"
        f"// generated from @kolektiv/themes {version}\n"
        f"// implementation(\"dev.kolektiv.themes:themes:{version}\")\n\n"
        + "\n".join(palette_blocks)
        + "\nobject KolektivThemes {\n"
        + "\n".join(object_vals) + "\n\n"
        + "\n".join(alias_vals)
        + "\n\n    val all: Map<String, DaisyColors> = mapOf(\n"
        + "\n".join(all_entries)
        + "\n    )\n\n"
        + "    fun byId(id: String): DaisyColors =\n"
        + "        all[id] ?: error(\"unknown Kolektiv theme: $id\")\n"
        + "}\n"
    )
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(text)
    print(f"wrote {out} ({len(themes)} palettes)")

if __name__ == "__main__":
    main()
