// Initialize Circular Iframes
function initIframes() {
    const containers = document.querySelectorAll('.iframe-wrapper');
    const iframeLinks = [
        "https://otieu.com/4/9442985",
        "https://otieu.com/4/9442985", 
        "https://otieu.com/4/9442985"
    ];
    const labels = ["Resources", "Materials", "Guides"]; // Shorter for mobile
    
    containers.forEach((container, index) => {
        // Add loading indicator
        const loading = document.createElement('div');
        loading.className = 'loading-circle';
        container.appendChild(loading);
        
        // Create iframe
        const iframe = document.createElement('iframe');
        iframe.src = iframeLinks[index];
        container.appendChild(iframe);
        
        // Add label
        const label = document.createElement('div');
        label.className = 'iframe-label';
        label.textContent = labels[index];
        container.appendChild(label);
        
        // Simulate loading
        setTimeout(() => {
            iframe.style.opacity = '1';
            loading.remove();
        }, 1000 + (index * 500));
        
        // Add click handler
        container.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add tap animation
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            // Play sound if available
            if (typeof clickSound !== 'undefined') {
                clickSound.play();
            }
            
            // Redirect after slight delay
            setTimeout(() => {
                window.open(iframeLinks[index], '_blank');
            }, 300);
        });
    });
    
    // Handle horizontal scrolling on mobile
    let startX, scrollLeft;
    const slider = document.querySelector('.iframe-container');
    
    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    
    slider.addEventListener('touchmove', (e) => {
        if (!startX) return;
        const x = e.touches[0].pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });
}

document.addEventListener('DOMContentLoaded', initIframes);