package com.boui

import _root_.models.Models.{Group, Contact}
import _root_.models.TestData
import collection.mutable.ArrayBuffer

/**
 * User: boui
 * Date: 10/13/13
 */
trait GroupsOps {
  self: Application =>

  var counter = 4;
  var groupList = ArrayBuffer(TestData.workGroup, TestData.friendsGroup, TestData.bestFriends)

  get("/group/all") {
    contentType = formats("json")
    groupList
  }

  post("/group") {
    contentType = formats("json")
    val bodyGroup = parsedBody.extract[Group]
    if (bodyGroup.id != -1) {
      println("being here before")
      groupList = groupList.map {
        x => if (x.id == bodyGroup.id) {
          println("changed")
          bodyGroup
        } else {
          x
        }
      }
      bodyGroup
    } else {
      if (bodyGroup.title != "") {
        println("new")
        counter += 1
        val group: Group = bodyGroup.copy(
          id = counter
        )
        groupList += group
        group
      }
    }


  }

  delete("/group/:id") {
    val id = Integer.parseInt(params("id"))
    println("deleting " + id)
    groupList = groupList.filter(x => x.id != id)
  }

}
