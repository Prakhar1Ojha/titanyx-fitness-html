document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('open');
        });
        
        // Close menu when clicking navigation links
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('open');
            });
        });
    }

    // 2. Sticky Header & Scrollspy
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section, main > section');
    const navLinks = document.querySelectorAll('nav a, #quick-links nav a');
    
    window.addEventListener('scroll', () => {
        // Sticky Header class
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Scrollspy active state
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120; // offset for sticky header
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id') || '';
            }
        });
        
        if (currentSectionId) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });

    // 3. Toast Notifications
    const createToast = (message, iconClass = 'fas fa-check-circle') => {
        // Remove existing toast if present
        const oldToast = document.querySelector('.toast');
        if (oldToast) oldToast.remove();
        
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `
            <i class="${iconClass}"></i>
            <span>${message}</span>
        `;
        document.body.appendChild(toast);
        
        // Force reflow
        toast.offsetHeight;
        
        // Show toast
        toast.classList.add('show');
        
        // Hide and remove after 4 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 4000);
    };

    // 4. Contact Form Handler
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const fullname = document.getElementById('fullname').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const membership = document.getElementById('membership').value;
            const goal = document.getElementById('goal').value;
            
            if (!fullname || !email || !phone) {
                createToast('Please fill in all required fields.', 'fas fa-exclamation-triangle');
                return;
            }
            
            // Success response animation
            createToast(`Thank you, ${fullname}! Your request for ${membership} Membership is registered.`, 'fas fa-check-circle');
            contactForm.reset();
        });
    }

    // 5. Newsletter Form Handler
    const newsletterForm = document.querySelector('#newsletter form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('newsletter-email');
            const email = emailInput.value.trim();
            
            if (!email) {
                createToast('Please enter a valid email address.', 'fas fa-exclamation-triangle');
                return;
            }
            
            createToast('Subscribed successfully to our newsletter!', 'fas fa-paper-plane');
            newsletterForm.reset();
        });
    }

    // 6. BMI Calculator Logic
    const bmiForm = document.querySelector('#bmi form');
    const bmiScoreEl = document.getElementById('bmi-score-value');
    const bmiStatusEl = document.getElementById('bmi-status-value');
    const bmiAdviceEl = document.getElementById('bmi-advice-value');
    
    if (bmiForm) {
        bmiForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const weight = parseFloat(document.getElementById('weight').value);
            const heightCm = parseFloat(document.getElementById('height').value);
            
            if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
                createToast('Please enter valid positive values for weight and height.', 'fas fa-exclamation-triangle');
                return;
            }
            
            const heightM = heightCm / 100;
            const bmi = (weight / (heightM * heightM)).toFixed(1);
            
            // Set score
            bmiScoreEl.textContent = bmi;
            
            // Set status and recommendations
            let status = '';
            let advice = '';
            let statusColor = '#ffffff';
            
            if (bmi < 18.5) {
                status = 'Underweight';
                statusColor = '#3498db'; // blue
                advice = `Hi ${name || 'there'}, we recommend our "Muscle Gain" plan (3000+ kcal, high protein) and structured weight training 4-5 times a week to build healthy muscle mass safely.`;
            } else if (bmi >= 18.5 && bmi < 24.9) {
                status = 'Normal Weight';
                statusColor = '#2ecc71'; // green
                advice = `Great job, ${name || 'there'}! You are in the healthy weight range. We recommend our "Maintenance" or "Standard" training programs to maintain your fitness levels and stamina.`;
            } else if (bmi >= 25 && bmi < 29.9) {
                status = 'Overweight';
                statusColor = '#f1c40f'; // yellow
                advice = `Hi ${name || 'there'}, you're slightly above the normal range. We suggest our "Fat Loss" nutrition plan (1800 kcal) paired with functional training & HIIT sessions to tone up.`;
            } else {
                status = 'Obese';
                statusColor = '#e74c3c'; // red
                advice = `Hi ${name || 'there'}, your health is our priority. We recommend standard weight loss programs combined with low-impact cardio, personal coaching, and customized calorie-deficit diet plans.`;
            }
            
            bmiScoreEl.style.color = statusColor;
            bmiStatusEl.textContent = status;
            bmiStatusEl.style.color = statusColor;
            bmiAdviceEl.textContent = advice;
            
            createToast('BMI Calculated Successfully!', 'fas fa-calculator');
        });
        
        // Handle form reset
        bmiForm.addEventListener('reset', () => {
            bmiScoreEl.textContent = '--.-';
            bmiScoreEl.style.color = 'var(--accent)';
            bmiStatusEl.textContent = 'Enter Details';
            bmiStatusEl.style.color = 'var(--text-primary)';
            bmiAdviceEl.textContent = 'Fill in your name, age, height, and weight to calculate your body mass index and receive personalized fitness recommendations.';
        });
    }

    // 7. Schedule Tab Switcher
    const scheduleSection = document.getElementById('schedule');
    if (scheduleSection) {
        // Let's create an interactive tab UI for Schedule Tables dynamically
        const tables = scheduleSection.querySelectorAll('.table-responsive, table');
        const container = scheduleSection.querySelector('.container') || scheduleSection;
        
        // Wrap tables if not already wrapped
        tables.forEach(table => {
            if (!table.parentElement.classList.contains('table-responsive')) {
                const wrapper = document.createElement('div');
                wrapper.className = 'table-responsive mb-4';
                table.parentNode.insertBefore(wrapper, table);
                wrapper.appendChild(table);
            }
        });
        
        const wrappedTables = scheduleSection.querySelectorAll('.table-responsive');
        
        if (wrappedTables.length >= 2) {
            // Hide the second table by default
            wrappedTables[1].style.display = 'none';
            
            // Create tab navigation
            const tabContainer = document.createElement('div');
            tabContainer.className = 'schedule-tabs mb-4';
            
            const btn1 = document.createElement('button');
            btn1.className = 'tab-btn active';
            btn1.textContent = 'Class Schedule';
            
            const btn2 = document.createElement('button');
            btn2.className = 'tab-btn';
            btn2.textContent = 'Trainer Availability';
            
            tabContainer.appendChild(btn1);
            tabContainer.appendChild(btn2);
            
            // Insert tabs before the first table
            wrappedTables[0].parentNode.insertBefore(tabContainer, wrappedTables[0]);
            
            btn1.addEventListener('click', () => {
                btn1.classList.add('active');
                btn2.classList.remove('active');
                wrappedTables[0].style.display = 'block';
                wrappedTables[1].style.display = 'none';
            });
            
            btn2.addEventListener('click', () => {
                btn2.classList.add('active');
                btn1.classList.remove('active');
                wrappedTables[1].style.display = 'block';
                wrappedTables[0].style.display = 'none';
            });
        }
    }
});
