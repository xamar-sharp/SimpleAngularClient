using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Angular1.Server;
namespace Angular1.Server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private static List<ProductModel> _products = new(10);
        [HttpGet]
        public ActionResult<ProductModel[]> GetProducts()
        {
            return new ObjectResult(_products);
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            ProductModel deleted = _products.FirstOrDefault(el => el.Id == id);
            if(deleted is null)
            {
                return new ObjectResult(_products[0]);
            }
            _products.Remove(deleted);
            return new ObjectResult(deleted);
        }
        [HttpPost]
        public ActionResult<ProductModel> CreateProduct(ProductModel model)
        {
            model.Id = _products.Count + 1;
            _products.Add(model);
            return new ObjectResult(model);
        }
    }
}
