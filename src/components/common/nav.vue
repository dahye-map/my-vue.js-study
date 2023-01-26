<template>
    <nav id="navWrap">
        <div class="nav">
            <ul>
                <li><router-link to="/List">관리자 설정</router-link></li>
                <li><router-link to="/List">권한 관리</router-link></li>
                <li><router-link to="/List">안심전세 관리</router-link></li>
                <li><a href="javascript:void(0)">법률상담 관리</a>
                    <ul class="depth-menu">
                        <li><router-link to="/List">상담배정 내역조회</router-link></li>
                        <li><router-link to="/List">법률상담 내역조회</router-link></li>
                    </ul>

                </li>
                <li><router-link to="/List">법률사례 조회</router-link></li>
                <li><router-link to="/List">고객관리</router-link></li>
                <li><router-link to="/List">공지사항 관리</router-link></li>
                <li><a href="javascript:void(0)">통계 관리</a>
                    <ul class="depth-menu">
                        <li><router-link to="/List">접속통계 관리</router-link></li>
                        <li><router-link to="/List">이용통계 관리</router-link></li>
                    </ul>

                </li>
            </ul>
        </div>
    </nav>

    
</template>

