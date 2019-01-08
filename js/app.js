var tbody = d3.select("tbody");
var $searchBtn = d3.select("#search");
// Add event listener to the searchButton
$searchBtn.addEventListener("click", handleSearchButtonClick);
// Set filteredData to dataSet
var filteredData = dataSet;

function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {
      // Get current ufodata
      var ufodata = filteredData[i];
      var fields = Object.keys(ufodata);
      // Create new row in tbody, set index to i
      var $row = $tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
      // For every field in the ufodata object, create new cell
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = ufodata[field];
    }
  }
}

function handleSearchButtonClick() {
  // dont bring any back that equal empty
  if (filteredDate != "") {
    filteredData = dataSet.filter(function(ufodata) {
      var ufoSightingDate = ufodata.datetime;
      return ufoSightingDate.includes(filteredDate);
    });
  };
  renderTable();
};
// Render the table on page load
renderTable();