package dev.kolektiv.themes

import androidx.compose.ui.graphics.Color
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertSame

class PalettesTest {
    @Test
    fun sevenBrandPalettes() {
        val ids = listOf(
            "nord",
            "catppuccin-latte",
            "catppuccin-frappe",
            "catppuccin-macchiato",
            "catppuccin-mocha",
            "kolektiv-light",
            "kolektiv-dark",
        )
        assertEquals(ids, ids.filter { KolektivThemes.all.containsKey(it) })
        ids.forEach { id -> assertEquals(KolektivThemes.byId(id), KolektivThemes.all.getValue(id)) }
    }

    @Test
    fun kolektivDarkHexMatchesTokens() {
        val colors = KolektivThemes.kolektivDark
        assertEquals(Color(0xFF10030D), colors.base100)
        assertEquals(Color(0xFFE4C1F9), colors.primary)
        assertEquals(Color(0xFFF0FAC3), colors.secondary)
        assertEquals(Color(0xFFC3F8FA), colors.accent)
        assertEquals(Color(0xFFEF2D56), colors.error)
    }

    @Test
    fun kolektivLightHexMatchesTokens() {
        assertEquals(Color(0xFFFFFFFF), KolektivThemes.kolektivLight.base100)
        assertEquals(Color(0xFFC494E0), KolektivThemes.kolektivLight.primary)
    }

    @Test
    fun cssAliases() {
        assertSame(KolektivThemes.kolektivDark, KolektivThemes.byId("kolektivcomputer-dark"))
        assertSame(KolektivThemes.kolektivLight, KolektivThemes.byId("kolektivcomputer-lig"))
        assertSame(KolektivThemes.kolektivDark, KolektivThemes.kolektivcomputerDark)
        assertSame(KolektivThemes.kolektivLight, KolektivThemes.kolektivcomputerLig)
    }
}
