package models

import collection.mutable.ArrayBuffer
import play.api.libs.json.{JsArray, Json, JsValue, Writes}

/**
 * User: boui
 * Date: 10/10/13
 */
object Models {
  implicit val contactsWrites = new Writes[Contact] {
    def writes(c: Contact): JsValue = {
      Json.obj(
        "id" -> Json.toJson(c.id),
        "name" -> Json.toJson(c.name),
        "contacts" -> Json.toJson(c.contacts),
        "groups" -> JsArray(c.groups.asInstanceOf[Seq[JsValue]])
      )
    }
  }

  implicit val groupsWrites = new Writes[Group] {
    def writes(g: Group): JsValue = {
      Json.obj(
        "id" -> Json.toJson(g.id),
        "title" -> Json.toJson(g.title),
        "active" -> Json.toJson(g.active)
      )
    }
  }

  case class Contact(id:Int, name:String, contacts:Map[String, String], groups:ArrayBuffer[Group])
  case class Group(id:Int, title:String, active:Boolean)
}
