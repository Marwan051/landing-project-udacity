//Defining global variables
const n = document.querySelectorAll("section");
const navbar = document.getElementById(`navbar__list`);
const lists = Array.from(n);
// function to build the nav
function buildnav() {
    for (const list of lists) {
        item = document.createElement("li");
        item.innerHTML = `<a  class="menu__link" id="${list.id}">${list.id}</a>`;
        navbar.appendChild(item);
    }

}
//function to add scrolling functionallity
function clickNscroll() {
    const navli = document.getElementsByClassName("menu__link");
    for (let i = 0; i <= navli.length - 1; i++) {
        navli[i].addEventListener('click', (event) => {  
            n[i].scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest"
            });//adding event listener to each link
            event.preventDefault();
            for (let i = 0; i <= navli.length - 1; i++) {
                navli[i].classList.remove("active-link");//removing active link state
            };
            const s = event.target;
            s.classList.add("active-link");//ading active link state
            })
    }
}


// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', () => {


    const place = n.forEach((elem) => {
        const docheight = window.innerHeight; // getting height of viewport
        const upheight = elem.getBoundingClientRect().bottom // getting height of bottom of each section

        if (docheight >= upheight - 170 && docheight - upheight <= upheight + 170) {
            elem.classList.add("your-active-class");


        } else {
            elem.classList.remove("your-active-class");
        };
    })
})

buildnav(); // Build menu 
clickNscroll(); //add scrolling functionallity
