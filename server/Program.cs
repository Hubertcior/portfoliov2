var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy => policy
            .WithOrigins("http://localhost:5173",
                "https://hubertradziwinski.dev",
                "https://www.hubertradziwinski.dev",
                "https://portfoliov2-mmn2pynvf-huberts-projects-250f7746.vercel.app")
            .SetIsOriginAllowed(origin => new Uri(origin).Host.EndsWith("vercel.app"))
            .AllowAnyMethod()
            .AllowAnyHeader());
});

builder.Services.AddOpenApi();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseCors("AllowReactApp");

app.MapControllers();

app.Run();



