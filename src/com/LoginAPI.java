package com;

import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


@WebServlet("/LoginAPI")
public class LoginAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

    public LoginAPI() {
        super();
        
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
//		RequestDispatcher rd = request.getRequestDispatcher("/schedule.jsp");
//		rd.forward(request, response);

	//	response.sendRedirect(request.getContextPath() + "/schedule.jsp");
		request.getRequestDispatcher("/schedule.jsp").forward(request, response);
		
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String out = "";
		
		String user = request.getParameter("loginUser");
		String pass = request.getParameter("loginPass");
		
//		System.out.println(user+pass);
		
		if(user.equals("admin") && pass.equals("admin")) {
			
			System.out.println("Accepted");
			
//			HttpSession session = request.getSession();
//			session.setAttribute("user", user);
//			
			System.out.println(request.getRequestURI());
//	   		response.sendRedirect(request.getContextPath() + "/schedule.jsp");
		   
			doGet(request, response);
			
//			response.getWriter().write("{\"status\":\"success\", \"data\": \""+request.getContextPath() +"/schedule.jsp"+"\"}");
			
		}else {
			response.getWriter().write("{\"status\":\"error\", \"data\": \"Admin Credentials are Mismatched.\"}");
		}
	
		
	}

}
