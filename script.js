const projects = [
    {
        id: 1,
        name: "TinTrim",
        categories: "Trimble sommerjobb 2024",
        description: `Jeg lagde dette sommerprosjektet sammen med Åke Sjursen Hauge og Sigurd Humerfelt sommeren 2024. 
        Dette verktøyet gjenskaper funksjonen til trianguleringsverktøyet i <a href='https://civil.trimble.no/produkter/quadri' target='_blank'>Quadri</a> ved å bruke eksisterende matte-biblioteker, 
        lagd av Trimble. for å lage triangulære irregulære nettverk (TIN) direkte i nettleseren. Applikasjonen benytter Delaunay-triangulering for å sikre effektiv og nøyaktig oppretting av TIN. 
        Brukere har muligheten til å hente høydedata fra geonorge, noe som gjør det mulig å modellere virkelighetstro terreng med høy presisjon. 
        Denne funksjonaliteten gjør verktøyet ideelt for geo-analyser, byplanlegging og miljøforskning.`,
        title: "TinTrim",
        images: ["image2.png", "TinTrimDemoKort.gif"],
        paragraphs: [`I TinTrim kan man bruke en google earth plugin for å velge ut hvor i Norge man vil hente ut høydedata. 
        Man kan da velge størrelse og oppløsning på griden. Man kan så laste ned en fil med (x,y,z)-punkter og triangulere den. 
        Da lager man trekanter utifra de punktene, dette er da trinaguleringsprosessen, som skjer i backenden. 
        Man kan så legge til modellen i 3D vieweren, og man får en mesh som viser terrenget. 
        Man kan velge om man vil se wireframen, eller om man bare vil se meshen, eller begge. 
        Man kan også velge farge på modellen. Annen funksjonalitet er at man kan legger til grenser, altså hvor man vil ha muligheten til å triangulere.`]
    },
    {
        id: 2,
        name: "Fern",
        categories: "Addwize sommerjobb 2023",
        description: `Fern var programvaren jeg jobbet med sommeren 2023. Fern var en PLM-programvare i oppstartsfasen, 
        og min jobb gikk ut på synkronisere Fern med Fusion 360. Bildet til venstre viser menyen over de ulike operasjonene 
        man kunne gjennomføre inne i Fusion 360. Funksjonalitetene jeg implementerte var å knytte opp autodesk brukeren med 
        Fern og det å synkronisere BOM (Bill of Materials) med Fern. Utfordringene med uvikling av disse funksjonalitene lå 
        mye i bruker-logikken og håndtering av BOM. BOM er en liste over alle komponentene som er nødvendig for å bygge et produkt. 
        Demoen under viser bare den plug-in funksjonaliten jeg lagde, og ikke selve Fern. Jeg har desverre ikke lenger tilgang til Fern. 
        Det som da hadde skjedd dersom man skrev inn riktig brukernavn og passord er at BOMen hadde blitt sendt til backenden, som hadde
        prossesert BOMen og oppdatert Fern.`,
        title: "Fern Project",
        images: ["demoFern.gif"],
        paragraphs: [`
        Det var viktig at BOM ble synkronisert riktig. Hvis brukeren gjorde en liten endring på et produkt, 
        så skulle ikke hele BOM bli synkronisert på nytt. Det var også viktig at BOM ble synkronisert raskt, 
        siden det kunne være mange komponenter i BOM. Jeg viser ikke til bilder eller videoer av Fern, 
        siden det er et proprietært program, men til høyre kan man se hvordan det så ut fra Fusion 360. 
        Det som er morsomt med denne oppgaven er at synkronisering av BOMer ble brukt som et eksempel på bruken 
        av algoritmer i pensumboka i Algoritmer og Datastrukturer på NTNU: 
        "Given a mechanical design in terms of a library of parts, where each part may include instances of other parts, 
        list the parts in order so that each part appears before any part that uses it." 
        Fra: "Introduction to Algorithms, Fourth Edition" by Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein.
    `]
    },
    {
        id: 3,
        name: "Maskin-læring prosjekt",
        categories: "Prosjekt i faget TDT4173",
        description: "I dette prosjektet skulle vi predikere energiproduksjon fra solcellepaneler fra 3 ukjente lokasjoner. Dette var en oppgave i faget maskinlæring på NTNU, som hadde en Kaggle-konkurranse som vurderingsform, og man ble vurdert basert på scoren i konkurransen. I dette prosjektet erfarte vi at for å løse noen oppgaver, må man prøve seg frem mye. Vi hadde 95 submissions, og havnet på 15. plass av 167 lag.",
        title: "Maskin-læring Project",
        images: ["ML.png"],
        paragraphs: [
        `Den beste modellen vi utviklet var en kombinasjon av tre ulike maskinlæringsmodeller: CatBoost, XGBoost og AutoGluon. 
        Ved å kombinere disse modellene, prøvde vi å redusere feil ved at modellene kunne korrigere hverandre. Målet var å få en
        så nøyaktig prediksjon som mulig ved å balansere de ulike modellene sine styrker og svakheter.`,
        `En utfordring vi støtte på var hvordan vi skulle håndtere manglende data ("nan-verdier"). Vi fant ut at disse
        ofte kunne settes til 0, spesielt for visse typer data som høyde over bakken eller skydekke. Dette gjorde at modellen
        vår ble mer nøyaktig. Vi justerte også modellene ved å eksperimentere med ulike parametere for å finne de som ga best resultat.`,
        `Til slutt valgte vi ut de mest relevante features for å gi modellen vår den informasjonen den trengte for å
        gjøre gode forutsigelser. Vi brukte flere runder med utvalg for å finne de beste kombinasjonene av data som modellen skulle bruke.
        Dette hjalp oss å oppnå en god balanse mellom nøyaktighet og ytelse i våre prediksjoner.`,
        `Dette var alle på gruppens første AI/Maskin-lærings fag. Dette førte til at vi holdt på ganske lenge uten å forstå hva vi drev med.
        Videre vil jeg ta fag hvor man lærer litt mer hvordan tar en litt mer "sofistikert" og strukturer dataanalyse, slik at man får litt mer oversikt,
        og faktisk klarer å tolke dataen på en fornuftig måte.`]
    },
    // Add more projects as needed
];

