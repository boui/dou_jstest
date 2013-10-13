package com.boui

import _root_.models.Models.Contact
import _root_.models.TestData
import com.boui.Application
import collection.mutable.ArrayBuffer

/**
 * User: boui
 * Date: 10/13/13
 */
trait ContactsOps {
  self: Application =>
  var contactList = ArrayBuffer(TestData.IgorPetruk, TestData.LittlePonny);

  var c = 3
  get("/contact/all"){
     contentType = formats("json")
     contactList
  }

  post("/contact"){
    contentType = formats("json")
    val bodyContact = parsedBody.extract[Contact]

    if(bodyContact.id != -1){
      println("being here before")
      contactList = contactList.map{
        x => if (x.id == bodyContact.id){
          println("changed")
          bodyContact
        } else {
          x
        }
      }
      bodyContact
    } else {
      println("new")
      c+=1
      val contact:Contact = bodyContact.copy(
        id = c
      )

      contactList += contact
      contact
    }


  }

  delete("/contact/:id"){
    val id = Integer.parseInt(params("id"))
    println("deleting "+id)
    contactList = contactList.filter(x=> x.id != id)
  }
}
