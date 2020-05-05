package com;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.Hospital;


@WebServlet("/HospitalAPI")
public class ScheduleAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	Hospital scheduleObj = new Hospital();

    public ScheduleAPI() {
        super();
        
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		String result = scheduleObj.addDoctorSchedule(
				request.getParameter("schdDoctor"), 
				request.getParameter("schdTimeFrom"), 
				request.getParameter("schdTimeTo"), 
				request.getParameter("schdDate"), 
				request.getParameter("schdSpec"), 
				request.getParameter("schdLoc"));
		
		System.out.println(result);
		
		response.getWriter().write(result);
		
	}


	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		Map parse = getParseMap(request);
		
//		System.out.println("Time from:"+parse.get("schdTimeFrom").toString());
//		System.out.println("Time from:"+parse.get("schdTimeTo").toString());
//		System.out.println(parse.get("schdTimeFrom").toString().replaceAll("%3A", ":"));
		
//		System.out.println("doctor:"+parse.get("schdDoctor").toString().replace("+", " "));
		
		String result = scheduleObj.updateDoctorSchedule(
				parse.get("hiddenSchdID").toString(), 
				parse.get("schdDoctor").toString().replace("+", " "), 
				parse.get("schdTimeFrom").toString().replaceAll("%3A", ":"), 
				parse.get("schdTimeTo").toString().replaceAll("%3A", ":"), 
				parse.get("schdDate").toString().replaceAll("/", "-"), 
				parse.get("schdSpec").toString().replace("+", " "), 
				parse.get("schdLoc").toString().replace("+", " "));
		
		System.out.println(result);
		
		response.getWriter().write(result);
		
		
	}

	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		Map parse = getParseMap(request);
		
		String result = scheduleObj.deleteDoctorSchedule(parse.get("scheduleID").toString());
		
		System.out.println(result);
		
		response.getWriter().write(result);
		
	}
	
	
	private static Map getParseMap(HttpServletRequest request) {
		
		Map<String, String> map = new HashMap<String, String>();
		
		try {
			Scanner sc = new Scanner(request.getInputStream(), "UTF-8");
			
			System.out.println("sc: "+sc);
			
			String query = sc.hasNext() ? sc.useDelimiter("\\A").next() : "";
			sc.close();
			
			String[] params = query.split("&");
			
			System.out.println("param: "+params);
			
			for(String param : params) {
				
				String[] p = param.split("=");
				map.put(p[0], p[1]);
			}
			
		}catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		
		return map;
	}
	

}
