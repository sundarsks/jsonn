// $(document).ready(function(){ 

// $.ajax({
    // type: "GET",
    // url: "https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=perl&site=stackoverflow",
    // success: function(data)
    // {
        // console.log(data);

        // $.each(data.items, function(i, val) {
				// var img = $('<img id="dynamic" alt="img">'); 
				// img.attr('src', val.owner.profile_image);
				// img.appendTo('#result');
				// $("#result").append(document.createTextNode(" "));
				// $("#result").append(document.createElement('br'));
		       	// $("#result").append(document.createTextNode("name:"));
				// $("#result").append(document.createTextNode(" "));
				// $("#result").append(document.createTextNode(val.owner.display_name));
				// $("#result").append(document.createElement('br'));
				// $("#result").append(document.createTextNode('Id:'));
				// $("#result").append(document.createTextNode(" "));
				// $("#result").append(document.createTextNode(val.owner.user_id));
				// $("#result").append(document.createElement('br'));
				// $("#result").append(document.createTextNode('Type:'));
				// $("#result").append(document.createTextNode(" "));
				// $("#result").append(document.createElement('br'));
				// $("#result").append(document.createTextNode(val.owner.user_type));
			             
        // });
    // }
// });

// });



var resultDiv = document.getElementById("result");

var newsURL = "https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=perl&site=stackoverflow";


var xmlhttp;

if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest();
} else {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        response = JSON.parse(xmlhttp.responseText);
        var myData = response['items'];
		console.log(myData);
        var tbl = document.createElement('table');
		tbl.setAttribute("class", "table table-striped table-bordered");
		tbl.setAttribute("id", "myTable");
		var tblHead = document.createElement('thead');
		tbl.appendChild(tblHead);
	
		var row = tbl.insertRow(-1);
		var tblth = document.createElement('th');
		tblth.innerHTML = "ID";
		row.appendChild(tblth);
		tblth = document.createElement('th');
		tblth.innerHTML = "Name";
		row.appendChild(tblth);
		tblth = document.createElement('th');
		tblth.innerHTML = "user type";
		row.appendChild(tblth);
		tblth = document.createElement('th');
		tblth.innerHTML = "Profile Image";
		row.appendChild(tblth);
		
		var tblbody = document.createElement('tbody');
	
        for(var prop in myData ) {
            if(myData.hasOwnProperty(prop)){
				var row = tblbody.insertRow(-1);
				
				var tds = row.insertCell(-1);
				tds.innerHTML = myData[prop].owner.user_id;
				 tds = row.insertCell(-1);
				tds.innerHTML = myData[prop].owner.display_name;
				 tds = row.insertCell(-1);
				tds.innerHTML = myData[prop].owner.user_type;
				 tds = row.insertCell(-1);
				tds.innerHTML = '<img src = "' + myData[prop].owner.profile_image + '" alt="img"/>';
				
			
			}
        }
		     
        tbl.appendChild(tblbody);
		
		 var result = document.getElementById("result");
		 result.innerHTML = " " ;
		 result.appendChild(tbl);
    }
}

xmlhttp.open("GET", newsURL, true);
xmlhttp.send();

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
   tr = table.getElementsByTagName("tr");
   for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
		  
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}