localStorage.setItem('projects', JSON.stringify(projects));


document.addEventListener('DOMContentLoaded', function() {
    const projectList = document.querySelector('#projectList tbody');

    if (projectList) {
        projects.forEach(project => {
            const row = projectList.insertRow();
            row.classList.add('clickable-row');
            row.setAttribute('data-href', `project.html?id=${project.id}`);
            row.insertCell(0).textContent = project.name;
            row.insertCell(1).textContent = project.categories;
        });

        projectList.addEventListener('click', function(e) {
            const target = e.target.closest('tr');
            if (target && target.classList.contains('clickable-row')) {
                window.location.href = target.getAttribute('data-href');
            }
        });
    }

    if (window.location.pathname.includes('project.html')) {
        const projectId = parseInt(getUrlParameter('id'));
        const storedProjects = JSON.parse(localStorage.getItem('projects'));
        const project = storedProjects.find(p => p.id === projectId);
        
        if (project) {
            document.getElementById('projectTitle').textContent = project.title;
            document.getElementById('projectCategories').textContent = project.categories;
            document.getElementById('projectDescription').innerHTML = project.description;
    
            const projectContent = document.getElementById('projectContent');
            const images = project.images;
            const paragraphs = project.paragraphs;
    
            for (let i = 0; i < Math.max(images.length, paragraphs.length); i++) {
                if (images[i]) {
                    const img = document.createElement('img');
                    img.src = images[i];
                    img.alt = `Image ${i + 1} for ${project.name}`;
                    projectContent.appendChild(img);
                }
    
                if (paragraphs[i]) {
                    const p = document.createElement('p');
                    p.innerHTML = paragraphs[i];  // Use innerHTML instead of textContent
                    projectContent.appendChild(p);
                }
            }
        }
    }    
});

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}