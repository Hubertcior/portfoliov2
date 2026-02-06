using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class StatusController : ControllerBase
{
    [HttpGet]
    public IActionResult GetStatus()
    {
        var status = new
        {
            ApiVersion = "v1.0.0",
            Condition = "OK",
            LastReported = DateTime.UtcNow
        };

        return Ok(status);
    }
}