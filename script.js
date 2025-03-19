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
    let itemsPerPage = 6; // Start with 4 items per page
    
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


const teamMembers = [
    {
        id: 1,
        name: "Ramil Mirzayev",
        position: "CEO",
        imageUrl: "media/team-1.jpg"
    },
    {
        id: 2,
        name: "Rasim Adurahman",
        position: "Project Manager",
        imageUrl: "media/team-2.jpg"
    },
    {
        id: 3,
        name: "Ahmad Rustamov",
        position: "Team Lead",
        imageUrl: "media/team-3.jpg"
    },
    {
        id: 4,
        name: "Murad Aghamedov",
        position: "Backend Developer",
        imageUrl: "media/team-4.jpg"
    },
    {
        id: 5,
        name: "Fuad Mammadov",
        position: "Front-End Developer",
        imageUrl: "media/team-5.jpg"
    },
    {
        id: 6,
        name: "Mirafgan Eminbayli",
        position: "Frontend Developer",
        imageUrl: "media/team-9.jpg"
    },
    {
        id: 7,
        name: "Idrak Mustafazada",
        position: "Customer Support",
        imageUrl: "media/team-7.jpg"
    },
    {
        id: 8,
        name: "Saida Chinani",
        position: "SMM",
        imageUrl: "media/team-8.jpg"
    }
];

// Function to render team members
function renderTeamMembers() {
    const teamGrid = document.getElementById('team-grid');
    teamGrid.innerHTML = ''; // Clear existing content
    
    teamMembers.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'rounded-xl overflow-hidden shadow-lg border-2 border-purple-300';
        memberCard.innerHTML = `
             <div class="p-4 bg-purple-100 rounded-t-lg">
                <div class="mb-4">
                    <div class="bg-white rounded-lg flex items-center justify-center overflow-hidden">
                        <img 
                            src="${member.imageUrl}" 
                            alt="${member.name}" 
                            class="w-auto h-48"
                        >
                    </div>
                </div>
                <div class="text-center p-2">
                    <h2 class="text-xl font-bold text-purple-900">${member.name}</h2>
                    <p class="text-purple-700 font-medium">${member.position}</p>
                </div>
            </div>
        `;
        teamGrid.appendChild(memberCard);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    renderTeamMembers();
});

// Sample data for the slides
const slides = [
    {
        id: "slide1",
        title: "Domen nədir? Domen nə üçündür?",
        youtubeUrl: "https://youtu.be/lnpAcQS6Xz4"
    },
    {
        id: "slide2",
        title: "Sayt.az-la biznesiniz önə çıxar",
        youtubeUrl: "https://youtu.be/Cq3V130Qikc"
    },
    {
        id: "slide3",
        title: "Hosting nədir və necə işləyir?",
        youtubeUrl: "https://youtu.be/nCq1U5ItZZM?si=ZqROlTri8OinWqGP"
    }
];

// Function to extract video ID from YouTube URL
function extractYouTubeID(url) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : url.split('/').pop().split('?')[0];
}

// Current slide index
let currentSlide = 0;
const totalSlides = slides.length;
const slidesPerView = 2; // Show 2 slides at once

// DOM elements
const swiperWrapper = document.getElementById("swiperWrapper");
const swiperPagination = document.getElementById("swiperPagination");
const prevButton = document.querySelector(".swiper-button-prev");
const nextButton = document.querySelector(".swiper-button-next");

// Initialize swiper
function initSwiper() {
    // Create slides
    slides.forEach(slide => {
        // Extract video ID from URL
        const videoId = extractYouTubeID(slide.youtubeUrl);
        
        // Get YouTube thumbnail URL (high quality)
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        
        const slideElement = document.createElement("div");
        slideElement.className = "swiper-slide";
        slideElement.innerHTML = `
            <a href="${slide.youtubeUrl}" class="youtube-link" target="_blank">
                <img src="${thumbnailUrl}" alt="${slide.title}">
                <div class="play-button"></div>
                <div class="slide-title">${slide.title}</div>
                <div class="view-text">İzləmək üçin: YouTube</div>
            </a>
        `;
        swiperWrapper.appendChild(slideElement);
    });

    // Apply styles to all slides to make them 50% width each
    const allSlides = document.querySelectorAll('.swiper-slide');
    allSlides.forEach(slide => {
        slide.style.flex = '0 0 calc(50% - 10px)';
        slide.style.maxWidth = 'calc(50% - 10px)';
        slide.style.margin = '0 5px';
    });

    // Create pagination bullets
    slides.forEach((_, index) => {
        if (index % slidesPerView === 0 || index === slides.length - 1) { // Only create bullets for slide groups
            const bullet = document.createElement("div");
            bullet.className = "swiper-pagination-bullet";
            if (index === 0) {
                bullet.classList.add("swiper-pagination-bullet-active");
            }
            bullet.addEventListener("click", () => goToSlide(index));
            swiperPagination.appendChild(bullet);
        }
    });

    // Set initial position
    updateSlidePosition();
}

