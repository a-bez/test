const menuBtn = document.getElementById('menuBtn');
const container = document.getElementById('menuContainer');

menuBtn.onclick = function(){
  container.classList.toggle('visible_menu');
}