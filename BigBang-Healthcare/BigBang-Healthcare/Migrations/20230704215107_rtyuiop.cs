using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BigBang_Healthcare.Migrations
{
    /// <inheritdoc />
    public partial class rtyuiop : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "image",
                table: "Doctor",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "image",
                table: "Doctor");
        }
    }
}
