const logo = document.getElementById('logos');
const papai = document.getElementById('papai');
const pelucia = document.getElementById('pelucia');
const neve = document.getElementById('neve');

let ticking = false; 

function updateParallax() {
    const value = window.scrollY; 

    logo.style.transform = `translatex(${value * -1}px)`;
    papai.style.transform = `translateX(-50%) translateY(${value * 0.5}px)`;
    pelucia.style.transform = `translateY(${value * 1}px)`;
    neve.style.transform = `translateY(${value * 1}px)`;

    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {

        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
});
