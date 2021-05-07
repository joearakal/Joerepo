"use strict";
exports.__esModule = true;
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
        if (palindrome1()) {
            var tableRef = document.getElementById("table1");
            (tableRef.insertRow(tableRef.rows.length).innerHTML) = newName;
        }
    }
    else if (newNum == 2) {
        if (palindrome2(newName)) {
            var tableRef = document.getElementById("table2");
            tableRef.insertRow(tableRef.rows.length).innerHTML = newName;
        }
    }
    document.forms["myForm"]["myText"].value = "";
    document.forms["myForm"]["myNum"].value = "";
    return true;
}
function palindrome1() {
    var newName = document.forms["myForm"]["myText"].value;
    var strLen = newName.length;
    for (var i = 0; i < strLen / 2; i++) {
        if (newName[i] != newName[strLen - 1 - i]) {
            return false;
        }
    }
    return true;
}
function palindrome2(theword) {
    // This algorithm creates a string that is the reverse 
    //   of the original string and then compares the strings 
    // create a string the reverse of the original
    // Step 1. Use the split() method to return a new array of characters
    // Step 2. Use the reverse() method to reverse the new created array
    // Step 3. Use the join() method to join all elements of the array into a string
    var reverseword = theword.split("").reverse().join(""); // thank you freecodecamp.com
    // compare them using the ===
    return (theword === reverseword);
}
function clearTables() {
    var tableRef = document.getElementById("table1");
    tableRef.innerHTML = "";
    tableRef = document.getElementById("table2");
    tableRef.innerHTML = "";
    return;
}
