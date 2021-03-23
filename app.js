let menuItems = document.querySelector("#menuItems");

menuItems.style.maxHeight = "0px";

function menuToggle(){
    if(menuItems.style.maxHeight == "0px"){
        menuItems.style.maxHeight = "200px";
    } else{
        menuItems.style.maxHeight = "0px";
    }
}

// const ProductImg = document.querySelector("#productImg");
// const SmallImg = document.querySelector(".small-img");

// SmallImg[0].onclick = function(){
//     ProductImg.src = SmallImg[0].src;
// }
// SmallImg[1].onclick = function(){
//     ProductImg.src = SmallImg[1].src;
// }
// SmallImg[2].onclick = function(){
//     ProductImg.src = SmallImg[2].src;
// }
// SmallImg[3].onclick = function(){
//     ProductImg.src = SmallImg[3].src;
// }

