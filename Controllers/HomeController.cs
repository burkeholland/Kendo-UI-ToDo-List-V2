using System;
using System.Linq;
using System.Web.Mvc;
using System.Collections.Generic;
using KendoTodo.Models;

namespace KendoTodo.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index() {
            // populate list items in temporary session store
            SetItems();

            // meta data to be sent with the view
            var meta = new Models.Meta {
                Mode = "single",
                Description = "In Single Update mode, all actions are sent to the server as individual requests as soon as they are initiated in the UI.  The UI reflects the changes made on the server."
            };

            return View("Index", (object)meta);
        }

        public JsonResult Read() {
            return this.Json(Items(), JsonRequestBehavior.AllowGet);
        }

        public JsonResult Create(string name) {

            var newItem = CreateItem(name);

            return this.Json(newItem);
        }

        private IList<Item> Items() {
            return (IList<Item>)Session["Items"];
        }

        private Models.Item CreateItem(string name) {
            var items = Items();
            // get the max id
            var maxID = (from i in items
                         select i.ID).Max();

            var newItem = new Models.Item { ID = maxID + 1, Name = name };

            items.Add(newItem);

            Session["Items"] = items;

            return newItem;
        }

        private void SetItems() {
            var items = new List<Item>();
            items.Add(new Item { ID = 1, Name = "Download Kendo UI" });
            items.Add(new Item { ID = 2, Name = "Build Amazing Apps" });

            if (Session["Items"] == null) {
                Session.Add("Items", items);
            }
        }
    }
}
