using BigBang_Healthcare.Data;
using BigBang_Healthcare.Models;
using BigBang_Healthcare.Models.DTO;
using BigBang_Healthcare.Repository.Interface;
using Microsoft.EntityFrameworkCore;

namespace BigBang_Healthcare.Repository.Service
{
    public class DoctorService : IDoctorRepo
    {
        private readonly HealthcareDbContext _context;

        public DoctorService(HealthcareDbContext context)
        {
            _context = context;
        }
        public async Task<List<Doctor>> GetRequest()
        {
            return await _context.Doctor.Where(d => d.requestStatus == "request").ToListAsync();
        }

        public async Task<List<Doctor>> DoctorDetails()
        {
            return await _context.Doctor.Where(d => d.requestStatus == "Accepted").ToListAsync();

        }
        public async Task<Doctor> logedinDoctor(string id)
        {
            var doc = _context.Doctor.Where(d => d.requestStatus == "Accepted").FirstOrDefaultAsync(x => x.Id == id);
            return await doc;
        }

        public async Task<Doctor> PutDoctor(string id, Doctor doctor)
        {
            var doc = await _context.Doctor.FirstOrDefaultAsync(x => x.Id == id);
            if (doc == null)
            {
                return null;
            }
               doc.image = doctor.image;
            doc.phone = doctor.phone;
            doc.Email = doctor.Email;
            doc.Experiance = doctor.Experiance;
            doc.Specialization = doctor.Specialization  ;
            doc.requestStatus= doctor.requestStatus;
            await _context.SaveChangesAsync();
            return doc;

        }

        public async Task<Doctor> PostDoctor(Doctor doctor)
        {
            _context.Doctor.Add(doctor);
            await _context.SaveChangesAsync();
            return doctor;

        }


        public async Task<string> DeleteDoctor(string id)
        {
            var doc = await _context.Doctor.FirstOrDefaultAsync(x => x.Id == id);
            if (doc == null)
            {
                return null;
            }
            _context.Doctor.Remove(doc);
            await _context.SaveChangesAsync();
            return "Deleted Successfully";
        }

    }
}