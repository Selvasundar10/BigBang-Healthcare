using BigBang_Healthcare.Models;

namespace BigBang_Healthcare.Repository.Interface
{
    public interface IAppointmentService
    {
        public Task<List<Appointment>> GetAppointment();
        public Task<List<Appointment>?> GetAppointmentDetail(string id);



        public Task<Appointment> PostAppointment(Appointment appointment);
        public  Task<string> DeleteAppointment(int id);
    }
}
