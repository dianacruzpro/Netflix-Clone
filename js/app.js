const button = document.querySelectorAll(".faq__button");
const li     = document.querySelectorAll(".faq__li");
  button.forEach((v, i)=>{
    button[i].addEventListener("click",()=>{
      if(li[i].classList.contains('activo')){
         li[i].classList.remove("activo");
      }else{
        li.forEach((v, i)=>{ li[i].classList.remove("activo"); })
        li[i].classList.add("activo");
      }
    })
  })