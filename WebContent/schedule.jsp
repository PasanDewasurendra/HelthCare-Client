<%@page import="model.Hospital"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Schedule Management</title>

<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/schedule.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
</head>
<body>

<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <a class="navbar-brand" href="#">Hospital Management</a>
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="schedule.jsp">Schedule</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="hospital.jsp">Hospital</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="doctor.jsp">Doctor</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="patient.jsp">Patient</a>
    </li>
  </ul>
</nav>

<div class="container">

	<h2 class="display-4 bg-light p-3">Schedule Management</h2>

	<div class="row">
		<div class="col">
		
			<div id="alertSuccess" class="atert alert-success alert-dismissible p-2 mb-2"></div>
			<div id="alertError" class="atert alert-danger alert-dismissible p-2 mb-2"></div>
			

			<form class="form border border-primary p-2 rounded" action="schedule.jsp" name="formSchedule" method="post" id="formSchedule">
				<div class="form-group">
					<label for="schdDoctor">Doctor:</label>
					<input id="schdDoctor" name="schdDoctor" placeholder="Ex. Dr.Kamal Gunarathne" type="text" class="form-control form-control-sm">
				</div>
				
				<div class="form-group">
					<label for="schdDoctor">Specialization:</label>
					<input id="schdSpec" name="schdSpec" type="text" placeholder="Ex. Cardiologist" class="form-control form-control-sm">
				</div>
				
				<div class="form-group">
					<label for="schdDoctor">Location:</label>
					<input id="schdLoc" name="schdLoc" type="text" placeholder="EX. Matara." class="form-control form-control-sm">
				</div>
				
				<div class="form-group">
					<label for="schdDoctor">Date:</label>
					<input id="schdDate" name="schdDate" type="date" placeholder="YYYY-MM-DD" class="form-control form-control-sm">
				</div>
				
				<div class="form-group">
					<label for="schdDoctor">Time From:</label>
					<input id="schdTimeFrom" name="schdTimeFrom" type="time" placeholder="HH:MM" class="form-control form-control-sm">
				</div>
				
				<div class="form-group">
					<label for="schdDoctor">Time To:</label>
					<input id="schdTimeTo" name="schdTimeTo" type="time" placeholder="HH:MM" class="form-control form-control-sm">
				</div>
								
				<input id="btnSaveSchedule" name="btnSaveSchedule" type="button" value="Add New Schedule" class="btn btn-primary">
				<input id="btnClear" name="btnClear" type="button" value="Clear" class="btn btn-dark">
				<input type="hidden" id="hiddenSchdID" name="hiddenSchdID" value="">
			
			</form>

		</div>
		
		<div class="col">
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