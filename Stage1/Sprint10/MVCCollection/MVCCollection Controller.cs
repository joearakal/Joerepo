using System;
namespace MVCCollection
{
    public class MVCCollectionController
    {
        private int option;
        private bool runApp;
        private string myData;
        private int comicItem;
        private int fictionItem;

        private MVCCollectionView collView;
        private MVCCollectionModel collModel;

        public MVCCollectionController()    //contructor
        {
            collView = new();
            collModel = new();

            collView.startCollection();

            Fiction myFiction = new();
            Comics myComic = new();

            runApp = true;
            while (runApp)
            {
                option = collView.getOption();
                string myType;
                string myBook;
                switch (option)
                {
                    case 1:
                        {
                            myComic.BType = "Comic";

                            //Get each attribute for Comic and set the values
                            myData = "book Name: ";
                            myComic.BName = collView.getData(myData);

                            myData = "book's Value: ";
                            myComic.BValue = collView.getData(myData);

                            myData = "Publisher: ";
                            myComic.CPublisher = collView.getData(myData);

                            myData = "SuperHero: ";
                            myComic.SuperHero = collView.getData(myData);

                            //Add to list
                            collModel.addToCList(myComic);

                            break;
                        }
                    case 2:
                        {
                            myFiction.BType = "Fiction";

                            //Get each attribute for Comic and set the values
                            myData = "book Name: ";
                            myFiction.BName = collView.getData(myData);

                            myData = "book's Value: ";
                            myFiction.BValue = collView.getData(myData);

                            myData = "author: ";
                            myFiction.Author = collView.getData(myData);

                            myData = "genre: ";
                            myFiction.Genre = collView.getData(myData);

                            //Add to list
                            collModel.addToFList(myFiction);

                            break;
                        }
                    case 3:
                        {
                            collView.showAllBooks("------------------------ My Books-----------------------");

                            myType = "comic";
                            for (comicItem=0; comicItem < collModel.allBook(myType); comicItem++)
                            {
                                //myBook = collModel.getComic(comicItem);
                                //collView.showAllBooks(myBook);

                                myData = showAllBooks(myBook)();
                                Console.WriteLine(showAllBooks(myBook));
                            }

                            myType = "fiction";
                            for (int fictionItem = 0; fictionItem < collModel.allBook(myType); fictionItem++)
                            {
                                myBook = collModel.getFiction(fictionItem);
                                collView.showAllBooks(myBook);
                            }
                            break;
                        }
                    case 4:
                        {
                            runApp = false;
                            collView.endCollection();
                            break;
                        }
                }
            }
        }
    }
}