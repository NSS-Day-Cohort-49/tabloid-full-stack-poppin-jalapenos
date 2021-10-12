﻿using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tabloid.Models;
using Tabloid.Utils;

namespace Tabloid.Repositories
{
    public class PostRepository : BaseRepository, IPostRepository
    {
        public PostRepository(IConfiguration configuration) : base(configuration) { }

        public List<Post> GetAll()
        {
            using var conn = Connection;
            conn.Open();
            using var cmd = conn.CreateCommand();

            cmd.CommandText = @"
                    SELECT p.Id, p.Title, p.Content, p.ImageLocation, p.CreateDateTime, p.PublishDateTime, p.CategoryId, p.IsApproved, p.UserProfileId,
	                       up.DisplayName, up.FirstName, up.LastName, up.Email, up.CreateDateTime, up.ImageLocation, up.UserTypeId,
	                       c.[Name]
                    FROM Post p
                    LEFT JOIN UserProfile up ON p.UserProfileId = up.Id
                    LEFT JOIN Category c ON p.CategoryId = c.Id";

            List<Post> posts = new List<Post>();

            using var reader = cmd.ExecuteReader();

            while (reader.Read())
            {
                var post = new Post()
                {
                    Id = DbUtils.GetInt(reader, "Id"),
                    Title = DbUtils.GetString(reader, "Title"),
                    Content = DbUtils.GetString(reader, "Content"),
                    ImageLocation = DbUtils.GetString(reader, "ImageLocation"),
                    CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime"),
                    PublishDateTime = DbUtils.GetDateTime(reader, "PublishDateTime"),
                    CategoryId = DbUtils.GetInt(reader, "CategoryId"),
                    IsApproved = reader.GetBoolean(reader.GetOrdinal("IsApproved")),
                    UserProfileId = DbUtils.GetInt(reader, "UserProfileId")
                };

                post.UserProfile = new UserProfile()
                {
                    Id = DbUtils.GetInt(reader, "UserProfileId"),
                    DisplayName = DbUtils.GetString(reader, "DisplayName"),
                    FirstName = DbUtils.GetString(reader, "FirstName"),
                    LastName = DbUtils.GetString(reader, "LastName"),
                    Email = DbUtils.GetString(reader, "Email"),
                    CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime"),
                    ImageLocation = DbUtils.GetString(reader, "ImageLocation"),
                    UserTypeId = DbUtils.GetInt(reader, "UserTypeId")
                };

                post.Category = new Category()
                {
                    Id = DbUtils.GetInt(reader, "CategoryId"),
                    Name = DbUtils.GetString(reader, "Name")
                };

                posts.Add(post);
            }

            return posts;
        }
    }
}
