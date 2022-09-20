const navIcon=document.querySelector('.myNav-icon')
const navbar=document.querySelector('.myNav')
const navLinks = document.querySelectorAll('.myNav-link')
const navLinkedSections = document.querySelectorAll('.navable')



const fixNavbar=()=>{
    if(window.scrollY>=window.innerHeight-navbar.getBoundingClientRect().height){
      navbar.classList.add('myNav-fixed')
    }
    if(window.scrollY<=window.innerHeight-navbar.getBoundingClientRect().height){
        navbar.classList.remove('myNav-fixed')
    }
}

const selectClickedLink = (e)=> {setTimeout(()=>{
    navLinks.forEach(link=>link.classList.remove('myNav-link_active'))
    e.target.classList.add('myNav-link_active')},1000)}

const selectActiveLink = ()=> {
    navLinkedSections.forEach((section, i)=> {
        const top = section.offsetTop-scrollY
        if (top <= 10) {
            navLinks.forEach(link=>link.classList.remove('myNav-link_active'))
            navLinks.forEach((link)=>{
                if(link.getAttribute('href')==='#'+section.getAttribute('id')){
                    link.classList.add('myNav-link_active')
                }})
            //navLinks[i].classList.add('myNav-link_active')
        }
    })
}
;
    
document.addEventListener('scroll',selectActiveLink)
navLinks.forEach((link)=> {
    link.addEventListener('click', selectClickedLink)
})
document.addEventListener('scroll',fixNavbar)

