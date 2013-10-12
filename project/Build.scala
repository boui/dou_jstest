import com.mojolly.scalate.ScalatePlugin._
import sbt._
import Keys._
import ScalateKeys._
import com.earldouglas.xsbtwebplugin.WebPlugin.webSettings



object ApplicationBuild extends Build {

  val appName = "doujs_test"
  val appVersion = "1.0-SNAPSHOT"
  val ScalatraVersion = "2.2.1"
  val ScalaVersion = "2.10"

  val appDependencies = Seq()

  lazy val project = Project (
  "doujs_test",
    file("."),
    settings = Defaults.defaultSettings ++ scalateSettings++ webSettings ++ Seq(
      name := appName,
      version := appVersion,
      scalaVersion := ScalaVersion,
      resolvers += Classpaths.typesafeReleases,
      libraryDependencies ++= Seq(
        "org.scalatra" %% "scalatra" % ScalatraVersion,
        "org.scalatra" %% "scalatra-scalate" % ScalatraVersion,
        "org.scalatra" %% "scalatra-json" % ScalatraVersion,
        "org.json4s"   %% "json4s-jackson" % "3.2.4",
        "org.scalatra" %% "scalatra-specs2" % ScalatraVersion % "test",
        "org.eclipse.jetty" % "jetty-webapp" % "8.1.8.v20121106" % "container"
      ),
      scalateTemplateConfig in Compile <<= (sourceDirectory in Compile){ base =>
        Seq(
          TemplateConfig(
            base / "webapp" / "WEB-INF" / "templates",
            Seq.empty,  /* default imports should be added here */
            Seq(
              Binding("context", "_root_.org.scalatra.scalate.ScalatraRenderContext", importMembers = true, isImplicit = true)
            ),  /* add extra bindings here */
            Some("templates")
          )
        )
      }
    )
  )
}
