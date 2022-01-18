using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace sample_login.Models
{
    public class Favorites
    {
        [Key]

       
        public int Id
        {
            get;
            set;
        }
        public string UserName 
        {
            get;
            set;
        }
     
        public string Channel
        {
            get;
            set;
        }
        public string Title
        {
            get;
            set;
        }
        public string Url
        {
            get;
            set;
        }
        public string VideoId
        {
            get;
            set;
        }
    }
}
