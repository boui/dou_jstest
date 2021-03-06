logLevel := Level.Warn

resolvers += "scalasbt" at "http://scalasbt.artifactoryonline.com/scalasbt/sbt-plugin-releases/"

resolvers += Resolver.sonatypeRepo("releases")

addSbtPlugin("org.scalatra.sbt" % "scalatra-sbt" % "0.3.2")

addSbtPlugin("com.typesafe.sbt" % "sbt-start-script" % "0.10.0")
