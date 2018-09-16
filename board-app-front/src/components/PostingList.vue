<template>
    <div>
        <table align="center" class="table table-striped table-bordered table-hover" id="list">
            <thead>
                <tr>
                    <th>번호</th><th>제목</th><th>작성자</th><th>날짜</th><th>조회수</th>
                </tr>
            </thead>         
            <tbody id="postings">
                <tr v-for="p in postings" :key="p.no">
                    <td>1</td>
                    <td>test</td>
                    <td>신동하</td>
                    <td>2018-09-16</td>
                    <td>0</td>
                </tr>
            </tbody>
        </table>
        <paginate ref="pagebuttons"
            :page-count = "totalpage"
            :page-range = "7"
            :margin-page = "3"
            :click-handler = "pageChanged"
            :prev-text = "prev"
            :next-text = "next"
            :container-class = "'pagination'"
            :page-class = "'page-item'">
        </paginate>
        <p class="addnew">
            <button type="button" class="btn btn-sm btn-info btn-outline-info" aria-disabled="true">게시글 등록</button>
        </p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.addnew { margin:10px auto; max-width: 820px;  min-width: 820px;
    padding:40px 40px 40px 10px; text-align: left; }
#list  { width: 800px; font: 13px "Calibri";  }
#list thead tr { color : whitesmoke; background-color : cornflowerblue; }
#list th:nth-child(5n+1), #list td:nth-child(5n+1) { width:60px; }
#list th:nth-child(5n+2), #list td:nth-child(5n+2) { width:450px; }
#list th:nth-child(5n+3), #list td:nth-child(5n+3) { width:100px; }
#list th:nth-child(5n+4), #list td:nth-child(5n+4) { width:100px; }
#list th:nth-child(5n), #list td:nth-child(5n) { width:60px; }
#list th { padding:10px 5px 10px 5px; }
#list tr { border-bottom: solid 1px black; }
#list td, #list th {  text-align:center; vertical-align:middle; }
</style>
