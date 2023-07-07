using BigBang_Healthcare.Data;
using BigBang_Healthcare.Models;
using BigBang_Healthcare.Repository.Interface;
using Microsoft.EntityFrameworkCore;

namespace BigBang_Healthcare.Repository.Service
{
    public class AppointmentService:IAppointmentService
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

        public async Task<List<Appointment>?> GetAppointmentDetail(string id)
        {
            var appointments = await _context.Appointments
            .Where(a => a.PatientId == id || a.DoctorId == id)
            .ToListAsync();

            if (appointments == null || appointments.Count == 0)
            {
                return null;
            }

            return appointments;
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