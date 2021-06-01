using System.Collections.Generic;
namespace MVCCollection
{/// <summary>
/// This class adds infomation to 2 lists of type Comics and Fiction, and interacts with the lists.
/// </summary>
    public class MVCCollectionModel
    {
        private List<Comics> cList;
        private List<Fiction> fList;
        public MVCCollectionModel()
        {
            cList = new();
            fList = new();
        }
      /// <summary>
      /// Returns void 
      /// Uses class Comics to add to list cList 
      /// </summary>
      /// <param name="myBook"></param>
        public void addToCList(Comics myBook)
        {
            cList.Add(myBook);
        }

        public int allBook(string myBookType)
        {
            if (myBookType == "comic")
            {
                return cList.Count;
            }
            else
            {
                return fList.Count;
            }
        }
        public string getComic(int i)
        {
            return cList[i].ToString();
        }

        public string getFiction(int i)
        {
            return fList[i].ToString();
        }

        public void addToFList(Fiction myBook)
        {
            fList.Add(myBook);
        }
    }
}