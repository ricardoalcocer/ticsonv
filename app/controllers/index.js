function doClick(e) {  
    alert($.label.text);
}

Ti.include('cycle.js');
Ti.include('ticsonv.js');

var csv='family.csv';
var data = csv.toObjects();
var indention = "    ";
var result = JSON.stringify(JSON.decycle(data), null, indention.length);

console.log(result);

$.index.open();
