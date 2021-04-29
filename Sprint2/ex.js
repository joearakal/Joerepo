function addEntries() {
    var newName = document.getElementById("myText").value ;
    let newNum = document.getElementById("myNum").value ;

    
    if (newName == "") {
        alert ("Enter some text");
    } else {
        if (newNum == 1, 2 ) {
            if (newNum==1){
                var tableRef = document.getElementById("myTable1");
                (tableRef.insertRow(tableRef.rows.length)).innerHTML = newText;}
             else{
                var tableRef = document.getElementById("myTable2");
                (tableRef.insertRow(tableRef.rows.length)).innerHTML = newText;}
            alert ("Added to List " + newNum);
        } else {
            alert ("Enter 1 or 2");
        }
       
 
    }
    document.getElementById("myText").value = "";
    document.getElementById("myNum").value = "";
}


function clearTable1() {
    for(var i = 1;i<table1.rows.length;){
        table1.deleteRow(i);
    }
    
    alert ("List " + newNum + " cleared");
}
function clearTable1() {
    
    for(var i = 1;i<table2.rows.length;){
        table2.deleteRow(i);
    }
    alert ("List " + newNum + " cleared");
}