using BigBang_Healthcare.DTO;

namespace BigBang_Healthcare.Repository.Interface
{
   public interface ITokenGenerate
    {
        public string GenerateToken(UserDTO user);
    }
}
