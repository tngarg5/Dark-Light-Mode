// way to add event listner without element id
const toggleSwitch = document.querySelector('input[type = "checkbox"]');
//Now for other elemnts we wish to change
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// image
//JS needs to change in path from\ to /
function mode(color){
    //tick converts add to template
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}


//darkMode
function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0 /50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255/ 50%)';
// Toggle button children
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
// image
//JS needs to change in path from\ to /
    mode('dark');

}
//darkMode
function lightMode(){
    nav.style.backgroundColor = 'rgb(255 255 255/ 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 /50%)';
// Toggle button children
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    mode('light');
}

// Switch theme dynamically
function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme','dark');
        darkMode();
    }else{
        document.documentElement.setAttribute('data-theme', 'light'); 
        localStorage.setItem('theme','light');

        
        lightMode();
    }
}

// event Listener
toggleSwitch.addEventListener('change',switchTheme);

const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme); 
    if(currentTheme === 'dark'){
        toggleSwitch.checked = true;
        darkMode();
    }
}