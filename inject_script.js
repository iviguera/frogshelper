var contracts_table = document.getElementById("form").getElementsByClassName("table")[0];
var r = 0;
while(row = contracts_table.rows[r])
{
	var destination_cell = 0;
	if(window.location.search != "") {
		var filters = window.location.search.replace("?", "").split("&");
		var f = 0;
		// 2 iterations: start and end filters => ?start=Jita&end=&sort=age
		var max_iterations = 2;
		while(f < max_iterations) {
			var values = filters[f].split("=");
			if(values[1] != '') {
				destination_cell++;
			}
			f++;
		}
		//fix Dead Jumps column
		if(destination_cell == 2) {
			destination_cell++;
		}
	}
	var cell = row.cells[destination_cell];
	if(cell.innerText.includes("Citadel")) {
		row.style.display = "none";
	}
	r++;
}