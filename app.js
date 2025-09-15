// Portfolio Website JavaScript for Shirshak Dixit - Developer, Writer & Leader
// Implementing Navdeep-style loading screen, animations, and interactive elements

// Project data
const projects = [
  {
    id: 1,
    title: "PPT GENERATOR",
    technologies: ["TYPESCRIPT", "REACT", "VITE"],
    description:
      "AI-powered presentation generator that converts markdown text to professional PowerPoint slides with intelligent content structuring and modern design templates.",
    githubUrl: "https://github.com/shirshak-18/ppt-generator",
    category: "Web Development",
  },
  {
    id: 2,
    title: "MYNTRA CLONE",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    description:
      "E-commerce platform replica with product browsing, cart functionality, and responsive user interface design mimicking the popular Myntra shopping experience.",
    githubUrl: "https://github.com/shirshak-18/myntra-clone",
    category: "Web Development",
  },
  {
    id: 3,
    title: "CRICKET GAME",
    technologies: ["JAVASCRIPT", "HTML", "CSS"],
    description:
      "Interactive bat-ball-stump strategy game where players choose options and compete against computer logic with win/loss mechanics based on classic hand game rules.",
    githubUrl: "https://github.com/shirshak-18/Cricket-Game",
    category: "Game Development",
  },
  {
    id: 4,
    title: "TODO APP",
    technologies: ["JAVASCRIPT", "HTML", "CSS"],
    description:
      "Task management system with add, edit, delete functionality and local storage persistence for productivity enhancement and organized workflow management.",
    githubUrl: "https://github.com/shirshak-18/TodoApp",
    category: "Web Development",
  },
  {
    id: 5,
    title: "CALCULATOR",
    technologies: ["REACT", "JAVASCRIPT", "CSS"],
    description:
      "Simple calculator application built completely with React featuring basic mathematical operations and clean modern interface design.",
    githubUrl: "https://github.com/shirshak-18/Calculator",
    category: "Web Development",
  },
];

// Certificate data for clickable sections
const certificates = {
  "aap-internship": {
    title: "AAP Internship Completion Certificate",
    issuer: "Aam Aadmi Party",
    date: "August 16, 2024",
    duration: "16/01/2024 - 16/08/2024",
    certificateId: "AAP/AUG/MD2400032",
    signatory: "Pankaj Kr Gupta, National Secretary",
    description:
      "Official completion certificate for 7-month internship at Aam Aadmi Party. Successfully completed internship and executed all tasks diligently and enthusiastically. Certificate signed by National Secretary.",
    category: "Professional Experience",
    details: [
      "Duration: 7 months (January 16, 2024 - August 16, 2024)",
      "Role: Content Department Intern",
      "Certificate ID: AAP/AUG/MD2400032",
      "Authorized by: Pankaj Kr Gupta, National Secretary",
      "Achievements: All tasks executed diligently and enthusiastically",
    ],
  },
  "iit-kanpur-poetry": {
    title: "All India Poetry Writing Competition - Winner",
    issuer: "Hindi Sahitya Sabha (IIT Kanpur affiliated)",
    date: "2024",
    position: "विजेता (Winner)",
    description:
      "Winner of national level All India Poetry Writing Competition organized by Hindi Sahitya Sabha in collaboration with students and Hindi enthusiasts. National level recognition for creative Hindi poetry writing.",
    category: "Literary Achievement",
    details: [
      "Competition: अखिल भारतीय कविता लेखन प्रतियोगिता",
      "Position: विजेता (Winner)",
      "Level: National",
      "Organized by: Hindi Sahitya Sabha (IIT Kanpur affiliated)",
      "Recognition: Creative Hindi poetry writing excellence",
    ],
  },
  "ilc-poetry": {
    title: "Ink of Unity Poetry Competition - Second Position",
    issuer: "IET Literacy Club (ILC)",
    date: "2024",
    position: "Second Position",
    year: "IT-1ST YEAR",
    description:
      "Secured second position in 'Ink of Unity' poetry competition organized by IET Literacy Club. Recognition for creative writing skills and literary expression at college level.",
    category: "Literary Achievement",
    details: [
      "Competition: Ink of Unity Poetry Competition",
      "Position: Second Place",
      "Level: Institutional (College)",
      "Year: IT-1ST YEAR",
      "Organized by: IET Literacy Club (ILC)",
      "Recognition: Creative writing skills and literary expression",
    ],
  },
};

