using System.Collections.Generic;
using server.Models;
using Microsoft.AspNetCore.Mvc;
using server.Services;
using server.Interfaces;
using System.Threading.Tasks;

namespace server.Controllers
{
    [ApiController]
    public class BlogController : ControllerBase
    {
        private readonly IServicesRepository<Blog> _invRepository;

        public BlogController(IServicesRepository<Blog> iService)
        {
            _invRepository = iService;
        }

        [HttpGet]
        [Route("/getblogs")]
        public IEnumerable<Blog> Get()
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
        [Route("/postblog")]
        public async Task Post([FromBody] Blog blog)
        {
            await _invRepository.Post(blog);
        }

        [HttpPut]
        [Route("/putblog")]
        public async Task Put([FromBody] Blog blog)
        {
            await _invRepository.Put(blog);
        }

        [HttpDelete]
        [Route("/deleteblog")]
        public async Task Delete([FromBody] Blog blog)
        {
            await _invRepository.Delete(blog);
        }
    }
}