let body = document.querySelector("body")
let bottons = document.querySelectorAll("button[data-dir]")
let btn_generate = document.querySelector("#submit")
let color1 = document.querySelector("#color-a")
let color2 = document.querySelector("#color-b")
let codeC = document.querySelector("#code")

let bgcode = `  background-image: linear-gradient(to bottom right, red, yellow);`


let dir1 = "to bottom"
let codecolor1 = "#b8c7b8"
let codecolor2 = "#172768"



function bgSet() {
    

  
    body.style.backgroundImage= ` linear-gradient(${dir1}, ${codecolor1}, ${codecolor2})`

    codeC.value=`backgroundImage: ${body.style.backgroundImage}`

    
}

bgSet()
function dirG (dir) {
    
    let dirgradient = dir 
    
    
    
}

btn_generate.addEventListener("click",(e)=>{

    bgSet()
    
})

function rm() {
    
    bottons.forEach(elm =>{
        elm.classList.remove("active")
    })
    
}

bottons.forEach(element => {
    
    
    element.addEventListener("click",(even)=>{
        rm()
        even.target.classList.add("active")

        dir1 = even.target.dataset.dir
        
        console.log(dir1);

   })
    
});



function ff(cc) {
    bgSet(cc) 
}


console.log(bottons);
color2.addEventListener("input",(e)=>{

    codecolor2 = color2.value
    
    
})
color1.addEventListener("input",(e)=>{

    codecolor1 = color1.value
    
    
})









