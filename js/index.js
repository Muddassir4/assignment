// document.getElementById('button').addEventListener("click", 
// function() 
// {
// 	document.querySelector('.bg-modal').style.display = "flex";
// });

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.modal').style.display = "none";
});

$("#buttonReservation").click(function () {
	$('#reservationModal').modal('show');
});
var x=1;
var entry=document.getElementById("sub");
entry.addEventListener("click",myfunc);
function myfunc(){
	
	var tbl = document.getElementById("myTable");
	var row = tbl.insertRow(x);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);

	cell1.innerHtml=document.getElementById("name").value;
	cell2.innerHtml=document.getElementById("employeeid").value;
	cell3.innerHtml=document.getElementById("department").value;
	cell4.innerHtml=document.getElementById("exampleInputEmail3").value;
	cell5.innerHtml=document.getElementById("doj").value;
	cell6.innerHtml=document.getElementById("name").value;
x++;
}