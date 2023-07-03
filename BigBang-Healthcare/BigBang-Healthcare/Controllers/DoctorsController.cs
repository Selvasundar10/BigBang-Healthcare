﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BigBang_Healthcare.Data;
using BigBang_Healthcare.Models;
using BigBang_Healthcare.Repository.Interface;
using System.Numerics;

namespace BigBang_Healthcare.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorsController : ControllerBase
    {
        private readonly IDoctorRepo _context;

        public DoctorsController(IDoctorRepo context)
        {
            _context = context;
        }

        // GET: api/Doctors
        [HttpGet]
        public async Task<List<Doctor>> GetDoctor()
        {
            return await _context.GetDoctor();
        }

        // GET: api/Doctors/5
        [HttpGet("{id}")]
        public async Task<Doctor> GetDoctor(string id)
        {

            return await _context.GetDoctor(id);
        }

        // PUT: api/Doctors/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<Doctor> PutDoctor(string id, Doctor doctor)
        {
           return await _context.PutDoctor(id, doctor);
        }

        // POST: api/Doctors
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<Doctor> PostDoctor(Doctor doctor)
        {         

            return await _context.PostDoctor(doctor);
        }

        // DELETE: api/Doctors/5
        [HttpDelete("{id}")]
        public async Task<string> DeleteDoctor(string id)
        {
            return await _context.DeleteDoctor(id);


        }


    }
}
