logLevel := Level.Warn

resolvers += "scalasbt" at "http://scalasbt.artifactoryonline.com/scalasbt/sbt-plugin-releases/"

resolvers += Resolver.sonatypeRepo("releases")

addSbtPlugin("com.typesafe.sbt" % "sbt-start-script" % "0.10.0")

addSbtPlugin("com.typesafe.startscript" % "xsbt-start-script-plugin" % "0.5.3")
