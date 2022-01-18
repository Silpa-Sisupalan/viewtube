using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sample_login
{
    public interface UserjwtAuth
    {
        string UserjwtAuthe(string UserName, string password);
       
    }
}
