document.addEventListener('DOMContentLoaded', function() {
    loadContent();
    initNavigation();
    initBookFlipper();
    initFlyingCoins();
    initCoinGame();
    initSavingsCalculator();
    initContactForm();
});

let contentData = {};

async function loadContent() {
    try {
        const response = await fetch('content.json');
        contentData = await response.json();
        updateDynamicContent();
    } catch (e) {
        console.log('Using default content');
    }
}

function updateDynamicContent() {
    if (contentData.products) {
        const grid = document.getElementById('productsGrid');
        grid.innerHTML = contentData.products.map(product => `
            <div class="product-card">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <div class="product-image">
                    <div class="book-mockup">📚</div>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-desc">${product.description}</p>
                    <div class="product-price">${product.price}</div>
                    <a href="${product.buy_link}" class="btn btn-primary product-btn">Buy Now 🛒</a>
                </div>
            </div>
        `).join('');
    }
}

function initNavigation() {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
        menuToggle.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
            menuToggle.classList.remove('active');
        });
    });
    
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.05)';
        }
    });
}

function initBookFlipper() {
    const pages = document.querySelectorAll('.flip-page');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');
    let currentPage = 0;
    
    function showPage(index) {
        pages.forEach((page, i) => {
            page.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        currentPage = index;
    }
    
    prevBtn.addEventListener('click', () => {
        if (currentPage > 0) {
            showPage(currentPage - 1);
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentPage < pages.length - 1) {
            showPage(currentPage + 1);
        }
    });
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showPage(index));
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && currentPage > 0) {
            showPage(currentPage - 1);
        } else if (e.key === 'ArrowRight' && currentPage < pages.length - 1) {
            showPage(currentPage + 1);
        }
    });
}

function initFlyingCoins() {
    const container = document.getElementById('flyingCoins');
    const coinChars = ['🪙', '💰', '💵'];
    
    function createCoin() {
        const coin = document.createElement('div');
        coin.className = 'coin';
        coin.textContent = coinChars[Math.floor(Math.random() * coinChars.length)];
        coin.style.left = Math.random() * 100 + '%';
        coin.style.animationDuration = (3 + Math.random() * 2) + 's';
        coin.style.animationDelay = Math.random() * 2 + 's';
        
        coin.addEventListener('click', () => {
            coin.style.transform = 'scale(1.5)';
            coin.style.opacity = '0';
            setTimeout(() => coin.remove(), 200);
        });
        
        container.appendChild(coin);
        
        setTimeout(() => {
            coin.remove();
        }, 5000);
    }
    
    setInterval(createCoin, 2000);
}

function initCoinGame() {
    const gameArea = document.getElementById('coinGame');
    const scoreDisplay = document.getElementById('coinScore');
    const startBtn = document.getElementById('startCoinGame');
    let score = 0;
    let gameActive = false;
    let coinInterval;
    
    function spawnCoin() {
        if (!gameActive) return;
        
        const coin = document.createElement('div');
        coin.className = 'game-coin';
        coin.textContent = '🪙';
        coin.style.left = Math.random() * (gameArea.offsetWidth - 50) + 'px';
        coin.style.top = Math.random() * (gameArea.offsetHeight - 50) + 'px';
        
        coin.addEventListener('click', () => {
            score += 10;
            scoreDisplay.textContent = score;
            coin.remove();
            
            if (score >= 100) {
                endGame();
            }
        });
        
        gameArea.appendChild(coin);
        
        setTimeout(() => {
            if (coin.parentNode) coin.remove();
        }, 2500);
    }
    
    function startGame() {
        score = 0;
        scoreDisplay.textContent = '0';
        gameActive = true;
        startBtn.textContent = 'Playing...';
        startBtn.disabled = true;
        
        coinInterval = setInterval(spawnCoin, 800);
        
        setTimeout(() => {
            if (gameActive) endGame();
        }, 30000);
    }
    
    function endGame() {
        gameActive = false;
        clearInterval(coinInterval);
        startBtn.textContent = 'Play Again!';
        startBtn.disabled = false;
        
        if (score >= 100) {
            confettiEffect();
        }
        
        document.querySelectorAll('.game-coin').forEach(c => c.remove());
    }
    
    function confettiEffect() {
        for (let i = 0; i < 30; i++) {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: absolute;
                font-size: 1.5rem;
                left: 50%;
                top: 50%;
                animation: confettiFall ${1 + Math.random()}s ease-out forwards;
            `;
            confetti.textContent = ['🎉', '⭐', '🪙', '💫'][Math.floor(Math.random() * 4)];
            gameArea.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 2000);
        }
    }
    
    startBtn.addEventListener('click', startGame);
}

function initSavingsCalculator() {
    const calculateBtn = document.getElementById('calculateWeeks');
    const resultDiv = document.getElementById('calcResult');
    
    calculateBtn.addEventListener('click', () => {
        const goal = document.getElementById('savingsGoal').value || 'your goal';
        const cost = parseFloat(document.getElementById('savingsCost').value);
        const weekly = parseFloat(document.getElementById('weeklySavings').value);
        
        if (!cost || !weekly || weekly <= 0) {
            resultDiv.innerHTML = 'Please enter valid numbers!';
            return;
        }
        
        const weeks = Math.ceil(cost / weekly);
        
        let message = '';
        if (weeks <= 4) {
            message = `🚀 Amazing! Just ${weeks} week${weeks > 1 ? 's' : ''} to get ${goal}!`;
        } else if (weeks <= 12) {
            message = `💪 Great job! ${weeks} weeks to save for ${goal}!`;
        } else {
            message = `🎯 Keep going! ${weeks} weeks and you'll have ${goal}!`;
        }
        
        resultDiv.innerHTML = message;
    });
}

function initContactForm() {
    const form = document.getElementById('contactForm');
    const success = document.getElementById('formSuccess');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        console.log('Form submitted:', { name, email, message });
        
        form.style.display = 'none';
        success.classList.add('show');
    });
}

const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        0% {
            transform: translate(-50%, -50%) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translate(${(Math.random() - 0.5) * 200}px, 200px) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
