const starSection = document.querySelector('.star-section')
const techCard = document.querySelectorAll('.tech-icon-and-text')

function createStar(){
    const star = document.createElement('span')
    star.className = 'star'

    const posX = Math.random() * 100
    const posY = Math.random() * 100

    const duration = Math.random() * 3 + 2
    const delay = Math.random() * 5

    star.style.left = `${posX}%`
    star.style.top = `${posY}%`
    star.style.animationDuration = `${duration}s`

    star.style.opacity = Math.random() * .5 + .5

    return star
}

const starTotal  = 20
for(let i = 0; i < starTotal; i++){
    starSection.appendChild(createStar())
}

function addShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    
    const startY = Math.random() * 50;
    const angle = Math.random() * 30 + 15;
    
    shootingStar.style.top = `${startY}%`;
    shootingStar.style.transform = `rotate(${angle}deg)`;
    
    starSection.appendChild(shootingStar);
    
    setTimeout(() => {
        if (shootingStar.parentNode) {
            shootingStar.remove();
        }
    }, 5000);
}

setInterval(() => {
    if (Math.random() > 0.7) {
        addShootingStar();
    }
}, 3000);