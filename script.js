//navbar script!

// Dropdown data
const navData = {
    vebsayt: [
        { title: 'Saytların Hazırlanması', url: 'calculator.html' },
        { title: 'Korporativ Saytlar', url: '#' },
        { title: 'E-ticarət Saytları', url: '#' },
        { title: 'Şəxsi Saytlar', url: '#' },
        { title: 'Landing Səhifələr', url: '#' }
    ],
    domen: [
        { title: 'Domen Qeydiyyatı', url: '#' },
        { title: 'Pulsuz Domen', url: '#' },
        { title: 'Domen Transfer', url: '#' },
        { title: 'Az Domenlər', url: '#' }
    ],
    hosting: [
        { title: 'Shared Hosting', url: '#' },
        { title: 'VPS Hosting', url: '#' },
        { title: 'Dedicated Server', url: '#' },
        { title: 'Cloud Hosting', url: '#' }
    ],
    xidmetler: [
        { title: 'SEO Xidmətləri', url: '#' },
        { title: 'Sosial Media Marketinq', url: '#' },
        { title: 'Qrafik Dizayn', url: '#' },
        { title: 'Texniki Dəstək', url: '#' }
    ],
    sirket: [
        { title: 'Haqqımızda', url: '#' },
        { title: 'Komandamız', url: '#' },
        { title: 'Əlaqə', url: '#' },
        { title: 'Karyera', url: '#' },
        { title: 'Blog', url: '#' }
    ],
    currency: [
        { title: 'AZN', icon: 'fa-solid fa-manat-sign', url: '#' },
        { title: 'USD', icon: 'fa-solid fa-dollar-sign', url: '#' }
    ],
    language: [
        { title: 'Azərbaycan', icon: 'media/az.png', url: '#' },
        { title: 'English', icon: 'meida/british.png', url: '#' }
    ]
};

// Initialize dropdown menus
document.addEventListener('DOMContentLoaded', function() {
    // Populate dropdown content
    for (const [key, items] of Object.entries(navData)) {
        let dropdown;
        
        if (key === 'currency') {
            dropdown = document.getElementById('currency-dropdown');
        } else if (key === 'language') {
            dropdown = document.getElementById('language-dropdown');
        } else {
            dropdown = document.getElementById(`${key}-dropdown`);
        }
        
        if (dropdown) {
            if (key !== 'currency' && key !== 'language') {
                const category = document.createElement('h3');
                category.textContent = key.charAt(0).toUpperCase() + key.slice(1);
                dropdown.appendChild(category);
            }
            
            items.forEach(item => {
                const link = document.createElement('a');
                link.href = item.url;
                
                if (key === 'currency' || key === 'language') {
                    if (item.icon) {
                        if (key === 'language') {
                            const img = document.createElement('img');
                            img.src = item.icon;
                            img.alt = item.title;
                            img.className = 'flag-icon';
                            link.appendChild(img);
                        } else {
                            const icon = document.createElement('i');
                            icon.className = item.icon;
                            link.appendChild(icon);
                        }
                    }
                }
                
                const text = document.createTextNode(item.title);
                link.appendChild(text);
                dropdown.appendChild(link);
            });
        }
    }

    // Handle dropdown toggling
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const isActive = this.classList.contains('active');
            
            // Close all open dropdowns
            dropdowns.forEach(d => d.classList.remove('active'));
            
            // Toggle current dropdown
            if (!isActive) {
                this.classList.add('active');
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function() {
        dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
    });

    // Toggle mobile menu
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    
    burgerMenu.addEventListener('click', function(e) {
        e.stopPropagation();
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navLinks.contains(e.target) && e.target !== burgerMenu) {
            navLinks.classList.remove('active');
        }
    });
});


// Add this to your script.js file
document.addEventListener('DOMContentLoaded', function() {
    const circles = document.querySelectorAll('.progress-circle');
    
    circles.forEach(circle => {
        const progress = circle.getAttribute('data-progress');
        circle.style.setProperty('--progress', progress);
    });
});


//SECTIONNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN 33333333333333333333333


