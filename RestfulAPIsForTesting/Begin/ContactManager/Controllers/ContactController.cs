using ContactManager.Models;
using ContactManager.Services;
using System.Net.Http;
using System.Web.Http;

namespace ContactManager.Controllers
{
    public class ContactController : ApiController
    {
        private ContactRepository contactRepository;
        public ContactController()
        {
            this.contactRepository = new ContactRepository();
        }

        [Route("api/contacts")]
        public Contact[] GetContacts()
        {
            return contactRepository.GetAllContacts();
        }

        [Route("api/contact")]
        public HttpResponseMessage Post(Contact contact)
        {
            this.contactRepository.SaveContact(contact);
            var response = Request.CreateResponse<Contact>(System.Net.HttpStatusCode.Created, contact);
            return response;
        }
    }
}
