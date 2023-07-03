using BigBang_Healthcare.Models;
using System.Numerics;

namespace BigBang_Healthcare.Repository.Interface
{
    public interface IDoctorRepo
    {
        public Task<List<Doctor>> GetDoctor();
        public Task<Doctor> GetDoctor(string id);
        public Task<Doctor> PutDoctor(string id, Doctor doctor);
        public Task<Doctor> PostDoctor(Doctor doctor);
        public Task<string> DeleteDoctor(string id);

    }
}
