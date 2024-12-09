let text3=document.querySelector('.text3');
let text6=document.querySelector('.text6');
let text10=document.querySelector('.text10');
let text4=document.getElementById('text4');
let text8=document.querySelector('.text8');
let a =document.getElementById('a')
let b =document.getElementById('b')
let s =document.getElementById('s')
let c =document.getElementById('c')
let d =document.getElementById('d')
let e =document.getElementById('e')
let f =document.getElementById('f')
let k=document.getElementById('k')
let j =document.getElementById('j')
let t =document.getElementById('text')

k.classList.add('hed')
a.classList.add('hed')
c.classList.add('hed')
e.classList.add('hed')
function mm(id){
    if(id==a.id){
        a.classList.add('hed')
    text3.classList.add('hed')
    b.classList.remove('hed')
    text4.style.marginTop='0px'
}else if(id==b.id){
    b.classList.add('hed')
    a.classList.remove('hed')
  
   text3.classList.remove('hed')
   
   text4.style.marginTop='80px'
    
}else if(id==c.id){

    c.classList.add('hed')
    text6.classList.add('hed')
    d.classList.remove('hed')


}else if(id==d.id){
    d.classList.add('hed')
    c.classList.remove('hed')
   
    text6.classList.remove('hed')
    
}else if(id==e.id){
    e.classList.add('hed')
    text8.classList.add('hed')
    f.classList.remove('hed')
}else if(id==f.id){
    f.classList.add('hed')
    e.classList.remove('hed')
   
    text8.classList.remove('hed')
    
}else if(id==k.id){
    k.classList.add('hed')
    text10.classList.add('hed')
    j.classList.remove('hed')
}else if(id==j.id){
    j.classList.add('hed')
    k.classList.remove('hed')
   
    text10.classList.remove('hed')
}

}
