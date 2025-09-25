/** Dark mode toggling 
 * - stores theme in localStorage
 * - get theme switch element from DOM 
 */
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode','active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode() 

themeSwitch.addEventListener("click", ()=>{
    darkmode = localStorage.getItem('darkmode')
    darkmode !=="active" ? enableDarkmode() : disableDarkmode()
})

export function initThemeToggle() {
  const toggle = document.querySelector("#theme-toggle");
  toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-theme", toggle.checked);
    localStorage.setItem("theme", toggle.checked ? "dark" : "light");
  })

  // load theme on init 
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    toggle.checked = true;
  }
}
  // persist current theme outside the function
  localStorage.setItem(
    'theme',
    document.body.classList.contains('dark-theme') ? 'dark' : 'light'
  );

const logo = document.querySelector(".side-logo"); // the logo element 

const updateLogoForTheme = () => {
    if (document.body.classList.contains("darkmode")) {
        logo.src = "./assets/logo-dark.svg";
    }
};

// Run on load and on theme switch 
updateLogoForTheme();
themeSwitch.addEventListener("click", updateLogoForTheme);


