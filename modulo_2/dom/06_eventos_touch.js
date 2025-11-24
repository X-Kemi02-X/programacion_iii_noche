const areaTouch = document
.getElementById('areaTouch');
areaTouch.addEventListener('touchstart', () => {
    areaTouch.style.background = 'deepskblue';
});
areaTouch.addEventListener('touchend', () => {
    areaTouch.style.background = 'lightgray';
    alert('¡TOUCH FINALIZADO!');
});