// ========================================
// Rose Day Romantic Gift - Enhanced JavaScript
// ========================================

// DOM Elements
const envelope = document.getElementById('envelope');
const card = document.getElementById('card');
const surpriseModal = document.getElementById('surpriseModal');
const quizModal = document.getElementById('quizModal');
const hugOverlay = document.getElementById('hugOverlay');
const petalsContainer = document.getElementById('petalsContainer');
const heartsContainer = document.getElementById('heartsContainer');
const bgMusic = document.getElementById('bgMusic');
const musicIcon = document.getElementById('musicIcon');
const loveMeterFill = document.getElementById('loveMeterFill');
const loveMeterText = document.getElementById('loveMeterText');
const loveMeterResult = document.getElementById('loveMeterResult');
const funFactText = document.getElementById('funFactText');
const complimentText = document.getElementById('complimentText');
const roseClickCount = document.getElementById('roseClickCount');
const typingMessage = document.getElementById('typingMessage');

// State
let isMusicPlaying = false;
let roseClicks = 0;
let currentFactIndex = 0;
let currentQuizQuestion = 0;
let quizScore = 0;

// ========================================
// Fun Love Facts
// ========================================
const funFacts = [
    "Couples who laugh together stay together! 😂💕",
    "Holding hands reduces stress and pain - science says cuddle more! 🤝",
    "Your heart beats faster when you see someone you love! 💓",
    "The phrase 'love is blind' is actually scientifically proven! 👀❤️",
    "Cuddling releases oxytocin - the 'love hormone'! 🤗",
    "Looking into each other's eyes can make you fall in love! 👁️",
    "A 20-second hug reduces the harmful effects of stress! 🤗",
    "Couples who eat together tend to be happier! 🍕❤️",
    "Your voice changes when you talk to someone you love! 🗣️💕",
    "Love makes your pupils dilate - your eyes literally grow bigger! 👀"
];

// ========================================
// Funny Compliments
// ========================================
const compliments = [
    "You're so cute, even puppies are jealous! 🐶💕",
    "If you were a vegetable, you'd be a CUTE-cumber! 🥒😍",
    "You're the reason I check my phone every 2 seconds! 📱❤️",
    "Are you a magician? Because whenever I look at you, everyone else disappears! ✨",
    "You must be tired... from running through my dreams all night! 😴💭",
    "If beauty were time, you'd be an eternity! ⏰💖",
    "You're like pizza - even when you're bad, you're still pretty good! 🍕😂",
    "You're the avocado to my toast! 🥑💕",
    "You're so sweet, you put candy out of business! 🍬",
    "My love for you is like diarrhea - I just can't hold it in! 😂💕",
    "You're the cheese to my macaroni! 🧀❤️",
    "If you were a burger at McDonald's, you'd be the McGorgeous! 🍔",
    "You're like a dictionary - you add meaning to my life! 📖💕",
    "You're the Wi-Fi to my phone - I feel connected to you! 📶❤️"
];

// ========================================
// Romantic Typing Messages
// ========================================
const typingMessages = [
    "Every moment with you feels magical... ✨",
    "You make my heart skip a beat every day! 💓",
    "I fall in love with you all over again daily... 💕",
    "You're my favorite notification! 📱❤️",
    "Life is better with you in it... 🌹"
];

// ========================================
// Wheel of Love Results
// ========================================
const wheelResults = [
    "1000 Virtual Kisses! 💋💋💋",
    "Unlimited Hugs Coupon! 🤗",
    "You Win My Heart! ❤️",
    "Eternal Love & Cuddles! 💕",
    "Movie Night Together! 🎬🍿",
    "Breakfast in Bed! 🥞☕",
    "Love Jackpot! 💖💖💖",
    "Special Date Night! 🌹✨"
];

