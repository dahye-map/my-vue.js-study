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

### vuex 기술 요소
- state : 여러 컴포넌트에 공유되는 데이터 data
- getters : 연산된 state 값을 접근하는 속성 computed
- mutations : state 값을 변경하는 이벤트 로직, 메서드 methods
- actions : 비동기 처리 로직을 선언하는 메서드 aysnc methods
데이터 요청, Promise, async과 같은 비동기 처리는 모두 actions에 선언

* mutations는 commit으로 받는다.
* payload 객체 받는다.

### state는 왜 직접 변경하지 않고 mutations로 변경할까?
- 여러개의 컴포넌트에서 아래와 같이 state값을 변경하는 경우 어느 컴포넌트에서 해당 state를 변경했는지 추적하기가 어렵다.
- 뷰의 반응성을 거스르지 않게 명시적으로 상태 변화를 수행한다. 반응성, 디버깅, 테스팅 혜택


### 왜 비동기 처리 로직은 actions에 선언해야할까?
- 언제 어느 컴포넌트에서 해당 state를 호출하고, 변경했는지 확인하기가 어려움
- state값의 변화를 추적하기 어렵기 때문에 mutations 속성에는 동기 처리 로직만 넣어야한다.


### Helper
- state -> mapState
- getters -> mapGetters
- mutations -> mapMutations
- actions -> mapActions

### HOC
- 하이 오더 컴포넌트
- 예를 들어 list view가 하는 행동이 같을 때 상위 컴포넌트를 하나 더 만들어서 재활용 로직
- 라우터의 컴포넌트 수가 줄어드는 장점
- 단점 : 레벨이 깊어지면서 통신하기 까다로움