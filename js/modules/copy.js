// Copy functionality module
export const initCopyFunctionality = () => {
    const copyableElements = document.querySelectorAll('.copyable');
    
    copyableElements.forEach(element => {
        element.addEventListener('click', async (e) => {
            e.preventDefault();
            
            const textToCopy = element.getAttribute('data-text');
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            
            // For mobile, handle phone numbers differently
            if (textToCopy.includes('+') && isMobile) {
                // On mobile, open phone dialer
                window.location.href = `tel:${textToCopy}`;
                return;
            }
            
            try {
                // Copy to clipboard
                await navigator.clipboard.writeText(textToCopy);
                
                // Visual feedback
                element.classList.add('copied');
                
                // Show success notification
                showCopyNotification('Copied to clipboard!', 'success');
                
                // Remove copied class after animation
                setTimeout(() => {
                    element.classList.remove('copied');
                }, 600);
                
            } catch (err) {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = textToCopy;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                
                // Visual feedback
                element.classList.add('copied');
                showCopyNotification('Copied to clipboard!', 'success');
                
                setTimeout(() => {
                    element.classList.remove('copied');
                }, 600);
            }
        });
    });
    
    // Show copy notification
    function showCopyNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `copy-notification copy-notification-${type}`;
        notification.textContent = message;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 0.8rem 1.2rem;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 250px;
            font-size: 0.9rem;
        `;
        
        // Set background color based on type
        if (type === 'success') {
            notification.style.background = 'linear-gradient(135deg, #48bb78, #38a169)';
        } else if (type === 'error') {
            notification.style.background = 'linear-gradient(135deg, #f56565, #e53e3e)';
        } else {
            notification.style.background = 'linear-gradient(135deg, #4299e1, #3182ce)';
        }
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
    
    console.log('📋 Copy functionality initialized');
}; 