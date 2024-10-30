<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page errorPage="errors/errorPage.jsp" %>
<%@ page isErrorPage="true" %>

<h1>에러 발생!

<%
    out.write("<h1>" + exception.getMessage() + "</h1>");
    exception.printStackTrace();
%>