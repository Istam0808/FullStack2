const dino = document.querySelector('#dino');
const cactus = document.querySelector('#cactus');
const scoreElement = document.querySelector('#score');
const themeToggle = document.querySelector('#themeToggle');

let isJumping = false;
let score = 0;
let isGameOver = false;
let collisionInterval;

// Theme toggle functionality
themeToggle.addEventListener('change', function() {
    document.body.classList.toggle('dark-theme');
    
    // Save theme preference to localStorage
    localStorage.setItem('theme', this.checked ? 'dark' : 'light');
});

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeToggle.checked = true;
}

document.addEventListener("keydown", function(event) {
    if (event.code === "Space" && !isJumping && !isGameOver) {
        jump();
    }
});

function jump() {
    if (!isJumping) {
        isJumping = true;
        dino.classList.add('jump');
        
        setTimeout(function() {
            dino.classList.remove('jump');
            isJumping = false;
        }, 500);
    }
}

function startCollisionCheck() {
    collisionInterval = setInterval(function() {
        let dinoRect = dino.getBoundingClientRect();
        let cactusRect = cactus.getBoundingClientRect();
        
        // Update score
        score++;
        scoreElement.textContent = `Score: ${score}`;
        
        // Collision check
        if (
            dinoRect.right > cactusRect.left &&
            dinoRect.left < cactusRect.right &&
            dinoRect.bottom > cactusRect.top &&
            !dino.classList.contains('jump')
        ) {
            gameOver();
        }
    }, 10);
}

function gameOver() {
    clearInterval(collisionInterval);
    isGameOver = true;
    alert(`Game Over! Your score: ${score - 1}`);
    
    // Reload page
    location.reload();
}

// Start initial collision check
startCollisionCheck();





//==================================================================================================================
//SNOW FALL 👇

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    
    // Случайная горизонтальная позиция
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    
    // Случайный размер снежинки
    const size = Math.random() * 5 + 2;
    snowflake.style.width = size + 'px';
    snowflake.style.height = size + 'px';
    
    document.body.appendChild(snowflake);
    
    // Анимация падения
    animateSnowflake(snowflake);
}

function animateSnowflake(snowflake) {
    let position = 0;
    const speed = Math.random() * 3 + 1;
    const horizontalMove = Math.random() * 2 - 1;
    
    function fall() {
        position += speed; 
        snowflake.style.top = position + 'px';
        snowflake.style.left = 
            (parseFloat(snowflake.style.left) + horizontalMove) + 'px';
        
        if (position < window.innerHeight) {
            requestAnimationFrame(fall);
        } else {
            snowflake.remove();
        }
    }
    
    fall();
}

// Создаем снежинки каждые 200 миллисекунд
function startSnowfall() {
    setInterval(createSnowflake, 200);
}

// Запускаем анимацию при загрузке страницы
window.onload = startSnowfall;
