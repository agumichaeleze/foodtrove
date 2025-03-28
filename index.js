const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
const vegetables = document.querySelector(".vegetables");
const vegetable = document.querySelector(".vegetable");
const input1 = document.querySelector("#input1");
const list = document.querySelector(".list");
const snack = document.querySelector(".snack");
const search = document.querySelector("#search .btn2");
const clock = document.querySelector(".clock");
const fruit = document.querySelector(".fruit")
const bakery = document.querySelector(".bakery")



// NAV
burger.addEventListener("click", () => {
    if(menu.classList.contains("hidden")){
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
});
//SEARCH FUNCTION
const searchItems = (terms) => {
    Array.from(vegetable.children)
        .filter((add) => !add.textContent.toUpperCase().includes(terms))
        .forEach((add) => add.classList.add("hidden"));
    

    Array.from(vegetable.children)
        .filter((add) => add.textContent.toUpperCase().includes(terms))
        .forEach((add) => add.classList.remove("hidden"));
    
};
// SEARCH
input1.addEventListener("keyup", (e) => {
    const terms = input1.value.trim().toUpperCase();

    searchItems(terms);
});

search.addEventListener("submit", e => {
    e.preventDefault();
    const add = search.add.value;
    console.log(add)
});

// DATE
const tick = () => {
    const now = new Date();
    
    const d = now.getDate();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    

    const html = `
    <span class=" py-1 px-3 text-center inline-block">${d} <br> Days</span> :
    <span class=" py-1 px-3 text-center inline-block">${h} <br> Hrs</span> :
    <span class="py-1 px-3 text-center mt-3 inline-block">${m} <br> Min</span> :
    <span class="py-1 px-3 text-center mt-3 inline-block"> ${s} <br> Sec</span> 
    `;

    clock.innerHTML = html
};
setInterval(tick, 1000);



snack.addEventListener("click", () => {

    Array.from(vegetable.children).filter((u) => {
        if(u.classList.contains("snacks")){
            u.previousElementSibling.remove();
            u.nextElementSibling.remove();
        }
    })

});

vegetables.addEventListener("click", () => {

    Array.from(vegetable.children).filter((u) => {
        if(u.classList.contains("veges")){
            u.nextElementSibling.remove();
            u.nextElementSibling.remove();
            u.nextElementSibling.remove();
            u.nextElementSibling.remove();
            u.nextElementSibling.remove(); 
        }
    })
});

fruit.addEventListener("click", () => {

    Array.from(vegetable.children).filter((u) => {
        if(u.classList.contains("fruits")){
            u.previousElementSibling.remove();
            u.previousElementSibling.remove();
            u.previousElementSibling.remove();
            u.nextElementSibling.remove();
            u.nextElementSibling.remove();
        }
           
    })

});


bakery.addEventListener("click", () => {

    Array.from(vegetable.children).filter((u) => {
        if(u.classList.contains("bakerys")){
            u.previousElementSibling.remove();
            u.previousElementSibling.remove();
            u.previousElementSibling.remove();
            u.previousElementSibling.remove();
            u.previousElementSibling.remove();
            
        }
           
    })

});





