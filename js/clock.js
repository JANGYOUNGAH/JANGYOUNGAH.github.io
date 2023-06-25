const clock = document.querySelector("#clock");


function getClock(){
  const date = new Date();
  // padStart() function은 string값을 보다 길게 만들어야 할 때 사용. 넘버는 안된다. 
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText=(`${hours}:${minutes}:${seconds}`);
}

// window 실행 시 즉시 화면 출력을 위한 함수호출. 
getClock();
// interval은 반복사용을 위한 메서드
setInterval(getClock, 1000);


