vue create project_name

```
npm i vue@2.6.14
npm i vue-router@3.5.3
npm i vuex@3.6.2
```

```
npm run serve
```


- created : 라이프사이클 훅 컴포넌트가 생성되자마자 들어가는 로직
data created beforeMount

mounted 되고나서 데이터 요청 -> 데이터 받아와서 data 속성 -> 화면 다시 그려지게됨

#### 데이터 호출 시점
1. 컴포넌트 라이프 사이클 훅
- created : 컴포넌트가 생성되자마자 호출되는 로직
2. 라우터 네비게이션 가드

#### eslint 에러 표시되지 않게
vue.config.js -> lintOnSave: true,

#### Prettier/EsLint와 같이 사용해야 하는 이유
