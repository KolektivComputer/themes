package dev.kolektiv.themes

import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.staticCompositionLocalOf
import androidx.compose.ui.graphics.Color

val LocalDaisyColors = staticCompositionLocalOf { KolektivThemes.kolektivDark }
val LocalContentColor = staticCompositionLocalOf { KolektivThemes.kolektivDark.baseContent }

object KolektivTheme {
    val colors: DaisyColors
        @Composable get() = LocalDaisyColors.current
    val contentColor: Color
        @Composable get() = LocalContentColor.current
}

@Composable
fun KolektivTheme(
    colors: DaisyColors = KolektivThemes.kolektivDark,
    content: @Composable () -> Unit,
) {
    CompositionLocalProvider(
        LocalDaisyColors provides colors,
        LocalContentColor provides colors.baseContent,
        content = content,
    )
}

@Composable
fun ProvideContentColor(color: Color, content: @Composable () -> Unit) {
    CompositionLocalProvider(LocalContentColor provides color, content = content)
}