// Update slide position
function updateSlidePosition() {
    // Calculate the correct translation value
    // For 2 slides per view, we move by 50% increments
    const translationValue = currentSlide * 50;
    swiperWrapper.style.transform = `translateX(-${translationValue}%)`;
    
    // Update pagination
    const bullets = document.querySelectorAll(".swiper-pagination-bullet");
    bullets.forEach((bullet, index) => {
        const bulletPosition = index * slidesPerView;
        if (currentSlide === bulletPosition || 
            (currentSlide === totalSlides - 1 && bulletPosition > currentSlide - slidesPerView)) {
            bullet.classList.add("swiper-pagination-bullet-active");
        } else {
            bullet.classList.remove("swiper-pagination-bullet-active");
        }
    });
}

// Go to specific slide
function goToSlide(index) {
    currentSlide = index;
    // Don't go beyond the last slide
    if (currentSlide > totalSlides - slidesPerView) {
        currentSlide = totalSlides - slidesPerView;
    }
    updateSlidePosition();
}

// Go to next slide
function goToNextSlide() {
    currentSlide = currentSlide + slidesPerView;
    // If we've gone beyond the total slides, loop back to the beginning
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    updateSlidePosition();
}

// Go to previous slide
function goToPrevSlide() {
    currentSlide = currentSlide - slidesPerView;
    // If we've gone before the first slide, loop to the end
    if (currentSlide < 0) {
        currentSlide = totalSlides - slidesPerView;
        if (currentSlide < 0) currentSlide = 0; // Safeguard
    }
    updateSlidePosition();
}

// Event listeners
prevButton.addEventListener("click", goToPrevSlide);
nextButton.addEventListener("click", goToNextSlide);

// Auto slide functionality
let autoSlideInterval = setInterval(goToNextSlide, 5000);

// Pause auto slide on hover
swiperWrapper.addEventListener("mouseenter", () => {
    clearInterval(autoSlideInterval);
});

swiperWrapper.addEventListener("mouseleave", () => {
    autoSlideInterval = setInterval(goToNextSlide, 5000);
});

// Initialize the swiper
initSwiper();



const blogData = [
    {
        id: 1,
        title: "Uğurlu biznes üçün hansı veb trendləri izləməlisən?",
        image: "media/post-1.jpg",
        date: "Feb 27, 2025",
        tags: ["webdesign", "marketing", "sayt"]
    },
    {
        id: 2,
        title: "DeepSeek AI: Yeni Nəsil Süni İntellekt Aləti",
        image: "media/post-2.jpg",
        date: "Feb 6, 2025",
        tags: ["sayt yaratmaq", "sayt sifarişi", "saytların hazırlanması"]
    },
    {
        id: 3,
        title: "2025-ci ildə Onlayn Biznesin Trendləri",
        image: "media/post-3.jpg",
        date: "Jan 29, 2025",
        tags: ["marketing", "social", "peşəkar veb dizayn"]
    },
    {
        id: 4,
        title: "E-ticarət Saytınızı Necə Optimallaşdıra Bilərsiniz?",
        image: "media/post-3.jpg",
        date: "Jan 15, 2025",
        tags: ["e-ticarət", "marketing", "SEO"]
    },
    {
        id: 5,
        title: "Mobil Tətbiq və ya Veb Sayt: Hansını Seçməli?",
        image: "media/post-2.jpg",
        date: "Jan 3, 2025",
        tags: ["mobil", "veb dizayn", "tətbiq inkişafı"]
    },
    {
        id: 6,
        title: "SEO Strategiyaları: 2025 Yenilikləri",
        image: "media/post-1.jpg",
        date: "Dec 21, 2024",
        tags: ["SEO", "marketing", "axtarış motoru"]
    }
];

// Function to create blog cards
function createBlogCards(blogsToShow = 3) {
    const blogContainer = document.getElementById('blog-container');
    blogContainer.innerHTML = ''; // Clear existing content
    
    // Take only the specified number of blogs
    const displayBlogs = blogData.slice(0, blogsToShow);
    
    displayBlogs.forEach(blog => {
        // Create card element
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';
        
        // Create HTML structure for the card
        blogCard.innerHTML = `
            <div class="blog-image">
                <img src="${blog.image}" alt="${blog.title}" onerror="this.src='https://via.placeholder.com/350x200?text=${encodeURIComponent(blog.title)}'">
            </div>
            <div class="blog-content">
                <h3 class="blog-title">${blog.title}</h3>
                <div class="blog-tags">
                    <span class="tag date-tag">${blog.date}</span>
                    ${blog.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        // Add card to container
        blogContainer.appendChild(blogCard);
    });
}

// Initialize with 3 blog posts
document.addEventListener('DOMContentLoaded', () => {
    createBlogCards(3);
    
    // Add event listener for "View All" button
    document.getElementById('view-all-btn').addEventListener('click', () => {
        createBlogCards(blogData.length);
    });
});