using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tabloid.Models;
using Tabloid.Utils;

namespace Tabloid.Repositories
{
    public class TagRepository : BaseRepository, ITagRepository
    {
        public TagRepository(IConfiguration configuration) : base(configuration) { }

        public List<Tag> GetAll()
        {
            using var conn = Connection;
            conn.Open();

            using var cmd = conn.CreateCommand();

            cmd.CommandText = @"
                    SELECT t.Id, t.Name FROM Tag t
                    ORDER BY t.Name ASC";

            List<Tag> tags = new List<Tag>();

            using var reader = cmd.ExecuteReader();

            while (reader.Read())
            {
                var tag = new Tag()
                {
                    Id = DbUtils.GetInt(reader, "Id"),
                    Name = DbUtils.GetString(reader, "Name")
                };

                tags.Add(tag);
            }

            return tags;
        }
    }
}
