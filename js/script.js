/* Javascript - TP2 ARN-2304 - Wendy GERVAIS - AUT. 2023 */

let nbBulles = 80;

/* Register */
gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother)

/* Default */
gsap.defaults({
    ease: "power4.out",
    duration: 1,
});

/* Menu navigation */

let boutonBurger = document.querySelector('.bouton-burger');
let menuOpened = false;
let menuFull = document.querySelector('.menu-full');


function openMenu() {
    if (menuOpened) {
        menuOpened = false;
        menuFull.style.display = 'none';
        boutonBurger.innerHTML = "☰";
    }
    else {
        menuOpened = true;
        menuFull.style.display = 'flex';
        boutonBurger.innerHTML = "✖";

    }
}

boutonBurger.addEventListener('click', function () { openMenu() });
document.querySelector('#lien-1').addEventListener('click', function () { openMenu() });
document.querySelector('#lien-2').addEventListener('click', function () { openMenu() });
document.querySelector('#lien-3').addEventListener('click', function () { openMenu() });
document.querySelector('#lien-4').addEventListener('click', function () { openMenu() });
document.querySelector('#lien-5').addEventListener('click', function () { openMenu() });


let container = document.querySelector(".circles-container");

gsap.from(".circles-container", {
    opacity: 0,
    duration: 5,
    delay: 1
});

// Génère n bulles positionnées aléatoirement sur la page
function addCircles(n) {

    for (let i = 0; i < n / 2; i++) {
        container.innerHTML += (`<svg height="100" width="100" id="circle${i}" class="circlebase circle${i}"><circle  cx="50" cy="50" r="40" stroke-width="3" fill="#333"/></svg>`)
        let circleI = document.querySelector("#circle" + i);
        circleI.style.left = (Math.random() * 20).toString() + "%";
        circleI.style.top = (Math.random() * 900).toString() + "%";
        circleI.style.scale = (Math.random() * 1.8).toString();

        circleI.style.filter = `blur(${(Math.random() * 2)}px)`;
    }

    for (let i = n / 2; i < n; i++) {
        container.innerHTML += (`<svg height="100" width="100" id="circle${i}" class="circlebase circle${i}"><circle  cx="50" cy="50" r="40" stroke-width="3" fill="#333"/></svg>`)
        let circleI = document.querySelector("#circle" + i);
        circleI.style.left = (Math.random() * 20 + 80).toString() + "%";
        circleI.style.top = (Math.random() * 900).toString() + "%";
        circleI.style.scale = (Math.random() * 1.8).toString();
        circleI.style.filter = `blur(${(Math.random() * 2)}px)`;
    }

    for (let i = 0; i < n; i++) {

        let circleString = `.circle${i}`;

        gsap.from(circleString, {
            y: 80,
            duration: 3,
            scrollTrigger: {
                start: "50% center",
                trigger: circleString,
                scrub: 1,
            },
        });


    }
}

addCircles(nbBulles);

/* Section 0 */

// Orbites

gsap.from('.orbit1', {
    scaleX: 1.2,
    rotate: 180,
    duration: 5,
});

gsap.from('.orbit2', {
    scaleX: 1.3,
    rotate: -90,
    duration: 5,
});

gsap.from('.orbit3', {
    scaleX: 1.4,
    rotate: 45,
    duration: 5,
});

gsap.to('.orbit1', {
    opacity: 0.1,
    duration: 5,
    scrollTrigger: {
        start: "50% center",
        trigger: 'h2',
        scrub: 1,
    },

});

gsap.to('.orbit2', {
    opacity: 0.1,
    duration: 5,
    scrollTrigger: {
        start: "50% center",
        trigger: 'h2',
        scrub: 1,
    },

});

gsap.to('.orbit3', {
    opacity: 0.1,
    duration: 5,
    scrollTrigger: {
        start: "50% center",
        trigger: 'h2',
        scrub: 1,
    },

});


// Logos IMAC et UQAT

gsap.from('#imac', {
    opacity: 0,
    x: -200,
    duration: 5
});

gsap.from('#cnm', {
    opacity: 0,
    rotate: 10,
    x: -300,
    duration: 5
});


gsap.to('#imac', {
    y: -50,
    duration: 1,
    scrollTrigger: {
        start: "50% center",
        trigger: '#imac',
        scrub: 1,
    },

});

gsap.to('#cnm', {
    y: -50,
    duration: 1,
    scrollTrigger: {
        start: "50% center",
        trigger: '#cnm',
        scrub: 1,
    },

});


