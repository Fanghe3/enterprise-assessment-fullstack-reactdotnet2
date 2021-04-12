using System.Collections.Generic;
using server.Models;
using Microsoft.AspNetCore.Mvc;
using server.Services;
using server.Interfaces;
using System.Threading.Tasks;

namespace server.Controllers
{
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IServicesRepository<User> _invRepository;

        public UserController(IServicesRepository<User> iService)
        {
            _invRepository = iService;
        }

        [HttpGet]
        [Route("/getusers")]
        public IEnumerable<User> Get()
        {
            return _invRepository.Get();
        }

        /* [HttpGet]
        [Route("/api/blogs")]
        public IEnumerable<Blog> Get()
        {
            return _invRepository.Get();
        } */

        [HttpPost]
        [Route("/postuser")]
        public async Task Post([FromBody] User user)
        {
            await _invRepository.Post(user);
        }

        [HttpPut]
        [Route("/putuser")]
        public async Task Put([FromBody] User user)
        {
            await _invRepository.Put(user);
        }

        [HttpDelete]
        [Route("/deleteuser")]
        public async Task Delete([FromBody] User user)
        {
            await _invRepository.Delete(user);
        }
    }
}