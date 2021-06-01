namespace MVCCollection
{

    public class Comics : Book               //inherits from Book
    {
        private string cPublisher;
        private string superHero;
        public Comics()
        {
            cPublisher = "";
            superHero = "";
        }
        public string CPublisher
        {
            get { return cPublisher; }
            set { cPublisher = value; }
        }
        public string SuperHero
        {
            get { return superHero; }
            set { superHero = value; }
        }

        public override string ToString()
        {
            return "Book Name: " + this.BName + " (" + this.BType + ", " + this.BValue + ")  Publisher: " + cPublisher + "  Super Hero: " + superHero;
        }
    }
}
