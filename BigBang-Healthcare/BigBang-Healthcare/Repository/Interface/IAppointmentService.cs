using BigBang_Healthcare.Models;

namespace BigBang_Healthcare.Repository.Interface
{
    public interface IAppointmentService
    {
        public Task<List<Appointment>> GetAppointment();
        public Task<Appointment> GetAppointment(string id);
        public Task<Appointment> PutAppointment(string id, Appointment appointment);
        public Task<Appointment> PostAppointment(Appointment appointment);
        public Task<string> DeleteAppointment(string id);
    }
}
