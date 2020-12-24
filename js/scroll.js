const navbarContainer = document.querySelector(`#navbar-container`);
const navbarContent = document.querySelector(`#navbar-content`);
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    navbarContainer.style = `
        background-color: var(--dark-blue2);
        margin-top: 0rem;
        height: 150px
        transition: height .3s;
    `;
    navbarContent.style = `
        margin-top: .5rem;
        transition: margin-top .3s;

      `;
  } else if (window.scrollY < 300) {
    navbarContainer.style = `
        background-color: none;
        transition: height .3s;
    `;
    navbarContent.style = `
        margin-top: 0rem;
        transition: margin-top .3s;
    `;
  }
});
