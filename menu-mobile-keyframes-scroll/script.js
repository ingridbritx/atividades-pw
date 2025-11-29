window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
  
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
  const iconBtn = document.querySelector(".icon-btn");
  const nav = document.querySelector("nav");
  iconBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
  document.body.addEventListener("click", (e) => {
    console.log(e.target.closest("nav"), e.target.closest(".icon-btn"));
    if (!e.target.closest("nav") && !e.target.closest(".icon-btn")) {
      nav.classList.remove("active");
    }
  });