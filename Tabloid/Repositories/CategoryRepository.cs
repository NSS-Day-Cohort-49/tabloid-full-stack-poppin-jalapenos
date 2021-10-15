using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tabloid.Models;
using Tabloid.Utils;

namespace Tabloid.Repositories
{
    public class CategoryRepository : BaseRepository, ICategoryRepository
    {
        public CategoryRepository(IConfiguration configuration) : base(configuration) { }

        public List<Category> GetAll()
        {
            using var conn = Connection;
            conn.Open();
            using var cmd = conn.CreateCommand();

            cmd.CommandText = @"
                    SELECT Id, [Name]
                    FROM Category
                    ORDER BY [Name]";

            using var reader = cmd.ExecuteReader();

            var categories = new List<Category>();

            while (reader.Read())
            {
                var category = new Category()
                {
                    Id = DbUtils.GetInt(reader, "Id"),
                    Name = DbUtils.GetString(reader, "Name")
                };
                categories.Add(category);
            }
            return categories;
        }
    }
}
