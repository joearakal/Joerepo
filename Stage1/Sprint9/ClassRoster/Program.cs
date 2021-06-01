using System;
using System.Collections.Generic;

namespace ClassRoster
{
    class Program
    {
        static void Main(string[] args)
        {
            bool runApp = true;
            string op;
            Instructor instr1 = new Instructor();                           // one way of instantiating an object
            List<Student> theClass = new();                                 // list to add Students to

            while (runApp)
            {


                Console.WriteLine("Hello! This is the Class Roster Application");
                Console.WriteLine("Enter options:");
                Console.WriteLine(" \" 1 \" to Enter info for Instructor");
                Console.WriteLine(" \" 2 \" to Enter info for Student");
                Console.WriteLine(" \" 3 \" to Print the Class Roster:");
                Console.WriteLine(" \" 4 \" to Quit application");
                op = Console.ReadLine();
                Student stud = new();
                //another way of instantiating an object
                switch (op)
                {
                    case "1":
                        {
                            Console.WriteLine("Enter/Update Instructor First Name");
                            instr1.FName = Console.ReadLine();
                            Console.WriteLine("Enter/Update Instructor Last Name");
                            instr1.LName = Console.ReadLine();
                            Console.WriteLine("Enter/Update Instructor Contact email");
                            instr1.ContactInfo = Console.ReadLine();
                            break;
                        }
                    case "2":
                        {

                            Console.WriteLine("Enter Student First Name");
                            stud.FName = Console.ReadLine();
                            Console.WriteLine("Enter Student Last Name");
                            stud.LName = Console.ReadLine();
                            Console.WriteLine("Enter Student Rank");
                            stud.StudentRank = Console.ReadLine();
                            theClass.Add(stud);
                            break;
                        }
                    case "3":
                        {
                            Console.WriteLine(instr1);
                            foreach (Student astud in theClass)
                            {
                                Console.WriteLine(astud);
                            }
                            break;
                        }
                    case "4":
                        {
                            runApp = false;
                            break;
                        }
                }
            }
        }
    }
}
