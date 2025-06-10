// Navigation Active State Management
document.addEventListener("DOMContentLoaded", () => {
  // Get current page filename
  const currentPage = window.location.pathname.split("/").pop() || "index.html"

  // Define page mappings for navigation items
  const pageMapping = {
    "index.html": "home",
    "Activity1.html": "activities",
    "Activity2.html": "activities",
    "Activity3.html": "activities",
    "Activity4.html": "activities",
    "Activity4-Page2.html": "activities",
    "Activity4-Page3.html": "activities",
    "Activity4-Page4.html": "activities",
    "Activity4-Page5.html": "activities",
    "Activity5.html": "activities",
    "Activity6.html": "activities",
    "Activity7.html": "activities",
    "Activity8.html": "activities",
    "Activity8-Page2.html": "activities",
    "all-animations.html": "activities",
  }

  // Get the section for current page
  const currentSection = pageMapping[currentPage] || "home"

  // Remove active class from all nav links
  const navLinks = document.querySelectorAll(".nav-links a")
  navLinks.forEach((link) => {
    link.classList.remove("active")
  })

  // Add active class to current section
  if (currentSection === "home") {
    // For index.html, set active based on hash or default to home
    const hash = window.location.hash.substring(1) || "home"
    const homeNavLink = document.querySelector(`a[href="#${hash}"]`) || document.querySelector('a[href="#home"]')
    if (homeNavLink) {
      homeNavLink.classList.add("active")
    }
  } else if (currentSection === "activities") {
    // For activity pages, mark Activities dropdown as active
    const activitiesLink = document.querySelector(".dropdown-toggle")
    if (activitiesLink) {
      activitiesLink.classList.add("active")
    }

    // Also mark the specific activity as active in dropdown
    const specificActivityLink = document.querySelector(`a[href="${currentPage}"]`)
    if (specificActivityLink) {
      specificActivityLink.classList.add("active")
    }
  }

  // Handle hash changes for index.html
  if (currentPage === "index.html" || currentPage === "") {
    window.addEventListener("hashchange", () => {
      const hash = window.location.hash.substring(1) || "home"

      // Remove active from all main nav links
      const mainNavLinks = document.querySelectorAll(".nav-links > li > a:not(.dropdown-toggle)")
      mainNavLinks.forEach((link) => {
        link.classList.remove("active")
      })

      // Add active to current section
      const currentNavLink = document.querySelector(`a[href="#${hash}"]`)
      if (currentNavLink && !currentNavLink.classList.contains("dropdown-toggle")) {
        currentNavLink.classList.add("active")
      }
    })

    // Handle scroll-based active states for index.html
    const sections = document.querySelectorAll("section[id]")
    if (sections.length > 0) {
      window.addEventListener("scroll", () => {
        let current = ""

        sections.forEach((section) => {
          const sectionTop = section.offsetTop - 100
          const sectionHeight = section.clientHeight
          if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id")
          }
        })

        if (current) {
          // Remove active from all main nav links
          const mainNavLinks = document.querySelectorAll(".nav-links > li > a:not(.dropdown-toggle)")
          mainNavLinks.forEach((link) => {
            link.classList.remove("active")
          })

          // Add active to current section
          const currentNavLink = document.querySelector(`a[href="#${current}"]`)
          if (currentNavLink && !currentNavLink.classList.contains("dropdown-toggle")) {
            currentNavLink.classList.add("active")
          }
        }
      })
    }
  }

  // Handle mobile menu toggle
  const mobileMenu = document.querySelector(".mobile-menu")
  const navLinksContainer = document.querySelector(".nav-links")

  if (mobileMenu && navLinksContainer) {
    mobileMenu.addEventListener("click", () => {
      navLinksContainer.classList.toggle("active")
      mobileMenu.classList.toggle("active")
    })

    // Close mobile menu when clicking on a link
    const mobileNavLinks = document.querySelectorAll(".nav-links a")
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navLinksContainer.classList.remove("active")
        mobileMenu.classList.remove("active")
      })
    })

    // Close mobile menu when clicking outside
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".nav-container")) {
        navLinksContainer.classList.remove("active")
        mobileMenu.classList.remove("active")
      }
    })
  }
})
