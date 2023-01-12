<template>
    <nav id="navWrap">
        <div class="nav">
            <ul>
                <li><router-link to="/List">관리자 설정</router-link></li>
                <li><a href="">권한 관리</a></li>
                <li><a href="">안심전세 관리</a></li>
                <li><a href="javascript:void(0)">법률상담 관리</a>
                    <ul class="depth-menu">
                        <li><a href="">상담배정 내역조회</a></li>
                        <li><a href="">법률상담 내역조회</a></li>
                    </ul>

                </li>
                <li><a href="">법률사례 조회</a></li>
                <li><a href="">고객관리</a></li>
                <li><a href="">공지사항 관리</a></li>
                <li><a href="javascript:void(0)">통계 관리</a>
                    <ul class="depth-menu">
                        <li><a href="">접속통계 관리</a></li>
                        <li><a href="">이용통계 관리</a></li>
                    </ul>

                </li>
            </ul>
        </div>
    </nav>

    
</template>

