namespace cchCollection
{

    public class Fiction : Book             //inherits from Book
    {
        private string author;
        private string genre;
        public Fiction()
        {
            author = "";
            genre = "";
        }
        public string Author
        {
            get { return author; }
            set { author = value; }
        }
        public string Genre
        {
            get { return genre; }
            set { genre = value; }
        }

        public override string ToString()
        {
            return "Book Name: " + this.BName + " (" + this.BType + ", " + this.BValue + ")  Author: " + author + "  Genre: " + genre;
        }
    }
}
