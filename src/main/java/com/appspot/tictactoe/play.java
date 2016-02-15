package com.appspot.tictactoe;


import com.google.appengine.api.users.User;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by tara on 2/11/16.
 */
public class play extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        processRequest(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        processRequest(request, response);
    }

    protected void processRequest(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        UserService userSer = UserServiceFactory.getUserService();
        User currentUser = userSer.getCurrentUser();


        if (currentUser == null) {
            String nextJSP = "/LogIn";
            RequestDispatcher dispatcher = getServletContext().getRequestDispatcher(nextJSP);
            dispatcher.forward(req,res);
            //res.sendRedirect("../LogIn");
        } else {
            req.getSession().setAttribute("user", currentUser);

            String nextJSP = "/jsp/gameBoard.jsp";
            RequestDispatcher dispatcher = getServletContext().getRequestDispatcher(nextJSP);
            dispatcher.forward(req,res);

            //res.sendRedirect("../jsp/gameBoard.jsp");
        }
        //String loginUrl = userSer.createLoginURL("../jsp/gameBoard.jsp");
        //String logoutUrl = userSer.createLogoutURL("/");
        //res.sendRedirect(loginUrl);

    }
}
