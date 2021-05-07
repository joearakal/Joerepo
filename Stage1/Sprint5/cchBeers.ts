async function getBeer() {
    // first build the API call string by starting with the URL
    let apiString: string = "https://api.punkapi.com/v2/beers";

    // next add the parameters to the string using the drop down list value
    // and assign the min and max lengths.
    let theBeer: string = (<HTMLInputElement>document.getElementById("myBeer")).value;

    if (theBeer == "4") {
        //Random beer
        //build the api string 
        apiString = apiString + "/random";
    }
    if (theBeer == "1") {
        //Light Beer
        let minAvg: number = 0;
        let maxAvg: number = 4.0;
        //build the api string 
        apiString = apiString + "?abv_gt=" + minAvg + "&abv_lt=" + maxAvg;
    }
    if (theBeer == "2") {
        //Medium alcohol Beer
        let minAvg: number = 4.1;
        let maxAvg: number = 6.0;
        //build the api string 
        apiString = apiString + "?abv_gt=" + minAvg + "&abv_lt=" + maxAvg;
    }
    if (theBeer == "3") {
        //High Alcohol beer
        let minAvg: number = 6.1;
        let maxAvg: number = 16.0;
        //build the api string 
        apiString = apiString + "?abv_gt=" + minAvg + "&abv_lt=" + maxAvg;

    }

    //Display the Request string
    // alert(apiString);  // show the API string

    // make the API call to the web service using the string and store what is returned in response
    const response = await fetch(apiString);

    // clear any previous responses
    document.getElementById("myFormattedData1").innerHTML = "";   // clear previous responses
    document.getElementById("myFormattedData2").innerHTML = "";   // clear previous responses
    (<HTMLInputElement>document.getElementById("myImage")).src = "";

    const jsonData = await response.json();  // read the response as JSON

    // If we want to see the JSON Raw data, stringify and print out the JSON object 
    //document.getElementById("myFormattedData").innerHTML = JSON.stringify(jsonData);
    let jsonLength: number = jsonData.length;
    let aBeer: number = 0;
    aBeer = Math.round(Math.random() * jsonLength);

    if (theBeer == "4")
        aBeer = 0;
    document.getElementById("myFormattedData1").innerHTML += "<p>" + jsonData[aBeer].name + "<br><br>" + "Alcohol by Volume content : " + jsonData[aBeer].abv + "</p>";
    document.getElementById("myFormattedData2").innerHTML += "<p>" + jsonData[aBeer].tagline + "<br><br>" + jsonData[aBeer].description + "<br><br>" + "</p>";
    (<HTMLInputElement>document.getElementById("myImage")).src = jsonData[aBeer].image_url;
    document.getElementById("myImage").style.width= "40%";
    document.getElementById("myImage").style.height= "100%";
    return true;
}