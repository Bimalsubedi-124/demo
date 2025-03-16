const members = [
    { id: 1, name: "Rohan Sharma", role: "President", avatar: "" },
    { id: 2, name: "Priya Patel", role: "Vice President", avatar: "" },
    { id: 3, name: "Amit Kumar", role: "Secretary", avatar: "" },
    { id: 4, name: "Neha Singh", role: "Treasurer", avatar: "" },
    { id: 5, name: "Vikram Joshi", role: "Tech Lead", avatar: "" },
    { id: 6, name: "Sneha Gupta", role: "Design Lead", avatar: "" },
    { id: 7, name: "Rahul Verma", role: "Marketing Head", avatar: "" },
    { id: 8, name: "Anjali Desai", role: "Event Coordinator", avatar: "" },
    { id: 9, name: "Karan Malhotra", role: "Content Creator", avatar: "" },
    { id: 10, name: "Deepika Reddy", role: "Social Media Manager", avatar: "" },
    { id: 11, name: "Arjun Nair", role: "Web Developer", avatar: "" },
    { id: 12, name: "Meera Iyer", role: "App Developer", avatar: "" },
    { id: 13, name: "Suresh Choudhary", role: "AI Enthusiast", avatar: "" },
    { id: 14, name: "Pooja Mehta", role: "Graphic Designer", avatar: "" },
    { id: 15, name: "Rajesh Singh", role: "Member", avatar: "" }
  ];
  
  // DOM Elements
  const menuToggle = document.getElementById('menuToggle');
  const navbarLinks = document.getElementById('navbarLinks');
  const membersGrid = document.getElementById('membersGrid');
  const contactForm = document.getElementById('contactForm');
  const currentYearEl = document.getElementById('currentYear');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  
  // Set current year in footer
  currentYearEl.textContent = new Date().getFullYear();
  
  // Toggle mobile menu
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navbarLinks.classList.toggle('active');
    });
  }
  
  // Close mobile menu when clicking a navigation link
  document.querySelectorAll('.navbar-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        menuToggle.classList.remove('active');
        navbarLinks.classList.remove('active');
      }
    });
  });
  

  // Show toast notification
  function showToast(message, duration = 3000) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  }
  
  // Handle contact form submission
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Form validation
      if (!name || !email || !subject || !message) {
        showToast('Please fill in all fields');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showToast('Please enter a valid email address');
        return;
      }
      
      // In a real application, you would send the form data to a server here
      console.log('Form submitted:', { name, email, subject, message });
      
      // Reset form
      contactForm.reset();
      
      // Show success message
      showToast('Message sent successfully! We will get back to you soon.');
    });
  }
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if (this.getAttribute('href') === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Event buttons
  document.querySelectorAll('.event-card .btn').forEach(button => {
    button.addEventListener('click', () => {
      showToast('Registration form will be available soon!');
    });
  });
  
  document.querySelector('.view-all').addEventListener('click', () => {
    showToast('More events coming soon!');
  });
  
  // Navbar scroll effect
  function handleScroll() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 10) {
      navbar.style.boxShadow = 'var(--shadow-md)';
    } else {
      navbar.style.boxShadow = 'var(--shadow-sm)';
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  
  // Initialize
  document.addEventListener('DOMContentLoaded', () => {
    renderMembers();
    handleScroll();
  });


  
  
  