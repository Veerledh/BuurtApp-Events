window.addEventListener('load', init);
let openDiv;
let openKnop;
let closeKnop;

function init(){
    openKnop = document.getElementById('createButton');
    openKnop.addEventListener('click', openAanmaken)

    openDiv = document.getElementById('create');

    closeKnop = document.getElementById('create-close');
    closeKnop.addEventListener('click', closeAanmaken);
}

function openAanmaken(){
    // console.log('YOOO het werkt');
    openDiv.classList.add('open');
}

function closeAanmaken(){
    openDiv.classList.remove('open');
}