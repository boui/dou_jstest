package controllers

import collection.mutable.ArrayBuffer
import models.Models._

/**
 * User: boui
 * Date: 10/10/13
 */
object TestData {
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
