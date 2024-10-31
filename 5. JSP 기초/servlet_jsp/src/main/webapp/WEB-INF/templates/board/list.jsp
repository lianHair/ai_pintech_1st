<%@ page contentType="text/html charset=UTF-8" %>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<table border='1'>
    <thead>
        <tr>
            <th>번호</th>
            <th>제목</th>
            <th>내용</th>
            <th>작성자</th>
        </tr>
    <thead>
    <tbody>
        <c:forEach var="item" items="${items}">
            <tr>
                <td>${item.seq}</td>
                <td>${item.subject}</td>
                <td>${item.content}</td>
                <td>${item.poster}</td>
            </tr>
            <%-- 위에걸 많이 쓰고, 밑에는 잘 안씀 (같은 값 나옴)
                <tr>
                    <td>${item.getSeq()}</td>
                    <td>${item.getSubject()}</td>
                    <td>${item.getContent()}</td>
                    <td>${item.getPoster()}</td>
                </tr>
            --%>
        </c:forEach>
    </tbody>
</table>   <%-- 아래 두개 같은 값 나옴, 아래가 나음 --%>
${pageContext.getRequest().getRequestURI()}<br>
${pageContext.request.requestURI}
