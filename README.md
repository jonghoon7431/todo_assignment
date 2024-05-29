# 입문주차 개인과제 - 투두리스트

### 필수 구현 항목
* UI구현
* 리스트 추가, 삭제
* 완료, 취소 상태 변경(진행중 - 완료)

### 상세 요구사항
* 제목과 내용을 입력하고, "추가하기" 버튼 클릭시 Working에 새로운 Todo가 추가. 제목 input과 내용 input은 다시 빈 값으로 바뀌도록 구성해주세요.
* "삭제하기" 버튼을 클릭시 Working 또는 Done 에 있는 것과 상관없이 삭제처리
* 투두의 isDone 상태가 true이면: 상태 버튼의 라벨을 취소, isDone이 false 이면: 라벨을 완료 로 조건부 렌더링.
* 투두의 상태가 Working 이면 위쪽에 위치하고, Done이면 아래쪽에 위치하도록 구현합니다.
* Layout의 최대 너비는 1200px, 최소 너비는 800px로 제한하고, 전체 화면의 가운데로 정렬해주세요.
* 컴포넌트 구조는 자유롭게 구현해보세요
    - 반복되는 컴포넌트를 찾아서, 직접 컴포넌트를 분리해보시고, 분리한 컴포넌트를 `README`에 작성합니다.
 
### 컴포넌트 구성
* Header(layout)
* Form
* TodoList
* TodoItem

### 완성본 미리보기
<img src="https://github.com/jonghoon7431/todo_assignment/assets/152875407/744d6617-0a33-4837-8ea5-1345b462f209" width="600"/>

<img src="https://github.com/jonghoon7431/todo_assignment/assets/152875407/8178d524-4c0c-4385-8344-47a7b4bb314a" width="600"/>
