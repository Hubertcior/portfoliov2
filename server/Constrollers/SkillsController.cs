using Microsoft.AspNetCore.Mvc;
using Server.Models;

namespace Server.Constrollers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SkillsController : ControllerBase
    {
        [HttpGet("backend-skills")]
        public IActionResult GetBackendSkills()
        {
            var response = new SkillResponse(
                Skills: new[] { "C#", ".NET 10", "Entity Framework Core", "SQL", "FluentValidation", }
            );
            return Ok(response);
        }

        [HttpGet("frontend-skills")]
        public IActionResult GetFrontendSkills()
        {
            var response = new SkillResponse(
                Skills: new[] { "React", "TypeScript", "Tailwind CSS", "Atomic Design", "JavaScript", }
            );
            return Ok(response);
        }
    }
}
