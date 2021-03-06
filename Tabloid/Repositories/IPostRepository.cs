using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface IPostRepository
    {
        List<Post> GetAll();
        List<Post> GetUserPosts(int id);
        Post GetPostById(int id);

        void AddPost(Post post);

        void DeletePost(int id);
    }
}