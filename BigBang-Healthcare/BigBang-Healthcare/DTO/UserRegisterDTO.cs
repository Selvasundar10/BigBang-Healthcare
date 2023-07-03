using BigBang_Healthcare.Models;

namespace BigBang_Healthcare.DTO
{
    public class UserRegisterDTO : User
    {
        public string? PasswordClear { get; set; }

    }
}
