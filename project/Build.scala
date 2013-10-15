
import sbt._
import Keys._
import com.earldouglas.xsbtwebplugin.WebPlugin.webSettings
import com.typesafe.sbt.SbtStartScript


object ApplicationBuild extends Build {

  val appName = "doujs_test"
  val appVersion = "1.0-SNAPSHOT"
  val ScalatraVersion = "2.2.1"
  val ScalaVersion = "2.10.2"

  val appDependencies = Seq()

  lazy val project = Project (
  "doujs_test",
    file("."),
    settings = Seq(SbtStartScript.startScriptForClassesSettings: _*) ++ Defaults.defaultSettings ++ webSettings ++ Seq(
      name := appName,
      version := appVersion,
      scalaVersion := ScalaVersion,
      resolvers += Classpaths.typesafeReleases,
      libraryDependencies ++= Seq(
        "org.scalatra" %% "scalatra" % ScalatraVersion,
//        "org.scalatra" %% "scalatra-scalate" % ScalatraVersion,
        "org.scalatra" %% "scalatra-json" % ScalatraVersion,
        "org.json4s"   %% "json4s-jackson" % "3.2.4",
        "org.scalatra" %% "scalatra-specs2" % ScalatraVersion % "test",
        "ch.qos.logback" % "logback-classic" % "1.0.6" % "runtime",
        "org.eclipse.jetty" % "jetty-webapp" % "8.1.10.v20130312" % "compile;container",
        "org.eclipse.jetty.orbit" % "javax.servlet" % "3.0.0.v201112011016" % "compile;container;provided;test"
          artifacts (Artifact("javax.servlet", "jar", "jar"))
      )
    )
  )
}