// Cycling words for the animation
const animatedTitles = [
  "DEVELOPER",
  "WRITER",
  "LEADER",
  "CREATOR",
  "PROBLEM SOLVER",
];

class PortfolioApp {
  constructor() {
    this.startTime = Date.now();
    this.isLoading = true;
    this.currentTitleIndex = 0;
    this.init();
  }

  init() {
    this.setupLoadingScreen();
    this.setupDateDisplay();
    this.addModalStyles();

    // Initialize main functionality after loading
    setTimeout(() => {
      this.initMainFunctionality();
    }, 3000);
  }

  // Critical: Loading Screen Implementation
  setupLoadingScreen() {
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");

    // Show loading for 2.5 seconds minimum
    setTimeout(() => {
      this.hideLoadingScreen(loadingScreen, mainContent);
    }, 2500);
  }

  hideLoadingScreen(loadingScreen, mainContent) {
    if (loadingScreen && mainContent) {
      // Fade out loading screen
      loadingScreen.classList.add("fade-out");

      // Show main content after fade
      setTimeout(() => {
        mainContent.classList.add("show");
        this.isLoading = false;

        // Initialize text animations after content is visible
        setTimeout(() => {
          this.setupAboutTextAnimations();
          this.startTitleAnimation(); // Start the cycling animation
        }, 500);
      }, 500);
    }
  }

  // Critical: Dynamic Title Animation - "I AM A DEVELOPER" cycling
  startTitleAnimation() {
    const animatedWordElement = document.getElementById("animated-word");
    if (!animatedWordElement) return;

    // Start cycling after initial delay
    setTimeout(() => {
      setInterval(() => {
        // Fade out current word
        animatedWordElement.style.opacity = "0";
        animatedWordElement.style.transform = "translateY(-10px)";

        setTimeout(() => {
          // Change to next word
          this.currentTitleIndex =
            (this.currentTitleIndex + 1) % animatedTitles.length;
          animatedWordElement.textContent =
            animatedTitles[this.currentTitleIndex];

          // Fade in new word
          animatedWordElement.style.opacity = "1";
          animatedWordElement.style.transform = "translateY(0)";
        }, 300);
      }, 2500); // Change every 2.5 seconds
    }, 200); // Wait 0.2 seconds after loading completes
  }

  // Critical: Date Display
  setupDateDisplay() {
    const dateElement = document.getElementById("current-date");
    if (dateElement) {
      const now = new Date();
      const day = now.getDate();
      const month = now
        .toLocaleDateString("en", { month: "short" })
        .toLowerCase();
      dateElement.textContent = `${day} ${month}`;
    }
  }

  // Critical: About Section Text Animations
  setupAboutTextAnimations() {
    const animatedTexts = document.querySelectorAll(".animated-text");

    animatedTexts.forEach((textElement, index) => {
      const text = textElement.getAttribute("data-text");
      if (text) {
        // Clear existing content
        textElement.innerHTML = "";
        textElement.classList.add("typing");

        // Create span for each character
        const chars = text.split("");
        chars.forEach((char, charIndex) => {
          const span = document.createElement("span");
          span.textContent = char === " " ? "\u00A0" : char; // Non-breaking space
          span.style.animationDelay = `${index * 1000 + charIndex * 20}ms`;
          textElement.appendChild(span);
        });
      }
    });
  }

  // Initialize main app functionality
  initMainFunctionality() {
    this.setupNavigation();
    this.setupProjectCards();
    this.setupContactForm();
    this.setupScrollAnimations();
    this.startSessionTimer();
    this.setupTechStackAnimation();
    this.setupClickableSections();
    this.setupExperienceAnimations();
    this.setupAchievementAnimations();
  }

