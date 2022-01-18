using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sample_login.Models
{
    public class UserContext : DbContext
    {
        public UserContext(DbContextOptions options) : base(options) { }


        public DbSet<User> users
        {
            get;
            set;
                }
        public DbSet<Favorites> Favorite
        {
            get;
            set;
        }
    }
}
