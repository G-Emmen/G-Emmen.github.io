function openSection(evt, sectionName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(sectionName).style.display = "block";
  evt.currentTarget.className += " active";

  sessionStorage.setItem("activeTab",sectionName)
}

document.addEventListener("DOMContentLoaded", function(){
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
    var image = event.target.closest("#projects .project img, #bonus .project img");

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

  var selectedTab = sessionStorage.getItem("activeTab");
  if (selectedTab === "about_me") {
    document.getElementById("tab1").click();
  }

  else if (selectedTab === "projects") {
    document.getElementById("tab2").click();
  }

  else if (selectedTab === "bonus") {
    document.getElementById("tab3").click();
  }

  else {
    document.getElementById("tab1").click()
  }

});
