<%@page import="model.Hospital"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Find Doctor</title>

<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/hospital.js"></script>

</head>
<body>

<div class="container">
	<div class="row">
		<div class="col-6">
		
			<h1>Schedule Management</h1>
			
			<form action="hospital.jsp" name="formSchedule" method="post" id="formSchedule">
				Doctor:
				<input id="schdDoctor" name="schdDoctor" type="text" class="form-control form-control-sm">
				<br>
				Specialization:
				<input id="schdSpec" name="schdSpec" type="text" class="form-control form-control-sm">
				<br>
				Location:
				<input id="schdLoc" name="schdLoc" type="text" class="form-control form-control-sm">
				<br>
				Date:
				<input id="schdDate" name="schdDate" type="text" class="form-control form-control-sm">
				<br>
				Time From:
				<input id="schdTimeFrom" name="schdTimeFrom" type="text" class="form-control form-control-sm">
				<br>
				Time To:
				<input id="schdTimeTo" name="schdTimeTo" type="text" class="form-control form-control-sm">
				<br>
								
				<input id="btnSaveSchedule" name="btnSaveSchedule" type="button" value="Add New Schedule" class="btn btn-primary">
				<input type="hidden" id="hiddenSchdID" name="hiddenSchdID" value="">
			
			</form>
			
			<br>
			
			<div id="alertSuccess" class="atert alert-success"></div>
			<div id="alertError" class="atert alert-danger"></div>
			
			<br>
			
			<div id="tblSchedule">
				<%
					Hospital obj = new Hospital();
					out.print(obj.getDoctorSchedule());
				%>
			</div>
			
		</div>
	</div>
</div>

</body>
</html>