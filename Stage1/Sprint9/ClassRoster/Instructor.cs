namespace ClassRoster
{
    public class Instructor : Person         //Instructor inherits from Person
    {
        private string contactInfo;
        public Instructor() : base()        //constructor
        {
            contactInfo = "";
        }

        public Instructor(string newFirstName, string newLastName, string newContactInfo) : base(newFirstName, newLastName)     //overloading example
        {
            contactInfo = newContactInfo;
        }

        public string ContactInfo           //property
        {
            get { return contactInfo; }
            set { contactInfo = value; }
        }
        public override string ToString()   //override the ToString() for Instructor object
        {
            return "Instructor: " + this.FName + " " + this.LName + "  Contact email: " + contactInfo;
        }
    }
}
