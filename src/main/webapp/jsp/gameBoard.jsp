<%--
  Created by IntelliJ IDEA.
  User: tara
  Date: 2/9/16
  Time: 4:54 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
    <script src="../control/gameControl.js"></script>
    <link type="text/css" rel="stylesheet" href="/stylesheet/gameBoard.css"/>


    <title>Tic-Tac-Toe</title>
</head>
<body>

<h1>Tic-Tac-Toe</h1>


<div class="gameSym">
    <p id="O">O: ${sessionScope.user.nickname} Goes First!</p>
    <p id="X">X: Computer</p>
</div>

<div class="board">
    <table>
        <tr class="upper">
            <td>
                <Button id="0"></Button>
            </td>
            <td>
                <Button id="1"></Button>
            </td>
            <td>
                <Button id="2"></Button>
            </td>
        </tr>
        <tr class="center">
            <td>
                <Button id="3"></Button>
            </td>
            <td>
                <Button id="4"></Button>
            </td>
            <td>
                <Button id="5"></Button>
            </td>
        </tr>
        <tr class="lower">
            <td>
                <Button id="6"></Button>
            </td>
            <td>
                <Button id="7"></Button>
            </td>
            <td>
                <Button id="8"></Button>
            </td>
        </tr>
    </table>
</div>

<p class="bottom-element">
    <button class="sign-out">Sign Out</button>
    <button class="leaderboard">LeaderBoard</button>
</p>
<p id="userName">${sessionScope.user.nickname}</p>


</body>
</html>
