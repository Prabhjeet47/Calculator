const btns = document.querySelectorAll(".btn");
const answer = document.getElementById("answer");
const eql = document.getElementById("eql");
const ce = document.getElementById("clearall");
const tocopy = document.getElementById("tocopy");
const history = document.getElementById("history-val");
const showBtn = document.getElementById("show");
const deleteBtn = document.getElementById("delete");

let btnClickedStatus = 0;
btns.forEach((a)=>{
     a.addEventListener("click",()=>{
          if (btnClickedStatus == 1){
               answer.value = "";
               btnClickedStatus = 0;
          }

          // a.style.backgroundColor = "green";
          // console.log("get sh!t done");
          a.style.backgroundColor = "#FFF188";
          // a.style.fontWeight = "700";
          a.style.transition = "all 0.1s linear"
     })
     a.addEventListener("click",()=>{
          // console.log(a.value);
          answer.value += a.value;
     })
})

eql.addEventListener("click",()=>{
     try{
          let inputBoxCalc = String(answer.value);
          const result = eval(answer.value);
          // console.log(result);
          answer.value = result;
          let inputBoxAns = String(result);
          let toAddHistory = inputBoxCalc + " = " +  inputBoxAns; 
          history.innerHTML += toAddHistory + "<hr><br>";
          btnClickedStatus = 1;

          const timeNow = Date.now();
          const keyName = "history_" + timeNow;
          localStorage.setItem(keyName,toAddHistory);
     }
     catch(error){
          console.log("Invalid expression");
     }
})

ce.addEventListener("click",()=>{
     answer.value = "";
     btns.forEach((abc)=>{
          abc.style.backgroundColor = "";
          abc.style.fontWeight = "";
          btnClickedStatus = 0;
     })
})

let showBtnStatus = 0;
showBtn.addEventListener("click",()=>{
     showBtn.style.background = "white";
     showBtn.style.transition = "all 0.25s ease";
     showBtnStatus = 1; 
     // for (let i=0;i<localStorage.length;i++){
     //      if (localStorage.key(i).startsWith("history_")){
     //           const localStorageSavedData = localStorage.getItem(localStorage.key(i));
     //           history.innerHTML += localStorageSavedData + "<hr><br>";
     //      }
     // }    
});

deleteBtn.addEventListener("click",()=>{
     if (showBtnStatus == 1){
          showBtn.style.background = "";
          showBtn.style.transition = "all 0.25s ease"; 
          showBtnStatus = 0;
     }
     for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key.startsWith("history_")) {
              const historyEntry = localStorage.clear();
              history.innerHTML = "";
          }
      }
});

window.addEventListener("load",()=>{
     for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key.startsWith("history_")) {
              const historyEntry = localStorage.getItem(key);
              history.innerHTML += historyEntry + "<hr><br>";
          }
      }
})




