package models

import collection.mutable.ArrayBuffer

/**
 * User: boui
 * Date: 10/10/13
 */
object Models {
  case class ContactInfo(phone:String, email:String)
  case class Contact(id:Integer, name:String, contacts:ContactInfo, groups:List[Group])
  case class Group(id:Integer, title:String, active:Boolean)
}



object TestData {
  import models.Models._

  val friendsGroup = new Group(0, "Friends", false)
  val workGroup = new Group(1, "Work", false)
  val bestFriends = new Group(2, "Tinkie Winkies", false)

  val IgorPetruk =
    new Contact(0, "Igor Lala Petruk", ContactInfo("+80982983773", "sdjk@slkdjf"),
      List(friendsGroup, bestFriends))

  val LittlePonny =
    new Contact(1, "Little Sleepy Ponny", ContactInfo("+555555555", "sleepy@cloud.com"),
      List(workGroup))
}
