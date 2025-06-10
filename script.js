// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Fade in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// Observe all fade-in elements
document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el)
})

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.querySelector(".mobile-menu")
  const navLinks = document.querySelector(".nav-links")

  if (mobileMenu && navLinks) {
    mobileMenu.addEventListener("click", () => {
      navLinks.classList.toggle("active")
      mobileMenu.classList.toggle("active")
    })
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav-container")) {
      if (navLinks && navLinks.classList.contains("active")) {
        navLinks.classList.remove("active")
        mobileMenu.classList.remove("active")
      }
    }
  })
})

// Navbar background change on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 0 0 1px rgba(0,0,0,0.08), 0 4px 8px rgba(0,0,0,0.12)"
  } else {
    navbar.style.boxShadow = "0 0 0 1px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.08)"
  }
})

// Skills progress bar animation
const skillsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const progressBars = entry.target.querySelectorAll(".progress-bar")
        progressBars.forEach((bar) => {
          const width = bar.getAttribute("data-width")
          setTimeout(() => {
            bar.style.width = width
          }, 500)
        })
      }
    })
  },
  { threshold: 0.5 },
)

const skillsSection = document.querySelector(".skills-section")
if (skillsSection) {
  skillsObserver.observe(skillsSection)
}

// Contact form handling
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()

    // Get form data
    const formData = new FormData(this)
    const name = formData.get("name")
    const email = formData.get("email")
    const subject = formData.get("subject")
    const message = formData.get("message")

    // Simple validation
    if (!name || !email || !subject || !message) {
      alert("Please fill in all required fields.")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.")
      return
    }

    // Simulate form submission
    const submitButton = this.querySelector('button[type="submit"]')
    const originalText = submitButton.textContent
    submitButton.textContent = "Sending..."
    submitButton.disabled = true

    // Simulate API call
    setTimeout(() => {
      alert("Thank you for your message! I'll get back to you soon.")
      this.reset()
      submitButton.textContent = originalText
      submitButton.disabled = false
    }, 2000)
  })
}

// Dropdown menu functionality
document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".nav-links .dropdown")
  const toggle = document.querySelector(".nav-links .dropdown-toggle")

  if (dropdown && toggle) {
    toggle.addEventListener("click", (e) => {
      e.preventDefault()
      dropdown.classList.toggle("open")
    })

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("open")
      }
    })
  }
})

// Active navigation highlighting
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]')

  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded")

  // Trigger initial animations
  const heroElements = document.querySelectorAll(".hero .fade-in")
  heroElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("visible")
    }, index * 200)
  })
})

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }
  type()
}

// Initialize typing effect when page loads
window.addEventListener("load", () => {
  const heroTitle = document.querySelector(".hero h1")
  if (heroTitle) {
    const originalText = heroTitle.innerHTML
    setTimeout(() => {
      typeWriter(heroTitle, originalText, 50)
    }, 1000)
  }
})

// Add smooth transitions to all interactive elements
document.addEventListener("DOMContentLoaded", () => {
  // Add hover effects to cards
  const cards = document.querySelectorAll(".skill-category, .education-card, .highlight-item, .cert-card")
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })
})
