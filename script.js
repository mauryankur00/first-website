//navbar script
const pcLook = document.querySelector(".pcLook")
const phoneLook = document.querySelector(".phoneLook")

const showPhoneNav = ()=>{
    phoneLook.classList.add("unHide")
    phoneLook.classList.remove("closeAnim")
}
const hidePhoneNav = ()=>{

    phoneLook.classList.add("closeAnim")
    setTimeout(()=>{

        phoneLook.classList.remove("unHide")
    },400)
}