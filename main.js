var seriesList = ["Ajay", " Devang", "Shubham"];   
document.write("<h2><b> Initially elements in array: </b> <br>" + seriesList + "<br></h2>");  

function addObject() {   
var example = document.getElementById("nm").value;  
          
  seriesList.push(example);   
  document.getElementById("result").innerHTML = "<h2><b> Array after adding new elements:</b> <br>" + seriesList + "</h2>";  
}   


