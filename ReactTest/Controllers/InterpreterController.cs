using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ReactTest.Models;
using System.Data.Entity;

namespace ReactTest.Controllers
{
    public class InterpreterController : Controller
    {
        // GET: Interpreter
        private InterpreterDBContext db = new InterpreterDBContext();
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetDepartments()
        {
            return Json(db.Interpreter_Departments.ToList().Select(x=>new { value = x.ID, label = x.Department_Name }).ToList()
                , JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetRequests()
        {
            return Json(db.Interpreter_Requests.ToList(), JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetOneRequest()
        {
            return Json(db.Interpreter_Requests.FirstOrDefault(), JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetFields(List<string> type)
        {
            return Json(db.Interpreter_Fields.Where(x => x.Type == type.FirstOrDefault()).ToList(), JsonRequestBehavior.AllowGet);
        }
    }
}