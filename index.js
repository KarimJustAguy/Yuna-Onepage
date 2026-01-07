var swiper = new Swiper(".mySwiper", {
    // Endlosschleife: Nach dem letzten Bild kommt wieder das erste
    loop: true,

    // Aktiviert den 3D-Effekt (Bilder werden perspektivisch gekippt)
    effect: "coverflow",

    // Zeigt ein Hand-Symbol beim Drüberfahren (Interaktions-Hinweis)
    grabCursor: true,

    // Das aktuell aktive Bild wird immer exakt in der Mitte platziert
    centeredSlides: true,

    // Erlaubt variable Breiten der Slides (nötig für den 3D-Look)
    slidesPerView: "auto",

    // Spezifische Einstellungen für den Coverflow-Effekt
    coverflowEffect: {
        rotate: 50,         // Drehwinkel der seitlichen Bilder (in Grad)
        stretch: 0,        // Zieht die Slides näher zusammen (0 = kein Stretch)
        depth: 100,        // Räumliche Tiefe (wie weit die Seitenbilder hinten liegen)
        modifier: 5,       // Verstärkt oder schwächt den Gesamteffekt ab
        slideShadows: true // Erzeugt Schatten auf den seitlichen Bildern für mehr Realismus
    },

    // Einstellungen für die kleinen Punkte (Seitenanzeige)
    pagination: {
        el: ".swiper-pagination",
        clickable: true,   // Macht die Punkte anklickbar
    },

    // Einstellungen für die Vor/Zurück-Pfeile
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});