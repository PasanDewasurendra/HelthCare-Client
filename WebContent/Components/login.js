
//Initialize
$(document).ready(function(){

	$("#alertSuccess").hide();
	$("#alertError").hide();

});

$(document).on("click", "#btnLogin", function(event){
	

	console.log("save btn clicked.");

// Clear alerts---------------------
	 $("#alertSuccess").text("");
	 $("#alertSuccess").hide();
	 $("#alertError").text("");
	 $("#alertError").hide();
	 
// Form validation-------------------
	 var status = validateLoginForm();

	 if (status != true){
		 	 
		 $("#alertError").text(status);
		 $("#alertError").show();
		 return;
	 }
	 

	 $.ajax({
			
		url : "LoginAPI",
		type : "POST",
		data : $("#formLogin").serialize(),
		dataType : "text",
		complete : function(response, status)
		{
			onLoginPostComplete(response.responseText, status);
		}
			
	});
	
});

 //POST response algorithm
function onLoginPostComplete(response, status){
	
	console.log(status);
	console.log(response);
	
//	var page = "{'status':'success', 'data': '"+response+"'}";
//	console.log(page);
	
	if(status == "success"){
		
		var resultSet = JSON.parse(response);
		
		console.log(resultSet);
		
		if(resultSet.status.trim() == "error"){
			
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
			
		}else if(resultSet.status.trim() == "success"){
			$("body").html(resultSet.data);
		}
		
	}else if(status == "error"){
		
		$("#alertError").text("Something wrong with Login.");
		$("#alertError").show();
		
	}else{
		$("#alertError").text("Unknown error while Login.");
		$("#alertError").show();
	}
	
	$("#formLogin")[0].reset();
	
}


function validateLoginForm(){
	
	if ($("#loginUser").val().trim() == ""){
		$('#loginUser').addClass('is-invalid');
		return "*Username is Mandatory.";
	}else{
		$('#loginUser').removeClass('is-invalid');
	}
	
	if ($("#loginPass").val().trim() == ""){
		$('#loginPass').addClass('is-invalid');
		return "*Password is Mandatory.";
	}else{
		$('#loginPass').removeClass('is-invalid');
	}
	
	return true;
}
