logLevel := Level.Warn

resolvers += "scalasbt" at "http://scalasbt.artifactoryonline.com/scalasbt/sbt-plugin-releases/"

resolvers += Resolver.sonatypeRepo("releases")

addSbtPlugin("org.scalatra.sbt" % "scalatra-sbt" % "0.3.2")

addSbtPlugin("com.typesafe.startscript" % "xsbt-start-script-plugin" % "0.5.3")
