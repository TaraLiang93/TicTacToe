package com.appspot.tictactoe;

import com.google.appengine.api.users.User;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;
import com.googlecode.objectify.Key;
import com.googlecode.objectify.Result;

import static com.googlecode.objectify.ObjectifyService.ofy;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by tara on 2/14/16.
 */
public class updateScore extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        UserService userSer = UserServiceFactory.getUserService();
        User currentUser = userSer.getCurrentUser();

        if (currentUser != null) {
            String userName = currentUser.getEmail();
            Result<user> user = ofy().load().key(Key.create(user.class, userName)); //query to make check if the user is in the db or not

            if (user.now() == null) {// if not in the db then create it
                user newUser = new user();//create a new user to with its email and score set to 0 to be save to db later
                newUser.setEmail(userName);
                newUser.setScore(0);
                ofy().save().entity(newUser).now();//save the new user in db
            }

            //increase the user's score by one
            Result<user> player = ofy().load().key(Key.create(user.class, userName));
            user userInDB = player.now();
            userInDB.setScore(userInDB.getScore() + 1);
            ofy().save().entity(userInDB).now();

            System.out.println(userInDB.getEmail() + " score: " + userInDB.getScore());
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
