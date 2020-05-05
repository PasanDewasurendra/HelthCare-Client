$(document).ready(function(){

	$("#alertSuccess").hide();
	$("#alertError").hide();
});


// SAVE ============================================
$(document).on("click", "#btnSaveSchedule", function(event){
	
	console.log("save btn clicked.");
	
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
			onAddScheduleComplete(response.responseText,status);
		}
			
	});
	
});


function onAddScheduleComplete(response, status){
	
	console.log(status);
	
	if(status == "success"){
		
		var resultSet = JSON.parse(response);
		
		if(resultSet.status.trim() == "success"){
			
			$("#alertSuccess").text("New Schedule Successfully Added.");
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


// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event){
	 $("#hiddenSchdID").val($(this).closest("tr").find('#hiddenSchedUpdId').val());
	 $("#schdDate").val($(this).closest("tr").find('td:eq(0)').text());
	 $("#schdDoctor").val($(this).closest("tr").find('td:eq(1)').text());
	 $("#schdSpec").val($(this).closest("tr").find('td:eq(2)').text());
	 $("#schdLoc").val($(this).closest("tr").find('td:eq(3)').text());
	 $("#schdTimeFrom").val($(this).closest("tr").find('td:eq(4)').text());
	 $("#schdTimeTo").val($(this).closest("tr").find('td:eq(5)').text());
});


$(document).on("click", ".btnDelete", function(event){
	
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
	
});

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


// CLIENTMODEL=========================================================================
function validateScheduleForm(){
	
	if ($("#schdDoctor").val().trim() == ""){
		return "*Doctor Name is Mandotary.";
	}
	
	if ($("#schdSpec").val().trim() == ""){
		return "*Doctor Specialization is Mandotary.";
	} 
	
	if ($("#schdLoc").val().trim() == ""){
		return "*Location is Mandotary.";
	}
	
	if ($("#schdDate").val().trim() == ""){
		return "Schedule Date is Mandotary.";
	}
	if ($("#schdTimeFrom").val().trim() == ""){
		return "*Session Starting Time is Mandotary.";
	}
	
	if ($("#schdTimeTo").val().trim() == ""){
		return "*Session Ending Time is Mandotary.";
	}
	
	return true;
}