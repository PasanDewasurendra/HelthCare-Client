<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Admin Login</title>

<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/login.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>

</head>
<body>

<div class="container">
    <div class="row">
        <div class="col-md-12 min-vh-100 d-flex flex-column justify-content-center">
            <div class="row">
                <div class="col-lg-6 col-md-8 mx-auto">

                    <div class="card rounded shadow shadow-sm">
                    
                        <div class="card-header">
                            <h3 class="mb-0">Administration</h3>
                        </div>
                        
                        <div class="card-body">
                        
                            <form class="form" id="formLogin" name="formLogin" action="/schedule.jsp" >
                                <div class="form-group">
                                    <label for="loginUser">Username</label>
                                    <input type="text" class="form-control" name="loginUser" id="loginUser" required="">
                                </div>
                                
                                <div class="form-group">
                                    <label for=""loginPass"">Password</label>
                                    <input type="password" class="form-control" id="loginPass" name="loginPass"  required="">
                                </div>
                                
                                <button type="button" class="btn btn-primary btn-lg float-right" id="btnLogin">Login</button>
                                
                            </form>
                            
                        </div>

                    </div>
                    
                    <br>
                    
                    <div id="alertSuccess" class="atert alert-success alert-dismissible p-2 mb-2"></div>
					<div id="alertError" class="atert alert-danger alert-dismissible p-2 mb-2"></div>

                </div>

            </div>


        </div>

    </div>

</div>

	


</body>
</html>