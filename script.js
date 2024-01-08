let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})

const lightTheme = "light.css";
const darkTheme = "dark.css";
const themeIcon = document.getElementById("theme-icon");
const toast = document.getElementById("toast");

function check() {
    const theme = document.getElementById("theme");
    setTimeout(() => {
      toast.innerHTML = "Calculator";
    }, 1500);
    if (theme.getAttribute("href") === darkTheme) {
      theme.setAttribute("href", lightTheme);
   
      
    } else {
      theme.setAttribute("href", darkTheme);
      
    }
  }