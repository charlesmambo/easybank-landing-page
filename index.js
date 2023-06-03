const openHamburgBtn = document.getElementById('open-hamburg-btn');
const closeHamburgBtn = document.getElementById('close-hamburg-btn');
const popupMenu = document.getElementById('popup-menu');

openHamburgBtn.addEventListener('click', ()=> {
    popupMenu.classList.add('show-up');
    closeHamburgBtn.classList.add('close-btn');
    openHamburgBtn.classList.add('hide')
})

closeHamburgBtn.addEventListener('click', () =>{
    closeHamburgBtn.classList.remove('close-btn');
    openHamburgBtn.classList.remove('hide')
    popupMenu.classList.remove('show-up');
})