
const openModelBtn = document.querySelectorAll(".open-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal");

const length = openModelBtn.length;

const openModel = () =>{
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
};
const closeModal = () =>{
        modal.classList.add("hidden")
        overlay.classList.add("hidden")
}
for(let i = 0; i<length; i++){
    openModelBtn[i].addEventListener("click",openModel)
    closeModalBtn.addEventListener("click",closeModal)
    overlay.addEventListener("click",closeModal)

    document.addEventListener("keydown", function(e){
        if(e.key === "Escape"){
            closeModal();
        }
    })
}