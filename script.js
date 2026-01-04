// Global store for lessons data
let lessonsData = [];

document.addEventListener("DOMContentLoaded", function () {
  // Initialize marked.js with options
  marked.setOptions({
    highlight: function (code, lang) {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(code, { language: lang }).value;
      }
      return hljs.highlightAuto(code).value;
    },
    breaks: true,
    gfm: true,
  });

  const sidebar = document.getElementById("sidebar");
  const sidebarToggle = document.getElementById("sidebar-toggle");
  const lessonList = document.querySelector(".lesson-list");
  const lessonContent = document.getElementById("lesson-content");

  // Toggle sidebar on mobile
  sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });

  // Close sidebar when clicking outside on mobile
  document.addEventListener("click", (e) => {
    if (
      window.innerWidth <= 768 &&
      sidebar.classList.contains("active") &&
      !sidebar.contains(e.target) &&
      !sidebarToggle.contains(e.target)
    ) {
      sidebar.classList.remove("active");
    }
  });

  // Function to load lesson content
  async function loadLesson(path) {
    lessonContent.innerHTML = '<div class="loading">Loading...</div>';

    try {
      const response = await fetch(path);
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const markdown = await response.text();
      lessonContent.innerHTML = marked.parse(markdown);

      // Apply syntax highlighting to code blocks
      document.querySelectorAll("pre code").forEach((block) => {
        hljs.highlightElement(block);
      });

      // Update active state in sidebar
      document.querySelectorAll(".lesson-list a").forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("data-path") === path) {
          link.classList.add("active");
        }
      });

      // Update URL hash for deep linking
      history.pushState(null, "", `#${path.replace("lessons/", "")}`);
    } catch (error) {
      console.error("Error loading lesson:", error);
      lessonContent.innerHTML = `
                <h1>Error</h1>
                <p>Failed to load the lesson. Please try again.</p>
            `;
    }
  }

  // Function to generate sidebar navigation
  // Search functionality
  function setupSearch() {
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");

    // Debounce function to limit how often the search runs
    function debounce(func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    }

    // Search through lessons
    function searchLessons(query) {
      query = query.toLowerCase();
      return lessonsData
        .filter((lesson) => {
          const titleMatch = lesson.title.toLowerCase().includes(query);
          const sectionMatch = lesson.section.toLowerCase().includes(query);
          return titleMatch || sectionMatch;
        })
        .slice(0, 10); // Limit to top 10 results
    }

    // Display search results
    function displaySearchResults(results) {
      if (results.length === 0) {
        searchResults.innerHTML =
          '<div class="no-results">No matching lessons found</div>';
      } else {
        searchResults.innerHTML = results
          .map(
            (result) => `
            <div class="search-result-item" data-path="${result.path}">
              <div class="search-result-section">${result.section}</div>
              <div class="search-result-title">${result.title}</div>
            </div>
          `
          )
          .join("");
      }
      searchResults.classList.add("active");
    }

    // Handle search input
    searchInput.addEventListener(
      "input",
      debounce((e) => {
        const query = e.target.value.trim();
        if (query.length >= 2) {
          const results = searchLessons(query);
          displaySearchResults(results);
        } else {
          searchResults.classList.remove("active");
        }
      }, 300)
    );

    // Handle clicking outside of search
    document.addEventListener("click", (e) => {
      if (
        !searchInput.contains(e.target) &&
        !searchResults.contains(e.target)
      ) {
        searchResults.classList.remove("active");
      }
    });

    // Handle search result clicks
    searchResults.addEventListener("click", (e) => {
      const resultItem = e.target.closest(".search-result-item");
      if (resultItem) {
        const path = resultItem.dataset.path;
        loadLesson(path);
        searchResults.classList.remove("active");
        searchInput.value = "";
      }
    });

    // Handle keyboard navigation
    searchInput.addEventListener("keydown", (e) => {
      if (!searchResults.classList.contains("active")) return;

      const items = searchResults.querySelectorAll(".search-result-item");
      const activeItem = document.activeElement;
      let index = Array.from(items).indexOf(activeItem);

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          if (index < 0) items[0].focus();
          else if (index < items.length - 1) items[index + 1].focus();
          break;
        case "ArrowUp":
          e.preventDefault();
          if (index > 0) items[index - 1].focus();
          else searchInput.focus();
          break;
        case "Enter":
          if (
            activeItem &&
            activeItem.classList.contains("search-result-item")
          ) {
            const path = activeItem.dataset.path;
            loadLesson(path);
            searchResults.classList.remove("active");
            searchInput.value = "";
          }
          break;
        case "Escape":
          searchResults.classList.remove("active");
          searchInput.blur();
          break;
      }
    });
  }

  async function generateNavigation() {
    const sections = [
      { title: "Core Knowledge", path: "0-Core-Knowledge" },
      { title: "Footprinting", path: "1-Footprinting-and-Reconnaissance" },
      { title: "Scanning Networks", path: "2-Scanning-Networks" },
      { title: "Enumeration", path: "3-Enumeration" },
      { title: "Vulnerability Analysis", path: "4-Vulnerability-Analysis" },
      { title: "System Hacking", path: "5-System-Hacking" },
      { title: "Malware", path: "6-Malware" },
      { title: "Sniffing", path: "7-Sniffing" },
      { title: "Social Engineering", path: "8-Social-Engineering" },
      { title: "Denial of Service", path: "9-Denial-of-Service" },
      { title: "Session Hijacking", path: "10-Session-Hijacking" },
      { title: "Bonus Content", path: "11-Bonus" },
    ];

    let html = "";

    for (const section of sections) {
      const files = await fetch(`lessons/${section.path}/index.json`)
        .then((r) => r.json())
        .catch(() => []);

      if (files.length > 0) {
        html += `<div class="section">
                    <h3>${section.title}</h3>
                    <div class="lesson-group">`;

        files.forEach((file) => {
          const path = `lessons/${section.path}/${file}`;
          const title = file.replace(".md", "").replace(/-/g, " ");

          // Store lesson data for search
          lessonsData.push({
            title: title,
            section: section.title,
            path: path,
          });

          html += `<a href="#" data-path="${path}">${title}</a>`;
        });

        html += `</div></div>`;
      }
    }

    lessonList.innerHTML = html;

    // Add click handlers to all lesson links
    document.querySelectorAll(".lesson-list a").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const path = link.getAttribute("data-path");
        loadLesson(path);
      });
    });

    // Load initial lesson
    const firstLesson = document.querySelector(".lesson-list a");
    if (firstLesson) {
      loadLesson(firstLesson.getAttribute("data-path"));
    }
  }

  // Initialize navigation and search
  generateNavigation().then(() => {
    setupSearch();
  });
});
