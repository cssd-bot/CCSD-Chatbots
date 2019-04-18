using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ContactManager.Models;

namespace ContactManager.Services
{
    public class ContactRepository
    {
        private const string CacheKey = "ContactStore";

        public ContactRepository()
        {
            var ctx = HttpContext.Current;
            if ( ctx != null)
            {
                if (ctx.Cache[CacheKey] == null)
                {
                    var contacts = new Contact[]
                    {
                        new Contact { Id = 1, Name = "Glen BLock"},
                        new Contact {Id = 2, Name = "Karl Burndorfer"}
                    };
                    ctx.Cache[CacheKey] = contacts;
                }
            }
        }
        public Contact[] GetAllContacts()
        {
            var ctx = HttpContext.Current;
            if (ctx != null)
            {
                return ctx.Cache[CacheKey] as Contact[];
            }

            return new Contact[]
            {
                new Contact
                {
                    Id = 0,
                    Name = "Placeholder"
                }
            };
        }

        public bool SaveContact(Contact contact)
        {
            var ctx = HttpContext.Current;
            try
            {
                var currentData = ((Contact[])ctx.Cache[CacheKey]).ToList();
                currentData.Add(contact);
                ctx.Cache[CacheKey] = currentData.ToArray<Contact>(); //.ToString()
                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return false;
            }
        }
    }
}