document.addEventListener('DOMContentLoaded', function() {
    // Domain extension options
    const domainExtensions = [
        '.az', '.com', '.net', '.info', '.biz', '.org', '.us', '.in', 
        '.ws', '.mobi', '.tv', '.me', '.ru', '.de', '.com.az', '.co', 
        '.site.az', '.sayt.az', '.ureb.com', '.org.az'
    ];
    
    // DOM elements
    const domainInput = document.getElementById('domainInput');
    const domainSelector = document.getElementById('domainSelector');
    const domainOptions = document.getElementById('domainOptions');
    const searchButton = document.getElementById('searchButton');
    const errorMessage = document.getElementById('errorMessage');
    
    // Populate domain options
    domainExtensions.forEach(extension => {
        const option = document.createElement('div');
        option.className = 'domain-option';
        option.textContent = extension;
        option.addEventListener('click', function() {
            domainSelector.textContent = extension;
            toggleDropdown(false);
        });
        domainOptions.appendChild(option);
    });
    
    // Toggle dropdown function
    function toggleDropdown(force) {
        if (force === undefined) {
            domainOptions.classList.toggle('show');
        } else {
            if (force) {
                domainOptions.classList.add('show');
            } else {
                domainOptions.classList.remove('show');
            }
        }
    }
    
    // Event listeners
    domainSelector.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleDropdown();
    });
    
    document.addEventListener('click', function() {
        toggleDropdown(false);
    });
    
    // Validate domain name
    function validateDomain(domain) {
        // Check if domain is at least 3 characters
        if (domain.length < 3) {
            return "Domen adı ən azı 3 simvol olmalıdır.";
        }
        
        // Check if domain contains only allowed characters (letters, numbers, and hyphens)
        const validPattern = /^[a-zA-Z0-9-]+$/;
        if (!validPattern.test(domain)) {
            return "Domen adı yalnız hərflər, rəqəmlər və tire (-) işarəsi ola bilər.";
        }
        
        // Check if domain starts or ends with hyphen
        if (domain.startsWith('-') || domain.endsWith('-')) {
            return "Domen adı tire (-) ilə başlaya və ya bitə bilməz.";
        }
        
        return null; // No error
    }
    
    // Handle search action
    searchButton.addEventListener('click', function() {
        const domain = domainInput.value.trim();
        const error = validateDomain(domain);
        
        if (error) {
            errorMessage.textContent = error;
            errorMessage.style.display = 'block';
            domainInput.style.borderColor = '#d9534f';
        } else {
            errorMessage.style.display = 'none';
            domainInput.style.borderColor = '#ddd';
            
            // Here you would typically perform the domain search
            // For this example, we'll just show an alert
            const extension = domainSelector.textContent.trim();
            alert(`Domen axtarılır: ${domain}${extension}`);
            
            // In a real implementation, you would send this to your backend
            // window.location.href = `/domain-check?domain=${domain}${extension}`;
        }
    });
    
    // Allow pressing Enter to search
    domainInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
    
    // Live validation as user types
    domainInput.addEventListener('input', function() {
        const domain = domainInput.value.trim();
        if (domain.length > 0) {
            const error = validateDomain(domain);
            if (error) {
                errorMessage.textContent = error;
                errorMessage.style.display = 'block';
                domainInput.style.borderColor = '#d9534f';
            } else {
                errorMessage.style.display = 'none';
                domainInput.style.borderColor = '#ddd';
            }
        } else {
            errorMessage.style.display = 'none';
            domainInput.style.borderColor = '#ddd';
        }
    });
});


/// SECTION 4444444444444444444444444444444444444

document.addEventListener('DOMContentLoaded', function() {
    const monthlyToggle = document.getElementById('monthly');
    const yearlyToggle = document.getElementById('yearly');
    const toggleSelected = document.querySelector('.toggle-selected');
    const prices = document.querySelectorAll('.price');
    
    // Original prices (monthly)
    const originalPrices = [5, 10, 20];
    
    // Toggle between monthly and yearly billing
    monthlyToggle.addEventListener('click', function() {
        if (!this.classList.contains('active')) {
            this.classList.add('active');
            yearlyToggle.classList.remove('active');
            toggleSelected.style.transform = 'translateX(0)';
            
            // Reset to monthly prices
            prices.forEach((price, index) => {
                price.innerHTML = `₼${originalPrices[index]}<span class="price-period">/ay</span>`;
            });
        }
    });
    
    yearlyToggle.addEventListener('click', function() {
        if (!this.classList.contains('active')) {
            this.classList.add('active');
            monthlyToggle.classList.remove('active');
            toggleSelected.style.transform = 'translateX(100%)';
            
            // Multiply by 4 for yearly prices (simulating 4 months free)
            prices.forEach((price, index) => {
                const yearlyPrice = originalPrices[index] * 4;
                price.innerHTML = `₼${yearlyPrice}<span class="price-period">/il</span>`;
            });
        }
    });
    
    // Initialize the toggle position
    toggleSelected.style.width = `${monthlyToggle.offsetWidth}px`;
});


