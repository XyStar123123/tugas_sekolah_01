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
    
    // Random position from top
    const startY = Math.random() * 50; // Start from top half
    const angle = Math.random() * 30 + 15; // Angle between 15-45 degrees
    
    shootingStar.style.top = `${startY}%`;
    shootingStar.style.transform = `rotate(${angle}deg)`;
    
    starSection.appendChild(shootingStar);
    
    // Remove after animation completes (5s)
    setTimeout(() => {
        if (shootingStar.parentNode) {
            shootingStar.remove();
        }
    }, 5000);
}

// Add shooting star every 3-10 seconds
setInterval(() => {
    if (Math.random() > 0.7) { // 30% chance to spawn a shooting star
        addShootingStar();
    }
}, 3000);