// ========================================
// Quiz Questions
// ========================================
const quizQuestions = [
    {
        question: "What's the most important thing in our relationship? 🤔",
        options: ["Pizza 🍕", "Love & Trust 💕", "Netflix 📺", "Arguing about food 😂"],
        correct: 1,
        funnyResponse: "Obviously! But pizza is a close second... 🍕"
    },
    {
        question: "How much do I love you? 💖",
        options: ["A little bit", "More than pizza! 🍕", "To the moon and back 🌙", "All of the above!"],
        correct: 3,
        funnyResponse: "Trick question - it's infinite! ♾️❤️"
    },
    {
        question: "What's my favorite thing about you? 😍",
        options: ["Your smile 😊", "Your laugh 😂", "Your cooking 👩‍🍳", "Everything!! 💕"],
        correct: 3,
        funnyResponse: "How can I choose just one?! 🥰"
    },
    {
        question: "Where would I want to be right now? 🤷",
        options: ["At the beach 🏖️", "In Paris 🗼", "With you! 💕", "Eating food 🍔"],
        correct: 2,
        funnyResponse: "Anywhere is perfect as long as you're there! 💖"
    },
    {
        question: "Who's the cutest person ever? 🏆",
        options: ["Me obviously 😎", "A puppy 🐶", "YOU!! 💕", "A baby panda 🐼"],
        correct: 2,
        funnyResponse: "Was there ever any doubt?! 😍"
    }
];

// ========================================
// Envelope Animation
// ========================================
function openEnvelope() {
    envelope.classList.add('open');

    // Create burst of petals
    createPetalBurst();

    // Play a sound effect simulation
    createSparkleExplosion(window.innerWidth / 2, window.innerHeight / 2);

    // After animation, hide envelope and show card
    setTimeout(() => {
        envelope.classList.add('hidden');
        card.classList.remove('hidden');

        // Start love meter animation
        startLoveMeter();

        // Start typing animation
        startTypingEffect();

        // Start more intense petal rain
        startIntensePetalRain();

        // Add floating stickers
        addFloatingStickers();
    }, 800);
}

// ========================================
// Love Meter
// ========================================
function startLoveMeter() {
    let currentPercent = 0;
    const targetPercent = 999; // It's over 100%! 😂

    const interval = setInterval(() => {
        currentPercent += 15;

        if (currentPercent >= 100) {
            loveMeterFill.style.width = '100%';
        }

        if (currentPercent <= 100) {
            loveMeterFill.style.width = currentPercent + '%';
            loveMeterText.textContent = currentPercent + '%';
        } else if (currentPercent <= targetPercent) {
            loveMeterText.textContent = currentPercent + '%';
        }

        if (currentPercent >= targetPercent) {
            clearInterval(interval);
            loveMeterText.textContent = '∞%';
            loveMeterResult.textContent = '⚠️ ERROR: Love overflow! Cannot measure! 💕';
            loveMeterResult.style.animation = 'resultBounce 0.5s ease-out';
        }
    }, 50);
}

// ========================================
// Typing Effect
// ========================================
function startTypingEffect() {
    const message = typingMessages[Math.floor(Math.random() * typingMessages.length)];
    let charIndex = 0;

    const typeChar = () => {
        if (charIndex < message.length) {
            typingMessage.textContent += message[charIndex];
            charIndex++;
            setTimeout(typeChar, 80);
        }
    };

    setTimeout(typeChar, 1500);
}

// ========================================
// Rose Click Counter
// ========================================
function roseClicked() {
    roseClicks++;
    roseClickCount.textContent = roseClicks;
    roseClickCount.style.animation = 'none';
    setTimeout(() => {
        roseClickCount.style.animation = 'counterPop 0.3s ease-out';
    }, 10);

    // Create kiss emoji at rose position
    createKissEmoji();

    // Easter eggs based on click count
    if (roseClicks === 10) {
        showToast("10 kisses! You're so sweet! 😘");
    } else if (roseClicks === 50) {
        showToast("50 kisses?! My lips are tired! 💋😂");
    } else if (roseClicks === 100) {
        showToast("100 KISSES! World Record! 🏆💕");
        createHeartExplosion();
    }
}