//sliderrrrrrrrrrrrrrrrrrrrrrrrr


  // Simple JavaScript for slider functionality
  document.addEventListener('DOMContentLoaded', function() {
    // Video slider
    setupSlider('.video-slider', '.video-slider-wrapper', '.video-slide');
    
    // Testimonial slider
    setupSlider('.testimonial-slider', '.testimonial-slider-wrapper', '.testimonial-slide');
    
    // Replace YouTube placeholder URLs with actual ones when page loads
    const frames = document.querySelectorAll('iframe[data-src]');
    frames.forEach(frame => {
        frame.src = frame.dataset.src;
    });
    
    function setupSlider(sliderSelector, wrapperSelector, slideSelector) {
        const slider = document.querySelector(sliderSelector);
        const wrapper = slider.querySelector(wrapperSelector);
        const slides = slider.querySelectorAll(slideSelector);
        const prevBtn = slider.querySelector('.prev');
        const nextBtn = slider.querySelector('.next');
        const dots = slider.querySelectorAll('.slider-dot');
        
        let currentIndex = 0;
        const slideWidth = 100; // in percentage
        
        // Set initial position
        updateSlider();
        
        // Previous button
        prevBtn.addEventListener('click', function() {
            currentIndex = Math.max(currentIndex - 1, 0);
            updateSlider();
        });
        
        // Next button
        nextBtn.addEventListener('click', function() {
            currentIndex = Math.min(currentIndex + 1, slides.length - 1);
            updateSlider();
        });
        
        // Dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                currentIndex = index;
                updateSlider();
            });
        });
        
        function updateSlider() {
            // Update slider position
            wrapper.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
            
            // Update dots
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
            
            // Show/hide navigation arrows
            prevBtn.style.display = currentIndex === 0 ? 'none' : 'flex';
            nextBtn.style.display = currentIndex === slides.length - 1 ? 'none' : 'flex';
        }
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Portfolio data array
    const portfolioData = [
        {
            name: "WISHER.AZ",
            url: "wisher.az",
            image: "media/website-1.png"
        },
        {
            name: "IMEXCOMMODITIES.COM",
            url: "imexcommodities.com",
            image: "media/website-2.png"
        },
        {
            name: "EXAMPLE.COM",
            url: "example.com",
            image: "media/website-3.png"
        },
        {
            name: "PORTFOLIO.AZ",
            url: "portfolio.az",
            image: "media/website-4.png"
        },
        {
            name: "WEBSITE.AZ",
            url: "website.az", 
            image: "media/website-5.png"
        },
        {
            name: "COMPANY.COM",
            url: "company.com",
            image: "media/website-6.png"
        },
        {
            name: "BUSINESS.AZ",
            url: "business.az",
            image: "media/website-7.png"
        },
        {
            name: "STORE.AZ",
            url: "store.az",
            image: "media/website-2.png"
        },
        {
            name: "BLOG.AZ",
            url: "blog.az",
            image: "media/website-1.png"
        },
        {
            name: "AGENCY.COM",
            url: "agency.com",
            image: "media/website-3.png"
        }
    ];
    
    const portfolioGrid = document.getElementById('portfolioGrid');
    const pagination = document.getElementById('pagination');
    let currentPage = 1;
    let itemsPerPage = 2; // Start with 4 items per page
    
    // Function to render portfolio items
    function renderPortfolio() {
        portfolioGrid.innerHTML = '';
        
        // Calculate start and end indexes for current page
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, portfolioData.length);
        
        // Display only the items for the current page
        for (let i = startIndex; i < endIndex; i++) {
            const item = portfolioData[i];
            
            const portfolioItem = document.createElement('div');
            portfolioItem.className = 'portfolio-item';
            
            portfolioItem.innerHTML = `
                <div class="portfolio-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="portfolio-info">
                    <h3 class="portfolio-name">${item.name}</h3>
                    <p class="portfolio-url">${item.url}</p>
                </div>
            `;
            
            portfolioGrid.appendChild(portfolioItem);
        }
    }
    
    // Function to render pagination
    function renderPagination() {
        const totalPages = Math.ceil(portfolioData.length / itemsPerPage);
        pagination.innerHTML = '';
        
        // Add previous button
        const prevButton = document.createElement('button');
        prevButton.className = `pagination-button prev ${currentPage === 1 ? 'disabled' : ''}`;
        prevButton.innerHTML = '&lt;';
        prevButton.addEventListener('click', function() {
            if (currentPage > 1) {
                currentPage--;
                renderPortfolio();
                renderPagination();
            }
        });
        pagination.appendChild(prevButton);
        
        // Add page number buttons
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.className = `pagination-button ${currentPage === i ? 'active' : ''}`;
            pageButton.textContent = i;
            
            pageButton.addEventListener('click', function() {
                currentPage = i;
                
                // If it's not the first page, double the items per page
                // This implements the "show more" functionality
                if (i > 1 && itemsPerPage === 4) {
                    itemsPerPage = 8;
                }
                
                renderPortfolio();
                renderPagination();
            });
            
            pagination.appendChild(pageButton);
        }
        
        // Add next button
        const nextButton = document.createElement('button');
        nextButton.className = `pagination-button next ${currentPage === totalPages ? 'disabled' : ''}`;
        nextButton.innerHTML = '&gt;';
        nextButton.addEventListener('click', function() {
            if (currentPage < totalPages) {
                currentPage++;
                
                // If moving past page 1, double the items per page
                if (currentPage > 1 && itemsPerPage === 4) {
                    itemsPerPage = 8;
                }
                
                renderPortfolio();
                renderPagination();
            }
        });
        pagination.appendChild(nextButton);
    }
    
    // Initial render
    renderPortfolio();
    renderPagination();
});