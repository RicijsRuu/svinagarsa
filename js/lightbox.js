let slideIndex = 1;

// Array of text descriptions for each image
const slideTexts = [
    { text1: "Foto autors: Jānis Luks", text2: "Torņkalna baznīca", text3: "\"Gods Dievam augstibā, un miers virs zemes, un cilvēkiem labs prāts,\" beidzoties dievkalpojumam, pasludina mācītājs Birģelis, mēs kopigi slejamies kājas un ejam laukã. Kopš apprecējies ar mammu, Volfgangs vācu draudzi nomainījis pret latviešu. Un šovakar pat Nikolajs ar vārdiem — vienreiz gadā jau var — ir atnācis mums līdzi uz Torņakalna baznīcu.", text4: "(50. lpp.)" },
    { text1: "Foto autors: Jānis Luks", text2: "Bērnu slimnīca", text3: "Caur skropstām ieraugu Dīķa ielas galu un Bērnu slimnīcas žogu. Gribas slieties augšā, taču, kad ķerra atsitas pret nākamo negludumu, satumst ne tikai skatiens, bet arī apziņa.", text4: "(174. lpp.)", },
    { text1: "Foto autors: Jānis Luks", text2: "Torņkalna stacija", text3: "— Tu dzirdi?", text4: "— Ко?", text5: "— Tāda kā kņada, nevar saprast.", text6: "— Jocīgais, ūdens burzguļo.", text7: "— Nē, kaut kas cits. Tur. ", text8: "—Rūdis rāda uz Torņakalna stacijas pusi.", text9: "(148. lpp.)" },
    { text1: "Foto autors: Jānis Luks", text2: "Pansionāts (Rīgas 2. slimnīca)", text3: "Kopš ievainotos sarkanarmiešus pārveda uz jauno vēža slimnīcu Talsu ielā un Ģimnastikas ielas veco ļaužu patversmi - tagad abas pārveidotas par kara hospitāļiem —, Tāmaras darba solis ir krietni vieglāks.", text4: "(201. lpp.)" },
    { text1: "Foto autors: Jānis Luks", text2: "Matīsa Birkena/Māra Bērziņa māja", text3: "Nelielais, bet itin glītais savrupnamiņš atrodas starp Irbenes ielu un pansionātu Ģimnastikas ielā.", text4: "(20. lpp.)" },
    { text1: "Foto autors: Jānis Luks", text2: "Lielais un Mazais geto (Vecie ebreju kapi)", text3: "Uz Ludzas un Līksnas ielas stūra karājas rīkojums: visiem, kuri dzīvo teritorijā no Ludzas ielas līdz Lielajai Kalna ielai un no Daugavpils ielas līdz Lauvas ielai, divu stundu laikā jāpārceļas uz kopējo geto. Drīkst ņemt līdzi visu savu mantu, izņemot gultas, kušetes un citas lielizmēra mēbeles.", text4: "(299. lpp.)" },
];

function openModal() {
    const lightbox = document.querySelector(".lightbox");
    const lightboxImg = document.querySelector(".lightbox-content");
    const lightboxText = document.querySelector("#lightbox-text");
    const clickedImg = event.target.closest("a").querySelector("img"); // Get the clicked image
    const slides = document.querySelectorAll("ul li img"); // Get all images in the list

    if (clickedImg) {
        slideIndex = Array.from(slides).indexOf(clickedImg) + 1; // Set the current slide index
        lightboxImg.src = clickedImg.src; // Set the lightbox image source to the clicked image source

        // Clear previous text
        lightboxText.innerHTML = "";

        // Dynamically add all text parts with line breaks
        const textParts = slideTexts[slideIndex - 1];
        for (const key in textParts) {
            if (textParts[key]) {
                const textNode = document.createTextNode(textParts[key]);
                lightboxText.appendChild(textNode);
                lightboxText.appendChild(document.createElement("br")); // Add a line break
            }
        }

        lightbox.style.display = "flex"; // Make the lightbox visible
    }
}

function closeModal() {
    const lightbox = document.querySelector(".lightbox");
    lightbox.style.display = "none"; // Hide the lightbox
}

function plusSlides(n) {
    const slides = document.querySelectorAll("ul li img"); // Get all images in the list
    const lightboxImg = document.querySelector(".lightbox-content");
    const lightboxText = document.querySelector("#lightbox-text");

    slideIndex += n;

    if (slideIndex > slides.length) {
        slideIndex = 1; // Loop back to the first slide
    }
    if (slideIndex < 1) {
        slideIndex = slides.length; // Loop back to the last slide
    }

    lightboxImg.src = slides[slideIndex - 1].src; // Update the lightbox image source

    // Clear previous text
    lightboxText.innerHTML = "";

    // Dynamically add all text parts with line breaks
    const textParts = slideTexts[slideIndex - 1];
    for (const key in textParts) {
        if (textParts[key]) {
            const textNode = document.createTextNode(textParts[key]);
            lightboxText.appendChild(textNode);
            lightboxText.appendChild(document.createElement("br")); // Add a line break
        }
    }
}

function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}

// Add event listener to the "X" button
document.querySelector(".lightbox .close_button").addEventListener("click", closeModal);

// Prevent default behavior for links
document.querySelectorAll("ul li a").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
    });
});