<%@ page contentType="text/html; charset=UTF-8" %>

<%
    //session.removeAttribute("key1"); // 세션 key1 값 삭제
    session.invalidate(); // 세션 전체 비우기, 로그아웃 기능을 구현할 때 많이 사용
%>