function getViewportWidth() {
    return window.innerWidth ||
    document.documentElement.clientWidth;
   }
function getViewportHeight() {
    return window.innerHeight ||
    document.documentElement.clientHeight;
}
// console.log(`Die Viewport-Breite beträgt: ${getViewportWidth()}px 
// und die Viewport-Höhe beträgt: ${getViewportHeight()}px`)

function Kategorie(name, bild){
    this.name = name;
    this.bild = bild;
}

function Tutorial(name, sprache, beschreibung, stunden, minuten, url, embedCode, bild){
    this.name = name;
    this.sprache = sprache;
    this.beschreibung = beschreibung;
    this.stunden = stunden;
    this.minuten = minuten;
    this.dauer = `${stunden}:${minuten}`;
    this.datum = new Date();
    this.url = url;
    this.embedCode = embedCode;
    this.kategorien = [];
    this.fuegeKategorieHinzu = function(Kategorie){
        this.kategorien.push(Kategorie)
    }
    this.kapitelliste = [];
    this.fuegeKapitelHinzu = function(Kapitel){
        this.kapitelliste.push(Kapitel);
    }
    this.bild = bild;
}

function Kapitel(name, beschreibung, stunden, minuten){
    this.name = name;
    this.beschreibung = beschreibung;
    this.dauer = `${stunden}:${minuten}`;
}

function Bild(url, name){
    this.url = url;
    this.name = name;
}

function getDauerInStundenUndMinuten(dauer){
    let dauerString = dauer.toString();
    let splitFormat = dauerString.split(':');
    let hours = splitFormat[0];
    let minutes = splitFormat[1];
    stundenMinuten = hours + "h " + minutes + "min";
    return stundenMinuten;
}

let memeBild = new Bild("assets/images/meme.PNG", "MemeBild");
let memeKategorie = new Kategorie("Memetutorials", memeBild);

let makeupBild = new Bild("assets/images/schminken.PNG", "makeupBild");
let makeupKategorie = new Kategorie("Makeuptutorials", makeupBild);

let malBild = new Bild("assets/images/pinsel.jpg", "MalBild");
let malKategorie = new Kategorie("Maltutorials", malBild);

let bastelBild = new Bild("assets/images/basteln.jpg", "BastelBild");
let bastelKategorie = new Kategorie("Basteltutorials", bastelBild);


let berglandschaft = new Bild("assets/images/valley.jpg", "berglandschaft");
let drache = new Bild("assets/images/dragon.jpg", "Drache");

let maltutorial1 = new Tutorial("Malen einer Berglandschaft", "Deutsch", 
                            "In diesem Tutorial lernt man, wie man eine Berglandschaft malt",
                            00, 30, "url", "Code", berglandschaft);
maltutorial1.fuegeKategorieHinzu(malKategorie);
let maltut1kap1 = new Kapitel("Hintergrund", "Hintergrund malen", 00, 10);
let maltut1kap2 = new Kapitel("Berge", "Berge malen", 00, 10);
let maltut1kap3 = new Kapitel("Details", "Details malen", 00, 10);
maltutorial1.fuegeKapitelHinzu(maltut1kap1);
maltutorial1.fuegeKapitelHinzu(maltut1kap2);
maltutorial1.fuegeKapitelHinzu(maltut1kap3);

let basteltutorial1 = new Tutorial("Basteln eines Drachen", "Deutsch", 
                            "In diesem Tutorial lernt man, wie man einen Drachen bastelt",
                            00, 50, "url", "Code", drache);
basteltutorial1.fuegeKategorieHinzu(bastelKategorie);

let basteltut1kap1 = new Kapitel("Körper", "Körper basteln", 00, 20);
let basteltut1kap2 = new Kapitel("Flügel", "Flügel basteln", 00, 15);
let basteltut1kap3 = new Kapitel("Details", "Details basteln", 00, 15);
basteltutorial1.fuegeKapitelHinzu(basteltut1kap1);
basteltutorial1.fuegeKapitelHinzu(basteltut1kap2);
basteltutorial1.fuegeKapitelHinzu(basteltut1kap3);

let listeKategorien = [];
let listeTutorial = [];

listeKategorien.push(memeKategorie, makeupKategorie, malKategorie, bastelKategorie);
listeKategorien.sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
});

listeTutorial.push(maltutorial1, basteltutorial1);

function getTutorialZuKategorie(kategorieName){
    let filtered = listeTutorial.filter(e => e.kategorien.some(x => x.name === kategorieName));
    return filtered;
}

listeKategorien.forEach(function(elem){
    console.log("Kategorie: " + elem.name + "\n");
    console.log("Bild: " + elem.bild.name + "\n");
    getTutorialZuKategorie(elem.name).forEach(function(e){
        console.log("\t" + e.name + " (" + e.sprache + ") " + e.datum + "\n" );
        console.log("\t" + e.beschreibung + "\n");
        console.log("\t" + getDauerInStundenUndMinuten(e.dauer) + "\n");
        console.log("\t" + e.url + " bzw. " + e.embedCode + "\n");
        e.kapitelliste.forEach(function(k){
            console.log("\t\t" + k.dauer + " " + k.name + " " + k.beschreibung + "\n");
        })
        
    })
    console.log("..............................\n");
})



// console.log(maltutorial1);
// console.log(basteltutorial1);
// console.log(listeKategorien); 
// console.log(getDauerInStundenUndMinuten(maltutorial1.dauer));
// console.log(getTutorialZuKategorie("Maltutorials"));




