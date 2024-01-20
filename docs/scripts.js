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

  var currTheme = sessionStorage.getItem("theme");
  if (currTheme === "one") {
    document.getElementById("themeOne").click();
  }

  else if (currTheme === "two") {
    document.getElementById("themeTwo").click();
  }

  else if (currTheme === "three") {
    document.getElementById("themeThree").click();
  }

  else {
    document.getElementById("themeOne").click()
  }

});

function themeOne() {
  var element = document.body;
  element.classList.remove("themeOne", "themeTwo", "themeThree")
  element.classList.toggle("themeOne");

  sessionStorage.setItem("theme","one")
}

function themeTwo() {
  var element = document.body;
  element.classList.remove("themeOne", "themeTwo", "themeThree")
  element.classList.toggle("themeTwo");

  sessionStorage.setItem("theme","two")
}

function themeThree() {
  var element = document.body;
  element.classList.remove("themeOne", "themeTwo", "themeThree")
  element.classList.toggle("themeThree");

  sessionStorage.setItem("theme","three")
}
