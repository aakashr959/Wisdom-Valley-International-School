document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS (Animate On Scroll) library for scroll animations
    AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: true      // Whether animation should only happen once
    });

    // Activity Data with detailed information for each event
    const activitiesData = {
        'science-fair': {
            title: 'Science Fair 2024',
            subtitle: 'Annual Innovation Showcase',
            category: 'academic',
            fullDescription: `The Science Fair is our flagship academic event where students from grades 6-12 present their scientific research and innovative projects. This three-day extravaganza features experiments, models, and presentations across 15 different categories including Physics, Chemistry, Biology, Environmental Science, and Computer Science.

Students work for months developing their projects under faculty guidance, learning valuable research skills and scientific methodology. The event includes guest judges from local universities and research institutions, providing students with professional feedback and recognition. Winners advance to district and state level competitions, with many receiving scholarships and recognition.

The fair not only showcases student creativity but also inspires younger students to develop an interest in STEM fields. It's a celebration of curiosity, innovation, and scientific thinking that defines our academic culture.`,
            schedule: [
                { day: 'Day 1', time: '9:00 AM - 4:00 PM', activity: 'Project Setup, Registration & Preliminary Judging' },
                { day: 'Day 2', time: '10:00 AM - 5:00 PM', activity: 'Final Judging Rounds & Public Exhibition' },
                { day: 'Day 3', time: '2:00 PM - 6:00 PM', activity: 'Awards Ceremony & Closing' }
            ],
            highlights: [
                '200+ innovative projects',
                '15 competition categories',
                'Professional judges from universities',
                'State-level advancement opportunities',
                'STEM scholarship opportunities',
                'Interactive demonstrations'
            ],
            gallery: [
                'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=300&h=200&fit=crop',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop',
                'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300&h=200&fit=crop',
                'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=300&h=200&fit=crop'
            ]
        },
        'sports-championship': {
            title: 'Inter-House Sports Championship',
            subtitle: 'Annual Athletic Excellence',
            category: 'sports',
            fullDescription: `Our Inter-House Sports Championship is a week-long celebration of athleticism and school spirit. Four houses - Phoenix (Red), Dragon (Blue), Eagle (Green), and Tiger (Yellow) - compete across 20 different sporting events including track and field, swimming, football, basketball, cricket, volleyball, and traditional games.

Every student participates in at least one event, ensuring 100% participation and maximum school engagement. The week features spectacular opening and closing ceremonies, daily competitions, cheerleading performances, house decorations, and culminates in the prestigious Overall Championship trophy presentation.

This event not only promotes physical fitness but also teaches valuable lessons in teamwork, leadership, sportsmanship, and healthy competition. It's a highlight of our school calendar that brings together students, teachers, and families in celebration of athletic achievement.`,
            schedule: [
                { day: 'Monday', time: '8:00 AM - 5:00 PM', activity: 'Opening Ceremony & Track and Field Events' },
                { day: 'Tuesday', time: '8:00 AM - 5:00 PM', activity: 'Swimming Championships & Water Sports' },
                { day: 'Wednesday', time: '8:00 AM - 5:00 PM', activity: 'Team Sports - Football & Basketball' },
                { day: 'Thursday', time: '8:00 AM - 5:00 PM', activity: 'Cricket, Volleyball & Indoor Games' },
                { day: 'Friday', time: '8:00 AM - 6:00 PM', activity: 'Finals, Closing Ceremony & Trophy Presentation' }
            ],
            highlights: [
                '800+ student athletes',
                '20 different sports',
                '4 competitive houses',
                '100% student participation',
                'Professional coaching support',
                'Live commentary and coverage'
            ],
            gallery: [
                'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop',
                'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=300&h=200&fit=crop',
                'https://images.unsplash.com/photo-1577212017308-529398d751b4?w=300&h=200&fit=crop',
                'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop'
            ]
        },
        'cultural-festival': {
            title: 'Cultural Festival',
            subtitle: 'Celebrating Diversity & Talent',
            category: 'cultural',
            fullDescription: `Our Cultural Festival is a magnificent two-day celebration that showcases the incredible artistic talents of our students and celebrates the rich cultural diversity of our school community. The festival features over 50 performances including classical and contemporary dance, vocal and instrumental music, drama, poetry recitation, and art exhibitions.

Students explore various cultural traditions from around the world, promoting diversity, inclusion, and cultural understanding. The event includes fashion shows featuring traditional costumes from different regions, food stalls with international cuisine prepared by parent volunteers, and interactive workshops where visitors can learn different art forms.

Professional artists and cultural experts serve as judges, providing students with valuable feedback and exposure to the professional arts community. The festival not only celebrates talent but also builds confidence, creativity, and cultural awareness among our students.`,
            schedule: [
                { day: 'Day 1', time: '10:00 AM - 1:00 PM', activity: 'Art Exhibition Opening & Cultural Displays' },
                { day: 'Day 1', time: '2:00 PM - 6:00 PM', activity: 'Music & Dance Performances' },
                { day: 'Day 2', time: '10:00 AM - 1:00 PM', activity: 'Drama, Poetry & Cultural Workshops' },
                { day: 'Day 2', time: '2:00 PM - 6:00 PM', activity: 'Grand Finale & Awards Ceremony' }
            ],
            highlights: [
                '500+ talented performers',
                '50+ cultural performances',
                'International food festival',
                'Traditional costume showcase',
                'Interactive art workshops',
                'Professional guest artists'
            ],
            gallery: [
                'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop',
                'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=200&fit=crop',
                'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
                'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=300&h=200&fit=crop'
            ]
        },
        'math-olympiad': {
            title: 'Mathematics Olympiad',
            subtitle: 'Challenge Your Mathematical Mind',
            category: 'competitions',
            fullDescription: `The Mathematics Olympiad is an annual competition designed to challenge and inspire mathematically gifted students. Divided into four age categories (Elementary: Grades 3-5, Junior: Grades 6-8, Senior: Grades 9-10, and Advanced: Grades 11-12), the competition features increasingly complex problems that test logical reasoning, mathematical creativity, and problem-solving skills.

Students prepare through special coaching sessions and practice problems throughout the year, guided by our expert mathematics faculty. The competition includes both individual and team rounds, with problems ranging from number theory and algebra to geometry and combinatorics.

Winners receive recognition at school and district levels, with top performers advancing to national competitions. The event also includes a fun 'Math Fair' where younger students can enjoy mathematical games, puzzles, and hands-on activities that make mathematics exciting and accessible.`,
            schedule: [
                { time: '9:00 AM', activity: 'Registration, Instructions & Warm-up Puzzles' },
                { time: '9:30 AM - 11:00 AM', activity: 'Individual Competition Round' },
                { time: '11:30 AM - 12:30 PM', activity: 'Team Competition Round' },
                { time: '1:00 PM - 2:00 PM', activity: 'Math Fair Activities & Results Compilation' },
                { time: '2:00 PM - 3:00 PM', activity: 'Awards Ceremony & Prize Distribution' }
            ],
            highlights: [
                '150+ mathematical minds',
                '4 competitive categories',
                'Individual & team challenges',
                'National competition pathway',
                'Interactive Math Fair',
                'Expert faculty coaching'
            ],
            gallery: [
                'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=200&fit=crop',
                'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=300&h=200&fit=crop',
                'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=300&h=200&fit=crop',
                'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300&h=200&fit=crop'
            ]
        },
        'debate-championship': {
            title: 'Debate Championship',
            subtitle: 'Voices of Tomorrow',
            category: 'competitions', // Added 'debate' category to the filter buttons but it falls under 'competitions' in data
            fullDescription: `Our Debate Championship is a prestigious two-day event that challenges students to think critically about contemporary issues and articulate their viewpoints with clarity, conviction, and confidence. The competition features 12 carefully selected topics ranging from technology and education to environment, social issues, and global affairs.

Students participate in various formats including prepared debates, impromptu speaking, parliamentary style discussions, and cross-examination rounds. The event includes preliminary rounds, quarter-finals, semi-finals, and a grand finale that showcases the best speakers in the school.

Participants develop essential skills in research, logical argumentation, public speaking, and critical thinking. Guest judges include legal professionals, academics, journalists, and community leaders who provide expert evaluation, constructive feedback, and real-world perspective on the issues discussed.`,
            schedule: [
                { day: 'Day 1', time: '9:00 AM - 12:00 PM', activity: 'Opening Ceremony & Preliminary Rounds' },
                { day: 'Day 1', time: '1:00 PM - 5:00 PM', activity: 'Quarter Finals & Topic Preparation' },
                { day: 'Day 2', time: '9:00 AM - 12:00 PM', activity: 'Semi Finals & Impromptu Round' },
                { day: 'Day 2', time: '1:00 PM - 4:00 PM', activity: 'Grand Finale & Awards Ceremony' }
            ],
            highlights: [
                '80+ skilled debaters',
                '12 contemporary topics',
                'Multiple debate formats',
                'Professional judge panel',
                'Public speaking training',
                'Critical thinking development'
            ],
            gallery: [
                'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop', // Placeholder image 1
                'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=200&fit=crop', // Placeholder image 2
                'https://images.unsplash.com/photo-1559223607-b4d0555ae7e3?w=300&h=200&fit=crop', // Placeholder image 3
                'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop'  // Placeholder image 4
            ]
        },
        'parent-teacher-conference': {
            title: 'Parent-Teacher Conference',
            subtitle: 'Partnership in Education',
            category: 'meetings',
            fullDescription: `Our Parent-Teacher Conferences are comprehensive quarterly meetings designed to strengthen the vital partnership between home and school in supporting each child's educational journey. These structured conferences provide dedicated time for detailed discussions about academic progress, social development, behavioral observations, and future educational goals.

Teachers prepare comprehensive progress reports, portfolio samples, and specific recommendations tailored to each student's unique needs and learning style. Parents receive valuable insights into classroom dynamics, effective learning strategies, and practical ways to support their child's learning at home.

The conferences also include informative sessions on current educational trends, effective parenting strategies, child development milestones, and resources available to support student success. Special provisions are made for working parents with flexible scheduling including evening and weekend slots to ensure maximum participation.`,
            schedule: [
                { time: '8:00 AM - 8:30 AM', activity: 'Check-in, Schedule Review & Welcome Coffee' },
                { time: '8:30 AM - 12:00 PM', activity: 'Morning Individual Conference Sessions' },
                { time: '12:00 PM - 1:00 PM', activity: 'Lunch Break & Informal Networking' },
                { time: '1:00 PM - 5:00 PM', activity: 'Afternoon Individual Conference Sessions' },
                { time: '5:00 PM - 6:00 PM', activity: 'Group Information Sessions & Q&A' }
            ],
            highlights: [
                '300+ family conferences',
                'Detailed progress reports',
                'Flexible scheduling options',
                'Educational resource sharing',
                'Home-school collaboration',
                'Child development guidance'
            ],
            gallery: [
                'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=300&h=200&fit=crop',
                'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop',
                'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop',
                'https://images.unsplash.com/photo-1559223607-b4d0555ae7e3?w=300&h=200&fit=crop'
            ]
        },
        'morning-assembly': {
            title: 'Morning Assembly',
            subtitle: 'Daily Inspiration & Unity',
            category: 'assembly',
            fullDescription: `Morning Assembly is the heart of our daily school life, bringing together the entire school community of over 1200 students and faculty for a shared moment of inspiration, unity, and purpose. Each day begins with a brief prayer or moment of reflection that respects our diverse community, followed by current affairs discussions, motivational thoughts, and recognition of student achievements.

Different classes take turns organizing special presentations including cultural performances, educational skits, awareness programs on various topics like environmental conservation, health and wellness, social issues, and character building. The assembly also serves as a vital platform for important announcements, birthday celebrations, and fostering school spirit through the recitation of our school pledge and motto.

This daily tradition builds a strong sense of community, shared values, and collective identity while providing students with opportunities to develop public speaking skills, leadership qualities, and confidence in front of large audiences.`,
            schedule: [
                { time: '8:00 AM - 8:05 AM', activity: 'Gathering, Attendance & Settling Down' },
                { time: '8:05 AM - 8:10 AM', activity: 'Prayer/Reflection Time & Moment of Silence' },
                { time: '8:10 AM - 8:15 AM', activity: 'Thought for the Day & Current Affairs' },
                { time: '8:15 AM - 8:20 AM', activity: 'Announcements, Birthdays & Achievements' },
                { time: '8:20 AM - 8:25 AM', activity: 'School Pledge, National Anthem & Dispersal' }
            ],
            highlights: [
                '1200+ daily participants',
                'Daily inspiration & motivation',
                'Student-led presentations',
                'Current affairs discussions',
                'Achievement recognition',
                'Community building'
            ],
            gallery: [
                'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=300&h=200&fit=crop',
                'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop',
                'https://images.unsplash.com/photo-1559223607-b4d0555ae7e3?w=300&h=200&fit=crop',
                'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop'
            ]
        },
        'quiz-competition': {
            title: 'Inter-School Quiz Championship',
            subtitle: 'Battle of Knowledge',
            category: 'competitions',
            fullDescription: `The Inter-School Quiz Championship is one of our most exciting and fast-paced competitions that brings together the brightest minds from schools across the district. This intellectually stimulating event covers a wide range of topics including general knowledge, current affairs, science and technology, history, geography, literature, and popular culture.

The competition features 8 thrilling rounds including rapid-fire questions, visual rounds, audio clues, and the nail-biting buzzer round that tests both knowledge and quick thinking skills. Teams of three students compete for the prestigious "Quiz Champions" trophy. We invite a renowned quizmaster to host the event, adding to the excitement and professional atmosphere. This event is a great way for students to test their knowledge, learn new facts, and develop quick thinking and teamwork skills.`,
            schedule: [
                { time: '9:00 AM - 9:30 AM', activity: 'Registration & Welcome' },
                { time: '9:30 AM - 11:00 AM', activity: 'Preliminary Rounds' },
                { time: '11:00 AM - 12:00 PM', activity: 'Semi-Finals' },
                { time: '12:00 PM - 12:30 PM', activity: 'Buzzer Round & Grand Finale' },
                { time: '12:30 PM - 1:00 PM', activity: 'Awards Ceremony & Prize Distribution' }
            ],
            highlights: [
                '200+ participants',
                '8 exciting rounds',
                'Wide range of topics',
                'Team-based competition',
                'Prizes and trophy for winners',
                'Renowned quizmaster'
            ],
            gallery: [
                'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=300&h=200&fit=crop',
                'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=300&h=200&fit=crop',
                'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=300&h=200&fit=crop',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop'
            ]
        },
        'indoor-games': {
            title: 'Indoor Games Tournament',
            subtitle: 'Strategic Mind Sports',
            category: 'sports',
            fullDescription: `The Indoor Games Tournament is an exciting event where students can showcase their strategic thinking and concentration skills across a variety of classic indoor games. This tournament includes competitions in Chess, Carrom, Table Tennis, and various engaging board games.

Students participate in individual and team formats, fostering healthy competition and sportsmanship in a friendly environment. The event emphasizes critical thinking, planning, and quick decision-making, providing a platform for students to develop their mental agility.

Throughout the tournament, faculty members and experienced players offer guidance and tips, helping participants improve their game. The event culminates in an awards ceremony, recognizing the champions and encouraging all participants to continue honing their skills.`,
            schedule: [
                { day: 'Day 1', time: '9:00 AM - 1:00 PM', activity: 'Chess Tournament Preliminaries' },
                { day: 'Day 2', time: '9:00 AM - 1:00 PM', activity: 'Carrom Tournament Preliminaries' },
                { day: 'Day 3', time: '9:00 AM - 1:00 PM', activity: 'Table Tennis Tournament Preliminaries' },
                { day: 'Day 4', time: '9:00 AM - 1:00 PM', activity: 'Board Games Competition' },
                { day: 'Day 5', time: '10:00 AM - 2:00 PM', activity: 'Finals & Awards Ceremony' }
            ],
            highlights: [
                '400+ players',
                '12 different games',
                'Strategic thinking development',
                'Concentration and focus improvement',
                'Individual and team formats',
                'Expert guidance and coaching'
            ],
            gallery: [
                'https://images.unsplash.com/photo-1571741140006-bc4f8fec5b6b?w=300&h=200&fit=crop',
                'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=200&fit=crop',
                'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=300&h=200&fit=crop',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop'
            ]
        }
    };


    // Helper function for a smoother page transition on load (can be removed if not desired)
    document.body.style.opacity = '1';

    // 1. Card Filtering Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const activityGridItems = document.querySelectorAll('.activity-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all filter buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to the clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // Iterate over each activity grid item to show/hide based on the filter
            activityGridItems.forEach(item => {
                // Check if the item's class list contains the filter value or if 'all' is selected
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block'; // Show the item
                    item.style.animation = 'fadeInUp 0.5s ease-in-out forwards'; // Apply fade-in animation
                } else {
                    item.style.display = 'none'; // Hide the item
                }
            });
        });
    });

    // 2. Modal Functionality - Dynamically populating the modal with activity details
    const activityModal = new bootstrap.Modal(document.getElementById('activityModal'));
    const modalTitleElem = document.getElementById('activityModalLabel');
    const modalSubtitleElem = document.getElementById('modalSubtitle');
    const modalBodyElem = document.getElementById('modalBody');

    // Function to show the activity detail modal
    window.showActivityModal = function(activityId) {
        const activity = activitiesData[activityId];

        if (activity) {
            // Populate modal header
            modalTitleElem.textContent = activity.title;
            modalSubtitleElem.textContent = activity.subtitle;

            // Populate modal body with detailed information
            modalBodyElem.innerHTML = `
                <div class="mb-4">
                    <p class="fs-5 fw-bold text-primary">${activity.category.charAt(0).toUpperCase() + activity.category.slice(1)}</p>
                    <p>${activity.fullDescription}</p>
                </div>
                <div class="mb-4">
                    <h3 class="fs-5 fw-bold text-secondary mb-3">Schedule</h3>
                    <ul class="list-group list-group-flush">
                        ${activity.schedule.map(item => `
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <div><i class="bi bi-calendar-event me-2 text-info"></i>${item.day ? item.day + ': ' : ''}${item.activity}</div>
                                <span class="badge bg-light text-dark">${item.time}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                <div class="mb-4">
                    <h3 class="fs-5 fw-bold text-secondary mb-3">Highlights</h3>
                    <ul class="list-unstyled d-flex flex-wrap gap-3">
                        ${activity.highlights.map(highlight => `
                            <li><span class="badge bg-primary-subtle text-primary p-2"><i class="bi bi-star-fill me-1"></i>${highlight}</span></li>
                        `).join('')}
                    </ul>
                </div>
                <div>
                    <h3 class="fs-5 fw-bold text-secondary mb-3">Gallery</h3>
                    <div class="gallery-grid">
                        ${activity.gallery.map(imgSrc => `
                            <div class="gallery-item">
                                <img src="${imgSrc}" alt="${activity.title} gallery image">
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            activityModal.show(); // Show the modal
        }
    };


    // 3. Statistics Animation on Scroll
    const statsSection = document.querySelector('.stats-section');
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasAnimatedStats = false; // Flag to ensure animation runs only once

    // Intersection Observer callback function
    const animateStats = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimatedStats) {
                // If the stats section is visible and hasn't been animated yet
                statNumbers.forEach(numberElem => {
                    const target = parseInt(numberElem.getAttribute('data-count'));
                    let current = 0;
                    const duration = 2000; // Animation duration in milliseconds
                    const stepTime = 15;   // Interval for each step in milliseconds
                    const increment = (target / duration) * stepTime; // Calculate increment per step

                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            current = target; // Ensure it stops exactly at the target
                            clearInterval(timer);
                        }
                        numberElem.textContent = Math.floor(current);
                    }, stepTime);
                });
                hasAnimatedStats = true; // Mark as animated
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    };

    // Create a new Intersection Observer instance
    const statsObserver = new IntersectionObserver(animateStats, {
        root: null,      // Observe relative to the viewport
        threshold: 0.5   // Trigger when 50% of the target is visible
    });

    // Start observing the stats section
    statsObserver.observe(statsSection);
});
