package models

import collection.mutable.ArrayBuffer

/**
 * User: boui
 * Date: 10/10/13
 */
object Models {
  case class Contact(id:Int, name:String, contacts:Map[String, String], groups:ArrayBuffer[Group])
  case class Group(id:Int, title:String, active:Boolean)
}



object TestData {
  import models.Models._

  val friendsGroup = new Group(0, "Friends", false)
  val workGroup = new Group(1, "Work", false)
  val bestFriends = new Group(2, "Tinkie Winkies", false)

  val IgorPetruk =
    new Contact(0, "Igor Lala Petruk", Map(("phone", "+80982983773"), ("email", "sdjk@slkdjf")),
      ArrayBuffer(friendsGroup, bestFriends))

  val LittlePonny =
    new Contact(1, "Little Sleepy Ponny", Map(("phone", "+555555555"), ("email","sleepy@cloud.com")),
      ArrayBuffer(workGroup))
}
