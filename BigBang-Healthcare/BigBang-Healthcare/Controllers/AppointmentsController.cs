using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BigBang_Healthcare.Data;
using BigBang_Healthcare.Models;
using BigBang_Healthcare.Repository.Interface;

namespace BigBang_Healthcare.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentsController : ControllerBase
    {
        private readonly IAppointmentService _context;

        public AppointmentsController(IAppointmentService context)
        {
            _context = context;
        }

        // GET: api/Appointment
        [HttpGet]
        public async Task<List<Appointment>> GetAppointment()
        {
            return await _context.GetAppointment();
        }

        // GET: api/Appointment/5
        [HttpGet("{id}")]
        public async Task<List<Appointment>?> GetAppointmentDetail(string id)
        {

            return await _context.GetAppointmentDetail(id); ;
        }


        // POST: api/Appointment
        [HttpPost]
        public async Task<Appointment> PostAppointment(Appointment appointment)
        {

            return await _context.PostAppointment(appointment);
        }

        // DELETE: api/Appointment
        [HttpDelete("{id}")]
        public async Task<string> DeleteAppointment(int id)
        {
            return await _context.DeleteAppointment(id);


        }


    }
}
