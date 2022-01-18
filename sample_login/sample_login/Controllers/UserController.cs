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
    public class UserController : ControllerBase
    {
        private UserContext _loginContext;
        
        private readonly UserjwtAuth _jwtAuth;
        public UserController(UserContext loginContext, UserjwtAuth jwAuth)
        {
            _loginContext = loginContext;
            _jwtAuth = jwAuth;


        }
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return _loginContext.users;
        }

        // GET api/<UserController>/5
        [HttpGet("{name}")]
        public User Get(string name)
        {
            return _loginContext.users.FirstOrDefault(s => s.UserName == name);
        }
        [HttpPost]
        
        public IActionResult Post([FromBody] User value)
        {
            int result = 0;
            _loginContext.users.Add(value);
            try
            {
                 result = _loginContext.SaveChanges();
            }
            catch
            {
                 result = 0;
            }
          
            if(result==1)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }
        [HttpPut("{name}")]
        public void Put(string name, [FromBody] string value)
        {
            var users = _loginContext.users.FirstOrDefault(s => s.UserName == name);
            if (users != null)
            {
                _loginContext.Entry<User>(users).CurrentValues.SetValues(value);
                _loginContext.SaveChanges();
            }
        }
        [HttpPost("login")]
        public IActionResult login([FromBody] login value)
        {
            var user = _loginContext.users.FirstOrDefault(s => s.UserName == value.UserName && s.Password == value.Password);
            if (user != null)
            {
                return Ok(_jwtAuth.UserjwtAuthe(user.UserName, user.Password));
            }
            return Unauthorized();


        }
    }
}
