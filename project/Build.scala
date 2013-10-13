
import sbt._
import Keys._
import com.earldouglas.xsbtwebplugin.WebPlugin.webSettings



object ApplicationBuild extends Build {

  val appName = "doujs_test"
  val appVersion = "1.0-SNAPSHOT"
  val ScalatraVersion = "2.2.1"
  val ScalaVersion = "2.10.2"

  val appDependencies = Seq()

  lazy val project = Project (
  "doujs_test",
    file("."),
    settings = Defaults.defaultSettings ++ webSettings ++ Seq(
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
        "net.databinder.dispatch" %% "dispatch-core" % "0.11.0",
        "org.eclipse.jetty" % "jetty-webapp" % "8.1.8.v20121106" % "container",
        "org.eclipse.jetty.orbit" % "javax.servlet" % "3.0.0.v201112011016" % "container;provided;test" artifacts (Artifact("javax.servlet", "jar", "jar"))
      )
    )
  )
}
