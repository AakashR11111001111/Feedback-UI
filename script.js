var mainContainer = document.querySelector(".main-container");
var Loader = document.querySelector(".loader");
var sendBtn = document.querySelector(".send-btn");
var Emos = document.querySelectorAll(".emos");
window.addEventListener("load",()=>{
    mainContainer.style.display = "none";
    Loader.style.display = "flex";
    setTimeout(() => {
        mainContainer.style.display = "flex";
        Loader.style.display = "none";
    }, Math.floor(Math.random() * 1000) + 3000);
})


function removeAll(){
    Emos.forEach(emo =>{
        emo.classList.remove("selected")
    })
};

Emos.forEach(emo =>{
    emo.addEventListener("click",()=>{
        removeAll();
        emo.classList.add("selected")
    })
})


sendBtn.addEventListener("click",()=>{
    var selectedDiv = document.querySelector(".selected");
    let newDiv = document.createElement("div");
    newDiv.className = "FeedbackDiv";
    let str = `
    <h2 class= "redh">Thank You!</h2>
    <h5>FeedBack :<span> ${selectedDiv.innerText}</span></h5>
    <p>We'll Use Your Feedback To Improve Our Customer Support. 😊</p>
    `
    mainContainer.innerHTML ="";
    newDiv.innerHTML = str;
    mainContainer.appendChild(newDiv);
})


