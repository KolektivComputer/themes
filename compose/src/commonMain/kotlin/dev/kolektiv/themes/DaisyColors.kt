package dev.kolektiv.themes

import androidx.compose.runtime.Immutable
import androidx.compose.ui.graphics.Color

/**
 * The twenty daisyUI colour tokens. Colour-only: radii, density and chrome
 * belong to the consuming app (Blawk metrics, Kalendee pack CSS, …).
 *
 * Hex values are the sRGB conversion of the oklch tokens in
 * `packages/themes/src/tokens.mjs` / `tokens.json`.
 */
@Immutable
data class DaisyColors(
    val base100: Color,
    val base200: Color,
    val base300: Color,
    val baseContent: Color,
    val primary: Color,
    val primaryContent: Color,
    val secondary: Color,
    val secondaryContent: Color,
    val accent: Color,
    val accentContent: Color,
    val neutral: Color,
    val neutralContent: Color,
    val info: Color,
    val infoContent: Color,
    val success: Color,
    val successContent: Color,
    val warning: Color,
    val warningContent: Color,
    val error: Color,
    val errorContent: Color,
)

fun DaisyColors.named(token: String): Color = when (token) {
    "primary" -> primary
    "secondary" -> secondary
    "accent" -> accent
    "info" -> info
    "success" -> success
    "warning" -> warning
    "error" -> error
    "neutral" -> neutral
    else -> primary
}

fun DaisyColors.contentNamed(token: String): Color = when (token) {
    "primary" -> primaryContent
    "secondary" -> secondaryContent
    "accent" -> accentContent
    "info" -> infoContent
    "success" -> successContent
    "warning" -> warningContent
    "error" -> errorContent
    "neutral" -> neutralContent
    else -> primaryContent
}
