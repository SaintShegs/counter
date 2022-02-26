let dec= document.body.querySelector('.dec')
let inc=document.body.querySelector('.inc')
let re=document.body.querySelector('.res')

let out=document.body.querySelector('.out')


function colo(){
    
    let colors=['red','yellow','blue','violet','green','indigo','yellowgreen','tomato','darkcyan','darkkhaki','darkslategray','rosybrown']

    
    let random=Math.floor( Math.random()*12)

    document.body.style.backgroundColor=colors[random] 

}




let count=0
function add(){  
    count++
    out.textContent=count
    colo()
}
inc.addEventListener('click',add)


function sub(){
    count--
    out.textContent=count
    colo()
}
dec.addEventListener('click',sub)


function res(){
    count=0
    out.textContent=count
    colo()
}
re.addEventListener('click',res)
