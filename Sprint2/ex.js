function addEntries() {
    var newName = document.forms["myForm"]["myText"].value;
    var newNum = document.forms["myForm"]["myNum"].value;

    if (newName == "") {
        alert("Enter some text");
        return false;
    }
    else if ((newNum != 1) && (newNum != 2)) {
        alert("Enter 1 or 2");
        document.forms["myForm"]["myNum"].value = "";
        return false;
    }

    else if (newNum == 1) {
        var tableRef = document.getElementById("table1");
        (tableRef.insertRow(tableRef.rows.length)).innerHTML = newName;
    }

    else {
        var tableRef = document.getElementById("table2");
        (tableRef.insertRow(tableRef.rows.length)).innerHTML = newName;
    }

    document.forms["myForm"]["myText"].value = "";
    document.forms["myForm"]["myNum"].value = "";

    return true;
    // we ont get to the next line, since control returned before it executes
    alert("Added to List " + newNum);
}



function clearTable1() {
    var tableRef = document.getElementById("table1");
    // clears table1
    tableRef.innerHTML = " ";
}
function clearTable2() {
    var tableRef = document.getElementById("table2");
    // clears table2
    tableRef.innerHTML = " ";
}