function createKissEmoji() {
    const kiss = document.createElement('div');
    kiss.textContent = '💋';
    kiss.style.cssText = `
        position: fixed;
        left: ${Math.random() * window.innerWidth}px;
        top: ${Math.random() * (window.innerHeight / 2)}px;
        font-size: 2rem;
        pointer-events: none;
        z-index: 1000;
        animation: kissFloat 1.5s ease-out forwards;
    `;
    document.body.appendChild(kiss);
    setTimeout(() => kiss.remove(), 1500);
}

// ========================================
// Fun Facts
// ========================================
function showNextFact() {
    currentFactIndex = (currentFactIndex + 1) % funFacts.length;
    funFactText.textContent = funFacts[currentFactIndex];
    funFactText.style.animation = 'none';
    setTimeout(() => {
        funFactText.style.animation = 'factAppear 0.5s ease-out';
    }, 10);
}

// ========================================
// Compliment Generator
// ========================================
function generateCompliment() {
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    complimentText.textContent = randomCompliment;
    complimentText.style.animation = 'none';
    setTimeout(() => {
        complimentText.style.animation = 'factAppear 0.5s ease-out';
    }, 10);

    // Create some sparkles
    for (let i = 0; i < 5; i++) {
        setTimeout(() => createSparkle(
            Math.random() * window.innerWidth,
            Math.random() * window.innerHeight
        ), i * 100);
    }
}

// ========================================
// Surprise Modal
// ========================================
function showSurprise() {
    surpriseModal.classList.remove('hidden');
    createHeartExplosion();
}

function closeSurprise() {
    surpriseModal.classList.add('hidden');
    showVirtualHug();
}

// ========================================
// Virtual Hug
// ========================================
function showVirtualHug() {
    hugOverlay.classList.remove('hidden');

    setTimeout(() => {
        hugOverlay.classList.add('hidden');
    }, 2500);
}

// ========================================
// Love Wheel
// ========================================
function spinWheel() {
    const wheel = document.getElementById('loveWheel');
    const wheelResult = document.getElementById('wheelResult');

    if (wheel.classList.contains('spinning')) return;

    wheel.classList.add('spinning');
    wheelResult.textContent = '🎰 Spinning...';

    setTimeout(() => {
        wheel.classList.remove('spinning');
        const result = wheelResults[Math.floor(Math.random() * wheelResults.length)];
        wheelResult.textContent = result;
        createHeartExplosion();
    }, 2000);
}

// ========================================
// Explode Hearts (when clicking big heart)
// ========================================
function explodeHearts() {
    createHeartExplosion();
    createHeartExplosion();
}

// ========================================
// Love Quiz
// ========================================
function startLoveQuiz() {
    quizModal.classList.remove('hidden');
    currentQuizQuestion = 0;
    quizScore = 0;
    showQuizQuestion();
}

function showQuizQuestion() {
    const quizQuestion = document.getElementById('quizQuestion');
    const quizResult = document.getElementById('quizResult');
    const questionText = document.getElementById('questionText');
    const quizOptions = document.getElementById('quizOptions');

    quizQuestion.classList.remove('hidden');
    quizResult.classList.add('hidden');

    if (currentQuizQuestion >= quizQuestions.length) {
        showQuizResult();
        return;
    }

    const q = quizQuestions[currentQuizQuestion];
    questionText.textContent = `Q${currentQuizQuestion + 1}: ${q.question}`;

    quizOptions.innerHTML = '';
    q.options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'quiz-option';
        optionBtn.textContent = option;
        optionBtn.onclick = () => selectQuizAnswer(index, optionBtn);
        quizOptions.appendChild(optionBtn);
    });
}

function selectQuizAnswer(index, button) {
    const q = quizQuestions[currentQuizQuestion];
    const allButtons = document.querySelectorAll('.quiz-option');

    // Disable all buttons
    allButtons.forEach(btn => btn.style.pointerEvents = 'none');

    if (index === q.correct) {
        button.classList.add('correct');
        quizScore++;
        showToast(q.funnyResponse);
    } else {
        button.classList.add('wrong');
        allButtons[q.correct].classList.add('correct');
        showToast("Oops! But you're still cute! 😂");
    }

    setTimeout(() => {
        currentQuizQuestion++;
        showQuizQuestion();
    }, 1500);
}

