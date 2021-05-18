let myjson;
loadEvents();

function loadEvents() {

    document.querySelector('.myListUl').addEventListener('click', pickedItem);

    document.getElementById("purchase").addEventListener('click', clearNPurchase);

    // clear any previous responses
    document.getElementById("myData1").innerHTML = "";   // clear previous responses
    document.getElementById("myData2").innerHTML = "";   // clear previous responses
    document.getElementById("myImage").innerHTML = "";   // clear previous beer image
    (<HTMLInputElement>document.getElementById("myImage")).src = "";
}

async function getBeers() {
    getApiData();
}

async function getApiData() {
    // first build the API call string by starting with the URL
    let apiString: string = "https://api.punkapi.com/v2/beers";

    // next add the parameters to the string using the drop down list value
    let theBeerType: string = (<HTMLInputElement>document.getElementById("beerType")).value;

    if (theBeerType == "1") {
        //Random beer
        //build the api string 
        apiString = apiString + "/random";
    }
    if (theBeerType == "2") {
        //Light Beer
        let minAbv: number = 0;
        let maxAbv: number = 4.0;
        //build the api string 
        apiString = apiString + "?abv_gt=" + minAbv + "&abv_lt=" + maxAbv;
    }
    if (theBeerType == "3") {
        //Medium alcohol Beer
        let minAbv: number = 4.1;
        let maxAbv: number = 6.0;
        //build the api string 
        apiString = apiString + "?abv_gt=" + minAbv + "&abv_lt=" + maxAbv;
    }
    if (theBeerType == "4") {
        //High Alcohol beer
        let minAbv: number = 6.1;
        let maxAbv: number = 16.0;
        //build the api string 
        apiString = apiString + "?abv_gt=" + minAbv + "&abv_lt=" + maxAbv;
    }


    // make the API call to the web service using the string and store what is returned in response
    const response = await fetch(apiString);

    // clear any previous responses
    document.getElementById("myData1").innerHTML = "";   // clear previous responses
    document.getElementById("myData2").innerHTML = "";   // clear previous responses
    document.getElementById("myImage").innerHTML = "";   // clear previous beer image
    (<HTMLInputElement>document.getElementById("myImage")).src = "";

    const jsonData = await response.json();  // read the response as JSON

    // clear previous list
    (<HTMLElement>document.querySelector('.myListUl')).innerHTML = "";

    myjson = jsonData;
    let jsonLength: number = jsonData.length;
    let listItem: string;
    for (let aBeer: number = 0; (aBeer < 15 && aBeer < jsonLength); aBeer++) {
        listItem = jsonData[aBeer].name;
        addList1(listItem);
    }
    // Add Event listener
    document.querySelector('.myListUl').addEventListener('click', pickedItem);
    //   alert(JSON.stringify(jsonData));

    return true;
}

function addList1(listItem: string) {
    let myUl: HTMLElement = document.querySelector('.myListUl');
    let li: HTMLLIElement = document.createElement('li');

    li.appendChild(document.createTextNode(listItem));
    myUl.appendChild(li);

    (<HTMLElement>document.querySelector('.myList')).style.display = 'block';

    //Create Info Button
    let infoButton: HTMLButtonElement = <HTMLButtonElement>document.createElement("Button");
    infoButton.appendChild(document.createTextNode("More Info"));
    li.appendChild(infoButton);
    (<HTMLElement>infoButton).style.float = "right";
    (<HTMLElement>infoButton).style.backgroundColor = "darkblue";
    (<HTMLElement>infoButton).style.color = "whitesmoke";
    infoButton.addEventListener("click", getInfo);
}

function getInfo(evnt: Event) {
    let task: Node = (<HTMLElement>evnt.target).parentNode;
    let taskValue: string = task.textContent;
    taskValue = taskValue.replace("More Info", "");
    let jsonLength: number = myjson.length;
    let itemId: number;

    for (itemId = 0; itemId < jsonLength; itemId++) {
        if (myjson[itemId].name == taskValue) {
            // clear any previous responses
            document.getElementById("myData1").innerHTML = "";   // clear previous responses
            document.getElementById("myData2").innerHTML = "";   // clear previous responses
            document.getElementById("myImage").innerHTML = "";   // clear previous beer image
            (<HTMLInputElement>document.getElementById("myImage")).src = "";

            //Display info for the matched item
            document.getElementById("myData1").innerHTML += "<p>" + myjson[itemId].name + "<br><br>" + "Alcohol by Volume content : " + myjson[itemId].abv +
                "<br><br>" + myjson[itemId].tagline + "<br><br>" + myjson[itemId].description + "<br><br>" + "</p>";
            (<HTMLInputElement>document.getElementById("myImage")).src = myjson[itemId].image_url;
            document.getElementById("myImage").style.width = "10%";
            document.getElementById("myImage").style.height = "85%";

        }
    }
}

function pickedItem(evnt: Event) {
    let task: Node = (<HTMLElement>evnt.target);
    (<HTMLElement>task).style.backgroundColor = "cyan";
    let taskValue: string = task.textContent;
    taskValue = taskValue.replace("More Info", "");

    if (taskValue) {
        purchList(taskValue);
    }
}

function purchList(beerName: string) {
    let myUl: HTMLElement = document.querySelector('.myBuyUl');
    let li: HTMLLIElement = document.createElement('li');

    li.appendChild(document.createTextNode(beerName));
    myUl.appendChild(li);

    (<HTMLElement>document.querySelector('.myBuyList')).style.display = 'block';
}

function clearNPurchase(e: Event) {
    (<HTMLUListElement>document.querySelector(".myList")).innerHTML = "";
    let purchNum: number = (document.getElementById("buyUl").getElementsByTagName('li')).length;
    document.getElementById("buyMessage").innerHTML = "<p>" + "Number of items purchased: " + purchNum + "</p>";

    return;
}
