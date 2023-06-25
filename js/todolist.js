const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".inputTxt");
const todoList = document.querySelector(".todolist");
const removeBtn_wrap = document.querySelector(".removeBtn_wrap");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
  //JSON.stringify(js 오브젝트나 arry 어떤 코드든) string으로 변환한다. 
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


// const USERTODO_KEY = "usertodo";

// li 삭제 영역
function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();

  // 원하는 값을 위해서는 false를 위한 펑션을 만든다고 이해할까..? 
  // true인 값들만 반환한다. 
  // li.id는 string 타입으로 parseInt 메서드를 사용해 형변환해서 사용. todoId는 숫자임 
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  // 새로운 array를 로컬스토리지에 저장해야 하므로 saveTodos함수 꼭 선언!
  saveToDos();
}


function todoWrite(newTodo){
  const li = document.createElement("li");
  // HTML에서 각각의 li에 id속성이 부여된다. 
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const removeBtn = document.createElement("button");
  removeBtn.innerHTML = "✔";
  removeBtn.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(removeBtn);
  todoList.appendChild(li);

}



// 전체삭제 영역 버튼
function allremoveBtn(){
  const allremoveBtn = document.createElement("button");
  removeBtn_wrap.appendChild(allremoveBtn);
  allremoveBtn.innerText = "전체삭제";
  allremoveBtn.addEventListener("click", function(){
    todoList.remove();
    window.localStorage.clear();
    console.log(toDos);
  })
}


function todoHandler(event){
  event.preventDefault();
  console.log(todoInput.value);
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObject = {
    text:newTodo,
    id: Date.now(),
  }
  toDos.push(newTodoObject);
  todoWrite(newTodoObject);
  saveToDos();
}



todoForm.addEventListener("submit", todoHandler)
// todoForm.addEventListener("submit", allremoveBtn())



const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
  // JSON.parse는 string을 객체 object로 변환한다. 밸류값. 
  const parsedToDos = JSON.parse(savedToDos); 
  toDos = parsedToDos;
  parsedToDos.forEach(todoWrite);
}


