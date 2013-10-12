package controllers

import play.api.mvc._
import play.api.libs.json.Json

/**
 * User: boui
 * Date: 10/10/13
 */
object Application extends Controller{

    import models.Models._

    def getContacts() = Action { request =>
      Ok(
//      "OK"
        Json.toJson(TestData.IgorPetruk)
      )
    }
}
