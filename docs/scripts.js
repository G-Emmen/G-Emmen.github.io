document.addEventListener("DOMContentLoaded", function(){
  var themeToggle = document.querySelector(".theme-toggle");
  var systemThemeQuery = window.matchMedia
    ? window.matchMedia("(prefers-color-scheme: light)")
    : null;

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    themeToggle.setAttribute("aria-checked", String(theme === "light"));
  }

  function transitionTheme(theme) {
    var root = document.documentElement;
    var isMobile = window.matchMedia("(max-width: 800px)").matches;

    if (!isMobile || !document.startViewTransition) {
      applyTheme(theme);
      return;
    }

    var transition = document.startViewTransition(function() {
      root.classList.add("theme-transitioning");
      applyTheme(theme);
    });

    transition.finished.then(
      function() {
        root.classList.remove("theme-transitioning");
      },
      function() {
        root.classList.remove("theme-transitioning");
      }
    );
  }

  applyTheme(document.documentElement.dataset.theme);

  var sidebar = document.querySelector(".sidebar");
  function updateMobileNavHeight() {
    document.documentElement.style.setProperty(
      "--mobile-nav-height",
      sidebar.getBoundingClientRect().height + "px"
    );
  }

  updateMobileNavHeight();
  window.addEventListener("resize", updateMobileNavHeight);
  if (window.ResizeObserver) {
    new ResizeObserver(updateMobileNavHeight).observe(sidebar);
  }
  document.querySelectorAll(".section-nav a").forEach(function(link) {
    link.addEventListener("click", updateMobileNavHeight);
  });

  themeToggle.addEventListener("click", function() {
    var theme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", theme);
    transitionTheme(theme);
  });

  if (systemThemeQuery) {
    var updateSystemTheme = function(event) {
      var savedTheme = localStorage.getItem("theme");
      if (savedTheme !== "light" && savedTheme !== "dark") {
        transitionTheme(event.matches ? "light" : "dark");
      }
    };

    if (systemThemeQuery.addEventListener) {
      systemThemeQuery.addEventListener("change", updateSystemTheme);
    } else {
      systemThemeQuery.addListener(updateSystemTheme);
    }
  }

  var imageOverlay = document.createElement("div");
  var imageFrame = document.createElement("div");
  var enlargedImage = document.createElement("img");
  var closeButton = document.createElement("button");

  imageOverlay.className = "image-overlay";
  imageOverlay.hidden = true;
  imageOverlay.setAttribute("role", "dialog");
  imageOverlay.setAttribute("aria-modal", "true");
  imageOverlay.setAttribute("aria-label", "Enlarged project image");

  imageFrame.className = "image-overlay-frame";
  enlargedImage.className = "image-overlay-content";
  closeButton.className = "image-overlay-close";
  closeButton.type = "button";
  closeButton.setAttribute("aria-label", "Close enlarged image");
  closeButton.textContent = "×";

  imageFrame.appendChild(enlargedImage);
  imageFrame.appendChild(closeButton);
  imageOverlay.appendChild(imageFrame);
  document.body.appendChild(imageOverlay);

  function closeImageOverlay() {
    imageOverlay.hidden = true;
    document.body.classList.remove("image-overlay-open");
  }

  document.addEventListener("click", function(event) {
    var image = event.target.closest("#projects .project img, #bonus .project img, #bonus .model-item img");

    if (image) {
      enlargedImage.src = image.src;
      enlargedImage.alt = image.alt;
      imageOverlay.hidden = false;
      document.body.classList.add("image-overlay-open");
    } else if (event.target === imageOverlay || event.target === closeButton) {
      closeImageOverlay();
    }
  });

  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && !imageOverlay.hidden) {
      closeImageOverlay();
    }
  });

});
