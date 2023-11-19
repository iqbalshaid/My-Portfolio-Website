//create a menubar
let navbar = document.querySelector(".navlist");
let color = document.querySelector("ul.navlist li a");
let bodyId = document.querySelector("body").id;
let menuIcon = document.querySelector(".menu-icon");
 
 
console.log("hello");
menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("active");
    navbar.classList.toggle("active");
    document.body.classList.toggle("open")
   })
   //remove the navbar
   navbar.addEventListener("click",()=>{
    menuIcon.classList.remove("active");
    navbar.classList.remove("active");
    document.body.classList.remove("open")
     })
   
  for(let Link in color){
    if(Link.dataset.active == bodyId){
        Link.classList.add("active");
    }
   }
//rotate text code
let text = document.querySelector(".text p");
text.innerHTML = text.innerHTML.split("").map((char,i)=>{
    `<b style = "transform:rotate(${i*4.3}deg")>${char}</b>`

}).join("")

const buttonClick = document.querySelector(".about-btn Button");
const content = document.querySelector(".content");
if(buttonClick){
buttonClick.forEach((button,index)=>{
    button.addEventListener("click",()=>{
        console.log("hello");
        content.forEach(contents => contents.style.display = "none");
        console.log("hello1");
        content[index].style.display = "block";
        buttonClick.forEach(btn=>btn.classList.remove("active"));
        console.log("hello2");
        button.classList.add("active");
    })
})
}
var mixer = mixitup('.portfolio-gallery',{
    selectors:{
        target:'.portfolio-box'
    },
    animation:{
        duration:500
    }
});
//skill progress bar
const first_skill = document.querySelector(".skill:first-child");
const sk_counter = document.querySelector(".counter span");
const progress_bars = document.querySelector(".skills svg circle");
window.addEventListener("scroll",()=>{
    if(skillPlayed){
    skillsCounter();
}})
function hasReached(el){
    let topPosition = el.getBoundingClientRect().top;
    if(window.innerHeight>=topPosition+el.offsetHeight){
        return true;

    }else{
        return false;
    }
}
//console.log(typeof progress_bars);
function updateCount(num,Maxnum){
    let currentNum = +num.innerHTML;
    if(currentNum<Maxnum){
        num.innerHTML = currentNum+1;
        setTimeout(()=>{
            updateCount(num,Maxnum);
        },12)
    }
}
let skillPlayed = false;

function skillsCounter(){
    if(!hasReached(first_skill))return;
    skillPlayed=true;
    sk_counter.forEach((counter,i)=>{
let target = counter.dataset.target;
let strokeValue= 465-465*(target/100);
progress_bars[i].style.setProperty("--target",strokeValue);
setTimeout(()=>{
    updateCount(counter,target);
},400)
    })
    progress_bars.forEach(p=>p.style.animation = "progress 2s ease-in-out forwards");
}
let calcScrollValue = ()=>{
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;
    console.log("hello");
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos*100)/calcHeight);
    console.log(scrollValue)
    if(pos > 100){
        scrollProgress.style.display = "grid";
        //console.log("how");
    }
    else{
        console.log("how");
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click",()=>{
        document.documentElement.scrollTop = 0;
    })
    scrollProgress.style.background = "conic-gradient(#fff ${scrollValue}%,#e6006d ${scrollValue}%)";

};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
let menuLi = document.querySelector("nav ul li a");
let section = document.querySelector("section");
function activeMenu(){
    let len = section.clientHeight;
    while(--len && window.scrollY +97 < section[len].offsetTop){}
        menuLi.forEach(sec => sec.classList.remove("active"));
        menuLi[len].classList.add("active");
    
}
activeMenu()
window.addEventListener("scroll",activeMenu);