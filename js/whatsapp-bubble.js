// whatsapp-bubble-enhanced.js
(function() {
    // Create style element with enhanced animations
    const style = document.createElement('style');
    style.textContent = `
        .whatsapp-bubble-enhanced {
            position: fixed;
            bottom: 30px;
            left: 30px;
            width: 220px;
            height: 70px;
            background: linear-gradient(45deg, #25D366, #128C7E, #075E54);
            background-size: 300% 300%;
            border-radius: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
            cursor: pointer;
            z-index: 9999;
            animation: bounce 1.5s infinite, colorPulse 4s infinite alternate;
            transition: all 0.3s ease;
            overflow: hidden;
            padding: 0 20px;
            font-family: 'Arial', sans-serif;
        }

        .whatsapp-bubble-enhanced:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
        }

        .whatsapp-bubble-enhanced .content {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .whatsapp-bubble-enhanced img {
            width: 40px;
            height: 40px;
            filter: drop-shadow(0 2px 3px rgba(0,0,0,0.3));
            animation: pulse 2s infinite;
        }

        .whatsapp-bubble-enhanced .text {
            color: white;
            font-weight: bold;
            font-size: 16px;
            text-shadow: 0 1px 3px rgba(0,0,0,0.3);
            animation: textGlow 2s infinite alternate;
        }

        .whatsapp-bubble-enhanced .notification {
            position: absolute;
            top: -5px;
            right: -5px;
            background-color: #FF0000;
            color: white;
            border-radius: 50%;
            width: 24px;
            height: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 12px;
            font-weight: bold;
            animation: pulse 1.5s infinite;
        }

        /* Animations */
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-25px);
            }
            60% {
                transform: translateY(-15px);
            }
        }

        @keyframes colorPulse {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
        }

        @keyframes pulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.1);
            }
            100% {
                transform: scale(1);
            }
        }

        @keyframes textGlow {
            0% {
                text-shadow: 0 0 5px rgba(255,255,255,0.5);
            }
            100% {
                text-shadow: 0 0 15px rgba(255,255,255,0.9);
            }
        }

        /* Ripple effect */
        .whatsapp-bubble-enhanced .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.7);
            transform: scale(0);
            animation: ripple 1s linear;
            pointer-events: none;
        }

        @keyframes ripple {
            to {
                transform: scale(2.5);
                opacity: 0;
            }
        }

        @media (max-width: 768px) {
            .whatsapp-bubble-enhanced {
                width: 180px;
                height: 60px;
                bottom: 20px;
                left: 20px;
            }
            
            .whatsapp-bubble-enhanced .text {
                font-size: 14px;
            }
            
            .whatsapp-bubble-enhanced img {
                width: 35px;
                height: 35px;
            }
        }
    `;
    document.head.appendChild(style);

    // Create bubble element
    const bubble = document.createElement('div');
    bubble.className = 'whatsapp-bubble-enhanced';
    bubble.id = 'whatsappBubbleEnhanced';
    
    const content = document.createElement('div');
    content.className = 'content';
    
    const img = document.createElement('img');
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg';
    img.alt = 'WhatsApp';
    
    const text = document.createElement('div');
    text.className = 'text';
    text.textContent = 'Join the info group';
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = '!';
    
    content.appendChild(img);
    content.appendChild(text);
    bubble.appendChild(content);
    bubble.appendChild(notification);
    document.body.appendChild(bubble);

    // Add ripple effect
    bubble.addEventListener('click', function(e) {
        if (!isDragging) {
            // Create ripple element
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            
            // Position the ripple
            const rect = bubble.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = size + 'px';
            ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size/2) + 'px';
            
            bubble.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 1000);
            
            // Open WhatsApp after slight delay for better UX
            setTimeout(() => {
                window.open('https://chat.whatsapp.com/DRHb03IWfEvGHgA8h36Shg', '_blank');
                notification.style.display = 'none';
            }, 300);
        }
    });

    // Draggable functionality
    let isDragging = false;
    let offsetX, offsetY;

    bubble.addEventListener('mousedown', function(e) {
        isDragging = true;
        offsetX = e.clientX - bubble.getBoundingClientRect().left;
        offsetY = e.clientY - bubble.getBoundingClientRect().top;
        bubble.style.animation = 'none';
        e.stopPropagation();
    });

    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;
        
        const maxX = window.innerWidth - bubble.offsetWidth;
        const maxY = window.innerHeight - bubble.offsetHeight;
        
        bubble.style.left = Math.min(Math.max(0, x), maxX) + 'px';
        bubble.style.top = Math.min(Math.max(0, y), maxY) + 'px';
        bubble.style.bottom = 'auto';
    });

    document.addEventListener('mouseup', function() {
        if (isDragging) {
            isDragging = false;
            bubble.style.animation = 'bounce 1.5s infinite, colorPulse 4s infinite alternate';
        }
    });

    // Touch events for mobile
    bubble.addEventListener('touchstart', function(e) {
        isDragging = true;
        const touch = e.touches[0];
        offsetX = touch.clientX - bubble.getBoundingClientRect().left;
        offsetY = touch.clientY - bubble.getBoundingClientRect().top;
        bubble.style.animation = 'none';
        e.preventDefault();
    });

    document.addEventListener('touchmove', function(e) {
        if (!isDragging) return;
        const touch = e.touches[0];
        
        const x = touch.clientX - offsetX;
        const y = touch.clientY - offsetY;
        
        const maxX = window.innerWidth - bubble.offsetWidth;
        const maxY = window.innerHeight - bubble.offsetHeight;
        
        bubble.style.left = Math.min(Math.max(0, x), maxX) + 'px';
        bubble.style.top = Math.min(Math.max(0, y), maxY) + 'px';
        bubble.style.bottom = 'auto';
        e.preventDefault();
    });

    document.addEventListener('touchend', function() {
        if (isDragging) {
            isDragging = false;
            bubble.style.animation = 'bounce 1.5s infinite, colorPulse 4s infinite alternate';
        }
    });

    // Show notification by default
    notification.style.display = 'flex';
})();