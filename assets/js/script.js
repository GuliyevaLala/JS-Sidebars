const trigger = document.querySelector('.trigger');
const sidebar = document.querySelector('.sidebar');

const sidebarToggle = () => {
  trigger.classList.toggle('active');
  sidebar.classList.toggle('show');
};

trigger.addEventListener('click', sidebarToggle);


let bottomtrigger = document.querySelector('.bottom-trigger');
let bottomsidebar = document.querySelector('.bottom-sidebar');

let bottombarToggle = () => {
    bottomtrigger.classList.toggle('active');
    bottomsidebar.classList.toggle('show');
};

bottomtrigger.addEventListener('click', bottombarToggle);
