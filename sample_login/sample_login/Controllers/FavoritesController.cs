using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using sample_login.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sample_login.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavoritesController : ControllerBase
    {
        private UserContext _userContext;
        public FavoritesController(UserContext userContext)
        {
            _userContext = userContext;


        }

        [HttpGet]
        public IEnumerable<Favorites> Get()
        {
            return _userContext.Favorite;
        }


        [HttpGet("{name}")]
        public IEnumerable<Favorites> Get(string name)
        {
            return _userContext.Favorite.Where(s => s.UserName == name);
        }

        // POST api/<FavoritesController>
        [HttpPost]
        public IActionResult Post([FromBody] Favorites value)
        {
            var track = _userContext.Favorite.FirstOrDefault(s => s.Title == value.Title);
            if (track == null)
            {
                _userContext.Favorite.Add(value);
                _userContext.SaveChanges();
                return Ok();

            }
            return BadRequest();

        }
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var userlogin = _userContext.Favorite.FirstOrDefault(s => s.Id == id);
            
                _userContext.Favorite.Remove(userlogin);
                _userContext.SaveChanges();
            
        }
     
    }
}