$(document).ready(function(){

	$("#alertSuccess").hide();
	$("#alertError").hide();
	$("#btnClear").hide();
});


$(document).on("click", "#btnClear", function(event){
	$("#hiddenSchdID").val("");
	$("#formSchedule")[0].reset();
	$("#btnSaveSchedule").val("Add New Schedule");
	$("#btnClear").hide();
	
});

// ADD UPDATE
$(document).on("click", "#btnSaveSchedule", function(event){
	
	$("#btnSaveSchedule").val("Add New Schedule");
	
	console.log("save btn clicked.");
	 $("#btnClear").hide();
	
// Clear alerts---------------------
	 $("#alertSuccess").text("");
	 $("#alertSuccess").hide();
	 $("#alertError").text("");
	 $("#alertError").hide();
	 
// Form validation-------------------
	 var status = validateScheduleForm();

	 if (status != true){
		 	 
		 $("#alertError").text(status);
		 $("#alertError").show();
		 return;
	 }
	 
// If valid------------------------
	 var type = ($("#hiddenSchdID").val() == "") ? "POST" : "PUT";
	 
	 $.ajax({
			
		url : "HospitalAPI",
		type : type,
		data : $("#formSchedule").serialize(),
		dataType : "text",
		complete : function(response, status)
		{
			onAddScheduleComplete(response.responseText, status , type);
		}
			
	});
	
});


function onAddScheduleComplete(response, status, type){
	
	console.log(status);
	console.log(type);
	
	if(status == "success"){
		
		var resultSet = JSON.parse(response);
		
		if(resultSet.status.trim() == "success"){
			
			if(type.trim() == "POST"){
				$("#alertSuccess").text("New Schedule Successfully Added.");
			}else if(type.trim() == "PUT"){
				$("#alertSuccess").text("Schedule Successfully Updated.");
			}
			$("#alertSuccess").show();
			
			$("#tblSchedule").html(resultSet.data);
			
		}else if(resultSet.status.trim() == "error"){
			
			$("#alertError").text(resultSet.data);
			$("$alertError").show();
		}
		
	}else if(status == "error"){
		
		$("#alertError").text("Something wrong with Adding new Schedule.");
		$("#alertError").show();
		
	}else{
		$("#alertError").text("Unknown error while Adding new Schedule.");
		$("#alertError").show();
	}
	
	$("#hiddenSchdID").val("");
	$("#formSchedule")[0].reset();
	
}


// UPDATE
$(document).on("click", ".btnUpdate", function(event){
	 $("#hiddenSchdID").val($(this).closest("tr").find('#hiddenSchedUpdId').val());
	 $("#schdDate").val($(this).closest("tr").find('td:eq(0)').text());
	 $("#schdDoctor").val($(this).closest("tr").find('td:eq(1)').text());
	 $("#schdSpec").val($(this).closest("tr").find('td:eq(2)').text());
	 $("#schdLoc").val($(this).closest("tr").find('td:eq(3)').text());
	 $("#schdTimeFrom").val($(this).closest("tr").find('td:eq(4)').text());
	 $("#schdTimeTo").val($(this).closest("tr").find('td:eq(5)').text());
	 $("#btnSaveSchedule").val("Update Schedule");
	 $("#btnClear").show();
});


$(document).on("click", ".btnDelete", function(event){
	
	$("#btnSaveSchedule").val("Add New Schedule");
	$("#btnClear").hide();
	
	$.ajax(
	{
		url  : "HospitalAPI",
		type : "DELETE",
		data : "scheduleID=" + $(this).data("id"),
		dataType : "text",
		complete : function(response, status)
		{
			console.log(status);
			onDeleteScheduleComplete(response.responseText, status);
		}
		
	});
	
	$("#formSchedule")[0].reset();
	
});

//DELETE
function onDeleteScheduleComplete(response, status){
	
	console.log(status);
	
	if(status == "success"){
		
		console.log(response);
		
		var resultSet = JSON.parse(response);
		console.log(resultSet);
		
		if(resultSet.status.trim() == "success"){
			
			$("#alertSuccess").text("Schedule Successfully Deleted.");
			$("#alertSuccess").show();
			
			$("#tblSchedule").html(resultSet.data);
			
		}else if(resultSet.status.trim() == "error"){
			
			$("#alertError").text(resultSet.data);
			$("$alertError").show();
		}
		
	}else if(status == "error"){
		
		$("#alertError").text("Error while Deleting this Schedule Data.");
		$("#alertError").show();
		
	}else{
		
		$("#alertError").text("Something wrong with Deleting this Schedule Data.");
		$("#alertError").show();
	}
	
}




//Validations
function validateScheduleForm(){
	
	if ($("#schdDoctor").val().trim() == ""){
		$('#schdDoctor').addClass('is-invalid');
		return "*Doctor Name is Mandatory.";
	}else{
		$('#schdDoctor').removeClass('is-invalid');
	}
	
	if ($("#schdSpec").val().trim() == ""){
		$('#schdSpec').addClass('is-invalid');
		return "*Doctor Specialization is Mandatory.";
	}else{
		$('#schdSpec').removeClass('is-invalid');
	}
	
	if ($("#schdLoc").val().trim() == ""){
		$('#schdLoc').addClass('is-invalid');
		return "*Location is Mandatory.";
	}else{
		$('#schdLoc').removeClass('is-invalid');
	}
	
	if ($("#schdDate").val().trim() == ""){
		$('#schdDate').addClass('is-invalid');
		return "Schedule Date is Mandatory.";
	}else{
		$('#schdDate').removeClass('is-invalid');
	}
	
	if ($("#schdTimeFrom").val().trim() == ""){
		$('#schdTimeFrom').addClass('is-invalid');
		return "*Session Starting Time is Mandatory.";
	}else{
		$('#schdTimeFrom').removeClass('is-invalid');
	}
	
	if ($("#schdTimeTo").val().trim() == ""){
		$('#schdTimeTo').addClass('is-invalid');
		return "*Session Ending Time is Mandatory.";
	}else{
		$('#schdTimeTo').removeClass('is-invalid');
	}
	
	return true;
}