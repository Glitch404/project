document.onkeydown = function(e){
    console.log("key code is", e.keycode)
    if(e.keycode= 38){
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
    if(e.keycode= 39){
        dino = document.querySelector('.dino');
        dinoX =parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112+"px"
        
    }
    if(e.keycode= 37){
        dino = document.querySelector('.dino');
        dinoX =parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112)+"px"
        
    }
    
}

setInterval(() => {
    dino = document.querySelector('.dino');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = math.abs(dx-ox);
    offsetY = math.abs(dy-oy);
    if(offsetX< 93 && offsetY< 52){
    gameover.style.visibility = 'visible';
    obstacle.classList.remove('obstacleAni')
    }
}, 100);