// Titre principal

gsap.to('h2', {
    y: -50,
    duration: 1,
    scrollTrigger: {
        start: "50% center",
        trigger: 'h2',
        scrub: 1,
    },

});


/* SplitText */
let tl = gsap.timeline(),
    mySplitText = new SplitText("h2", { type: "words, chars" }),
    chars = mySplitText.chars;
tl.from(chars, {
    duration: 0.8,
    opacity: 0,
    scale: 0,
    y: 80,
    ease: "back",
    stagger: 0.02
});



let flecheAnim = gsap.timeline();

flecheAnim.to('.fleche', {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        start: "50% center",
        trigger: 'h2',
        scrub: 1,
    },
}),

    flecheAnim.from('.fleche', {
        opacity: 0,
        duration: 5,
        delay: 2
    });



/* Titres section */

gsap.from('#matieres', {
    opacity: 0,
    duration: 5,
    scrollTrigger: '#matieres'
});

gsap.from('#uqat', {
    opacity: 0,
    duration: 5,
    scrollTrigger: '#uqat'
});

gsap.from('#quebec', {
    opacity: 0,
    duration: 5,
    scrollTrigger: '#quebec'
});

gsap.from('#demarches', {
    opacity: 0,
    duration: 5,
    scrollTrigger: '#demarches'
});

gsap.from('#conclusion', {
    opacity: 0,
    duration: 5,
    scrollTrigger: '#conclusion'
});




/* Section 1 : Matières */


gsap.from('.matiere1', {
    x: 100,
    duration: 5,
    scrollTrigger: {
        trigger: '.matiere1',
        start: 'center center',
        scrub: 1,
    },

});

gsap.from('.matiere2', {
    x: -100,
    duration: 5,
    scrollTrigger: {
        trigger: '.matiere2',
        start: 'center center',
        scrub: 1,
    },

});

gsap.from('.matiere3', {
    x: 100,
    duration: 5,
    scrollTrigger: {
        trigger: '.matiere3',
        start: 'center center',
        scrub: 1,
    },

});

gsap.from('.matiere4', {
    x: -100,
    duration: 5,
    scrollTrigger: {
        trigger: '.matiere4',
        start: 'center center',
        scrub: 1,
    },

});

gsap.from('.matiere5', {
    x: 100,
    duration: 5,
    scrollTrigger: {
        trigger: '.matiere5',
        start: 'center center',
        scrub: 1,
    },

});


document.querySelector(".matiere1").addEventListener("mouseover", function () { displayBulles(1) });
document.querySelector(".matiere2").addEventListener("mouseover", function () { displayBulles(2) });
document.querySelector(".matiere3").addEventListener("mouseover", function () { displayBulles(3) });
document.querySelector(".matiere4").addEventListener("mouseover", function () { displayBulles(4) });
document.querySelector(".matiere5").addEventListener("mouseover", function () { displayBulles(5) });


document.querySelector(".matiere1").addEventListener("mouseout", function () { displayBulles(0) });
document.querySelector(".matiere2").addEventListener("mouseout", function () { displayBulles(0) });
document.querySelector(".matiere3").addEventListener("mouseout", function () { displayBulles(0) });
document.querySelector(".matiere4").addEventListener("mouseout", function () { displayBulles(0) });
document.querySelector(".matiere5").addEventListener("mouseout", function () { displayBulles(0) });



function displayBulles(c) {
    for (let i = 0; i < nbBulles; i++) {

        let circleString = `.circle${i} circle`;


        if (c === 0) {
            gsap.to(circleString, {
                fill: "#333",
                duration: 1,
            });
        }

        if (c === 1) {
            gsap.to(circleString, {
                fill: "rgb(197, 89, 123)",
                duration: 1,
            });
        }

        if (c === 2) {
            gsap.to(circleString, {
                fill: " rgb(89, 113, 197)",
                duration: 1,
            });
        }

        if (c === 3) {
            gsap.to(circleString, {
                fill: "rgb(233, 127, 57)",
                duration: 1,
            });
        }

        if (c === 4) {
            gsap.to(circleString, {
                fill: "rgb(101, 172, 97)",
                duration: 1,
            });
        }


        if (c === 5) {
            gsap.to(circleString, {
                fill: "rgb(220, 178, 7)",
                duration: 1,
            });
        }

    }
}


/* Section 2 : UQAT */


let mm = gsap.matchMedia();

