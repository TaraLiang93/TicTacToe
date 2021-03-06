package com.appspot.tictactoe;

import com.google.appengine.api.users.User;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

/**
 * Created by tara on 2/10/16.
 */

public class LogIn extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        processRequest(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        processRequest(request, response);
    }

    protected void processRequest(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {

        HttpSession servCon = req.getSession();

        UserService userSer = UserServiceFactory.getUserService();
        User currentUser = userSer.getCurrentUser();
        String loginUrl = userSer.createLoginURL("../blah");
        //String logoutUrl = userSer.createLogoutURL("/");
        res.sendRedirect(loginUrl);

    }
}
