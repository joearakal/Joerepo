namespace ClassRoster
{

    public class Person
    {
        private string fName;
        private string lName;

        public Person()
        {
            fName = "";
            lName = "";
        }
        public Person(string aFName, string aLName)
        {
            fName = aFName;
            lName = aLName;
        }

        public string FName
        {
            get { return fName; }
            set { fName = value; }
        }
        public string LName
        {
            get { return lName; }
            set { lName = value; }
        }
    }
}

