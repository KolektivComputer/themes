plugins {
    alias(libs.plugins.kotlinMultiplatform)
    alias(libs.plugins.composeMultiplatform)
    alias(libs.plugins.composeCompiler)
    `maven-publish`
}

kotlin {
    jvm()
    iosArm64()
    iosSimulatorArm64()

    sourceSets {
        commonMain.dependencies {
            api(libs.compose.runtime)
            api(libs.compose.ui)
        }
        commonTest.dependencies {
            implementation(libs.kotlin.test)
        }
    }
}

publishing {
    publications {
        // KMP creates target publications; add POM metadata to all
    }
    repositories {
        // GitHub Packages (when GITHUB_TOKEN + GITHUB_ACTOR present)
        val ghActor = providers.environmentVariable("GITHUB_ACTOR")
        val ghToken = providers.environmentVariable("GITHUB_TOKEN")
        if (ghActor.isPresent && ghToken.isPresent) {
            maven {
                name = "GitHubPackages"
                url = uri("https://maven.pkg.github.com/KolektivComputer/themes")
                credentials {
                    username = ghActor.get()
                    password = ghToken.get()
                }
            }
        }

        val yuriUser = providers.environmentVariable("YURI_CAPITAL_REPO_USERNAME")
        val yuriPass = providers.environmentVariable("YURI_CAPITAL_REPO_PASSWORD")
        if (yuriUser.isPresent && yuriPass.isPresent) {
            val user = yuriUser.get()
            val pass = yuriPass.get()
            val versionString = project.version.toString()
            val isCanonicalSnapshot = versionString.endsWith("-SNAPSHOT")
            val isPrerelease = versionString.contains("SNAPSHOT")
            if (isCanonicalSnapshot) {
                maven {
                    name = "yuriSnapshots"
                    url = uri("https://repo.yuri.capital/repository/maven-snapshots/")
                    credentials {
                        username = user
                        password = pass
                    }
                }
            } else if (!isPrerelease) {
                maven {
                    name = "yuriReleases"
                    url = uri("https://repo.yuri.capital/repository/maven-releases/")
                    credentials {
                        username = user
                        password = pass
                    }
                }
            } else {
                // Unique pre-release (e.g. 0.0.1-SNAPSHOT.3) — releases/snapshots policy may reject;
                // publish to maven-releases with allow or use snapshots host; prefer releases URL and tolerate policy in script.
                maven {
                    name = "yuriReleases"
                    url = uri("https://repo.yuri.capital/repository/maven-releases/")
                    credentials {
                        username = user
                        password = pass
                    }
                }
            }
        }
    }
}

publishing.publications.withType<MavenPublication>().configureEach {
    pom {
        name.set("Kolektiv Themes (${project.name})")
        description.set("Colour-only Kolektiv design tokens for Compose Multiplatform.")
        url.set("https://github.com/KolektivComputer/themes")
        licenses {
            license {
                name.set("MIT")
                url.set("https://opensource.org/licenses/MIT")
            }
        }
        developers {
            developer {
                id.set("kolektiv-computer")
                name.set("Kolektiv Computing")
                organization.set("Kolektiv Computing")
            }
        }
        scm {
            url.set("https://github.com/KolektivComputer/themes")
            connection.set("scm:git:https://github.com/KolektivComputer/themes.git")
            developerConnection.set("scm:git:https://github.com/KolektivComputer/themes.git")
        }
    }
}
