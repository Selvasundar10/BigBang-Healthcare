using BigBang_Healthcare.Models;
using JWTAuthenticationApp.Models.DTO;
using Microsoft.EntityFrameworkCore;

namespace BigBang_Healthcare.Data
{
    public class HealthcareDbContext : DbContext
    {
        public HealthcareDbContext(DbContextOptions<HealthcareDbContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }
        public DbSet<Doctor> Doctor { get; set; }
        public DbSet<Appointment> Appointments { get; set; }
    }
}
