ScrollReveal().reveal(".container", {
  reset: true,
  delay: 200,
  distance: "200px",
  origin: "top",
  duration: 2000,
});

ScrollReveal().reveal("section", {
  reset: true,
  delay: 200,
  distance: "300px",
  origin: "left",
  duration: 2000,
});

window.onscroll = function () {
  var y = window.scrollY;
  if (y > 150) {
    let home = document.getElementById("home");
    home.style.visibility = `visible`;
    home.style.top = `${y + 20}px`;
  } else{
    home.style.visibility = `hidden`;
  }
};
