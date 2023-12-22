//redirection using open() function 
function algeria(){  
open("file:///storage/emulated/0/WebDevelopment/Algeria/Algeria.html");
}

function angola(){  
open("https://salmandascript.github.io/MyPresident/Angola.html");
}

//redirection using Redirect() function 
function Algeria(){
window.location="https://salmandascript.github.io/MyPresident/Algeria.html";
}



function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}