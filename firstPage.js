// Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Animated counters
        function animateCounters() {
            const counters = document.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-count'));
                let current = 0;
                const increment = target / 100;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        counter.textContent = target + (target === 98 ? '%' : '+');
                        clearInterval(timer);
                    } else {
                        counter.textContent = Math.floor(current) + (target === 98 ? '%' : '+');
                    }
                }, 20);
            });
        }

        // Intersection Observer for animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.target.classList.contains('stats')) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        });

        document.querySelector('.stats').forEach = (element) => observer.observe(element);
        observer.observe(document.querySelector('.stats'));

        // Leadership messages
        const fullMessages = {
            principal: "Welcome to Wisdom Valley School! As Principal, I am proud to lead an institution that has been shaping young minds for over 25 years. Our commitment to academic excellence, character development, and holistic education ensures that every student who walks through our doors leaves as a confident, capable, and compassionate individual. We believe that education is not just about academic achievement, but about nurturing the whole person - intellectually, emotionally, and socially. Our dedicated faculty, state-of-the-art facilities, and innovative teaching methods create an environment where students can explore their potential and discover their passions. Together, we are building tomorrow's leaders.",
            
            'vice-principal': "At Wisdom Valley, we understand that every child is unique and has their own learning style and pace. Our personalized approach to education ensures that each student receives the attention and guidance they need to excel. Our experienced team of educators works closely with students to identify their strengths and areas for improvement, providing tailored support that helps them achieve their academic goals. We foster a nurturing environment where students feel safe to take risks, make mistakes, and learn from them. Through innovative teaching methods, technology integration, and continuous professional development of our staff, we ensure that our students receive the best possible education that prepares them for success in an ever-changing world.",
            
            director: "Education at Wisdom Valley goes beyond textbooks and examinations. As Academic Director, I oversee our comprehensive curriculum that balances traditional academic rigor with modern pedagogical approaches. We integrate technology seamlessly into our teaching methods while preserving the values of discipline, respect, and cultural heritage. Our students are encouraged to think critically, solve problems creatively, and develop leadership skills that will serve them throughout their lives. We prepare our students not just for the next grade or examination, but for life itself - equipping them with the knowledge, skills, and character necessary to become productive members of society and leaders in their chosen fields."
        };

        // Show full leadership messages
        function showFullMessage(role) {
            const messageElement = document.getElementById(`${role}-message`);
            const button = messageElement.parentElement.querySelector('.read-more-btn');
            
            if (messageElement.textContent === fullMessages[role]) {
                // Show short message
                const shortMessages = {
                    principal: "Welcome to Wisdom Valley! We are committed to providing quality education that nurtures both academic excellence and character development.",
                    'vice-principal': "Our dedicated team ensures every student receives personalized attention and guidance to reach their full potential.",
                    director: "We believe in holistic education that prepares students for the challenges of tomorrow while preserving our cultural values."
                };
                messageElement.textContent = shortMessages[role];
                button.textContent = "Read Full Message";
            } else {
                // Show full message
                messageElement.textContent = fullMessages[role];
                button.textContent = "Show Less";
            }
        }

        // Search functionality
        function performSearch() {
            const searchInput = document.getElementById('searchInput');
            const query = searchInput.value.trim();
            
            if (query) {
                alert(`Search functionality would be implemented here.\nSearching for: "${query}"`);
                // In a real application, this would redirect to a search results page
                // window.location.href = `/search?q=${encodeURIComponent(query)}`;
            } else {
                alert('Please enter a search term.');
            }
        }

        // Handle Enter key in search
        document.getElementById('searchInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });

        // Gallery functionality
        const galleryImages = [
            { title: "Modern Classrooms", description: "State-of-the-art learning environments with smart boards and digital resources" },
            { title: "Science Laboratory", description: "Fully equipped labs for chemistry, physics, and biology experiments" },
            { title: "Sports Complex", description: "Multi-purpose sports facilities including basketball, volleyball, and indoor games" },
            { title: "Library", description: "Extensive collection of over 10,000 books and digital learning resources" },
            { title: "Cultural Events", description: "Annual cultural festivals celebrating diversity and student creativity" },
            { title: "Campus Gardens", description: "Beautiful landscaped gardens providing a serene learning environment" }
        ];

        function openGallery(index) {
            const image = galleryImages[index];
            alert(`${image.title}\n\n${image.description}\n\nIn a full implementation, this would open a detailed gallery viewer.`);
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Quick links functionality
        document.querySelectorAll('.quick-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const linkText = this.querySelector('h3').textContent;
                
                // Simulate different functionalities
                switch(linkText) {
                    case 'Student Portal':
                        alert('Redirecting to Student Portal...\nStudents can access their grades, assignments, and school announcements.');
                        break;
                    case 'Parent Portal':
                        alert('Redirecting to Parent Portal...\nParents can view their child\'s progress, communicate with teachers, and access school updates.');
                        break;
                    case 'Pay Fees':
                        alert('Redirecting to Fee Payment Portal...\nSecure online payment system for school fees and other charges.');
                        break;
                    case 'Calendar':
                        alert('Opening School Calendar...\nView upcoming events, holidays, and important dates.');
                        break;
                    case 'News':
                        alert('Opening News Section...\nLatest school news, achievements, and announcements.');
                        break;
                    case 'Contact':
                        alert('Opening Contact Information...\nGet in touch with school administration and staff.');
                        break;
                }
            });
        });

        // Mobile menu toggle (for responsive design)
        function toggleMobileMenu() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('mobile-active');
        }

        // Add mobile menu button functionality
        document.addEventListener('DOMContentLoaded', function() {
            // Create mobile menu button for smaller screens
            const navContainer = document.querySelector('.nav-container');
            const mobileMenuBtn = document.createElement('button');
            mobileMenuBtn.innerHTML = '☰';
            mobileMenuBtn.className = 'mobile-menu-btn';
            mobileMenuBtn.style.cssText = `
                display: none;
                background: none;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                @media (max-width: 768px) {
                    display: block;
                }
            `;
            mobileMenuBtn.onclick = toggleMobileMenu;
            navContainer.appendChild(mobileMenuBtn);
        });

        // Form handling for contact and admissions
        function handleFormSubmission(formType) {
            alert(`${formType} form would be processed here.\nIn a real implementation, this would submit data to the server.`);
        }

        // Newsletter subscription
        function subscribeNewsletter(email) {
            if (email && email.includes('@')) {
                alert(`Thank you for subscribing to our newsletter!\nWe'll send updates to: ${email}`);
            } else {
                alert('Please enter a valid email address.');
            }
        }

        // Event calendar functionality
        const schoolEvents = [
            { date: '2024-03-15', event: 'Parent-Teacher Meeting', type: 'academic' },
            { date: '2024-03-20', event: 'Science Fair', type: 'competition' },
            { date: '2024-03-25', event: 'Annual Sports Day', type: 'sports' },
            { date: '2024-04-01', event: 'Spring Break Begins', type: 'holiday' },
            { date: '2024-04-10', event: 'Art Exhibition', type: 'cultural' }
        ];

        function getUpcomingEvents() {
            const today = new Date();
            return schoolEvents.filter(event => new Date(event.date) >= today).slice(0, 3);
        }

        // Initialize page
        document.addEventListener('DOMContentLoaded', function() {
            // Add any initialization code here
            console.log('Wisdom Valley School website loaded successfully!');
            
            // Set current year in footer
            const currentYear = new Date().getFullYear();
            const footerText = document.querySelector('.footer-bottom p');
            if (footerText) {
                footerText.innerHTML = footerText.innerHTML.replace('2024', currentYear);
            }
        });

        // Utility functions
        function showNotification(message, type = 'info') {
            // In a real implementation, this would show a styled notification
            alert(message);
        }

        function validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        function formatDate(dateString) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString).toLocaleDateString(undefined, options);
        }

        // Analytics and tracking (placeholder)
        function trackEvent(eventName, eventData) {
            console.log(`Event tracked: ${eventName}`, eventData);
            // In production, this would send data to analytics service
        }