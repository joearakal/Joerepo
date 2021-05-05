async function getRepos() {
    // first build the API call string by starting with the URL
    var apiString = "https://api.github.com/users";
    // next add the parameters to the string using the drop down lists
    var theUser = document.getElementById("myUser").value;

    apiString = apiString + "/" + theUser + "/repos";
    alert(apiString);  // show the API string

    // make the API call to the web service using the string and store what is returned in response
    var response = await fetch(apiString);

    if (response.status >= 200 && response.status <= 299) {  // valid status

        var jsonData = await response.json();  // read the response as JSON

        // If we want to see the JSON Raw data, stringify and print out the JSON object 
        // document.getElementById("myFormattedData").innerHTML = JSON.stringify(jsonData);

        var theNewRepo = "";
        for (var aRepo in jsonData) {
            theNewRepo += "<p>" + theUser + " <a href=" + jsonData[aRepo].html_url + ">" + jsonData[aRepo].name + "</a></p>";
            
        }
    } else {
            // status < 200 or > 299 which is an invalid response
            theNewRepo = "<p> Error accessing Github Repo!! Status: " + response.status + " : " + response.statusText + "</p>";
            console.log(response.status, response.statusText);
        }

        // clear previous data
        document.getElementById("myFormattedData").innerHTML = "";
        document.getElementById("myUser").innerHTML = "";

        // write new data
        document.getElementById("myFormattedData").innerHTML = theNewRepo;
    
        return true;
}
