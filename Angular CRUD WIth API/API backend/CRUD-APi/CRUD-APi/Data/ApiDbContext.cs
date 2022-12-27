using CRUD_APi.Models;
using Microsoft.EntityFrameworkCore;

namespace CRUD_APi.Data
{
    public class ApiDbContext : DbContext
    {
        public ApiDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Employee> Employees { get; set; }
    }
}
