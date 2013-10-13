package com.boui
import org.scalatra._
import org.scalatra.json._
import javax.servlet.http.HttpServletRequest
import concurrent.{Future, ExecutionContext}
import org.json4s.{DefaultFormats, Formats}
/**
 * User: boui
 * Date: 10/13/13
 */
trait Application extends ScalatraServlet with JacksonJsonSupport{

  protected implicit val jsonFormats: Formats = DefaultFormats

  protected implicit def executor: ExecutionContext = ExecutionContext.Implicits.global
}
