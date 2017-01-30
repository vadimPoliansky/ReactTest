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
        public class ContentContext : DbContext
        {
           public DbSet<Interpreter_Departments> Departments { get; set; }
        }
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetDepartments()
        {
            ContentContext db = new ContentContext();
            return Json(db.Departments.ToList().Select(x=>new { value = x.ID, label = x.Department_Name }).ToList()
                , JsonRequestBehavior.AllowGet);
        }
    }
}