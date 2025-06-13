// DOM elements
const bookCover = document.getElementById('bookCover');
const quizBook = document.getElementById('quizBook');
const resultContainer = document.getElementById('resultContainer');
const startBtn = document.getElementById('startBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const restartBtn = document.getElementById('restartBtn');
const questionPage = document.getElementById('questionPage');
const questionNumber = document.getElementById('questionNumber');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const questionNav = document.getElementById('questionNav');
const timerElement = document.querySelector('#headerTimer span');
const progressBar = document.getElementById('progressBar');
const headerProgress = document.getElementById('headerProgress');
const scoreElement = document.getElementById('score');
const resultMessage = document.getElementById('resultMessage');
const summaryElement = document.getElementById('summary');
const themeToggle = document.getElementById('themeToggle');
const headerTimer = document.getElementById('headerTimer');
const settingsModal = document.getElementById('settingsModal');
const closeModal = document.getElementById('closeModal');
const saveSettings = document.getElementById('saveSettings');
const timeLimitInput = document.getElementById('timeLimit');
const startTooltip = document.getElementById('startTooltip');
const timerSound = document.getElementById('timerSound');
const clickSound = document.getElementById('clickSound');
const successSound = document.getElementById('successSound');
const errorSound = document.getElementById('errorSound');

// Quiz variables
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let timeLeft = 30 * 60; // 30 minutes in seconds by default
let timerInterval;
let testStarted = false;
let selectedQuestions = [];
let isFlipping = false;
let timerPaused = false;
let hasVisitedBefore = localStorage.getItem('hasVisitedBefore') === 'true';

// Initialize the quiz
function initQuiz() {
    // Select 70 random questions
    selectedQuestions = [...questions].sort(() => 0.5 - Math.random()).slice(0, 70);
    
    // Initialize user answers array
    userAnswers = new Array(selectedQuestions.length).fill(null);
    
    // Check if user has visited before
    if (!hasVisitedBefore) {
        showTooltip(startBtn, startTooltip);
        localStorage.setItem('hasVisitedBefore', 'true');
    }
}

// Show tooltip
function showTooltip(element, tooltip) {
    const rect = element.getBoundingClientRect();
    tooltip.style.display = 'block';
    tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
    tooltip.style.left = `${rect.left + rect.width/2 - tooltip.offsetWidth/2}px`;
    
    setTimeout(() => {
        tooltip.style.display = 'none';
    }, 5000);
}

// Theme toggle
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    }
    playSound('click');
}

// Play sound effects
function playSound(type) {
    try {
        switch(type) {
            case 'click':
                clickSound.currentTime = 0;
                clickSound.play();
                break;
            case 'timer':
                timerSound.currentTime = 0;
                timerSound.play();
                break;
            case 'success':
                successSound.currentTime = 0;
                successSound.play();
                break;
            case 'error':
                errorSound.currentTime = 0;
                errorSound.play();
                break;
        }
    } catch(e) {
        console.log('Sound error:', e);
    }
}

// Vibrate device
function vibrateDevice() {
    if ('vibrate' in navigator) {
        navigator.vibrate([100, 50, 100]);
    }
}

// Start the quiz with book open animation
function startQuiz() {
    vibrateDevice();
    playSound('click');
    
    // Start book open animation
    bookCover.classList.add('book-open');
    
    // After animation completes, show quiz book
    setTimeout(() => {
        bookCover.style.display = 'none';
        quizBook.classList.add('active');
        
        // Start timer with default or saved value
        const savedTimeLimit = localStorage.getItem('timeLimit');
        timeLeft = (savedTimeLimit || 30) * 60;
        timeLimitInput.value = savedTimeLimit || 30;
        updateTimerDisplay();
        
        // Start timer
        startTimer();
        testStarted = true;
        
        // Display first question
        showQuestion();
        createQuestionNavigation();
    }, 1500);
}

// Create question navigation
function createQuestionNavigation() {
    questionNav.innerHTML = '';
    selectedQuestions.forEach((_, index) => {
        const navItem = document.createElement('div');
        navItem.classList.add('question-nav-item');
        navItem.textContent = index + 1;
        navItem.addEventListener('click', () => navigateToQuestion(index));
        
        if (index === currentQuestionIndex) {
            navItem.classList.add('current');
        }
        
        questionNav.appendChild(navItem);
    });
}

