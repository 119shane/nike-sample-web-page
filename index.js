const hiddenmsgOne = document.getElementById("hidden_msg1")
const hiddenmsgTwo = document.getElementById("hidden_msg2")
const hiddenmsgThree = document.getElementById("hidden_msg3")
const hiddenmsgFour = document.getElementById("hidden_msg4")
const hiddenmsgFive = document.getElementById("hidden_msg5")

const onlineBuyBtnOne = document.getElementById("buy_online_btn_one")
const onlineBuyBtnTwo = document.getElementById("buy_online_btn_two")
const onlineBuyBtnThree = document.getElementById("buy_online_btn_three")
const onlineBuyBtnFour = document.getElementById("buy_online_btn_four")
const onlineBuyBtnFive = document.getElementById("buy_online_btn_five")

onlineBuyBtnOne.addEventListener("click", ()=> {
    hiddenmsgOne.classList.add("show")
    hiddenmsgOne.textContent = "sorry! service not available"
   
})

onlineBuyBtnTwo.addEventListener("click", ()=> {
    hiddenmsgTwo.classList.add("show")
    hiddenmsgTwo.textContent = "sorry! service not available"
   
})

onlineBuyBtnThree.addEventListener("click", ()=> {
    hiddenmsgThree.classList.add("show")
    hiddenmsgThree.textContent = "sorry! service not available"
   
})

onlineBuyBtnFour.addEventListener("click", ()=> {
    hiddenmsgFour.classList.add("show")
    hiddenmsgFour.textContent = "sorry! service not available"
   
})

onlineBuyBtnFive.addEventListener("click", ()=> {
    hiddenmsgFive.classList.add("show")
    hiddenmsgFive.textContent = "sorry! service not available"
   
})