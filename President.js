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

//instruction modal
$(document).ready(function() 
{ 
$("#myModalE").modal('show'); 
}); 

//redirection using open() function 
function algeria(){  
open("https://salmandascript.github.io/Algeria/algeria.html");
}

function angola(){  
open("https://salmandascript.github.io/Angola/Angola.html");
}

function benin(){  
open("https://salmandascript.github.io/Benin/Benin.html");
}

function botswana(){  
open("https://salmandascript.github.io/Botswana/Botswana.html");
}

function burkinaFaso(){  
open("https://salmandascript.github.io/BurkinaFaso/BurkinaFaso.html");
}

function burundi(){  
open("https://salmandascript.github.io/Burundi/Burundi.html");
}

function cameroon(){  
open("https://salmandascript.github.io/Cameroon/Cameroon.html");
}

function capeVerde(){  
open("https://salmandascript.github.io/CapeVerde/CapeVerde.html");
}

function centralAfricanRepublic(){  
open("https://salmandascript.github.io/CentralAfricanRepublic/CentralAfricanRepublic.html");
}

function chad(){  
open("https://salmandascript.github.io/Chad/Chad.html");
}

function comoros(){  
open("https://salmandascript.github.io/Comoros/Comoros.html");
}

function drc(){  
open("https://salmandascript.github.io/DRC/DRC.html");
}

function rcongo(){  
open("https://salmandascript.github.io/RepublicOfTheCongo/RepublicOfTheCongo.html");
}

function djibouti(){  
open("https://salmandascript.github.io/Djibouti/Djibout.html");
}

function egypt(){  
open("https://salmandascript.github.io/Egypt/Egypt.html");
}

function equatorialGuinea(){  
open("https://salmandascript.github.io/EquatorialGuinea/EquatorialGuinea.html");
}

function eritrea(){  
open("https://salmandascript.github.io/Eritrea/Eritrea.html");
}

function eswatini(){  
open("https://salmandascript.github.io/Eswatini/Eswatini.html");
}

function ethiopia(){  
open("https://salmandascript.github.io/Ethiopia/Ethiopia.html");
}

function gabon(){  
open("https://salmandascript.github.io/Gabon/Gabon.html");
}

function theGambia(){  
open("https://salmandascript.github.io/TheGambia/TheGambia.html");
}

function ghana(){  
open("https://salmandascript.github.io/Ghana/Ghana.html");
}

function guinea(){  
open("https://salmandascript.github.io/Guinea/Guinea.html");
}

function guineaBissau(){  
open("https://salmandascript.github.io/GuineaBissau/GuineaBissau.html");
}

function ivoryCoast(){  
open("https://salmandascript.github.io/IvoryCoast/lvoryCoast.html");
}

function kenya(){  
open("https://salmandascript.github.io/Kenya/Kenya.html");
}

function lesotho(){  
open("https://salmandascript.github.io/Lesotho/Lesotho.html");
}

function liberia(){  
open("https://salmandascript.github.io/Liberia/Liberia.html");
}

function libya(){  
open("https://salmandascript.github.io/Libya/Libya.html");
}

function madagascar(){  
open("https://salmandascript.github.io/Madagascar/Madagascar.html");
}

function malawi(){  
open("https://salmandascript.github.io/Malawi/malawi.html");
}

function mali(){  
open("https://salmandascript.github.io/Mali/Mali.html");
}

function mauritania(){  
open("https://salmandascript.github.io/Mauritania/Mauritania.html");
}

function mauritius(){  
open("https://salmandascript.github.io/Mauritius/Mauritius.html");
}

function morocco(){  
open("https://salmandascript.github.io/Morocco/Morocco.html");
}

function mozambique(){  
open("https://salmandascript.github.io/Mozambique/Mozambique.html");
}

function namibia(){  
open("https://salmandascript.github.io/Namibia/Namibia.html");
}

function niger(){  
open("https://salmandascript.github.io/Niger/Niger.html");
}

function nigeria(){  
open("https://salmandascript.github.io/Nigeria/Nigeria.html");
}

function rwanda(){  
open("https://salmandascript.github.io/Rwanda/Rwanda.html");
}

function saoTome(){  
open("https://salmandascript.github.io/SaoTome&Principe/SaoTome&Principe.html");
}

function senegal(){  
open("https://salmandascript.github.io/Senegal/Senegal.html");
}

function seychelles(){  
open("https://salmandascript.github.io/Seychelles/Seychelles.html");
}

function sierraLeone(){  
open("https://salmandascript.github.io/SierraLeone/SierraLeone.html");
}

function somalia(){  
open("https://salmandascript.github.io/Somalia/Somalia.html");
}

function southAfrica(){  
open("https://salmandascript.github.io/SouthAfrica/SouthAfrica.html");
}

function southSudan(){  
open("https://salmandascript.github.io/SouthSudan/SouthSudan.html");
}

function sudan(){  
open("https://salmandascript.github.io/Sudan/Sudan.html");
}

function tanzania(){  
open("https://salmandascript.github.io/Tanzania/Tanzania.html");
}

function togo(){  
open("https://salmandascript.github.io/Togo/Togo.html");
}

function tunisia(){  
open("https://salmandascript.github.io/Tunisia/Tunisia.html");
}

function uganda(){  
open("https://salmandascript.github.io/Uganda/Uganda.html");
}

function zambia(){  
open("https://salmandascript.github.io/Zambia/Zambia.html");
}

function zimbabwe(){  
open("https://salmandascript.github.io/Zimbabwe/Zimbabwe.html");
}

//function to open portal 
function africaOnline(){
open("https://salmandascript.github.io/AfricaOnline/index.html");
}

//function to open help
function help(){
open("https://salmandascript.github.io/Help/Help.html");
}

//function to open contacts
function contact(){
open("https://salmandascript.github.io/Contact/Contact.html");
}

//function to open Terms of service 
function termsOfService(){
open("https://salmandascript.github.io/TermsOfService/Service.html");
}

//function to open About
function about(){
open("https://salmandascript.github.io/About/About.html");
}