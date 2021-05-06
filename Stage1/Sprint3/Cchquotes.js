async function getQuote() {
    // first build the API call string by starting with the URL
    var apiString = "https://api.quotable.io/random";

    // next add the parameters to the string using the drop down list value
    // and assign the min and max lengths.
    var theNewQuote = document.getElementById("myQuote").value;

    if (theNewQuote == 3) {
        //Short Quote
        var minLength = 1;
        var maxLength = 75;
        //build the api string
        apiString = apiString + "?minLength=" + minLength + "&maxLength=" + maxLength;
    }
    if (theNewQuote == 2) {
        //Medium Quote
        var minLength = 76;
        var maxLength = 200;
        //build the api string
        apiString = apiString + "?minLength=" + minLength + "&maxLength=" + maxLength;
    }
    if (theNewQuote == 1) {
        //Long Quote
        var minLength = 201;
        var maxLength = 500;
        //build the api string 
        apiString = apiString + "?minLength=" + minLength + "&maxLength=" + maxLength;
    }
    //Display the Request string
    alert(apiString);  // show the API string

    // make the API call to the web service using the string and store what is returned in response
    var response = await fetch(apiString);

    // clear any previous response quotes
    document.getElementById("myFormattedData").innerHTML = "";   // clear previously quote

    var jsonData = await response.json();  // read the response as JSON

    // If we want to see the JSON Raw data, stringify and print out the JSON object 
    //document.getElementById("myFormattedData").innerHTML = JSON.stringify(jsonData);

    document.getElementById("myFormattedData").innerHTML += "<p>" + jsonData.content + "<br><br>" + jsonData.author + "</p>";

    //Another way to do this:       
    //loop through the JSON object one element at a time and print only the required ones in the FormattedData section
    //The third one is the content and the second one is the author
 //   var i = 0;
 //   for (var para in jsonData) {
 //       i++;
 //       if (i == 3)
 //           var content = jsonData[para];   //the 3rd element in the json file has the quote content
 //       if (i == 4)  //the 4th element in the JSON response has the author
 //           document.getElementById("myFormattedData").innerHTML += "<p>" + content + "<br><br>" + jsonData[para] + "</p>";
 //   }
}