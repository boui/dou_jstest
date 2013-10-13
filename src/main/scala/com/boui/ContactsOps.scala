package com.boui

import _root_.models.TestData
import com.boui.Application
import collection.mutable.ArrayBuffer

/**
 * User: boui
 * Date: 10/13/13
 */
trait ContactsOps {
  self: Application =>

  get("/contact/all"){
     contentType = formats("json")
     List(TestData.IgorPetruk, TestData.LittlePonny)
  }
}
