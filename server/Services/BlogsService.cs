using server.Interfaces;
using server.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace server.Services
{
    public class BlogsService : IServicesRepository<Blog>
    {
        private readonly IMongoCollection<Blog> _blogs;

        public BlogsService(IOptions<DatabaseSettings> settings)
        {
            var client = new MongoClient(settings.Value.ConnectionString);
            var database = client.GetDatabase(settings.Value.DatabaseName);

            _blogs = database.GetCollection<Blog>(settings.Value.BlogsCollectionName);        
        }

        public IEnumerable<Blog> Get() =>
            _blogs.Find(blog => true).ToList();

        public async Task Post(Blog blog){
            await _blogs.InsertOneAsync(blog);
        }
        public async Task Delete(Blog blog){
           await _blogs.DeleteOneAsync(element => element._id == blog._id);
        }

        public async Task Put(Blog blog){
            await _blogs.ReplaceOneAsync(element => element._id == blog._id, blog);
        }
    }
}