using server.Interfaces;
using server.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace server.Services
{
    public class UserService : IServicesRepository<User>
    {
        private readonly IMongoCollection<User> _users;

        public UserService(IOptions<DatabaseSettings> settings)
        {
            var client = new MongoClient(settings.Value.ConnectionString);
            var database = client.GetDatabase(settings.Value.DatabaseName);

            _users = database.GetCollection<User>(settings.Value.UsersCollectionName);        
        }

        public IEnumerable<User> Get() =>
            _users.Find(user => true).ToList();

        public async Task Post(User user){
            await _users.InsertOneAsync(user);
        }
        public async Task Delete(User user){
           await _users.DeleteOneAsync(element => element._id == user._id);
        }

        public async Task Put(User user){
            await _users.ReplaceOneAsync(element => element._id == user._id, user);
        }
    }
}