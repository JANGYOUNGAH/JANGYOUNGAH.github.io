
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
// string이 반복적으로 사용 될 경우 변수명을 대문자로 선언하는 것이 좋다.
// 왜냐면 변수명오타는 콘솔창에서 확인해주기 때문!!!

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; 

function onLoginSubmit(event) {
  // 브라우저에 기본 동작 막기 preventDefault 메서드
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  // localStorage.setItem( , ) 정보저장 메서드 
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(username){
  greeting.innerText = `${username}님의 메모`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername == null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);  
}else{
  paintGreeting(savedUsername);
}
