// whatsapp-bubble-premium.js
(function() {
    // Create style element with premium animations
    const style = document.createElement('style');
    style.textContent = `
        .whatsapp-bubble-premium {
            position: fixed;
            top: 100px;
            right: 30px;
            width: 260px;
            background: linear-gradient(145deg, #075E54, #128C7E, #25D366);
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
            cursor: pointer;
            z-index: 9999;
            overflow: hidden;
            font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
            transform: translateY(0);
            opacity: 1;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            animation: slideIn 0.6s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
        }

        .whatsapp-bubble-premium::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: rgba(255, 255, 255, 0.3);
        }

        .whatsapp-bubble-premium:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
        }

        .whatsapp-bubble-premium .bubble-header {
            display: flex;
            align-items: center;
            padding: 16px 16px 12px;
            color: white;
        }

        .whatsapp-bubble-premium .bubble-header img {
            width: 24px;
            height: 24px;
            margin-right: 12px;
            filter: drop-shadow(0 1px 2px rgba(0,0,0,0.15));
        }

        .whatsapp-bubble-premium .bubble-header .title {
            font-size: 15px;
            font-weight: 600;
            flex: 1;
        }

        .whatsapp-bubble-premium .bubble-header .timer {
            background: rgba(255, 255, 255, 0.15);
            border-radius: 16px;
            padding: 4px 10px;
            font-size: 12px;
            font-weight: 600;
            min-width: 36px;
            text-align: center;
            transition: all 0.3s ease;
        }

        .whatsapp-bubble-premium .bubble-header .timer:hover {
            background: rgba(255, 255, 255, 0.25);
        }

        .whatsapp-bubble-premium .bubble-body {
            padding: 0 16px 16px;
            color: rgba(255, 255, 255, 0.9);
            font-size: 14px;
            line-height: 1.5;
            display: flex;
            align-items: center;
        }

        .whatsapp-bubble-premium .bubble-body .icon {
            margin-right: 12px;
            font-size: 20px;
            animation: gentlePulse 2s infinite;
        }

        /* Animations */
        @keyframes slideIn {
            0% {
                transform: translateX(100%) translateY(0);
                opacity: 0;
            }
            100% {
                transform: translateX(0) translateY(0);
                opacity: 1;
            }
        }

        @keyframes disintegrate {
            0% {
                transform: translateY(0) scale(1);
                opacity: 1;
            }
            30% {
                transform: translateY(-10px) scale(0.95);
                opacity: 0.8;
            }
            100% {
                transform: translateY(20px) scale(0.9);
                opacity: 0;
                display: none;
            }
        }

        @keyframes gentlePulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.1);
            }
        }

        @keyframes countdownPulse {
            0%, 100% {
                transform: scale(1);
                background-color: rgba(255, 255, 255, 0.15);
            }
            50% {
                transform: scale(1.05);
                background-color: rgba(255, 255, 255, 0.25);
            }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
            .whatsapp-bubble-premium {
                top: 80px;
                right: 15px;
                width: 220px;
            }
            
            .whatsapp-bubble-premium .bubble-header {
                padding: 14px 14px 10px;
            }
            
            .whatsapp-bubble-premium .bubble-body {
                font-size: 13px;
                padding: 0 14px 14px;
            }
        }
    `;
    document.head.appendChild(style);

    // Create bubble element
    const bubble = document.createElement('div');
    bubble.className = 'whatsapp-bubble-premium';
    bubble.id = 'whatsappBubblePremium';
    
    // Header section
    const header = document.createElement('div');
    header.className = 'bubble-header';
    
    const headerImg = document.createElement('img');
    headerImg.src = 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg';
    headerImg.alt = 'WhatsApp';
    
    const headerTitle = document.createElement('div');
    headerTitle.className = 'title';
    headerTitle.textContent = 'Join Our Community';
    
    const timer = document.createElement('div');
    timer.className = 'timer';
    timer.id = 'bubbleTimer';
    timer.textContent = '09';
    timer.title = 'Close in 9 seconds';
    
    header.appendChild(headerImg);
    header.appendChild(headerTitle);
    header.appendChild(timer);
    
    // Body section
    const body = document.createElement('div');
    body.className = 'bubble-body';
    
    const bodyIcon = document.createElement('div');
    bodyIcon.className = 'icon';
    bodyIcon.innerHTML = '💬';
    
    const bodyText = document.createElement('div');
    bodyText.className = 'text';
    bodyText.textContent = 'Get exclusive updates in our WhatsApp group';
    
    body.appendChild(bodyIcon);
    body.appendChild(bodyText);
    
    // Assemble bubble
    bubble.appendChild(header);
    bubble.appendChild(body);
    document.body.appendChild(bubble);

    // Countdown timer
    let secondsLeft = 9;
    const timerInterval = setInterval(() => {
        secondsLeft--;
        timer.textContent = secondsLeft.toString().padStart(2, '0');
        timer.title = `Close in ${secondsLeft} second${secondsLeft !== 1 ? 's' : ''}`;
        
        // Pulsing animation when below 5 seconds
        if (secondsLeft <= 5) {
            timer.style.animation = 'countdownPulse 1s infinite';
        }
        
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            closeBubble();
        }
    }, 1000);

    // Elegant close animation
    function closeBubble() {
        bubble.style.animation = 'disintegrate 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards';
        setTimeout(() => {
            bubble.remove();
        }, 500);
    }

    // Click handler
    bubble.addEventListener('click', function(e) {
        if (e.target === timer) return;
        
        clearInterval(timerInterval);
        
        // Ripple effect
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
        ripple.style.transform = 'scale(0)';
        ripple.style.pointerEvents = 'none';
        
        const rect = bubble.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height) * 1.5;
        ripple.style.width = size + 'px';
        ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size/2) + 'px';
        
        bubble.appendChild(ripple);
        
        // Ripple animation
        const startTime = Date.now();
        const duration = 600;
        
        const animateRipple = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const scale = progress * 2;
            const opacity = 1 - progress;
            
            ripple.style.transform = `scale(${scale})`;
            ripple.style.opacity = opacity;
            
            if (progress < 1) {
                requestAnimationFrame(animateRipple);
            } else {
                ripple.remove();
            }
        };
        
        requestAnimationFrame(animateRipple);
        
        // Open WhatsApp after slight delay
        setTimeout(() => {
            window.open('https://chat.whatsapp.com/DRHb03IWfEvGHgA8h36Shg', '_blank');
            closeBubble();
        }, 300);
    });

    // Manual close on timer click
    timer.addEventListener('click', function(e) {
        e.stopPropagation();
        clearInterval(timerInterval);
        closeBubble();
    });
})();