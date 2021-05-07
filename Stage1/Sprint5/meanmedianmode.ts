export {}
function addEntries(): boolean {
    let newNum1: number = parseInt(document.forms["myForm"]["myNum1"].value);
    let newNum2: number = parseInt(document.forms["myForm"]["myNum2"].value);
    let newNum3: number = parseInt(document.forms["myForm"]["myNum3"].value);

    if (!(newNum1) && !(newNum1 == 0)) {
        alert("Enter min range");
        return false;
    }
    else if (((newNum2 < newNum1) || !(newNum2)) && !(newNum2 == 0)) {
        alert("Enter valid max range");
        document.forms["myForm"]["myNum2"].value = "";
        return false;
    }

    else if (((newNum3 < newNum1) || (newNum3 > newNum2) || !(newNum3)) && !(newNum3 == 0)) {
        alert("Enter a number within range");
        document.forms["myForm"]["myNum3"].value = "";
        return false;
    }

    else {
        let tableRef: any = document.getElementById("table1");
        document.forms["myForm"]["myNum3"].value = "";
        document.forms["myForm"]["myNum1"].disabled = "disabled";
        document.forms["myForm"]["myNum2"].disabled = "disabled";

        tableRef.insertRow(tableRef.rows.length).innerHTML = newNum3;
    }
    return true;
}

function compValues(): boolean {
    let tableRef: any = document.getElementById("table1");
    let tableRef2: any = document.getElementById("table2");

    // Mean value Calculations
    let tabLen: number = tableRef.rows.length;
    let totalVal: number = 0.0;
    for (let i: number = 0; i < tabLen; i++) {
        totalVal += parseInt(tableRef.rows[i].innerHTML);
    }
    let meanVal: number = 0.0;
    meanVal = totalVal / tabLen;
    let meanTxt: string = ("Mean value : &nbsp &nbsp " + meanVal);
    tableRef2.insertRow(tableRef2.rows.length).innerHTML = meanTxt;

    // Median Value Calculations
    //Create and populate array myArr
    let myArr: number[] = [];
    for (let i: number = 0; i < tabLen; i++) {
        myArr.push(parseInt(tableRef.rows[i].innerHTML));
    }

    //Sort the array in ascending order
    myArr.sort(function (a, b) { return a - b; });

    //Compute Median value
    let half: number = Math.floor(myArr.length / 2);
    let medVal: number;
    if (myArr.length % 2) {
        medVal = myArr[half];
     } else {
        medVal = (myArr[half - 1] + myArr[half]) / 2.0;
     }
    let medianTxt: string = ("Median value : &nbsp" + medVal);
    tableRef2.insertRow(tableRef2.rows.length).innerHTML = medianTxt;

    //Mode Value Calculation
    
    let modeVal: number[]= calcMode(myArr);
    let modeTxt: string = ("Mode value : &nbsp &nbsp " + modeVal + "<br>");
    tableRef2.insertRow(tableRef2.rows.length).innerHTML = modeTxt;

    return true;
}

function calcMode(myArr1: number[]): any{
    //This function reads a sorted integer array and returns an array.
    // myArr1 is a sorted integer array.
    let maxCount: number = 0; 
    let newCount: number = 0;
    let j: number = 0;
    let firstValue: boolean = true;
    let myArr2: number[] = [];
    
    // Check myArr1 element with the previous one to check for change in value.
    // Keep track in newCount and save the highest count in maxCount.
    // Start checking from the Second element of myArr1
    // To avoid not counting the last element, we are addinga dummy element to the end of array

    myArr1.push(9999);

    for (let i: number = 1; i < myArr1.length; i++) {
        if (myArr1[i] == myArr1[i - 1]) {
            newCount += 1;
            }
        else if (myArr1[i] != myArr1[i - 1]) {
            if (firstValue) {firstValue=false;
                maxCount = newCount;
            }
            if (newCount > maxCount) {
                maxCount = newCount;
                newCount = 0;
                myArr2 = [];                         //Clearing out myArr2
                myArr2.push(myArr1[i - 1]);
            }
            else if (newCount == maxCount) {
                newCount += 1;
                myArr2.push(myArr1[i - 1]);
            }
            newCount=0;
        }
    }
    return myArr2;
}

function clearValues(): boolean {
    // Clears table1
    let tableRef = document.getElementById("table1");
    tableRef.innerHTML = "";

    // Clears table2
    tableRef = document.getElementById("table2");
    tableRef.innerHTML = "";

    // Clears Ranges values
    document.forms["myForm"]["myNum1"].value = "";
    document.forms["myForm"]["myNum2"].value = "";

    // Enable disabled elements
    document.forms["myForm"]["myNum1"].disabled = "";
    document.forms["myForm"]["myNum2"].disabled = "";

    return true;
}
