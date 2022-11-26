//Defining global variables
 const n= document.querySelectorAll("section");
const navbar = document.getElementById('navbar__list');
const lists = Array.from(n);
/* build the nav
I can't use preventDeault() since there's no events with the method I have used to scroll to sections.
*/
function buildnav(){
for(list of lists){
     item = document.createElement("li");
    item.innerHTML=`<li><a href="#${list.id}" class="menu__link">${list.id}</a></li>`;/*add the list item in the ul and addind an anchor element to scroll to the section*/
    navbar.appendChild(item);}}
// Add class 'active' to section when near top of viewport
document.addEventListener('scroll',()=>{
const place = n.forEach((elem)=>{
    const docheight= window.innerHeight;// getting height of viewport
    const upheight= elem.getBoundingClientRect().bottom// getting height of bottom of each section
if(docheight>=upheight&&docheight-upheight<=upheight){
    elem.classList.add("your-active-class");
}else {
    elem.classList.remove("your-active-class");}})})
buildnav();// Build menu 