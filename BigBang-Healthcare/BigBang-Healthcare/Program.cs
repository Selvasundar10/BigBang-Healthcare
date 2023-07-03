using BigBang_Healthcare.Data;
using JWTAuthenticationApp.Models;
using JWTAuthenticationApp.Interface;
using JWTAuthenticationApp.Service;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using JWTAuthenticationApp.Repository.Service;
using JWTAuthenticationApp.Models.DTO;
using BigBang_Healthcare.Repository.Interface;
using BigBang_Healthcare.Repository.Service;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IBaseRepo<string, User>, UserRepo>();
builder.Services.AddScoped<ITokenGenerate, TokenService>();
builder.Services.AddScoped<UserService>();
builder.Services.AddScoped<IDoctorRepo, DoctorService>();
builder.Services.AddDbContext<HealthcareDbContext>(optionsAction: options => options.UseSqlServer(builder.Configuration.GetConnectionString(name: "Rolebased")));

builder.Services.AddCors(opts =>
{
    opts.AddPolicy("AngularCORS", options =>
    {
        options.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();
app.UseCors(options =>
            options.WithOrigins("*").
            AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
app.Run();