  // Enhanced Clickable Sections for Experience and Achievements
  setupClickableSections() {
    // Wait for DOM to be fully ready
    setTimeout(() => {
      const clickableSections = document.querySelectorAll(".clickable-section");

      clickableSections.forEach((section, index) => {
        const certificateType = section.getAttribute("data-certificate");
        /*console.log(
          `Section ${index + 1}: data-certificate="${certificateType}"`
        );*/

        // Remove any existing event listeners to prevent duplicates
        const newSection = section.cloneNode(true);
        section.parentNode.replaceChild(newSection, section);

        // Add click event listener
        newSection.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();

          /*console.log(
            "Clicked section with certificate type:",
            certificateType
          );*/

          if (certificateType && certificates[certificateType]) {
            //console.log("Certificate found, showing modal...");
            this.showCertificateModal(certificates[certificateType]);
          } else {
            console.error("Certificate not found for type:", certificateType);
            //console.log("Available certificates:", Object.keys(certificates));
            this.showNotification("Certificate details not available", "error");
          }
        });

        // Enhanced hover effects
        newSection.addEventListener("mouseenter", () => {
          newSection.style.transform = "translateY(-4px) scale(1.01)";
          newSection.style.boxShadow = "0 25px 50px rgba(255, 255, 255, 0.1)";
        });

        newSection.addEventListener("mouseleave", () => {
          newSection.style.transform = "translateY(0) scale(1)";
          newSection.style.boxShadow = "none";
        });
      });
    }, 100);
  }

  showCertificateModal(certificate) {
    //console.log("Showing certificate modal for:", certificate.title);

    // Create enhanced certificate modal
    const modal = document.createElement("div");
    modal.className = "certificate-modal";

    // Build details list HTML
    const detailsList = certificate.details
      ? `<div class="certificate-modal__details">
                <h4>Certificate Details:</h4>
                <ul>
                    ${certificate.details
                      .map((detail) => `<li>${detail}</li>`)
                      .join("")}
                </ul>
            </div>`
      : "";

    modal.innerHTML = `
            <div class="certificate-modal__backdrop"></div>
            <div class="certificate-modal__content">
                <div class="certificate-modal__header">
                    <div class="certificate-modal__title-area">
                        <h2>${certificate.title}</h2>
                        <div class="certificate-modal__category">${
                          certificate.category
                        }</div>
                    </div>
                    <button class="certificate-modal__close">&times;</button>
                </div>
                <div class="certificate-modal__body">
                    <div class="certificate-modal__info">
                        <div class="certificate-info-item">
                            <label>Issuer:</label>
                            <span>${certificate.issuer}</span>
                        </div>
                        <div class="certificate-info-item">
                            <label>Date:</label>
                            <span>${certificate.date}</span>
                        </div>
                        ${
                          certificate.position
                            ? `
                        <div class="certificate-info-item">
                            <label>Position:</label>
                            <span class="position-highlight">${certificate.position}</span>
                        </div>`
                            : ""
                        }
                        ${
                          certificate.certificateId
                            ? `
                        <div class="certificate-info-item">
                            <label>Certificate ID:</label>
                            <span class="certificate-id">${certificate.certificateId}</span>
                        </div>`
                            : ""
                        }
                        ${
                          certificate.signatory
                            ? `
                        <div class="certificate-info-item">
                            <label>Authorized by:</label>
                            <span>${certificate.signatory}</span>
                        </div>`
                            : ""
                        }
                        ${
                          certificate.year
                            ? `
                        <div class="certificate-info-item">
                            <label>Academic Year:</label>
                            <span>${certificate.year}</span>
                        </div>`
                            : ""
                        }
                    </div>
                    <div class="certificate-modal__description">
                        <h4>Description:</h4>
                        <p>${certificate.description}</p>
                    </div>
                    ${detailsList}
                    <div class="certificate-modal__actions">
                        <button class="certificate-modal__btn certificate-modal__btn--primary" id="view-certificate-btn">
                            VIEW FULL CERTIFICATE
                        </button>
                        <button class="certificate-modal__btn certificate-modal__btn--secondary" id="close-certificate-btn">
                            CLOSE
                        </button>
                    </div>
                </div>
            </div>
        `;

    document.body.appendChild(modal);
    document.body.style.overflow = "hidden";

    // Close modal functionality
    const closeModal = () => {
      modal.remove();
      document.body.style.overflow = "";
    };

    const closeBtn = modal.querySelector(".certificate-modal__close");
    const backdrop = modal.querySelector(".certificate-modal__backdrop");
    const closeBtnSecondary = modal.querySelector("#close-certificate-btn");

    if (closeBtn) {
      closeBtn.addEventListener("click", closeModal);
    }
    if (backdrop) {
      backdrop.addEventListener("click", closeModal);
    }
    if (closeBtnSecondary) {
      closeBtnSecondary.addEventListener("click", closeModal);
    }

    // Primary button functionality
    const primaryBtn = modal.querySelector("#view-certificate-btn");
    if (primaryBtn) {
      primaryBtn.addEventListener("click", () => {
        this.showNotification(
          "Certificate viewing functionality coming soon!",
          "info"
        );
      });
    }

    // ESC key functionality
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeModal();
        document.removeEventListener("keydown", handleEscape);
      }
    };
    document.addEventListener("keydown", handleEscape);
  }

  // Show notification system
  showNotification(message, type = "info") {
    const notification = document.createElement("div");
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
            <div class="notification__content">
                <span class="notification__message">${message}</span>
                <button class="notification__close">&times;</button>
            </div>
        `;

    // Add to page
    document.body.appendChild(notification);

    // Auto remove after 4 seconds
    setTimeout(() => {
      if (document.body.contains(notification)) {
        notification.remove();
      }
    }, 4000);

    // Manual close
    const closeBtn = notification.querySelector(".notification__close");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => notification.remove());
    }
  }

  // Add modal and notification styles
  addModalStyles() {
    if (!document.querySelector("#modal-styles")) {
      const modalStyles = `
                .project-modal, .certificate-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 2000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    animation: modalFadeIn 0.3s ease;
                }
                .project-modal__backdrop, .certificate-modal__backdrop {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.9);
                    backdrop-filter: blur(10px);
                }
                .project-modal__content, .certificate-modal__content {
                    background: var(--color-surface);
                    border: 1px solid var(--color-border);
                    border-radius: 8px;
                    max-width: 700px;
                    width: 100%;
                    max-height: 85vh;
                    overflow-y: auto;
                    position: relative;
                    z-index: 1;
                }
                .project-modal__header, .certificate-modal__header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    padding: 24px;
                    border-bottom: 1px solid var(--color-border);
                }
                .certificate-modal__title-area {
                    flex: 1;
                }
                .project-modal__header h2, .certificate-modal__header h2 {
                    font-size: 22px;
                    font-weight: bold;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin: 0 0 8px 0;
                    color: var(--color-text);
                    line-height: 1.3;
                }
                .certificate-modal__category {
                    font-size: 12px;
                    color: var(--color-success);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    font-weight: bold;
                    background: rgba(0, 255, 136, 0.1);
                    padding: 4px 8px;
                    border-radius: 4px;
                    display: inline-block;
                }
                .project-modal__close, .certificate-modal__close {
                    background: none;
                    border: none;
                    color: var(--color-text);
                    font-size: 32px;
                    cursor: pointer;
                    padding: 0;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: color 0.2s ease;
                    line-height: 1;
                    flex-shrink: 0;
                }
                .project-modal__close:hover, .certificate-modal__close:hover {
                    color: var(--color-primary);
                }
                .project-modal__body, .certificate-modal__body {
                    padding: 24px;
                }
                .certificate-modal__info {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 16px;
                    margin-bottom: 24px;
                    padding: 16px;
                    background: rgba(255, 255, 255, 0.02);
                    border-radius: 6px;
                }
                .certificate-info-item {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }
                .certificate-info-item label {
                    font-size: 11px;
                    color: var(--color-text-secondary);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    font-weight: bold;
                }
                .certificate-info-item span {
                    font-size: 14px;
                    color: var(--color-text);
                    font-weight: 500;
                }
                .position-highlight {
                    color: var(--color-gold) !important;
                    font-weight: bold !important;
                }
                .certificate-id {
                    color: var(--color-warning) !important;
                    font-family: var(--font-family-mono);
                }
                .certificate-modal__description,
                .certificate-modal__details {
                    margin-bottom: 24px;
                }
                .certificate-modal__description h4,
                .certificate-modal__details h4 {
                    font-size: 14px;
                    color: var(--color-text);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 12px;
                    font-weight: bold;
                }
                .certificate-modal__description p {
                    font-size: 14px;
                    line-height: 1.6;
                    color: var(--color-text-secondary);
                    margin: 0;
                }
                .certificate-modal__details ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .certificate-modal__details li {
                    font-size: 14px;
                    line-height: 1.5;
                    color: var(--color-text-secondary);
                    margin-bottom: 8px;
                    padding-left: 16px;
                    position: relative;
                }
                .certificate-modal__details li:before {
                    content: "•";
                    color: var(--color-success);
                    font-weight: bold;
                    position: absolute;
                    left: 0;
                }
                .project-modal__tech {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-bottom: 20px;
                }
                .tech-tag {
                    background: var(--color-accent);
                    color: var(--color-text);
                    padding: 6px 12px;
                    font-size: 12px;
                    font-weight: bold;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    border-radius: 4px;
                }
                .project-modal__description {
                    font-size: 16px;
                    line-height: 1.6;
                    color: var(--color-text-secondary);
                    margin-bottom: 24px;
                }
                .project-modal__actions, .certificate-modal__actions {
                    display: flex;
                    gap: 12px;
                    flex-wrap: wrap;
                }
                .project-modal__btn, .certificate-modal__btn {
                    padding: 10px 20px;
                    text-decoration: none;
                    font-weight: bold;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    font-size: 12px;
                    transition: all 0.2s ease;
                    border-radius: 4px;
                    border: none;
                    cursor: pointer;
                    font-family: var(--font-family-base);
                }
                .certificate-modal__btn--primary {
                    background: var(--color-primary);
                    color: var(--color-background);
                }
                .certificate-modal__btn--secondary {
                    background: transparent;
                    color: var(--color-text-secondary);
                    border: 1px solid var(--color-border);
                }
                .project-modal__btn:hover, 
                .certificate-modal__btn--primary:hover {
                    background: var(--color-primary-hover);
                    transform: translateY(-1px);
                    color: var(--color-background);
                }
                .certificate-modal__btn--secondary:hover {
                    background: var(--color-accent);
                    color: var(--color-text);
                }
                
                /* Notification Styles */
                .notification {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    z-index: 3000;
                    background: var(--color-surface);
                    border: 1px solid var(--color-border);
                    border-radius: 6px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                    min-width: 300px;
                    max-width: 400px;
                    animation: slideInRight 0.3s ease;
                }
                .notification--error {
                    border-left: 4px solid var(--color-warning);
                }
                .notification--info {
                    border-left: 4px solid var(--color-success);
                }
                .notification__content {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 16px;
                }
                .notification__message {
                    font-size: 14px;
                    color: var(--color-text);
                    flex: 1;
                }
                .notification__close {
                    background: none;
                    border: none;
                    color: var(--color-text-secondary);
                    font-size: 18px;
                    cursor: pointer;
                    padding: 0;
                    margin-left: 12px;
                }
                .notification__close:hover {
                    color: var(--color-primary);
                }
                
                @keyframes modalFadeIn {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(100px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                @media (max-width: 768px) {
                    .project-modal, .certificate-modal {
                        padding: 16px;
                    }
                    .project-modal__header, .project-modal__body,
                    .certificate-modal__header, .certificate-modal__body {
                        padding: 16px;
                    }
                    .certificate-modal__info {
                        grid-template-columns: 1fr;
                    }
                    .project-modal__actions, .certificate-modal__actions {
                        flex-direction: column;
                    }
                    .notification {
                        right: 10px;
                        left: 10px;
                        min-width: auto;
                    }
                }
            `;

      const styleSheet = document.createElement("style");
      styleSheet.id = "modal-styles";
      styleSheet.textContent = modalStyles;
      document.head.appendChild(styleSheet);
    }
  }

  // Navigation functionality
  setupNavigation() {
    const navLinks = document.querySelectorAll(".nav__link");

    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const targetId = link.getAttribute("href");
        //console.log("Navigation clicked:", targetId);
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          const navHeight = 80;
          const targetPosition = targetSection.offsetTop - navHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });

          this.updateActiveNavLink(link);
        } else {
          console.error("Target section not found:", targetId);
        }
      });
    });

    window.addEventListener("scroll", () => {
      this.updateActiveNavOnScroll();
    });
  }

  updateActiveNavLink(activeLink) {
    const navLinks = document.querySelectorAll(".nav__link");
    navLinks.forEach((link) => {
      link.style.color = "var(--color-text-secondary)";
      link.style.fontWeight = "var(--font-weight-medium)";
    });
    activeLink.style.color = "var(--color-primary)";
    activeLink.style.fontWeight = "var(--font-weight-bold)";
  }

  updateActiveNavOnScroll() {
    const sections = [
      { id: "home", href: "#home" },
      { id: "about", href: "#about" },
      { id: "experience", href: "#experience" },
      { id: "works", href: "#works" },
      { id: "contact", href: "#contact" },
    ];

    const scrollPosition = window.scrollY + 150;

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      const navLink = document.querySelector(`a[href="${section.href}"]`);

      if (element && navLink) {
        const sectionTop = element.offsetTop;
        const sectionBottom = sectionTop + element.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          this.updateActiveNavLink(navLink);
        }
      }
    });
  }

  // Project cards functionality
  setupProjectCards() {
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((card) => {
      card.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const projectId = parseInt(card.getAttribute("data-project"));
        //console.log("Project card clicked:", projectId);
        this.handleProjectClick(projectId);
      });

      card.addEventListener("mouseenter", () => {
        this.animateCardHover(card, true);
      });

      card.addEventListener("mouseleave", () => {
        this.animateCardHover(card, false);
      });
    });
  }

  handleProjectClick(projectId) {
    const project = projects.find((p) => p.id === projectId);
    //console.log("Found project:", project);
    if (project) {
      this.showProjectDetails(project);
    } else {
      console.error("Project not found:", projectId);
    }
  }

  showProjectDetails(project) {
    //console.log("Showing project modal for:", project.title);
    const overlay = document.createElement("div");
    overlay.className = "project-modal";
    overlay.innerHTML = `
            <div class="project-modal__backdrop"></div>
            <div class="project-modal__content">
                <div class="project-modal__header">
                    <h2>${project.title}</h2>
                    <button class="project-modal__close">&times;</button>
                </div>
                <div class="project-modal__body">
                    <div class="project-modal__tech">
                        ${project.technologies
                          .map(
                            (tech) => `<span class="tech-tag">${tech}</span>`
                          )
                          .join("")}
                    </div>
                    <p class="project-modal__description">${
                      project.description
                    }</p>
                    <div class="project-modal__actions">
                        <a href="${
                          project.githubUrl
                        }" target="_blank" class="project-modal__btn">
                            VIEW ON GITHUB
                        </a>
                    </div>
                </div>
            </div>
        `;

    document.body.appendChild(overlay);
    document.body.style.overflow = "hidden";

    const closeModal = () => {
      overlay.remove();
      document.body.style.overflow = "";
    };

    const closeBtn = overlay.querySelector(".project-modal__close");
    const backdrop = overlay.querySelector(".project-modal__backdrop");

    if (closeBtn) {
      closeBtn.addEventListener("click", closeModal);
    }
    if (backdrop) {
      backdrop.addEventListener("click", closeModal);
    }

    document.addEventListener("keydown", function handleEscape(e) {
      if (e.key === "Escape") {
        closeModal();
        document.removeEventListener("keydown", handleEscape);
      }
    });
  }

  animateCardHover(card, isEntering) {
    if (isEntering) {
      card.style.transform = "translateY(-8px) scale(1.02)";
      card.style.boxShadow = "0 20px 40px rgba(255, 255, 255, 0.1)";
    } else {
      card.style.transform = "translateY(0) scale(1)";
      card.style.boxShadow = "none";
    }
  }

  // Experience section animations
  setupExperienceAnimations() {
    const experienceItem = document.querySelector(".experience__item");
    if (experienceItem) {
      experienceItem.addEventListener("mouseenter", () => {
        experienceItem.style.transform = "translateY(-4px) scale(1.01)";
        experienceItem.style.boxShadow = "0 25px 50px rgba(0, 255, 136, 0.1)";
      });

      experienceItem.addEventListener("mouseleave", () => {
        experienceItem.style.transform = "translateY(0) scale(1)";
        experienceItem.style.boxShadow = "none";
      });
    }
  }

  // Achievement section animations
  setupAchievementAnimations() {
    const achievementItems = document.querySelectorAll(".achievement__item");

    achievementItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        const badge = item.querySelector(".achievement__badge");
        if (badge) {
          badge.style.transform = "scale(1.2) rotate(10deg)";
          badge.style.transition = "transform 0.3s ease";
        }

        if (item.querySelector(".achievement__position.winner")) {
          item.style.boxShadow = "0 25px 50px rgba(255, 215, 0, 0.2)";
        }
      });

      item.addEventListener("mouseleave", () => {
        const badge = item.querySelector(".achievement__badge");
        if (badge) {
          badge.style.transform = "scale(1) rotate(0deg)";
        }
        item.style.boxShadow = "none";
      });
    });
  }

  // Contact form functionality
  setupContactForm() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(form);

      try {
        const res = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: { Accept: "application/json" },
        });

        if (res.ok) {
          form.reset();
          status.style.display = "block";
          status.textContent = "✅ Message sent! I'll reply soon.";
          setTimeout(() => {
            status.style.display = "none";
          }, 5000);
        } else {
          status.style.display = "block";
          status.textContent = "⚠️ There was a problem sending your message.";
        }
      } catch (error) {
        status.style.display = "block";
        status.textContent = "⚠️ Network error. Try again later.";
      }
    });
  }

  validateField(field) {
    const value = field.value.trim();
    let isValid = true;

    this.clearFieldError(field);

    if (field.type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        this.showFieldError(field, "Please enter a valid email address");
        isValid = false;
      }
    } else if (field.required && !value) {
      this.showFieldError(field, "This field is required");
      isValid = false;
    } else if (field.name === "name" && value.length < 2) {
      this.showFieldError(field, "Name must be at least 2 characters");
      isValid = false;
    } else if (field.name === "message" && value.length < 10) {
      this.showFieldError(field, "Message must be at least 10 characters");
      isValid = false;
    }

    return isValid;
  }

  showFieldError(field, message) {
    field.style.borderBottomColor = "#ff4444";
    field.style.color = "#ff4444";

    let errorMsg = field.parentNode.querySelector(".field-error");
    if (!errorMsg) {
      errorMsg = document.createElement("div");
      errorMsg.className = "field-error";
      errorMsg.style.cssText = `
                color: #ff4444;
                font-size: 12px;
                margin-top: 8px;
                opacity: 0;
                transform: translateY(-10px);
                transition: all 0.3s ease;
            `;
      field.parentNode.appendChild(errorMsg);
    }

    errorMsg.textContent = message;
    setTimeout(() => {
      errorMsg.style.opacity = "1";
      errorMsg.style.transform = "translateY(0)";
    }, 10);
  }

  clearFieldError(field) {
    field.style.borderBottomColor = "var(--color-border)";
    field.style.color = "var(--color-text)";

    const errorMsg = field.parentNode.querySelector(".field-error");
    if (errorMsg) {
      errorMsg.style.opacity = "0";
      errorMsg.style.transform = "translateY(-10px)";
      setTimeout(() => errorMsg.remove(), 300);
    }
  }

  handleFormSubmit(form) {
    const inputs = form.querySelectorAll(".form-input");
    let isValid = true;

    inputs.forEach((input) => {
      if (!this.validateField(input)) {
        isValid = false;
      }
    });

    if (isValid) {
      this.submitForm(form);
    }
  }

  submitForm(form) {
    const submitBtn = form.querySelector(".form-submit");
    const originalText = submitBtn.textContent;

    submitBtn.textContent = "SENDING...";
    submitBtn.disabled = true;
    submitBtn.style.opacity = "0.7";

    setTimeout(() => {
      submitBtn.textContent = "MESSAGE SENT!";
      submitBtn.style.backgroundColor = "var(--color-success)";

      form.reset();
      this.showSuccessMessage();

      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.opacity = "1";
        submitBtn.style.backgroundColor = "var(--color-primary)";
      }, 3000);
    }, 2000);
  }

  showSuccessMessage() {
    const message = document.createElement("div");
    message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--color-surface);
            color: var(--color-success);
            padding: 24px 32px;
            border: 2px solid var(--color-success);
            border-radius: 8px;
            font-weight: bold;
            font-size: 16px;
            z-index: 2000;
            animation: successFade 4s ease forwards;
            text-align: center;
        `;
    message.textContent =
      "Thank you for reaching out! Your message has been sent successfully.";

    if (!document.querySelector("#success-animation")) {
      const style = document.createElement("style");
      style.id = "success-animation";
      style.textContent = `
                @keyframes successFade {
                    0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
                    20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                    80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                    100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
                }
            `;
      document.head.appendChild(style);
    }

    document.body.appendChild(message);
    setTimeout(() => message.remove(), 4000);
  }

  // Scroll animations
  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll(
      ".experience__item, .achievement__item, .project-card, .contact__form, .footer__content"
    );
    animateElements.forEach((el) => {
      el.classList.add("reveal-on-scroll"); // start hidden
      observer.observe(el);
    });
  }

  // Tech stack animation
  setupTechStackAnimation() {
    const techRows = document.querySelectorAll(".tech-row");

    techRows.forEach((row) => {
      row.addEventListener("mouseenter", () => {
        row.querySelector(".tech-text").style.animationPlayState = "paused";
        row.style.transform = "scale(1.05)";
        row.style.transition = "transform 0.3s ease";
      });

      row.addEventListener("mouseleave", () => {
        row.querySelector(".tech-text").style.animationPlayState = "running";
        row.style.transform = "scale(1)";
      });
    });
  }

  // Session timer
  startSessionTimer() {
    const timerElement = document.getElementById("session-timer");
    if (!timerElement) return;

    const updateTimer = () => {
      const elapsed = Date.now() - this.startTime;
      const hours = Math.floor(elapsed / 3600000);
      const minutes = Math.floor((elapsed % 3600000) / 60000);
      const seconds = Math.floor((elapsed % 60000) / 1000);

      const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
      timerElement.textContent = formattedTime;
    };

    updateTimer();
    setInterval(updateTimer, 1000);
  }
}

