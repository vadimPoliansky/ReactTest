using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ReactTest.Models
{
    public class Interpreter_Requests
    {
        [Key]
        public int ID { get; set; }

        public string Department { get; set; }

        public string Physician { get; set; }

        public string Program { get; set; }

        public DateTime? Date_of_Assignment { get; set; }

        public TimeSpan? Time_of_Assignment { get; set; }

        public string Language { get; set; }

        public string Location { get; set; }

        public string Staff_in_Charge { get; set; }

        public string Contact_Name { get; set; }

        public string Staff_in_Charge_Ph { get; set; }

        public string Contact_Name_Ph { get; set; }

        public string Nature_of_Assignment { get; set; }

        public bool? Precaution { get; set; }

        public string Precaution_Note { get; set; }

        public string Gender_Preference { get; set; }

        public string First_Name { get; set; }

        public string Last_Name { get; set; }

        public string Patient_Ph { get; set; }

        public string MRN { get; set; }

        public string Gender { get; set; }

        public bool? Prebooked { get; set; }

        public bool? Immediate { get; set; }

        public bool? Emailed { get; set; }

        public bool? Confirmed { get; set; }

        public bool? Reminder { get; set; }

        public bool? Going_Directly { get; set; }

        public DateTime? Date_of_Request { get; set; }

        public TimeSpan? Time_of_Request { get; set; }

        public string Dispatcher { get; set; }

        public string Volunteer_Name { get; set; }

        public string Agency { get; set; }

        public string Agency_Ph { get; set; }

        public string Agency_Interpeter_Name { get; set; }

        public string Agency_Ref { get; set; }

        public bool? Confirmed_MSH { get; set; }

        public bool? Filled_Y { get; set; }

        public bool? Filled_N { get; set; }

        public bool? Filled_LST { get; set; }

        public bool? Filled_Cancelled { get; set; }

        public string Reason_for_Cancellation { get; set; }

        public string Comments { get; set; }

    }

    public class Interpreter_Departments
    {
        [Key]
        public int ID { get; set; }

        public string Department_Name { get; set; }

    }

    public class Interpreter_Fields
    {
        [Key]
        public int ID { get; set; }
        public string Type { get; set; }
        public string Name { get; set; }
    }

    public class InterpreterDBContext : DbContext
    {
        public DbSet<Interpreter_Requests> Interpreter_Requests { get; set; }
        public DbSet<Interpreter_Departments> Interpreter_Departments { get; set; }
        public DbSet<Interpreter_Fields> Interpreter_Fields { get; set; }
    }
}