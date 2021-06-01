using System;
using System.Collections.Generic;

namespace cchCollection
{
    class Program
    {
        static void Main(string[] args)
        {
            bool runApp = true;
            string op;
            List<Fiction> fictionBooks = new ();                           // one way of instantiating an object
            List<Comics> comicBooks = new ();
            Console.WriteLine("My Book Collection Application \n");
            while (runApp)
            {
               
                Console.WriteLine("Enter options: ");
                Console.WriteLine("---------------");
                Console.WriteLine(" 1 : Add Comics | 2 : Add Fiction | 3 : Print Collection | 4 : Quit App");

                op = Console.ReadLine();
                Comics com = new ();
                Fiction fic = new Fiction();
                
                switch (op)
                {
                    case "1":
                        {
                            com.BType = "Comics";
                            Console.WriteLine("Enter Name: ");
                            com.BName = Console.ReadLine();
                            Console.WriteLine("Enter item's value: ");
                            com.BValue = Console.ReadLine();
                            Console.WriteLine("Enter Super Hero: ");
                            com.SuperHero = Console.ReadLine();
                            Console.WriteLine("Enter Publisher: ");
                            com.CPublisher = Console.ReadLine();
                            comicBooks.Add(com);
                            Console.WriteLine("-----------Book Added to Collection------------");
                            break;
                        }
                    case "2":
                        {
                            fic.BType = "Fiction";
                            Console.WriteLine("Enter Name: ");
                            fic.BName = Console.ReadLine();
                            Console.WriteLine("Enter item's value: ");
                            fic.BValue = Console.ReadLine();
                            Console.WriteLine("Enter Genre: ");
                            fic.Genre = Console.ReadLine();
                            Console.WriteLine("Enter Author: ");
                            fic.Author = Console.ReadLine();
                            fictionBooks.Add(fic);
                            Console.WriteLine("-----------Book Added to Collection------------");
                            break;
                        }
                    case "3":
                        {
                            Console.WriteLine("------------------------ My Books-----------------------");
                            foreach (Fiction afic in fictionBooks)
                            {
                                Console.WriteLine(afic);
                            }
                            foreach (Comics acom in comicBooks)
                            {
                                Console.WriteLine(acom);
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
