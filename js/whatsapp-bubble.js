// whatsapp-bubble-ultimate.js
(function() {
    // Create style element with premium animations
    const style = document.createElement('style');
    style.textContent = `
        .wa-bubble {
            position: fixed;
            top: 100px;
            right: 30px;
            width: 70px;
            height: 70px;
            background: radial-gradient(circle at 65% 35%, #25D366, #128C7E);
            border-radius: 50%;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
            cursor: pointer;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transform: scale(1);
            opacity: 1;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            animation: 
                bubble-enter 0.6s cubic-bezier(0.22, 0.61, 0.36, 1),
                bubble-float 4s ease-in-out infinite;
            overflow: hidden;
        }

        .wa-bubble:hover {
            transform: scale(1.1);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
        }

        .wa-bubble:hover .wa-icon {
            animation: icon-bounce 0.6s;
        }

        .wa-bubble:hover .wa-tooltip {
            opacity: 1;
            transform: translateX(0);
        }

        .wa-icon {
            width: 32px;
            height: 32px;
            filter: drop-shadow(0 2px 3px rgba(0,0,0,0.2));
            transition: transform 0.3s ease;
        }

        .wa-timer {
            position: absolute;
            top: -5px;
            right: -5px;
            background: #FF3B30;
            color: white;
            border-radius: 50%;
            width: 24px;
            height: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 11px;
            font-weight: 600;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            animation: timer-pulse 1.5s infinite;
        }

        .wa-tooltip {
            position: absolute;
            right: 80px;
            background: rgba(0,0,0,0.8);
            color: white;
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 13px;
            font-weight: 500;
            white-space: nowrap;
            pointer-events: none;
            opacity: 0;
            transform: translateX(10px);
            transition: all 0.3s ease;
        }

        .wa-tooltip::after {
            content: '';
            position: absolute;
            right: -5px;
            top: 50%;
            transform: translateY(-50%);
            border-width: 5px 0 5px 5px;
            border-style: solid;
            border-color: transparent transparent transparent rgba(0,0,0,0.8);
        }

        /* Animations */
        @keyframes bubble-enter {
            0% {
                opacity: 0;
                transform: translateX(30px) scale(0.8);
            }
            100% {
                opacity: 1;
                transform: translateX(0) scale(1);
            }
        }

        @keyframes bubble-float {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-10px);
            }
        }

        @keyframes bubble-exit {
            0% {
                opacity: 1;
                transform: scale(1);
            }
            100% {
                opacity: 0;
                transform: scale(0.8);
                display: none;
            }
        }

        @keyframes icon-bounce {
            0%, 100% {
                transform: translateY(0);
            }
            25% {
                transform: translateY(-5px);
            }
            50% {
                transform: translateY(0);
            }
            75% {
                transform: translateY(-3px);
            }
        }

        @keyframes timer-pulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.15);
            }
        }

        @keyframes text-fade {
            0% { opacity: 0; transform: translateY(5px); }
            100% { opacity: 1; transform: translateY(0); }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
            .wa-bubble {
                top: 80px;
                right: 20px;
                width: 60px;
                height: 60px;
            }
            
            .wa-icon {
                width: 28px;
                height: 28px;
            }
            
            .wa-timer {
                width: 20px;
                height: 20px;
                font-size: 10px;
            }
            
            .wa-tooltip {
                display: none;
            }
        }
    `;
    document.head.appendChild(style);

    // Create bubble element
    const bubble = document.createElement('div');
    bubble.className = 'wa-bubble';
    
    // WhatsApp icon
    const icon = document.createElement('img');
    icon.className = 'wa-icon';
    icon.src = 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg';
    icon.alt = 'WhatsApp';
    
    // Countdown timer
    const timer = document.createElement('div');
    timer.className = 'wa-timer';
    timer.textContent = '9';
    
    // Tooltip text
    const tooltip = document.createElement('div');
    tooltip.className = 'wa-tooltip';
    tooltip.textContent = 'Join our WhatsApp group';
    tooltip.style.animation = 'text-fade 0.4s ease-out';
    
    bubble.appendChild(icon);
    bubble.appendChild(timer);
    bubble.appendChild(tooltip);
    document.body.appendChild(bubble);

    // Countdown timer
    let secondsLeft = 9;
    const timerInterval = setInterval(() => {
        secondsLeft--;
        timer.textContent = secondsLeft.toString();
        
        // Intensify animation when time is running out
        if (secondsLeft <= 3) {
            timer.style.animation = 'timer-pulse 0.8s infinite';
            timer.style.backgroundColor = '#ff1a1a';
        }
        
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            closeBubble();
        }
    }, 1000);

    // Elegant close animation
    function closeBubble() {
        bubble.style.animation = 'bubble-exit 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards';
        setTimeout(() => {
            bubble.remove();
        }, 400);
    }

    // Click handler with ripple effect
    bubble.addEventListener('click', function(e) {
        if (e.target === timer) return;
        
        clearInterval(timerInterval);
        
        // Create ripple effect
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)';
        ripple.style.transform = 'scale(0)';
        ripple.style.pointerEvents = 'none';
        ripple.style.width = '100%';
        ripple.style.height = '100%';
        ripple.style.top = '0';
        ripple.style.left = '0';
        
        bubble.appendChild(ripple);
        
        // Animate ripple
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