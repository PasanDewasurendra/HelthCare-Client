
//Initialize
$(document).ready(function(){

	$("#alertSuccess").hide();
	$("#alertError").hide();
	$("#btnClear").hide();
});



// ADD UPDATE request algorithm
$(document).on("click", "#btnSaveHospital", function(event){
	
	console.log("save btn clicked.");
	
// Clear alerts---------------------
	 $("#alertSuccess").text("");
	 $("#alertSuccess").hide();
	 $("#alertError").text("");
	 $("#alertError").hide();
	 
// Form validation-------------------
	 var status = validateHospitalForm();

	 if (status != true){
		 	 
		 $("#alertError").text(status);
		 $("#alertError").show();
		 return;
	 }
	 
// If valid------------------------
	 var type = ($("#hiddenHspID").val() == "") ? "POST" : "PUT";
	 
	 $.ajax({
			
		url : "HospitalAPI",
		type : type,
		data : $("#formHospital").serialize(),
		dataType : "text",
		complete : function(response, status)
		{
			onUpdateHospitalComplete(response.responseText, status);
		}
			
	});
	
});

//ADD UPDATE response algorithm
function onUpdateHospitalComplete(response, status){
	
	console.log(status);
	console.log(type);
	
	if(status == "success"){
		
		var resultSet = JSON.parse(response);
		
		if(resultSet.status.trim() == "success"){
			
			$("#alertSuccess").text("Hospital Data Updated.");
			$("#alertSuccess").show();
			
			$("#tblHospital").html(resultSet.data);
			
		}else if(resultSet.status.trim() == "error"){
			
			$("#alertError").text(resultSet.data);
			$("$alertError").show();
		}
		
	}else if(status == "error"){
		
		$("#alertError").text("Something wrong with Updating Hospital Data.");
		$("#alertError").show();
		
	}else{
		$("#alertError").text("Unknown error while Updating Hospital Data.");
		$("#alertError").show();
	}
	
	$("#hiddenHspID").val("");
	$("#formHospital")[0].reset();
	
}


// UPDATE
$(document).on("click", ".btnUpdate", function(event){
	 $("#hiddenHspID").val($(this).closest("tr").find('#hiddenHspID').val());
	 $("#hspName").val($(this).closest("tr").find('td:eq(0)').text());
	 $("#hspAddress").val($(this).closest("tr").find('td:eq(1)').text());
	 $("#hspPhone").val($(this).closest("tr").find('td:eq(2)').text());
});

//DELETE request algorithm
$(document).on("click", ".btnDelete", function(event){

	$.ajax(
	{
		url  : "HospitalAPI",
		type : "DELETE",
		data : "hospitalID=" + $(this).data("id"),
		dataType : "text",
		complete : function(response, status)
		{
			console.log(status);
			onDeleteHospitalComplete(response.responseText, status);
		}
		
	});
	
	$("#formSchedule")[0].reset();
	
});

//DELETE response algorithm
function onDeleteHospitalComplete(response, status){
	
	console.log(status);
	
	if(status == "success"){
		
		console.log(response);
		
		var resultSet = JSON.parse(response);
		console.log(resultSet);
		
		if(resultSet.status.trim() == "success"){
			
			$("#alertSuccess").text("Hospital Data Successfully Deleted.");
			$("#alertSuccess").show();
			
			$("#tblHospital").html(resultSet.data);
			
		}else if(resultSet.status.trim() == "error"){
			
			$("#alertError").text(resultSet.data);
			$("$alertError").show();
		}
		
	}else if(status == "error"){
		
		$("#alertError").text("Error while Deleting this Hospital Data.");
		$("#alertError").show();
		
	}else{
		
		$("#alertError").text("Something wrong with Deleting this Hospital Data.");
		$("#alertError").show();
	}
	
}


//Validations
function validateHospitalForm(){
	
	if ($("#hspName").val().trim() == ""){
		$('#hspName').addClass('is-invalid');
		return "*Hospital Name is Mandatory.";
	}else{
		$('#hspName').removeClass('is-invalid');
	}
	
	if ($("#hspAddress").val().trim() == ""){
		$('#hspAddress').addClass('is-invalid');
		return "*Address is Mandatory.";
	}else{
		$('#hspAddress').removeClass('is-invalid');
	}
	
	if ($("#hspPhone").val().trim() == ""){
		$('#hspPhone').addClass('is-invalid');
		return "*Telephone is Mandatory.";
	}else{
		$('#hspPhone').removeClass('is-invalid');
	}
	
	return true;
}