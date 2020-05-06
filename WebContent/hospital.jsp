<%@page import="model.Hospital"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Hospital Management</title>

<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/hospital.js"></script>
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

	<h2 class="display-4 bg-light p-3">Hospital Management</h2>

	<div class="row">
		<div class="col">
		
			<div id="alertSuccess" class="atert alert-success alert-dismissible p-2 mb-2"></div>
			<div id="alertError" class="atert alert-danger alert-dismissible p-2 mb-2"></div>
			

			<form class="form border border-primary p-2 rounded" action="hospital.jsp" name="formHospital" method="post" id="formHospital">
				<div class="form-group">
					<label for="hspName">Hospital Name:</label>
					<input id="hspName" name="hspName"  type="text" class="form-control form-control-sm">
				</div>
				
				<div class="form-group">
					<label for="hspAddress">Address:</label>
					<input id="hspAddress" name="hspAddress" type="text" class="form-control form-control-sm">
				</div>
				
				<div class="form-group">
					<label for="hspPhone">Telephone:</label>
					<input id="hspPhone" name="hspPhone" type="text" class="form-control form-control-sm">
				</div>
				
<!-- 			<div class="form-group">
					<label for="hspEmail">Email:</label>
					<input id="hspEmail" name="hspEmail" type="text" class="form-control form-control-sm">
				</div> -->
				
								
				<input id="btnSaveHospital" name="btnSaveHospital" type="button" value="Save" class="btn btn-primary">
				<input id="btnClear" name="btnClear" type="button" value="Clear" class="btn btn-dark">
				<input type="hidden" id="hiddenHspID" name="hiddenHspID" value="">
			
			</form>

		</div>
		
		<div class="col">
			<div id="tblHospital">
				<%
					Hospital obj = new Hospital();
					out.print(obj.getHospitalDetails());
				%>
			</div>
		</div>
		
	</div>
</div>

</body>
</html>