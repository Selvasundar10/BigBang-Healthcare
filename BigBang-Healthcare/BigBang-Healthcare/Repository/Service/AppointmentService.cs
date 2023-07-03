using BigBang_Healthcare.Data;
using BigBang_Healthcare.Models;
using Microsoft.EntityFrameworkCore;

namespace BigBang_Healthcare.Repository.Service
{
    public class AppointmentService
    {

        private readonly HealthcareDbContext _context;

        public AppointmentService(HealthcareDbContext context)
        {
            _context = context;
        }
        public async Task<List<Appointment>> GetAppointment()
        {
            return await _context.Appointments.ToListAsync();

        }
        public async Task<Appointment> GetAppointment(int id)
        {
            var doc = await _context.Appointments.FirstOrDefaultAsync(x => x.AppointmentId == id);
            if (doc == null)
            {
                return null;

            }
            return doc;
        }

        public async Task<Appointment> PostAppointment(Appointment appointment)
        {
            _context.Appointments.Add(appointment);
            await _context.SaveChangesAsync();
            return appointment;

        }


        public async Task<string> DeleteAppointment(int id)
        {
            var doc = await _context.Appointments.FirstOrDefaultAsync(x => x.AppointmentId == id);
            if (doc == null)
            {
                return null;
            }
            _context.Appointments.Remove(doc);
            await _context.SaveChangesAsync();
            return "Deleted Successfully";
        }

    }
}