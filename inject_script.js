
var contracts_table = document.getElementById("form").getElementsByClassName("table")[0];
var r = 0;
while(row = contracts_table.rows[r])
{
	var row_html = row.innerHTML;
	if(row_html.includes("Citadel") || row_html.includes("No collateral")) {
		row.style.display = "none";
	}
	r++;
}