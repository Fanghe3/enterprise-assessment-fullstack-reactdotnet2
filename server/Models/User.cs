using System;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace server.Models
{
    public class User
    {   [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string _id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public RoleType Role { get; set; }


        public enum  RoleType{
        [BsonRepresentation(BsonType.String)]
        reader,
        [BsonRepresentation(BsonType.String)]
        author,
        [BsonRepresentation(BsonType.String)]
        admin
        } 

    }

    
}