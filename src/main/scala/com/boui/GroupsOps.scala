package com.boui

import _root_.models.TestData

/**
 * User: boui
 * Date: 10/13/13
 */
trait GroupsOps {
  self: Application =>

  get("/group/all"){
    contentType = formats("json")
    List(TestData.workGroup, TestData.friendsGroup, TestData.bestFriends)
  }
}
