logLevel := Level.Warn

resolvers += "scalasbt" at "http://scalasbt.artifactoryonline.com/scalasbt/sbt-plugin-releases/"

resolvers += "Maven Search Hack" at "http://mirrors.ibiblio.org/maven2/"

resolvers += Resolver.sonatypeRepo("releases")

resolvers += "Maven Search Hack" at "http://mirrors.ibiblio.org/maven2/"

addSbtPlugin("com.mojolly.scalate" % "xsbt-scalate-generator" % "0.2.0")

addSbtPlugin("org.scalatra.sbt" % "scalatra-sbt" % "0.3.2")