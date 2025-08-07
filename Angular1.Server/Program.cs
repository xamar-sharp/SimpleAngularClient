namespace Angular1.Server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddControllers();
            builder.Services.AddCors();
            var app = builder.Build();
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseHsts();
            app.UseHttpsRedirection();
            app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
            app.UseRouting();
            app.MapControllers();
            app.MapFallbackToFile("/index.html");
            app.Run();
        }
    }
}