// Initialize when DOM loads
document.addEventListener("DOMContentLoaded", () => {
  const app = new PortfolioApp();

  // Handle hash links
  if (window.location.hash) {
    setTimeout(() => {
      const target = document.querySelector(window.location.hash);
      if (target) {
        const navHeight = 80;
        const targetPosition = target.offsetTop - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }, 3500); // Wait for loading to complete
  }

  /*console.log(
    "Shirshak Dixit Portfolio - Fixed: Loading, Animation & Clickable Sections - initialized successfully!"
  );*/
});

// Global styles for enhanced interactions
const globalStyles = `
    ::-webkit-scrollbar {
        width: 8px;
    }
    
    ::-webkit-scrollbar-track {
        background: var(--color-background);
    }
    
    ::-webkit-scrollbar-thumb {
        background: var(--color-accent);
        border-radius: 4px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background: var(--color-text-secondary);
    }

    ::selection {
        background: var(--color-primary);
        color: var(--color-background);
    }

    .nav__link:focus,
    .project-card:focus,
    .clickable-section:focus,
    .form-input:focus,
    .form-submit:focus {
        outline: 2px solid var(--color-primary);
        outline-offset: 2px;
    }
    
    .nav__link,
    .project-card,
    .clickable-section,
    .form-input,
    .form-submit {
        transition: all 0.3s ease;
    }

    .achievement__badge {
        transition: transform 0.3s ease;
        cursor: default;
    }

    /* Critical: Animated word transition styles */
    .animated-word {
        transition: opacity 0.3s ease, transform 0.3s ease;
    }
`;

const styleSheet = document.createElement("style");
styleSheet.textContent = globalStyles;
document.head.appendChild(styleSheet);

// Performance optimization
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);
if (prefersReducedMotion.matches) {
  const style = document.createElement("style");
  style.textContent = `
        *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    `;
  document.head.appendChild(style);
}
