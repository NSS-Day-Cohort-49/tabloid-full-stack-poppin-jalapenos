using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Security.Claims;
using Tabloid.Models;
using Tabloid.Repositories;

namespace Tabloid.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostRepository _postRepository;
        private readonly IUserProfileRepository _userProfileRepository;

 
        public PostController(IPostRepository postRepository, IUserProfileRepository userProfileRepository)
        {
            _postRepository = postRepository;
            _userProfileRepository = userProfileRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var posts = _postRepository.GetAll();

            return Ok(posts);
        }

        [HttpGet("GetByUser")]
        public IActionResult GetByUser()
        {
            var currentUser = GetCurrentUserProfile();
            if (currentUser == null)
            {
                return NotFound();
            }
            
            var posts = _postRepository.GetUserPosts(currentUser.Id);
            return Ok(posts);
        }
        [HttpGet("GetPostById/{id}")]
        public IActionResult GetPostById(int id)
        {
            var post = _postRepository.GetPostById(id);
            if (post == null)
            {
                return NotFound();
            }

            return Ok(post);
        }

        [HttpPost]
        public IActionResult AddPost(Post post)
        {
            var currentUser = GetCurrentUserProfile();
            post.UserProfileId = currentUser.Id;
            post.IsApproved = false;
            _postRepository.AddPost(post);
            return CreatedAtAction(nameof(Get), new { id = post.Id }, post);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _postRepository.DeletePost(id);
            return NoContent();
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Post post)
        {
            var currentUser = GetCurrentUserProfile();

            if (id != post.Id)
            {
                return BadRequest();
            }

            if (currentUser.Id != post.UserProfileId)
            {
                return Unauthorized();
            }
                
            _postRepository.EditPost(post);
            return NoContent();
        }


        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            if (firebaseUserId != null)
            {
                return _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
            }
            else
            {
                return null;
            }
        }
    }
}
