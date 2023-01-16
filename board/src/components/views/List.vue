<template>
    <h2 class="top-title">상담배정 내역조회</h2>

    <section class="section">
        <h3 class="sub-title">상담현황</h3>
        <div class="table-wrap type02">
            <table>
                <caption>변호사, 전체, 답변대기, 답변작성중, 답변완료로 구성되어 있음</caption>
                <colgroup>
                    <col width="20%">
                    <col width="20%">
                    <col width="20%">
                    <col width="20%">
                    <col width="*">
                </colgroup>
                <thead>
                    <tr>
                        <th>변호사</th>
                        <th>전체</th>
                        <th>답변대기</th>
                        <th>답변작성중</th>
                        <th>답변완료</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>홍길동</td>
                        <td>25건</td>
                        <td>6건</td>
                        <td>4건</td>
                        <td>10건</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>

    <section class="section">
        <h3 class="sub-title">상담조회</h3>

        <div class="search-wrap">
            <div class="search">
                <div class="col">
                    <p class="tit">조회기간</p>
                    <div class="input-wrap date">
                        <input type="date" id="" name="" title="조회 기간 시작 날짜" required="">
                        <img src="../../assets/images/icon_hyphen@3x.png" alt="" class="hyphen">
                        <input type="date" id="" name="" title="조회 기간 시작 날짜" required="">
                    </div>
                </div>
                <div class="col">
                    <p class="tit">답변상태</p>
                    <div class="input-wrap">
                        <select name="" id="">
                            <option value="">전체</option>
                            <option value="">답변대기</option>
                            <option value="">답변작성중</option>
                            <option value="">답변완료</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="btn-wrap mt-50">
            <button type="button" class="btn btn-md btn-blue" onclick="openPopup('pop01')">조회</button>
        </div>
    </section>

    <section class="section">
        <div class="table-wrap">
            <div class="table-top">
                <div class="total-num">
                    총 <span>25</span>건
                </div>
            </div>
            <table>
                <caption>순번, 상담제목, 상담상태, 상담요청일, 답변일자로 구성됨</caption>
                <colgroup>
                    <col width="100px">
                    <col width="*">
                    <col width="180px">
                    <col width="200px">
                    <col width="200px">
                </colgroup>
                <thead>
                    <tr>
                        <th>순번</th>
                        <th>상담제목</th>
                        <th>상담상태</th>
                        <th>상담요청일</th>
                        <th>답변일자</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="boardList in boardLists">
                        <td>{{ boardList.id }}</td>
                        <td class="name">
                            <a href="#">{{ boardList.title }}</a>
                        </td>
                        <td>답변완료</td>
                        <td>2022.12.01</td>
                        <td>2022.12.02</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="paging-wrap">
            <button type="button" class="btn btn-prev02"><span class="blind">5페이지 전으로 가기</span></button>
            <button type="button" class="btn btn-prev"><span class="blind">1페이지 전으로 가기</span></button>
            <div class="num">
                <a href="" class="active">1</a>
                <a href="">2</a>
                <a href="">3</a>
            </div>
            <button type="button" class="btn btn-next"><span class="blind">1페이지 후로 가기</span></button>
            <button type="button" class="btn btn-next02"><span class="blind">5페이지 후로 가기</span></button>
        </div>
    </section>

</template>

<script>
export default {
    name: "List",
    components: {},
    data() {
        return {
            boardLists: []
        }
    },
    mounted() {
        this.getBoardList();
    },
    methods: {
        getBoardList: function () {
            var vm = this;
            this.axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(function (response) {
                    console.log(response);
                    vm.boardLists = response.data
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
}
</script>