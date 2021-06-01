namespace MVCCollection
{

    public class Book
    {
        private string bName;
        private string bValue;
        private string bType;

        public Book()
        {
            bName = "";
            bValue = "";
            bType = "";
        }
        public string BName
        {
            get { return bName; }
            set { bName = value; }
        }

        public string BValue
        {
            get { return bValue; }
            set { bValue = value; }
        }
        public string BType
        {
            get { return bType; }
            set { bType = value; }
        }

        public override string ToString()
        {
            return "Book Name: " + this.BName + " " + this.BType + ", " + this.BValue;
        }
    }
}
