### vuex란?
- 무수히 많은 컴포넌트의 데이터를 관리하기 위한 상태 관리 패턴이자 라이브러리
- React의 Flux 패턴에서 기인함
- 복잡한 애플리케이션에서 컴포넌트의 개수가 많아지면 컴포넌트 간에 데이터 전달이 어려워진다. 
- 컴포넌트 간 데이터 전달이 명시적이지 않음(경험상 emit/on/props 어떻게 했는지 기억이 잘 안남)
그래서 vuex가 필요함

### vuex로 해결할 수 있는 문제
- MVC 패턴에서 발생하는 구조적 오류
- 컴포넌트 간 데이터 전달 명시
- 여러 개의 컴포넌트에서 같은 데이터를 업데이트 할 때 동기화 문제


### Flux란?
- MVC 패턴의 복잡한 데이터 흐름 문제를 해결하는 개발 패턴
Unidirectional data flow

action -> dispatcher -> model -> view (한방향 flow)


### MVC 패턴의 문제점
- 기능 추가 및 변경에 따라 생기는 문제점을 예측할 수가 없음 (페이스북)
- 앱이 복잡해지면서 생기는 업데이트 루프

### vuex 컨셉
- state: 컴포넌트 간에 공유하는 데이터 data()
- view : 데이터를 표시하는 화면 template
- action : 사용자의 입력에 따라 데이터를 변경 method
컴포넌트 -> 비동기로직 -> 동기로직 -> 상태
action 에서 axios로 backend 연동에서 사용