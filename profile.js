$(document).ready(function(){ 

$.ajax({
    type: "GET",
    url: "https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=perl&site=stackoverflow",
    success: function(data)
    {
        console.log(data);

        $.each(data.items, function(i, val) {
			   $("#yourdivid").append(document.createTextNode(val.owner.user_id));
			   $("#yourdivid").append(document.createTextNode(val.owner.display_name));
			        //$("#yourdivid").append(document.createTextNode(val.owner.user_id));
            
        });
    }
});

});