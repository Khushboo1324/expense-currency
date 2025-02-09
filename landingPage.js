let darkModeBtn=document.querySelector(".dark-mode-btn");
let body = document.querySelector("body")
let currBtn=document.querySelector(".currBtn");
let budgetBtn=document.querySelector(".budgetBtn");
darkModeBtn.addEventListener("click",function(){
   if((body.classList.contains("darkMode"))==false){
     body.classList.add("darkMode");
     darkModeBtn.classList.add("btn-green");
    darkModeBtn.innerHTML="☀️Light Mode"
    body.classList.remove("lightMode");
    }
    else{
        body.classList.remove("darkMode");
        darkModeBtn.innerHTML="🌙Dark Mode" 
        darkModeBtn.classList.add("dark-mode-btn");
        body.classList.add("lightMode");
        darkModeBtn.classList.remove("btn-green"); 
    }
})
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const tool = card.id;
        console.log(`Selected ${tool}`);
    });
});

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation(); 
        const tool = button.closest('.card').id;
        console.log(`Get Started clicked for ${tool}`);
    });
});
