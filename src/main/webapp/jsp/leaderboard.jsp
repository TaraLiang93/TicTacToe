<%--
  Created by IntelliJ IDEA.
  User: tara
  Date: 2/14/16
  Time: 3:48 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
    <link type="text/css" rel="stylesheet" href="/stylesheet/leaderboard.css"/>

    <title>Tic-Tac-Toe: Leaderboard</title>
</head>
<body>
<h1>Leaderboard</h1>

<table id="table">
    <tr id="init-top">
        <td>Rank</td>
        <td>Email</td>
        <td>Score</td>
    </tr>
    <jsp:include page="/GetScore"/>
</table>

<button id="logout" onclick="logout()">Sign Out</button>
<button onclick="play()">Go to Play</button>

</body>
</html>

<script>
    function logout(){
        $(location).attr("href", "/LogOut");
    }
    function play() {
        window.location = "../play";
    }
</script>