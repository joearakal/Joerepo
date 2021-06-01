namespace IocExample
{

    public class ProductService
    {
        private readonly ILogger _logger;

        public ProductService(ILogger logger)  //constructor
        {
            _logger = logger;
        }

        public void dataLog(string message)
        {
            _logger.Log(message);
        }
    }
}