function showQuizResult() {
    const quizQuestion = document.getElementById('quizQuestion');
    const quizResult = document.getElementById('quizResult');
    const resultEmoji = document.getElementById('resultEmoji');
    const resultText = document.getElementById('resultText');

    quizQuestion.classList.add('hidden');
    quizResult.classList.remove('hidden');

    const percentage = (quizScore / quizQuestions.length) * 100;

    if (percentage === 100) {
        resultEmoji.textContent = '🏆💕';
        resultText.textContent = "PERFECT SCORE! You know our love so well! 💖";
    } else if (percentage >= 60) {
        resultEmoji.textContent = '😍💖';
        resultText.textContent = "Great job! Our love is strong! 💕";
    } else {
        resultEmoji.textContent = '🥰💕';
        resultText.textContent = "It's okay! I still love you anyway! 😂❤️";
    }

    createHeartExplosion();
}

function closeQuiz() {
    quizModal.classList.add('hidden');
}

// ========================================
// Toast Notifications
// ========================================
function showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 80px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(26, 10, 16, 0.9);
        color: white;
        padding: 15px 25px;
        border-radius: 30px;
        font-size: 1rem;
        z-index: 1000;
        animation: toastAppear 2s ease-out forwards;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        border: 2px solid var(--primary-rose);
        text-align: center;
        max-width: 80%;
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}

// Add toast animation
const toastStyle = document.createElement('style');
toastStyle.textContent = `
    @keyframes toastAppear {
        0% { opacity: 0; transform: translateX(-50%) translateY(20px); }
        15% { opacity: 1; transform: translateX(-50%) translateY(0); }
        85% { opacity: 1; transform: translateX(-50%) translateY(0); }
        100% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
    }
    @keyframes kissFloat {
        0% { opacity: 1; transform: scale(1) translateY(0); }
        100% { opacity: 0; transform: scale(1.5) translateY(-100px); }
    }
`;
document.head.appendChild(toastStyle);

// ========================================
// Falling Rose Petals
// ========================================
const petalEmojis = ['🌹', '🥀', '🌸', '💮', '🏵️', '❀', '✿', '🌺'];

function createPetal() {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.textContent = petalEmojis[Math.floor(Math.random() * petalEmojis.length)];

    petal.style.left = Math.random() * 100 + '%';
    petal.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
    petal.style.animationDuration = (Math.random() * 5 + 5) + 's';
    petal.style.animationDelay = Math.random() * 2 + 's';
    petal.style.opacity = Math.random() * 0.5 + 0.5;

    petalsContainer.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 12000);
}

function startPetalRain() {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => createPetal(), i * 300);
    }
    setInterval(createPetal, 800);
}

function startIntensePetalRain() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => createPetal(), i * 80);
    }
}

function createPetalBurst() {
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const petal = document.createElement('div');
            petal.className = 'petal';
            petal.textContent = '🌹';
            petal.style.left = (40 + Math.random() * 20) + '%';
            petal.style.fontSize = (Math.random() * 2 + 1.5) + 'rem';
            petal.style.animationDuration = (Math.random() * 3 + 3) + 's';
            petal.style.opacity = 1;
            petalsContainer.appendChild(petal);

            setTimeout(() => petal.remove(), 6000);
        }, i * 40);
    }
}

// ========================================
// Floating Hearts
// ========================================
const heartEmojis = ['❤️', '💕', '💖', '💗', '💓', '💘', '💝', '♥️', '💞', '💟'];

function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (Math.random() * 1 + 0.8) + 'rem';
    heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);
}

function startFloatingHearts() {
    setInterval(createFloatingHeart, 1200);
}

function createHeartExplosion() {
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
            heart.style.left = (20 + Math.random() * 60) + '%';
            heart.style.fontSize = (Math.random() * 2 + 1) + 'rem';
            heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
            heart.style.opacity = 1;
            heartsContainer.appendChild(heart);

            setTimeout(() => heart.remove(), 6000);
        }, i * 60);
    }
}

