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