mm.add("(max-width: 700px)", () => {

    gsap.to('.ouverte', {
        rotate: -5,
        duration: 5,
        color: "black",
        backgroundColor: "#ffffff80",
        scrollTrigger: {
            start: "50% center",
            trigger: '.ouverte',
            scrub: 1,
        },

    });

    gsap.to('.salles', {
        rotate: 5,
        duration: 5,
        color: "black",
        backgroundColor: "#ffffff95",
        scrollTrigger: {
            start: "50% center",
            trigger: '.salles',
            scrub: 1,
        },

    });


});

mm.add("(min-width: 700px)", () => {



    gsap.from('.ouverte', {
        y: -100,
        rotate: -5,
        duration: 5,
        color: "black",
        backgroundColor: "#ffffff80",
        scrollTrigger: {
            start: "50% center",
            trigger: '.ouverte',
            scrub: 1,
        },

    });

    gsap.to('.salles', {
        y: 200,
        rotate: 5,
        duration: 5,
        color: "black",
        backgroundColor: "#ffffff95",
        scrollTrigger: {
            start: "50% center",
            trigger: '.salles',
            scrub: 1,
        },

    });

});



gsap.from('.rtx', {
    y: 90,
    rotate: 10,
    duration: 5,
    scrollTrigger: {
        start: "50% center",
        trigger: '.rtx',
        scrub: 1,
    },
});

gsap.from('.tablette', {
    y: 100,
    duration: 4,
    scrollTrigger: {
        start: "50% center",
        trigger: '.tablette',
        scrub: 1,
    },
});

gsap.from('.camera', {
    y: 90,
    rotate: -10,
    duration: 5,
    scrollTrigger: {
        start: "50% center",
        trigger: '.camera',
        scrub: 1,
    },
});



/* Section 3 : Québec photos */


gsap.to('.row-1', {
    x: -100,
    duration: 10,
    scrollTrigger: {
        trigger: '.row-1',
        start: 'center center',
        scrub: 1,
    },
});

gsap.to('.row-2', {
    x: 100,
    duration: 10,
    scrollTrigger: {
        trigger: '.row-2',
        start: 'center center',
        scrub: 1,
    },
});

gsap.to('.row-3', {
    x: -100,
    duration: 10,
    scrollTrigger: {
        trigger: '.row-3',
        start: 'center center',
        scrub: 1,
    },
});




/* Section 4 : Les papiers */


gsap.from('.papiers', {
    y: -40,
    duration: 5,
    scrollTrigger: {
        start: "50% center",
        trigger: '.papiers',
        scrub: 1,
    },
});

let passeport = document.querySelector(".passeport");
let acceptation = document.querySelector(".acceptation");
let caq = document.querySelector(".caq");
let permis = document.querySelector(".permis");

let textPapier = document.querySelector('.papier-exp');
let boutonPapier = document.querySelector('#bouton-papiers')

