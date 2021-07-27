const countEl = document.querySelector("#count")
const btn1El = document.querySelector(".btn1")
const btn2El = document.querySelector(".btn2")
const FooterEl = document.querySelector('#footer')



let i=0;
btn1El.addEventListener('click', ()=>{
    console.log('clocked');
    i +=1;
    countEl.innerHTML = i
}); 
let Entries = []
btn2El.addEventListener('click', ()=>{
    countEl.innerHTML = 0
    Entries = [...Entries,i]
    FooterEl.innerHTML = `Previous entries:${Entries}`
    i = 0

})
