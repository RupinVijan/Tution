const nav=document.getElementById("nav");
const ope=document.getElementById("open");
const dark=document.getElementById("dark");
const left=document.getElementById("left");
const btn1=document.querySelector(".btn1");
const svg=document.querySelector("svg");
const maths=document.getElementById("maths");
const science=document.getElementById("science");
const sst=document.getElementById("sst");
const right=document.getElementById("right");
const img1=document.getElementById("img1");
const enroll=document.getElementById("enroll");
const clo=document.getElementById("close");





left.addEventListener("click", () =>{
    nav.classList.toggle('active');
    left.classList.toggle('active');
    
    
    ope.innerHTML='<path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"/>';
    if(nav.classList=='active'){
        ope.innerHTML='<path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>';
       
    }
});
dark.addEventListener("click",() =>{
    document.body.classList.toggle("darkmode");
    btn1.classList.toggle("darkmode");
    svg.classList.toggle("darkmode");
    
});

maths.addEventListener("click",() =>{
    img1.classList.add("activee");
    enroll.classList.remove("activee");
});
maths.addEventListener("click",() =>{
    img1.classList.add("activee");
    enroll.classList.remove("activee");
});
maths.addEventListener("click",() =>{
    img1.classList.add("activee");
    enroll.classList.remove("activee");
});
science.addEventListener("click",() =>{
    img1.classList.add("activee");
    enroll.classList.remove("activee");
});
sst.addEventListener("click",() =>{
    img1.classList.add("activee");
    enroll.classList.remove("activee");
});
right.addEventListener("click",() =>{
    img1.classList.add("activee");
    enroll.classList.remove("activee");
});
clo.addEventListener("click",() =>{
    img1.classList.remove("activee");
    enroll.classList.add("activee");
});
