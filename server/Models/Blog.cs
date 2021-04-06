
using System;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace server.Models
{
    public class Blog

    {   
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string _id { get; set; }

        public DateTime createdAt { get; set; }

        public int views { get; set; }

        public string author { get; set; }

        public string body { get; set; }

        public string imageUrl { get; set; }

        public string title { get; set; }

        

        /* public override string ToString()
        {
            return JsonSerializer.Serialize(this);
        } */

    }
}