// Navigate to specific question
function navigateToQuestion(index) {
    if (index >= 0 && index < selectedQuestions.length && !isFlipping) {
        currentQuestionIndex = index;
        animateQuestionTransition();
        updateQuestionNavigation();
    }
}

// Update question navigation highlights
function updateQuestionNavigation() {
    const navItems = document.querySelectorAll('.question-nav-item');
    navItems.forEach((item, index) => {
        item.classList.remove('current');
        if (index === currentQuestionIndex) {
            item.classList.add('current');
        }
        if (userAnswers[index] !== null) {
            item.classList.add('answered');
        } else {
            item.classList.remove('answered');
        }
    });
}

// Timer control
function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (!timerPaused) {
            timeLeft--;
            updateTimerDisplay();
            
            // Play warning sound when time is running low
            if (timeLeft === 60) {
                playSound('timer');
                headerTimer.classList.add('danger');
            } else if (timeLeft === 5 * 60) {
                playSound('timer');
                headerTimer.classList.add('warning');
            }
            
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                submitQuiz();
            }
        }
    }, 1000);
}

// Update timer display
function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const timeString = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    // Update timer
    timerElement.textContent = timeString;
}

// Show current question with flip animation
function showQuestion() {
    const question = selectedQuestions[currentQuestionIndex];
    
    // Update question number
    questionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${selectedQuestions.length}`;
    
    // Update progress bars
    const progressPercent = ((currentQuestionIndex + 1) / selectedQuestions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
    headerProgress.style.width = `${progressPercent}%`;
    
    // Set question text
    questionElement.textContent = question.question;
    
    // Clear previous options
    optionsElement.innerHTML = '';
    
    // Add options
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        
        // Check if this option was previously selected
        if (userAnswers[currentQuestionIndex] === index) {
            optionElement.classList.add('selected');
        }
        
        optionElement.innerHTML = `
            <span class="checkmark"></span>
            <label>${option}</label>
        `;
        
        optionElement.addEventListener('click', () => selectOption(index));
        optionsElement.appendChild(optionElement);
    });
    
    // Update navigation buttons
    prevBtn.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === selectedQuestions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'flex';
    } else {
        nextBtn.style.display = 'flex';
        submitBtn.style.display = 'none';
    }
    
    // Update question navigation
    updateQuestionNavigation();
}

// Select an option
function selectOption(optionIndex) {
    playSound('click');
    
    // Remove selected class from all options
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Add selected class to clicked option
    document.querySelectorAll('.option')[optionIndex].classList.add('selected');
    
    // Save user's answer
    userAnswers[currentQuestionIndex] = optionIndex;
    
    // Update question navigation
    updateQuestionNavigation();
}

// Navigate to previous question
function prevQuestion() {
    if (currentQuestionIndex > 0 && !isFlipping) {
        currentQuestionIndex--;
        animateQuestionTransition();
    }
}

// Navigate to next question
function nextQuestion() {
    if (currentQuestionIndex < selectedQuestions.length - 1 && !isFlipping) {
        currentQuestionIndex++;
        animateQuestionTransition();
    }
}

// Animate question transition with book flip effect
function animateQuestionTransition() {
    playSound('click');
    isFlipping = true;
    timerPaused = true;
    questionPage.classList.add('flipping');
    
    setTimeout(() => {
        showQuestion();
        questionPage.classList.remove('flipping');
        isFlipping = false;
        timerPaused = false;
    }, 1200);
}

// Submit the quiz
function submitQuiz() {
    vibrateDevice();
    playSound('success');
    clearInterval(timerInterval);
    testStarted = false;
    
    // Calculate score
    score = 0;
    selectedQuestions.forEach((question, index) => {
        if (userAnswers[index] !== null && 
            question.options[userAnswers[index]] === question.answer) {
            score++;
        }
    });
    
    // Display results
    quizBook.classList.remove('active');
    resultContainer.style.display = 'block';
    
    scoreElement.textContent = `${score}/${selectedQuestions.length}`;
    
    // Set result message based on score
    const percentage = (score / selectedQuestions.length) * 100;
    if (percentage >= 80) {
        resultMessage.textContent = "Excellent performance! You've demonstrated a comprehensive understanding of sociology concepts.";
    } else if (percentage >= 60) {
        resultMessage.textContent = "Good work! You have a solid grasp of sociology principles with some areas for improvement.";
    } else if (percentage >= 40) {
        resultMessage.textContent = "Fair attempt. Review the sociology concepts to strengthen your understanding.";
    } else {
        resultMessage.textContent = "Keep studying! Focus on the core sociology principles and try again.";
    }
    
    // Show question summary
    showSummary();
}

// Show question summary
function showSummary() {
    summaryElement.innerHTML = '';
    
    selectedQuestions.forEach((question, index) => {
        const summaryItem = document.createElement('div');
        summaryItem.classList.add('summary-item');
        
        const userAnswerIndex = userAnswers[index];
        const isCorrect = userAnswerIndex !== null && 
                         question.options[userAnswerIndex] === question.answer;
        
        if (isCorrect) {
            summaryItem.classList.add('correct');
        } else {
            summaryItem.classList.add('incorrect');
        }
        
        let userAnswerText = "Not answered";
        if (userAnswerIndex !== null) {
            userAnswerText = question.options[userAnswerIndex];
        }
        
        summaryItem.innerHTML = `
            <div class="question-text">Q${index + 1}: ${question.question}</div>
            ${!isCorrect ? `<div>Your answer: <span class="user-answer">${userAnswerText}</span></div>` : ''}
            ${!isCorrect ? `<div>Correct answer: <span class="correct-answer">${question.answer}</span></div>` : ''}
        `;
        
        summaryElement.appendChild(summaryItem);
    });
}

// Restart the quiz
function restartQuiz() {
    vibrateDevice();
    playSound('click');
    
    // Reset variables
    currentQuestionIndex = 0;
    userAnswers = new Array(selectedQuestions.length).fill(null);
    score = 0;
    
    // Select new random questions
    selectedQuestions = [...questions].sort(() => 0.5 - Math.random()).slice(0, 70);
    userAnswers = new Array(selectedQuestions.length).fill(null);
    
    // Reset timer
    timeLeft = (localStorage.getItem('timeLimit') || 30) * 60;
    updateTimerDisplay();
    headerTimer.classList.remove('warning', 'danger');
    
    // Show book cover
    resultContainer.style.display = 'none';
    bookCover.style.display = 'flex';
    bookCover.style.opacity = '1';
    bookCover.style.transform = 'scale(1)';
    bookCover.classList.remove('book-open');
    quizBook.classList.remove('active');
}

// Open settings modal
function openSettings() {
    playSound('click');
    settingsModal.classList.add('active');
}

// Close settings modal
function closeSettings() {
    playSound('click');
    settingsModal.classList.remove('active');
}

// Save timer settings
function saveTimerSettings() {
    playSound('click');
    const newTimeLimit = parseInt(timeLimitInput.value) || 30;
    localStorage.setItem('timeLimit', newTimeLimit);
    
    // Update timer if test is in progress
    if (testStarted) {
        const currentTimeMinutes = Math.floor(timeLeft / 60);
        if (confirm(`Change time limit from ${currentTimeMinutes} minutes to ${newTimeLimit} minutes?`)) {
            timeLeft = newTimeLimit * 60;
            updateTimerDisplay();
            headerTimer.classList.remove('warning', 'danger');
        }
    }
    
    closeSettings();
}

// Check for saved theme preference
function checkThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

// Event listeners
startBtn.addEventListener('click', startQuiz);
prevBtn.addEventListener('click', prevQuestion);
nextBtn.addEventListener('click', nextQuestion);
submitBtn.addEventListener('click', submitQuiz);
restartBtn.addEventListener('click', restartQuiz);
themeToggle.addEventListener('click', toggleTheme);
headerTimer.addEventListener('click', openSettings);
closeModal.addEventListener('click', closeSettings);
saveSettings.addEventListener('click', saveTimerSettings);

// Close modal when clicking outside
settingsModal.addEventListener('click', (e) => {
    if (e.target === settingsModal) {
        closeSettings();
    }
});

// Prevent losing answers on page refresh
window.addEventListener('beforeunload', (e) => {
    if (testStarted) {
        e.preventDefault();
        e.returnValue = 'Are you sure you want to leave? Your test progress will be lost.';
    }
});

// Initialize
checkThemePreference();
initQuiz();