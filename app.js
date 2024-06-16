const elementor = document.querySelector(".elemetor .div1");
const div2 = document.querySelector(".div2 input[type='text']");
const fontSize = document.querySelector("#fontWith");



div2.addEventListener("input",function(){
    elementor.innerHTML=div2.value;

})




div2.nextElementSibling.oninput = () => {
    elementor.style.fontSize = `${div2.nextElementSibling.value}px`;
}

div2.nextElementSibling.nextElementSibling.oninput = () =>{
    elementor.style.color=`${div2.nextElementSibling.nextElementSibling.value}`
}

fontSize.addEventListener("change",function(){
    elementor.style.fontWeight = (fontSize.value);
})