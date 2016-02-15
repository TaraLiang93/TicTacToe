package com.appspot.tictactoe;

import com.google.appengine.repackaged.com.google.gson.Gson;
import com.googlecode.objectify.Result;
import com.googlecode.objectify.cmd.Query;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

import static com.googlecode.objectify.ObjectifyService.ofy;

/**
 * Created by tara on 2/14/16.
 */
public class getScore extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");

        Query<user> allUser = ofy().load().type(user.class).order("-score"); // get all the user in db with the score from highest
        List<user> listUser = allUser.list(); // convert the list of users from objectify query object

        for (int i = 0; i < listUser.size(); i++) {
            int rank = i + 1;
            response.getWriter().println("<tr>");
            response.getWriter().println("<td>" + rank + "</td>");
            response.getWriter().println("<td>" + listUser.get(i).getEmail() + "</td>");
            response.getWriter().println("<td>" + listUser.get(i).getScore() + "</td>");
            response.getWriter().println("</tr>");
        }


    }
}
