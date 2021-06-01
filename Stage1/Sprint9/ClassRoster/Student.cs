namespace ClassRoster
{
    public class Student : Person
    {
        private string studentRank;
        public Student()
        {
            studentRank = "";
        }
        public string StudentRank
        {
            get { return studentRank; }
            set { studentRank = value; }
        }

        public override string ToString()           //override the base ToString() for Student Object
        {
            return "Student: " + this.FName + " " + this.LName + "  Rank: " + studentRank;
        }
    }
}