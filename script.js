// LINE CTA Click Handler
function handleLineClick() {
    // TODO: 実際のLINE URLまたは友達追加リンクに置き換えてください
    // 例: window.open('https://line.me/R/ti/p/@your-line-id', '_blank');
    
    // 現在はアラートで代替（実装時は削除してください）
    alert('LINEでのお問い合わせ機能を実装してください。\n\n実装方法：\n1. LINE公式アカウントを作成\n2. 友達追加URLを取得\n3. このアラートをwindow.open()に置き換え');
    
    // Google Analytics トラッキング（必要に応じて）
    if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
            'event_category': 'CTA',
            'event_label': 'LINE Contact'
        });
    }
}

// FAQ Toggle Functionality
function toggleFaq(element) {
    const faqItem = element.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const icon = element.querySelector('.faq-icon');
    
    // Close all other FAQ items
    const allFaqItems = document.querySelectorAll('.faq-item');
    allFaqItems.forEach(item => {
        if (item !== faqItem) {
            const otherAnswer = item.querySelector('.faq-answer');
            const otherQuestion = item.querySelector('.faq-question');
            const otherIcon = item.querySelector('.faq-icon');
            
            otherAnswer.classList.remove('active');
            otherQuestion.classList.remove('active');
            otherIcon.textContent = '+';
        }
    });
    
    // Toggle current FAQ item
    const isActive = answer.classList.contains('active');
    
    if (isActive) {
        answer.classList.remove('active');
        element.classList.remove('active');
        icon.textContent = '+';
    } else {
        answer.classList.add('active');
        element.classList.add('active');
        icon.textContent = '−';
    }
}

// Smooth Scrolling for Internal Links (if any are added)
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links with # in href
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Page Load Performance Optimization
document.addEventListener('DOMContentLoaded', function() {
    // Lazy load images (if needed for more images)
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        if (img.dataset.src) {
            imageObserver.observe(img);
        }
    });
});

// Simple Form Validation (if contact forms are added later)
function validateForm(formElement) {
    const requiredFields = formElement.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('error');
            isValid = false;
        } else {
            field.classList.remove('error');
        }
    });
    
    return isValid;
}

// Utility function for tracking events (Google Analytics, etc.)
function trackEvent(category, action, label) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
    
    // Facebook Pixel (if implemented)
    if (typeof fbq !== 'undefined') {
        fbq('track', action, {
            content_category: category,
            content_name: label
        });
    }
    
    // Console log for development
    console.log('Event tracked:', { category, action, label });
}

// Button click tracking
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('line-btn')) {
        trackEvent('CTA', 'click', 'LINE Contact Button');
    }
});

// Scroll tracking for engagement
let scrollTracked = {
    25: false,
    50: false,
    75: false,
    100: false
};

window.addEventListener('scroll', function() {
    const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );
    
    // Track scroll milestones
    Object.keys(scrollTracked).forEach(milestone => {
        if (scrollPercent >= milestone && !scrollTracked[milestone]) {
            scrollTracked[milestone] = true;
            trackEvent('Engagement', 'scroll', `${milestone}% of page`);
        }
    });
});

// Mobile-specific optimizations
if (window.innerWidth <= 768) {
    // Add touch-friendly improvements for mobile
    document.body.classList.add('mobile');
    
    // Prevent zoom on input focus (if forms are added)
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            const viewport = document.querySelector('meta[name="viewport"]');
            viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0');
        });
        
        input.addEventListener('blur', function() {
            const viewport = document.querySelector('meta[name="viewport"]');
            viewport.setAttribute('content', 'width=device-width, initial-scale=1');
        });
    });
}