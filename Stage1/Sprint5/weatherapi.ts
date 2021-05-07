export{}
async function getForcast() {
    // first build the API call string by starting with the URL
    let apiString: string = "https://api.weather.gov/gridpoints/";
    // next add the parameters to the string using the drop down lists
    let theOffice: string  = (<HTMLInputElement>document.getElementById("myOffice")).value;

    apiString = apiString + theOffice + "/47,30/forecast";
    alert(apiString);  // show the API string
    // console.log(apiString);

    // make the API call to the web service using the string and store what is returned in response
    const response = await fetch(apiString);
    const jsonData = await response.json();

    let days: number = jsonData.properties.periods.length;

    document.getElementById("dayOfWeek").innerHTML= "";
    document.getElementById("weatherReport").innerHTML= "";
    document.getElementById("temperatures").innerHTML= "";

    for (let i: number = 0; i< days; i++ ) {
        document.getElementById("dayOfWeek").innerHTML += jsonData.properties.periods[i].name + "<br><br>";
        document.getElementById("weatherReport").innerHTML += jsonData.properties.periods[i].shortForecast + "<br><br>";
        document.getElementById("temperatures").innerHTML += jsonData.properties.periods[i].temperature + " degrees Farenheit<br><br>";
    }
    return true;
}