function focusPapier(papier) {

    gsap.from(textPapier, { x: 100, duration: 1 });


    passeport.style.opacity = "0.2";
    gsap.to(passeport, { y: 15, duration: 1 })

    acceptation.style.opacity = "0.2";
    gsap.to(acceptation, { y: 15, duration: 1 })

    caq.style.opacity = "0.2";
    gsap.to(caq, { y: 15, duration: 1 })


    permis.style.opacity = "0.2";
    gsap.to(permis, { y: 15, duration: 1 })

    papier.style.opacity = "1";
    papier.style.boxShadow = "5px 5px 5px rgba(0, 0, 0, 0.3)";

    gsap.to(papier, { y: -15, duration: 1 })

    boutonPapier.style.display = "block";

    if (papier === passeport) {
        textPapier.innerHTML = "<b>Le passeport</b> <br> <br>C'est le tout premier document qu'il vous faudra, que ce soit pour les papiers suivants, le billet d'avion ou n'importe quelle démarche à l'étranger. D'ailleurs, si vous prévoyez de partir n'importe où hors de l'Europe et que vous n'avez pas encore de passeport (ou qu'il périme pendant votre séjour), faites-le faire ou refaire dès maintenant, car la démarche peut s'avérer longue entre la prise de rendez-vous et la réception du passeport (surtout en Île-de-France : personnellement, j'ai mis 5 mois au total à l'avoir...). <br><br>  Coût : 86€";
        boutonPapier.href = "https://www.service-public.fr/particuliers/vosdroits/N360";
        boutonPapier.innerHTML = "En savoir + sur la demande de passeport";
    }

    else if (papier === acceptation) {
        textPapier.innerHTML = "<b>Les démarches auprès du SRI et de l'UQAT</b> <br> <br>Normalement, un membre du Services des Relations Internationales de l'UGE organisera des réunions puis, une fois votre voeu accepté, entrera en contact avec vous pour vous expliquer tout ce qui concerne la candidature auprès de l'UQAT et les démarches internes à l'Université (MoveOn, fiche de suivi, demandes de bourse...). A ce propos, lisez bien leurs mails ainsi que les genres de ''kits'' qu'ils enverront, il y aura plein de papiers à remplir pour eux avant, pendant et après le séjour à l'étranger, ainsi que le formulaire SE-401-Q-106 de l'Assurance Maladie, à faire signer par votre caisse avant de quitter la France (je l'ai fait par la Poste, environ 1 mois de délai). <br><br> Dès que tout ça sera fait, et dès que vous êtes quasi-sûr.e de venir à Rouyn, foncez demander un logement (de 4) en résidence étudiante. Moi, je l'ai fait trop tard et je n'en ai pas eu. Maintenant, j'habite à 30min de l'UQAT (et je râle). "
        boutonPapier.href = "https://www.uqat.ca/services/residences-etudiantes/reservation-bail/";
        boutonPapier.innerHTML = "Formulaire de demande de logement";
    }

    else if (papier === caq) {
        textPapier.innerHTML = "<b>Certificat d'acceptation du Québec (CAQ)</b> <br><br> La première étape côté immigration : le CAQ. C'est une demande à faire en ligne, puis sur une autre plateforme (Arrima) il faudra déposer plein de pièces, dont passeport et lettre d'acceptation de la part de l'UQAT. Ils demandent aussi de justifier qu'on a assez de ressources pour subvenir à nos besoins (environ 13 000$ sur l'année), pour ça tout est bon à montrer : attestation de bourses, bulletins de paie, relevés bancaires, relevés et formulaire des parents comme quoi ils sont garants...  Entre la soumission de ma demande et la réception de la lettre d'acceptation du CAQ par mail, j'ai attendu environ 2 semaines. <br><br> Coût (frais de dossier) : environ 84€"

        boutonPapier.href = "https://www.quebec.ca/education/etudier-quebec/demande-selection-temporaire#c115425";
        boutonPapier.innerHTML = "En savoir + sur la demande de CAQ";
    }

    else if (papier === permis) {
        textPapier.innerHTML = "<b>Permis d'études</b> <br><br> Deuxième étape de l'immigration : le permis d'études. Il faudra avoir obtenu le CAQ au préalable. De la même manière, c'est globalement des formulaires à remplir et des documents à transmettre, mais en plus de ça, une fois la demande soumise, il faudra prendre rendez-vous dans un centre de collecte (VFS Global Canada) pour qu'ils prennent vos empreintes et votre photo. Il y en a un à Paris (11 Rue Madame de Sanzillon - Métro 13 Saint-Ouen) et un à Lyon. J'ai pris le rendez-vous le lendemain de la soumission de ma demande sur le site IRCC, puis j'ai obtenu la ''lettre d'introduction'' par mail en quelques jours. Ce n'est pas encore le permis d'études, une fois arrivé à l'aéroport il faudra montrer cette lettre et d'autres papiers à l'immigration et c'est là qu'ils vous remettront le permis d'études canadien. Ce permis vous permettra de circuler au Canada, de vous inscrire à l'UQAT (il faudra aller le donner dès votre arrivée) mais aussi de faire votre demande d'adhésion gratuite à la RAMQ, l'assurance maladie québecoise (en plus du formulaire de la Sécu française dont je parlais plus tôt). <br><br>  Coût (frais de dossier et empreintes) : environ 163€"
        boutonPapier.href = "https://www.canada.ca/fr/immigration-refugies-citoyennete/services/demande.html";
        boutonPapier.innerHTML = "Site de l'IRCC";
    }

    else {
        textPapier.innerHTML = " ";
        boutonPapier.href = " ";
        boutonPapier.innerHTML = " ";
    }

};


passeport.addEventListener("click", function () { focusPapier(passeport) });

acceptation.addEventListener("click", function () { focusPapier(acceptation) });

caq.addEventListener("click", function () { focusPapier(caq) });


permis.addEventListener("click", function () { focusPapier(permis) });



/* Section 5 : Conclusion */


gsap.to('.billet', {
    y: -100,
    rotate: 5,
    duration: 5,
    scrollTrigger: {
        start: "50% center",
        trigger: '.section5',
        scrub: 1,
    },
});
