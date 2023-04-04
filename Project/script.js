////////////////////
const allLinks = document.querySelectorAll("a");
console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  });
});
//////////////////////////////

/////////////////////

// console.log("Hello world");
// const myName = "Hazem Hamdy";
// const h1 = document.querySelector(".text");

// console.log(myName);
// console.log(h1);

// h1.textContent = myName;