// ========================================
// Floating Stickers
// ========================================
function addFloatingStickers() {
    const stickers = ['💕', '✨', '🌟', '💫', '🦋', '🎀', '💝', '🌈'];
    const container = document.getElementById('floatingStickers');

    for (let i = 0; i < 8; i++) {
        const sticker = document.createElement('div');
        sticker.className = 'floating-sticker';
        sticker.textContent = stickers[i];
        sticker.style.left = Math.random() * 100 + '%';
        sticker.style.top = Math.random() * 100 + '%';
        sticker.style.animationDelay = (Math.random() * 5) + 's';
        container.appendChild(sticker);
    }
}

// ========================================
// Music Control
// ========================================
function toggleMusic() {
    if (isMusicPlaying) {
        bgMusic.pause();
        musicIcon.textContent = '🎵';
    } else {
        bgMusic.play().catch(() => {
            console.log('Audio autoplay prevented');
        });
        musicIcon.textContent = '🔊';
    }
    isMusicPlaying = !isMusicPlaying;
}

// ========================================
// Sparkle Effects
// ========================================
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.9) {
        createSparkle(e.clientX, e.clientY);
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    const sparkles = ['✨', '⭐', '💫', '🌟'];
    sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
    sparkle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        z-index: 1000;
        font-size: ${Math.random() * 1 + 0.8}rem;
        animation: sparkleAway 1s ease-out forwards;
    `;

    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
}

function createSparkleExplosion(x, y) {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            createSparkle(
                x + (Math.random() - 0.5) * 100,
                y + (Math.random() - 0.5) * 100
            );
        }, i * 50);
    }
}

// Sparkle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleAway {
        0% {
            opacity: 1;
            transform: scale(1) translate(0, 0);
        }
        100% {
            opacity: 0;
            transform: scale(0) translate(${Math.random() * 50 - 25}px, ${-Math.random() * 50 - 25}px);
        }
    }
`;
document.head.appendChild(style);

// ========================================
// Touch Support
// ========================================
document.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    createSparkle(touch.clientX, touch.clientY);
});

// ========================================
// Click anywhere for hearts
// ========================================
document.addEventListener('click', (e) => {
    if (e.target.closest('.card') || e.target.closest('.surprise-content')) {
        // Create mini heart explosion at click
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.textContent = '💕';
                heart.style.cssText = `
                    position: fixed;
                    left: ${e.clientX + (Math.random() - 0.5) * 40}px;
                    top: ${e.clientY + (Math.random() - 0.5) * 40}px;
                    font-size: 1.5rem;
                    pointer-events: none;
                    z-index: 1000;
                    animation: kissFloat 1s ease-out forwards;
                `;
                document.body.appendChild(heart);
                setTimeout(() => heart.remove(), 1000);
            }, i * 100);
        }
    }
});

// ========================================
// Initialize
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    startPetalRain();
    startFloatingHearts();

    // Initial hearts
    for (let i = 0; i < 6; i++) {
        setTimeout(() => createFloatingHeart(), i * 400);
    }

    // Show first fun fact
    funFactText.textContent = funFacts[0];
});

// ========================================
// Konami Code Easter Egg
// ========================================
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiPattern.join(',')) {
        showToast("🎉 KONAMI CODE ACTIVATED! MEGA LOVE EXPLOSION! 🎉");
        for (let i = 0; i < 80; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'floating-heart';
                heart.textContent = '💖';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.fontSize = (Math.random() * 3 + 2) + 'rem';
                heart.style.animationDuration = '3s';
                heart.style.opacity = 1;
                heartsContainer.appendChild(heart);
                setTimeout(() => heart.remove(), 4000);
            }, i * 30);
        }
    }
});

// ========================================
// Secret: Type "love" for surprise
// ========================================
let secretWord = '';
document.addEventListener('keypress', (e) => {
    secretWord += e.key.toLowerCase();
    if (secretWord.includes('love')) {
        secretWord = '';
        showToast("I LOVE YOU TOO! 💕💕💕");
        createHeartExplosion();
        createHeartExplosion();
    }
    if (secretWord.length > 10) {
        secretWord = secretWord.slice(-10);
    }
});

console.log('💕 Made with infinite love! Try typing "love" for a surprise! 💕');
