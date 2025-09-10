// Simple toggle functionality for mobile menu
        const hamburger = document.querySelector('.hamburger');
        let mobileMenu = null;
        
        hamburger.addEventListener('click', () => {
            if (!mobileMenu) {
                // Create mobile menu
                mobileMenu = document.createElement('div');
                mobileMenu.className = 'mobile-menu';
                
                // Clone elements for mobile
                const searchBox = document.querySelector('.search-box').cloneNode(true);
                const navLinks = document.querySelector('.nav-links').cloneNode(true);
                const authButtons = document.querySelector('.auth-buttons').cloneNode(true);
                
                mobileMenu.appendChild(searchBox);
                mobileMenu.appendChild(navLinks);
                mobileMenu.appendChild(authButtons);
                
                document.body.appendChild(mobileMenu);
                
                // Animate hamburger
                hamburger.classList.add('active');
            } else {
                document.body.removeChild(mobileMenu);
                mobileMenu = null;
                hamburger.classList.remove('active');
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (mobileMenu && !hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
                document.body.removeChild(mobileMenu);
                mobileMenu = null;
                hamburger.classList.remove('active');
            }
        });