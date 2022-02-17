let buttonMenu = document.getElementById("burgermenuicon");
let kategorien = document.getElementById("kategorien");
let tutorielsVonKategorie = document.getElementById("tutorielsVonKategorie");
let tutorialDetails = document.getElementById("tutorialDetails");
let tutorialForm = document.getElementById("tutorialForm");
let viewportWidth = window.innerWidth;

// if(viewportWidth <= 480)
buttonMenu.addEventListener("click", function(){
      buttonMenu.after(kategorien);
      buttonMenu.after(tutorielsVonKategorie);
      buttonMenu.after(tutorialDetails);
      buttonMenu.after(tutorialForm);
      
      if(kategorien.style.display == 'block'){
      kategorien.style.display = 'none';
      tutorielsVonKategorie.style.display = 'none';
      tutorialDetails.style.display = 'none';
      tutorialForm.style.display = 'none';
      }else{
        kategorien.style.display = 'block';
        tutorielsVonKategorie.style.display = 'block';
        tutorialDetails.style.display = 'block';
        tutorialForm.style.display = 'block';
    }
});
// else{window = function(){ location.reload(); }}
//


// buttonMenu.addEventListener("click", function(){
//     // buttonMenu.after(kategorien);
//     // buttonMenu.after(tutorielsVonKategorie);
//     // buttonMenu.after(tutorialDetails);
//     // buttonMenu.after(tutorialForm);
//     kategorien.style.display = 'none';
//     tutorielsVonKategorie.style.display = 'none';
//     tutorialDetails.style.display = 'none';
//     tutorialForm.style.display = 'none';
// });