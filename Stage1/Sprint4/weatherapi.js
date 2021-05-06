async function getForcast() {
    // first build the API call string by starting with the URL
    var apiString = "https://api.weather.gov/gridpoints/";
    // next add the parameters to the string using the drop down lists
    var theOffice = document.getElementById("myOffice").value;

    apiString = apiString + theOffice + "/47,30/forecast";
    alert(apiString);  // show the API string
    // console.log(apiString);

    // make the API call to the web service using the string and store what is returned in response
    var response = await fetch(apiString);
    var jsonData = await response.json();

    days = jsonData.properties.periods.length;

    document.getElementById("dayOfWeek").innerHTML= "";
    document.getElementById("weatherReport").innerHTML= "";
    document.getElementById("temperatures").innerHTML= "";

    for (var i=0; i< days; i++ ) {
        document.getElementById("dayOfWeek").innerHTML += jsonData.properties.periods[i].name + "<br><br>";
        document.getElementById("weatherReport").innerHTML += jsonData.properties.periods[i].shortForecast + "<br><br>";
        document.getElementById("temperatures").innerHTML += jsonData.properties.periods[i].temperature + " degrees Farenheit<br><br>";
    }
    
//    if (response.status >= 200 && response.status <= 299) {  // valid status

//        var jsonData = await response.json();  // read the response as JSON

        // If we want to see the JSON Raw data, stringify and print out the JSON object 
         //document.getElementById("rawData").innerHTML = JSON.stringify(jsonData);
/*
        var theWeatherData = "";
        for (var aRepo in jsonData) {
            theWeatherData += "<p>" + theUser + " <a href=" + jsonData[aRepo].html_url + ">" + jsonData[aRepo].name + "</a></p>";
            
        }
    }
     else {
            // status < 200 or > 299 which is an invalid response
            theNewRepo = "<p> Error accessing Github Repo!! Status: " + response.status + " : " + response.statusText + "</p>";
            console.log(response.status, response.statusText);
        }

        // clear previous data
        document.getElementById("myFormattedData").innerHTML = "";
        document.getElementById("myUser").innerHTML = "";

        // write new data
        document.getElementById("myFormattedData").innerHTML = theNewRepo;
*/    
        return true;
}
