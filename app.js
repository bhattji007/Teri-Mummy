// Words to cycle through
const words = [
    "colony ka free Wi-Fi",
    "gaon ki public property",
    "sabki ex, ab tak flex",
    "auto wale bhi muft le jaate",
    "\"ghar pe koi nahi\" wali",
    "discount pe discount deti hai",
    "local train ka dabba",
    "sabka plan B",
    "\"buy one get one\" offer",
    "colony ka community centre",
    "free sample wali",
    "jiski bari uski",
    "metro mein seat chhod deti",
    "sabki \"good night\" DP",
    "\"no entry\" board laga joke",
    "gali ka loudspeaker",
    "unlimited recharge pack",
    "sabki screenshot queen",
    "\"come over\" spam message",
    "bus stop ki bench",
    "gaon ki breaking news",
    "\"all you can eat\" buffet",
    "colony ka YouTube channel",
    "sabki \"seen\" wali",
    "\"ek baar try karo\" ad",
    "free delivery wali",
    "jiski cycle uski sawari",
    "sabka \"ex ki maa\"",
    "\"no rejection\" policy",
    "gali ke nalle ki rani",
    "\"limited stock\" ka ulta",
    "sabki favorite contact",
    "\"share location\" permanent",
    "colony ka ring road",
    "\"no parking\" ka mazak",
    "sabki last seen",
    "\"ghar aao na\" forward",
    "free fire mein free",
    "sabka \"side option\"",
    "\"block\" button toot gaya",
    "colony ka Google Maps tag",
    "\"demo version\" full access",
    "sabki \"plan cancelled\" reason",
    "\"ek number\" ka double meaning",
    "sabka \"ex ka reminder\"",
    "\"no thanks\" option hi nahi",
    "gali ka trending topic",
    "\"full toss\" delivery",
    "sabki \"favorite\" list top",
    "legend, tu daily proof"
];

// State
let currentIndex = 0;
let isPaused = false;
let intervalId = null;

// Get DOM elements
const animatedText = document.getElementById('animatedText');
const animatedTextContainer = document.querySelector('.animated-text-container');

// Function to update text with animation
function updateText() {
    if (isPaused) return;

    // Trigger exit animation
    animatedText.style.animation = 'none';

    // Force reflow
    void animatedText.offsetWidth;

    // Update text
    currentIndex = (currentIndex + 1) % words.length;
    animatedText.textContent = words[currentIndex];

    // Trigger enter animation
    animatedText.style.animation = 'text-slide-in 0.6s ease';
}

// Start the cycling
function startCycling() {
    intervalId = setInterval(updateText, 2500);
}

// Pause on hover
animatedTextContainer.addEventListener('mouseenter', () => {
    isPaused = true;
});

animatedTextContainer.addEventListener('mouseleave', () => {
    isPaused = false;
});

// Create particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random properties
        const size = Math.random() * 3 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 25 + 15;
        const delay = Math.random() * 8;

        // Color variation
        const colors = ['#ffffff', '#ff00ff', '#00ffff'];
        const color = colors[i % 3];

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x}%`;
        particle.style.top = `${y}%`;
        particle.style.backgroundColor = color;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;

        particlesContainer.appendChild(particle);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    startCycling();
});

// Handle visibility change (pause when tab is not active)
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        clearInterval(intervalId);
    } else {
        startCycling();
    }
});
