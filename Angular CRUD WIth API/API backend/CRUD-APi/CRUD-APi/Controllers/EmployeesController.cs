using CRUD_APi.Data;
using CRUD_APi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace CRUD_APi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : Controller
    {
        private readonly ApiDbContext dbContext;

        public EmployeesController(ApiDbContext DbContext)
        {
            dbContext = DbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllEmployees()
        {
            var employees = await dbContext.Employees.ToListAsync();
            return Ok(employees);
        }
        [HttpPost]
        public async Task<IActionResult> AddEmployee([FromBody] Employee employee)
        {
            employee.Id = Guid.NewGuid();
            await dbContext.Employees.AddAsync(employee);
            await dbContext.SaveChangesAsync();
            return Ok(employee);
        }
        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetEmployee([FromRoute] Guid id)
        {
            var employe = await dbContext.Employees.FirstOrDefaultAsync(a => a.Id == id);
            if(employe == null)
            {
                return NotFound();
            }
            return Ok(employe);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateEmployee([FromRoute] Guid id, Employee updatedEmployee)
        {
            var employe = await dbContext.Employees.FindAsync(id);
            if(employe == null)
            {
                return NotFound();
            }
            employe.Name = updatedEmployee.Name;
            employe.Email = updatedEmployee.Email;
            employe.Phone = updatedEmployee.Phone;
            employe.Salary = updatedEmployee.Salary;
            employe.Department = updatedEmployee.Department;

            await dbContext.SaveChangesAsync();

            return Ok(employe);
        }
        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteEmploye([FromRoute] Guid id)
        {
            var employee = await dbContext.Employees.FindAsync(id);
            if(employee == null)
            {
                return NotFound();
            }
            dbContext.Employees.Remove(employee);
            await dbContext.SaveChangesAsync();

            return Ok(employee);
        }
    }
}
