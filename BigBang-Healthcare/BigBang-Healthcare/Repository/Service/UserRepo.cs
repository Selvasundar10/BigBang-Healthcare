using BigBang_Healthcare.Data;
using JWTAuthenticationApp.Interface;
using JWTAuthenticationApp.Models;
using JWTAuthenticationApp.Models.DTO;
using System.Diagnostics;




namespace JWTAuthenticationApp.Service
{
    public class UserRepo : IBaseRepo<string, User>
    {
        private readonly HealthcareDbContext _context;

        public UserRepo(HealthcareDbContext context)
        {
            _context = context;
        }
        public User Add(User item)
        {
            try
            {
                _context.Add(item);
                _context.SaveChanges();
                return item;
            }
            catch (Exception e)
            {
                Debug.WriteLine(e.Message);
                Debug.WriteLine(item);
            }
            return null;
        }

        public User Get(string key)
        {
            var user = _context.Users.FirstOrDefault(u => u.Id == key);
            return user;
        }

        public User Delete(string id)
        {
            var user = _context.Users.FirstOrDefault(u => u.Id == id);
            _context.Users.Remove(user);
            _context.SaveChanges();
            return user;
        }


    }

}
