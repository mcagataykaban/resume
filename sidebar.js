var sideNav = document.getElementById("mySidenav");
function openNav() {
    if (sideNav.style.width == "250px") {
      sideNav.style.width = "0";
    } else {
      sideNav.style.width = "250px";
    }
  }