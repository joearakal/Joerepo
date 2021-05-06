async function getBeer() {
    // first build the API call string by starting with the URL
    var apiString = "https://api.punkapi.com/v2/beers";

    // next add the parameters to the string using the drop down list value
    // and assign the min and max lengths.
    var theBeer = document.getElementById("myBeer").value;

    if (theBeer == 4) {
        //Random beer
        //build the api string 
        apiString = apiString + "/random";
    }
    if (theBeer == 1) {
        //Light Beer
        var minAvg = 0;
        var maxAvg = 4.0;
        //build the api string 
        apiString = apiString + "?abv_gt=" + minAvg + "&abv_lt=" + maxAvg;
    }
    if (theBeer == 2) {
        //Medium alcohol Beer
        var minAvg = 4.1;
        var maxAvg = 6.0;
        //build the api string 
        apiString = apiString + "?abv_gt=" + minAvg + "&abv_lt=" + maxAvg;
    }
    if (theBeer == 3) {
        //High Alcohol beer
        var minAvg = 6.1;
        var maxAvg = 16.0;
        //build the api string 
        apiString = apiString + "?abv_gt=" + minAvg + "&abv_lt=" + maxAvg;

    }

    //Display the Request string
    // alert(apiString);  // show the API string

    // make the API call to the web service using the string and store what is returned in response
    var response = await fetch(apiString);

    // clear any previous responses
    document.getElementById("myFormattedData1").innerHTML = "";   // clear previous responses
    document.getElementById("myFormattedData2").innerHTML = "";   // clear previous responses
    document.getElementById("myImage").src = "";

    var jsonData = await response.json();  // read the response as JSON

    // If we want to see the JSON Raw data, stringify and print out the JSON object 
    //document.getElementById("myFormattedData").innerHTML = JSON.stringify(jsonData);
    var jsonLength = jsonData.length;
    var aBeer = 0;
    aBeer = Math.round(Math.random(jsonLength) * 10);
    // alert(aBeer);

    //for (var aBeer in jsonData)
    if (theBeer == 4)
        aBeer = 0;
    document.getElementById("myFormattedData1").innerHTML += "<p>" + jsonData[aBeer].name + "<br><br>" + "Alcohol by Volume content : " + jsonData[aBeer].abv + "</p>";
    document.getElementById("myFormattedData2").innerHTML += "<p>" + jsonData[aBeer].tagline + "<br><br>" + jsonData[aBeer].description + "<br><br>" + "</p>";
    document.getElementById("myImage").src = jsonData[aBeer].image_url;
    document.getElementById("myImage").style.width= "40%";
    document.getElementById("myImage").style.height= "100%";
    return true;
}