function addEntries() {
    var newNum1 = parseInt(document.forms["myForm"]["myNum1"].value);
    var newNum2 = parseInt(document.forms["myForm"]["myNum2"].value);
    var newNum3 = parseInt(document.forms["myForm"]["myNum3"].value);

    if (newNum1 == "") {
        alert("Enter min range");
        return false;
    }
    else if ((newNum2 < newNum1) || (newNum2 == "")) {
        alert("Enter valid max range");
        document.forms["myForm"]["myNum2"].value = "";
        return false;
    }

    else if ((newNum3 < newNum1) || (newNum3 > newNum2) || (newNum3 == "")) {
        alert("Enter a number within range");
        document.forms["myForm"]["myNum3"].value = "";
        return false;
    }

    else {
        var tableRef = document.getElementById("table1");
        document.forms["myForm"]["myNum3"].value = "";
        document.forms["myForm"]["myNum1"].disabled = "disabled";
        document.forms["myForm"]["myNum2"].disabled = "disabled";

        tableRef.insertRow(tableRef.rows.length).innerHTML = newNum3;
    }
}

function compValues() {
    var tableRef = document.getElementById("table1");
    var tableRef2 = document.getElementById("table2");

    // Mean value Calculations
    var tabLen = tableRef.rows.length;
    var totalVal = 0;
    for (var i = 0; i < tabLen; i++) {
        totalVal += parseInt(tableRef.rows[i].innerHTML);
    }

    var meanVal = parseFloat(totalVal / tabLen);
    var meanTxt = ("Mean value      :" + meanVal);
    tableRef2.insertRow(tableRef2.rows.length).innerHTML = meanTxt;

    // Median Value Calculations
    //Create and populate array myArr
    var myArr = [];
    for (var i = 0; i < tabLen; i++) {
        myArr.push(parseInt(tableRef.rows[i].innerHTML));
    }

    //Sort the array in ascending order
    myArr.sort(function (a, b) { return a - b; });

    //Compute Median value
    var half = Math.floor(myArr.length / 2);
    if (myArr.length % 2) {
        var medVal = myArr[half];
    }
    else
        var medVal = (myArr[half - 1] + myArr[half]) / 2.0;

    var medianTxt = ("Median value    :" + medVal);
    tableRef2.insertRow(tableRef2.rows.length).innerHTML = medianTxt;
    
}


function clearValues() {
    // Clears table1
    var tableRef = document.getElementById("table1");
    tableRef.innerHTML = "";

    // Clears table2
    var tableRef = document.getElementById("table2");
    tableRef.innerHTML = "";

    // Clears Ranges values
    document.forms["myForm"]["myNum1"].value = "";
    document.forms["myForm"]["myNum2"].value = "";

    // Enable disabled elements
    document.forms["myForm"]["myNum1"].disabled = "";
    document.forms["myForm"]["myNum2"].disabled = "";
}
