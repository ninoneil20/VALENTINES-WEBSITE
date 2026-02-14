// --- Falling Petals Engine ---
const canvas = document.getElementById('petalCanvas');
const ctx = canvas.getContext('2d');
let width, height, petals = [];

function initPetals() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    petals = Array.from({ length: 40 }, () => new Petal());
}

class Petal {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height - height;
        this.size = Math.random() * 15 + 10;
        this.speed = Math.random() * 1.5 + 0.5;
        this.angle = Math.random() * 360;
        this.spin = Math.random() * 1.5 - 0.75;
    }
    update() {
        this.y += this.speed;
        this.angle += this.spin;
        if (this.y > height) this.reset();
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.angle * Math.PI) / 180);
        ctx.fillStyle = "#ffc1cc"; 
        ctx.beginPath();
        // Draw a simple petal shape
        ctx.ellipse(0, 0, this.size, this.size / 1.5, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

function render() {
    ctx.clearRect(0, 0, width, height);
    petals.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(render);
}

// --- Random Message Logic ---
const messages = [
    "you are the most beautiful person I know, inside and out.",
    "your kindness is a gift the whole world appreciates.",
    "you deserve a day filled with as much joy as you give others.",
    "your presence is like a warm spring day in the middle of winter.",
    "you are a masterpiece that everyone is lucky to admire.",
    "may your heart always be as full as a garden in bloom.",
    "Sending you a warm smile and hoping your day is as wonderful as you are.",
    "May your day be filled with unexpected delights.",
    "Just a little reminder that you are appreciated more than you know. Have a wonderful day!",
    "Just a note to remind you that you make a difference in the world.",
    "Hope your day is full of pleasant surprises and joy.",
    "You bring so much warmth to those around you; thank you for that.",
    "Passing along a little sunshine to brighten your day!",
    "May you feel celebrated and appreciated today!",
    "Wishing you a day as lovely and kind as you are.",
    "your kindness is a gift the whole world appreciates.",
    "you deserve a day filled with as much joy as you give others.",
    "you are a masterpiece that everyone is lucky to admire.",
    "may your heart always be as full as a garden in bloom.",
    "you bring so much warmth to those around you.",
    "the world needs more people like you."
];

const generateBtn = document.getElementById('generateBtn');
const resultContainer = document.getElementById('resultContainer');
const displayName = document.getElementById('displayName');
const randomNote = document.getElementById('randomNote');
const userNameInput = document.getElementById('userName');

generateBtn.addEventListener('click', () => {
    const name = userNameInput.value.trim();
    
    if (!name) {
        alert("Please enter your name first! ✨");
        return;
    }

    const randomIndex = Math.floor(Math.random() * messages.length);
    displayName.textContent = name;
    randomNote.textContent = messages[randomIndex];
    
    resultContainer.classList.remove('hidden');
    
    // Smooth scroll to the result
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// Initialization
window.addEventListener('resize', initPetals);
initPetals();
render();

