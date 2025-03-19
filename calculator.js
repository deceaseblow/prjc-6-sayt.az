// Data structure for the calculator
const calculatorData = {
    staticPages: {
      pageCount: 9,
      designComplexity: 2, // 1: Simple, 2: Medium, 3: Custom
      pricePerPage: [150, 200, 250], // Price per page based on complexity
      getTotal() {
        return this.pageCount * this.pricePerPage[this.designComplexity - 1];
      }
    },
    
    websiteAddons: [
      { id: 'blog', name: 'Bloq', price: 50, checked: false },
      { id: 'userAccess', name: 'Üzv girişi / Profillər', price: 100, checked: true },
      { id: 'responsive', name: 'Responsive', price: 50, checked: false },
      { id: 'forum', name: 'Forum', price: 80, checked: false },
      { id: 'messaging', name: 'Mesajlaşma', price: 70, checked: false },
      { id: 'contactForm', name: 'Əlaqə Forması', price: 40, checked: false },
      { id: 'maps', name: 'Xəritə Məlumatı / Geolocation', price: 60, checked: false },
      { id: 'socialMedia', name: 'Sosial Media inteqrasiyası', price: 50, checked: false },
      { id: 'adminPanel', name: 'Admin Panel', price: 150, checked: false }
    ],
    
    seoOptions: [
      { id: 'headingsMeta', name: 'Başlıqlar & Meta', price: 200, checked: true },
      { id: 'keywords', name: 'Açar söz', price: 150, checked: true },
      { id: 'advancedTech', name: '+20 Qabaqcıl Texnika', price: 300, checked: true },
      { id: 'headingTags', name: 'Başlıq Teqləri', price: 250, checked: true },
      { id: 'sitemap', name: 'Sitemap', price: 100, checked: false }
    ],
    
    ecommerceAddons: [
      { id: 'payment', name: 'Ödəniş', price: 200, checked: true },
      { id: 'cart', name: 'Səbət', price: 180, checked: true },
      { id: 'products', name: 'Məhsullar', price: 150, checked: false },
      { id: 'filters', name: 'Filtr', price: 120, checked: false },
      { id: 'favorites', name: 'Bəyəndiklərim', price: 100, checked: false },
      { id: 'productInfo', name: 'Məhsul Haqqında', price: 80, checked: false }
    ],
    
    logoDesign: {
      complexity: 3, // 0: Not needed, 1: Simple, 2: Medium, 3: Custom
      prices: [0, 100, 150, 200],
      getTotal() {
        return this.prices[this.complexity];
      }
    },
    
    minimumPrice: 450,
    
    calculateAddonsTotal(category) {
      return category.reduce((total, item) => {
        return total + (item.checked ? item.price : 0);
      }, 0);
    },
    
    getGrandTotal() {
      let total = this.staticPages.getTotal();
      total += this.calculateAddonsTotal(this.websiteAddons);
      total += this.calculateAddonsTotal(this.seoOptions);
      total += this.calculateAddonsTotal(this.ecommerceAddons);
      total += this.logoDesign.getTotal();
      
      return Math.max(total, this.minimumPrice);
    }
  };
  
  // Initialize the calculator
  function initCalculator() {
    // Add Tailwind classes to main elements
    setupTailwindClasses();
    
    // Render static pages section
    initStaticPages();
    
    // Render website addons
    renderCheckboxes('calc-left-two-web-more', calculatorData.websiteAddons);
    
    // Render SEO options
    renderCheckboxes('calc-left-three-web-more', calculatorData.seoOptions, true);
    
    // Render e-commerce addons
    renderCheckboxes('calc-left-four-web-more', calculatorData.ecommerceAddons);
    
    // Initialize logo design
    initLogoDesign();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initial calculation
    calculateTotal();
  }
  
  // Add Tailwind classes to elements
  function setupTailwindClasses() {
    // Main calculator container
    const calculator = document.getElementById('calculator');
    calculator.className = 'flex flex-col md:flex-row gap-8 max-w-7xl mx-auto p-6 bg-gray-50 rounded-xl shadow-lg';
    
    // Left column
    const calculatorLeft = document.getElementById('calculator-left');
    calculatorLeft.className = 'flex-1 space-y-6';
    calculatorLeft.querySelector('h1').className = 'text-3xl font-bold text-gray-800 mb-6';
    
    // Right column
    const calculatorRight = document.getElementById('calculator-right');
    calculatorRight.className = 'w-full md:w-80 bg-white rounded-lg shadow-md p-6 h-fit';
    
    // Style all section containers
    const sections = ['calc-left-one', 'calc-left-two', 'calc-left-three', 'calc-left-four', 'calc-left-five'];
    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.className = 'bg-white p-6 rounded-lg shadow-sm';
        const heading = section.querySelector('h3');
        if (heading) heading.className = 'text-xl font-semibold text-gray-700 mb-4';
        
        // Style the cost display for each section
        const costDiv = section.querySelector('div:last-child');
        if (costDiv) {
          costDiv.className = 'flex justify-between items-center mt-4 pt-4 border-t border-gray-200';
          const costLabel = costDiv.querySelector('h3');
          if (costLabel) costLabel.className = 'text-gray-600 font-medium';
          const costValue = costDiv.querySelector('h2');
          if (costValue) costValue.className = 'text-purple-600 font-bold';
        }
      }
    });
    
    // Style the right side summary
    const calcRightOne = document.getElementById('calc-right-one');
    if (calcRightOne) {
      const title = calcRightOne.querySelector('h2');
      if (title) title.className = 'text-xl font-bold mb-4 text-gray-800';
      
      const summaryItems = calcRightOne.querySelectorAll('div:nth-child(1) > div:nth-child(2) > h2');
      summaryItems.forEach(item => {
        item.className = 'text-sm text-gray-600 mb-2';
      });
      
      const hr = calcRightOne.querySelector('hr');
      if (hr) hr.className = 'my-4 border-t border-gray-200';
      
      const minimum = calcRightOne.querySelector('div:nth-child(1) > div:nth-child(4) > h2:nth-child(2)');
      if (minimum) minimum.className = 'text-sm text-gray-500';
      
      const totalLabel = calcRightOne.querySelector('div:nth-child(2) > h1:nth-child(1)');
      if (totalLabel) totalLabel.className = 'text-lg font-medium text-gray-700';
      
      const totalValue = calcRightOne.querySelector('div:nth-child(2) > h1:nth-child(2)');
      if (totalValue) totalValue.className = 'text-3xl font-bold text-purple-600';
      
      const orderButton = calcRightOne.querySelector('button');
      if (orderButton) orderButton.className = 'w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg mt-6 transition duration-200';
    }
  }
  
  // Initialize static pages section
  function initStaticPages() {
    const staticPageContainer = document.getElementById('calc-left-one-inside');
    if (staticPageContainer) {
      // Style page count slider section
      const pageCountHeading = staticPageContainer.querySelector('h4:first-child');
      if (pageCountHeading) pageCountHeading.className = 'text-gray-700 mb-2';
      
      const pageCountSlider = document.getElementById('staticPageCount');
      if (pageCountSlider) {
        pageCountSlider.className = 'w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-500';
        pageCountSlider.min = 1;
        pageCountSlider.max = 20;
        pageCountSlider.value = calculatorData.staticPages.pageCount;
        
        // Add slider labels
        const sliderContainer = pageCountSlider.parentElement;
        if (sliderContainer) {
          const sliderLabels = document.createElement('div');
          sliderLabels.className = 'flex justify-between text-xs text-gray-500 mt-1';
          sliderLabels.innerHTML = '<span>1</span><span>20</span>';
          sliderContainer.appendChild(sliderLabels);
        }
      }
      
      // Style complexity slider section
      const complexitySection = staticPageContainer.querySelector('div > div');
      if (complexitySection) {
        const complexityLabels = complexitySection.querySelector('div');
        if (complexityLabels) complexityLabels.className = 'flex justify-between text-sm text-gray-600 mb-1';
        
        const complexitySlider = document.getElementById('designComplexity');
        if (complexitySlider) {
          complexitySlider.className = 'w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-500';
          complexitySlider.min = 1;
          complexitySlider.max = 3;
          complexitySlider.value = calculatorData.staticPages.designComplexity;
        }
      }
      
      // Update the display
      updateStaticPagesDisplay();
    }
  }
  
  // Update static pages display
  function updateStaticPagesDisplay() {
    const pageCountDisplay = document.getElementById('staticPagesCost');
    if (pageCountDisplay) {
      pageCountDisplay.textContent = `${calculatorData.staticPages.pageCount} səhifə / ₼ ${calculatorData.staticPages.getTotal()}`;
    }
  }
  
  // Initialize logo design section
  function initLogoDesign() {
    const logoContainer = document.getElementById('calc-left-five');
    if (logoContainer) {
      const logoLabels = logoContainer.querySelector('div:first-of-type');
      if (logoLabels) logoLabels.className = 'flex justify-between text-sm text-gray-600 mb-1';
      
      const logoSlider = document.getElementById('logoComplexity');
      if (logoSlider) {
        logoSlider.className = 'w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-500';
        logoSlider.min = 0;
        logoSlider.max = 3;
        logoSlider.value = calculatorData.logoDesign.complexity;
      }
      
      // Update the display
      updateLogoDesignDisplay();
    }
  }
  
  // Update logo design display
  function updateLogoDesignDisplay() {
    const logoDisplay = document.getElementById('logoCost');
    if (logoDisplay) {
      logoDisplay.textContent = `₼ ${calculatorData.logoDesign.getTotal()}`;
    }
  }
  
  // Render checkboxes dynamically
  function renderCheckboxes(containerId, items, isCheckedStyle = false) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    // Create grid layout
    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-1 md:grid-cols-2 gap-4';
    container.appendChild(grid);
    
    items.forEach(item => {
      if (isCheckedStyle) {
        // Render as checked style (like SEO options)
        const div = document.createElement('div');
        div.className = 'flex items-center gap-2 cursor-pointer';
        div.dataset.id = item.id;
        
        const checkmark = document.createElement('div');
        checkmark.className = `flex items-center justify-center rounded-md w-6 h-6 ${item.checked ? 'bg-purple-500 text-white' : 'bg-white border border-gray-300 text-white'}`;
        
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg.setAttribute('class', 'h-4 w-4');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('stroke', 'currentColor');
        
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('stroke-linecap', 'round');
        path.setAttribute('stroke-linejoin', 'round');
        path.setAttribute('stroke-width', '2');
        path.setAttribute('d', 'M5 13l4 4L19 7');
        
        svg.appendChild(path);
        checkmark.appendChild(svg);
        
        const label = document.createElement('span');
        label.className = 'text-gray-700';
        label.textContent = `${item.name} (₼ ${item.price})`;
        
        div.appendChild(checkmark);
        div.appendChild(label);
        
        // Add click event
        div.addEventListener('click', () => {
          item.checked = !item.checked;
          checkmark.className = `flex items-center justify-center rounded-md w-6 h-6 ${item.checked ? 'bg-purple-500 text-white' : 'bg-white border border-gray-300 text-white'}`;
          calculateTotal();
        });
        
        grid.appendChild(div);
      } else {
        // Render as toggle switch
        const div = document.createElement('div');
        div.className = 'flex items-center justify-between py-2';
        div.dataset.id = item.id;
        
        const label = document.createElement('span');
        label.className = 'text-gray-700';
        label.textContent = `${item.name} (₼ ${item.price})`;
        
        const toggle = document.createElement('label');
        toggle.className = 'inline-flex items-center cursor-pointer';
        
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.className = 'sr-only peer';
        input.checked = item.checked;
        input.addEventListener('change', () => {
          item.checked = input.checked;
          calculateTotal();
        });
        
        const slider = document.createElement('div');
        slider.className = 'relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[\'\'] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500';
        
        toggle.appendChild(input);
        toggle.appendChild(slider);
        
        div.appendChild(label);
        div.appendChild(toggle);
        
        grid.appendChild(div);
      }
    });
  }
  
  // Calculate total price
  function calculateTotal() {
    // Update each section cost
    updateStaticPagesDisplay();
    updateLogoDesignDisplay();
    
    // Update website addons cost
    const webAddonsCost = document.getElementById('webAddonsCost');
    const addonsTotal = calculatorData.calculateAddonsTotal(calculatorData.websiteAddons);
    if (webAddonsCost) webAddonsCost.textContent = `₼ ${addonsTotal}`;
    
    // Update SEO cost
    const seoCost = document.getElementById('seoCost');
    const seoTotal = calculatorData.calculateAddonsTotal(calculatorData.seoOptions);
    if (seoCost) seoCost.textContent = `₼ ${seoTotal}`;
    
    // Update e-commerce cost
    const ecommerceCost = document.getElementById('ecommerceCost');
    const ecommerceTotal = calculatorData.calculateAddonsTotal(calculatorData.ecommerceAddons);
    if (ecommerceCost) ecommerceCost.textContent = `₼ ${ecommerceTotal}`;
    
    // Update summary in right panel
    document.getElementById('summary-staticPages').textContent = `Statik səhifələr: ₼ ${calculatorData.staticPages.getTotal()}`;
    document.getElementById('summary-addons').textContent = `Əlavələr: ₼ ${addonsTotal}`;
    document.getElementById('summary-seo').textContent = `SEO: ₼ ${seoTotal}`;
    document.getElementById('summary-ecommerce').textContent = `E-ticarət: ₼ ${ecommerceTotal}`;
    document.getElementById('summary-logo').textContent = `Logo dizaynı: ₼ ${calculatorData.logoDesign.getTotal()}`;
    
    // Update total price
    const totalPrice = document.getElementById('totalPrice');
    const grandTotal = calculatorData.getGrandTotal();
    if (totalPrice) totalPrice.textContent = `₼ ${grandTotal}`;
    
    // Update minimum price note
    document.getElementById('minimum-price').textContent = `Minimum sayt qiyməti ₼ ${calculatorData.minimumPrice}`;
  }
  
  // Set up all event listeners
  function setupEventListeners() {
    // Static page count slider
    const pageCountSlider = document.getElementById('staticPageCount');
    if (pageCountSlider) {
      pageCountSlider.addEventListener('input', (e) => {
        calculatorData.staticPages.pageCount = parseInt(e.target.value);
        updateStaticPagesDisplay();
        calculateTotal();
      });
    }
    
    // Design complexity slider
    const complexitySlider = document.getElementById('designComplexity');
    if (complexitySlider) {
      complexitySlider.addEventListener('input', (e) => {
        calculatorData.staticPages.designComplexity = parseInt(e.target.value);
        updateStaticPagesDisplay();
        calculateTotal();
      });
    }
    
    // Logo design slider
    const logoSlider = document.getElementById('logoComplexity');
    if (logoSlider) {
      logoSlider.addEventListener('input', (e) => {
        calculatorData.logoDesign.complexity = parseInt(e.target.value);
        updateLogoDesignDisplay();
        calculateTotal();
      });
    }
    
    // Order button
    const orderButton = document.getElementById('orderButton');
    if (orderButton) {
      orderButton.addEventListener('click', () => {
        alert('Sifarişiniz üçün təşəkkür edirik! Tezliklə sizinlə əlaqə saxlayacağıq.');
      });
    }
  }
  
  // Initialize calculator when DOM is fully loaded
  document.addEventListener('DOMContentLoaded', initCalculator);