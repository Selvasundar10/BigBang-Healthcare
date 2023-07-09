using JWTAuthenticationApp.Models.DTO;

namespace JWTAuthenticationApp.Interface
{
    public interface ITokenGenerate
    {
        public string GenerateToken(UserDTO user);
    }
}
