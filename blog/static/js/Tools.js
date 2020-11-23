
function lang(langue=null){
    switch(langue){
        case "Fra":
            console.log("Hello Fra")
            document.getElementById("Home").innerText = "Acceuil";
            document.getElementById("Who").innerText = "Qui sommes nous ?";
            document.getElementById("Contact").innerText = "Contactez nous";
            document.getElementById("Tips").innerText = "Dons";
            document.getElementById("M_b_text").innerText = "Fait par des étudiants de ";
            Wholang(langue);
            break;
        case "Eng":
            console.log("Hello Eng");
            document.getElementById("Home").innerText = "Home";
            document.getElementById("Who").innerText = "Who are we ?";
            document.getElementById("Contact").innerText = "Contact us";
            document.getElementById("Tips").innerText = "Tips";
            document.getElementById("M_b_text").innerText = "Made by a few studants of";
            Wholang(langue);       
            break; 
        case "Esp":
            document.getElementById("Home").innerText = "Acogida";
            document.getElementById("Who").innerText = "¿ Quiénes somos ?";
            document.getElementById("Contact").innerText = "Contactarnos";
            document.getElementById("Tips").innerText = "Donación";
            document.getElementById("M_b_text").innerText = "Hecho por los estudiantes de";
            Wholang(langue);
            break;
        case "Ita":
            document.getElementById("Home").innerText = "Homepage";                
            document.getElementById("Who").innerText = "Chi siamo ?";
            document.getElementById("Contact").innerText = "Contattateci";
            document.getElementById("Tips").innerText = "Donazioni";
            document.getElementById("M_b_text").innerText = "Fatto dagli studenti del";
            Wholang(langue);
            break;
        default :
            console.log("Hello default Fra")
            document.getElementById("Home").innerText = "Accueil";
            document.getElementById("Who").innerText = "Qui sommes nous ?";
            document.getElementById("Contact").innerText = "Contacter nous";
            document.getElementById("Tips").innerText = "Dons";
            document.getElementById("M_b_text").innerText = "Fait par des étudiants de ";
            Wholang(langue);
            break;
    }
}

function Wholang(langue=null){
    switch(langue){
    case "Fra":
        document.getElementById("P1").innerText = "Nous sommes une jeune association de soutien envers la scolarisation des enfants défavorisés située au Burkina Faso. Nous nous sommes lancés dans ce projet en 2015 avec l’idée de construire un complexe scolaire dans les alentours de Ouagadougou et ainsi pouvoir venir en aide aux enfants défavorisés des banlieues.";
        document.getElementById("P2").innerText = "Il travaille comme professeur pour l’instruction des jeunes qui n’ont pas les moyens d’avoir une éducation privée.Il est également un écrivain qui produit des ouvrages sur les difficultés que la plupart des burkinabé rencontrent au quotidien";
        document.getElementById("P3").innerText = "Elle sensibilise la population française sur les conditions de vie au Burkina-Faso et de faires un lien s’ils le souhaitent pour d’aider ce grand projet qui nous tient à cœur.";
        document.getElementById("P4").innerText = "Au Burkina Faso seulement 41,2% des jeunes ont la chance d’être alphabétisé. La population burkinabè est constamment confrontée à des situations de précarité, et l’analphabétisme est la première barrière qui empêche le développement de la société.C'est pourquoi nous voulons que ces jeunes puissent avoir toutes les cartes en main pour s'épanouir et être maître de leur destin en commençant par leur fournir un cadre adéquat où pouvoir étudier.";
        document.getElementById("P5").innerText = "La banlieue où se situe l’école se situe dans le quartier de dji ko fè, dans la commune rurale de ";
        document.getElementById("P6").innerText = ", qui est extrêmement pauvre. L’accès à l’eau potable est un souci majeur et le quartier ne compte pas d’écoles publiques, mais quelques écoles privées qui ne sont réservées qu’aux personnes riches. Ces écoles sont très chères. Notre projet est de créer un grand centre scolaire pour les enfants issus des familles pauvres, les orphelins et les enfants vulnérables ; comprenant ainsi le parcours de la maternelle au BAC. Nous voudrions aussi pouvoir héberger les enfants qui auraient des difficultés pour se déplacer jusqu’au centre, et développer un potager et une cantine pour pouvoir aussi prendre en charge l’un de ses repas journaliers.";
        document.getElementById("T1").innerText = "Qui sommes nous ?";
        document.getElementById("T2").innerText = "Président située au Burkina-Faso";
        document.getElementById("T3").innerText = "Responsable branche Française";
        document.getElementById("T4").innerText = "Pourquoi nous faisons cela ?";
        document.getElementById("T5").innerText = "Où sommes nous ?";

        break;
    case "Eng":
        document.getElementById("P1").innerText = "We are a young association in support of schooling for disadvantaged child in Burkina Faso. We launch this in project in 2015 with the idea to build a school complex near Ouagadougou to be ableto help disadvantaged child from suburban areas.";
        document.getElementById("P2").innerText = "He work as a professor for the instruction of young people who doesn’t have access to private education. He is also a writer who produce literary works about the difficulties encountered by mostof the Burkinabe.";
        document.getElementById("P3").innerText = "She educate french population about living conditions in Burkina Faso and to make the link for if they are willing to help this project meaningful to us.";
        document.getElementById("P4").innerText = "In Burkina Faso only 41,2% of the young people have the opportunity to be alphabetize. Burkinabe population is constantly confronted to precariousness situations, and illiteracy is the one of the first barrier which refrain the development of society. This is why we want for those young people to be able to hold their destiny starting with an appropriate framework to learn..";
        document.getElementById("P5").innerText = "The suburbs where is located the school is in the district of dji ko fè, in the rural district of "
        document.getElementById("P6").innerText = ", which is really poor. The access of drinkable water is a main concern and the district don’t any public school, only a few private school which are reserved to reach people. Those school are really expensive. Our project is to create large school center for the children from poor family, orphan and vulnerable child; thus comprising educational pathway from kindergarten to high school diploma. We also want to accommodate children that would have problems to travel to the center, and to develop a gardening and a cafeteria to take care of one of the daily meal.";
        document.getElementById("T1").innerText = "Who are we ?";
        document.getElementById("T2").innerText = "President located in Burkina Faso";
        document.getElementById("T3").innerText = "In charge of the French branch";
        document.getElementById("T4").innerText = "Why are we doing this?";
        document.getElementById("T5").innerText = "Where are we?";
        break;
    case "Esp":
        document.getElementById("P1").innerText = "Somos una asociación joven que apoya la educación de niños desfavorecidos situada en Burkina Faso. Nos embarcamos en este proyecto en 2015 con la idea de construir un complejo escolar cerca de Uagadugú y así poder ayudar a los niños desfavorecidos en los suburbios.";
        document.getElementById("P2").innerText = "Trabaja como maestro para la educación de los jóvenes que no pueden pagar una educación privada. También es un escritor que produce libros que tratan de las dificultades que la mayoría de los burkineses encuentran en la vida cotidiana.";
        document.getElementById("P3").innerText = "Educa a la población francesa sobre las condiciones de vida en Burkina-Faso y hace un enlace si desean ayudar a este gran proyecto que es importante para nosotros y sobretodo para los estudiantes burkinéses.";
        document.getElementById("P4").innerText = "En Burkina Faso, solo el 41,2% de los jóvenes tienen la suerte de saber leer y escribir. La población Burkinés se enfrenta constantemente a situaciones precarias, y el analfabetismo es la primera barrera que impide el desarrollo de la sociedad. Por eso, queremos que estos jóvenes tengan todas las cartas en la mano para prosperar y dominar su destino empiezando dando un espacio adecuado para poder estudiar.";
        document.getElementById("P5").innerText = "El suburbio donde se encuentra la escuela está en el distrito de dji ko fè, en la comuna rural de "
        document.getElementById("P6").innerText = ", que es extradamente pobre. El acceso al agua potable es una preocupación importante y el distrito no tiene escuelas públicas, sino algunas escuelas privadas que están reservadas solo para los ricos. Estas escuelas son muy caras. Nuestro proyecto es crear un gran centro escolar para niños de familias pobres, huérfanos y niños vulnerables; para reunir así el camino desde el jardín de infantes hasta el BAC. También nos gustaría poder acomodar a los niños que tendrían dificultades para trasladarse al centro, y desarrollar un huerto y una cantina para que  podamos ocuparnos de una de sus comidas diarias.";
        document.getElementById("T1").innerText = "¿ Quiénes somos ?";
        document.getElementById("T2").innerText = "Presidente ubicado en Burkina-Faso";
        document.getElementById("T3").innerText = "Responsable de la Rama francesa";
        document.getElementById("T4").innerText = "¿ Por qué estamos haciendo esto ?";
        document.getElementById("T5").innerText = "¿ Dónde estamos ?";
        break;
    case "Ita":
        document.getElementById("P1").innerText = "Siamo una giovane associazione a sostegno dell'educazione dei bambini svantaggiati situata in Burkina Faso. Abbiamo iniziato questo progetto nel 2015 con l'idea di costruire un complesso scolastico nella periferia di Ouagadougou e poter così aiutare i bambini svantaggiati.";
        document.getElementById("P2").innerText = "Lavora come insegnante per l'educazione dei giovani che non possono permettersi un'istruzione privata ed è anche uno scrittore; i suoi libri parlano delle difficoltà che la maggior parte del Burkinabé incontra quotidianamente.";
        document.getElementById("P3").innerText = "Sensibilizza la popolazione francese sulle condizioni di vita in Burkina-Faso e fa da tramite se si desidera aiutare questo grande progetto a cui teniamo molto";
        document.getElementById("P4").innerText = "In Burkina Faso solo il 41,2% dei giovani ha la fortuna di poter avere un’istruzione. La popolazione Burkinabè si confronta costantemente con situazioni di precarietà e l'analfabetismo è la prima barriera che impedisce lo sviluppo della società, per questo vogliamo che questi giovani abbiano tutte le carte in mano per imparare ed essere padroni del loro destino, fornendo loro un luogo adeguato in cui studiare.";
        document.getElementById("P5").innerText = "Il sobborgo in cui si trova la scuola è nel distretto di jji ko fè, nel comune rurale di "
        document.getElementById("P6").innerText = ", che è estremamente povero. L'accesso all'acqua potabile è una delle maggiori preoccupazioni e il distretto non ha scuole pubbliche, ma alcune scuole private riservate solo ai ricchi. Queste scuole sono molto costose. Il nostro progetto è quello di creare un grande centro scolastico per bambini di famiglie povere, orfani e bambini vulnerabili; comprendendo così il percorso dall'asilo alla maturità. Vorremmo anche essere in grado di accogliere i bambini che hanno difficoltà a spostarsi verso il centro e sviluppare un orto e una mensa in modo da poterci anche prendere cura di uno dei pasti quotidiani.";
        document.getElementById("T1").innerText = "Chi siamo ?";
        document.getElementById("T2").innerText = "Presidente situato in Burkina-Faso";
        document.getElementById("T3").innerText = "Direttrice della filiale francese";
        document.getElementById("T4").innerText = "Perché lo stiamo facendo?";
        document.getElementById("T5").innerText = "Dove siamo";
        break;
    default :
        document.getElementById("P1").innerText = "Nous sommes une jeune association de soutien envers la scolarisation des enfants défavorisés située au Burkina Faso. Nous nous sommes lancés dans ce projet en 2015 avec l’idée de construire un complexe scolaire dans les alentours de Ouagadougou et ainsi pouvoir venir en aide aux enfants défavorisés des banlieues.";
        document.getElementById("P2").innerText = "Il travaille comme professeur pour l’instruction des jeunes qui n’ont pas les moyens d’avoir une éducation privée.Il est également un écrivain qui produit des ouvrages sur les difficultés que la plupart des burkinabé rencontrent au quotidien";
        document.getElementById("P3").innerText = "Elle sensibilise la population française sur les conditions de vie au Burkina-Faso et de faires un lien s’ils le souhaitent pour d’aider ce grand projet qui nous tient à cœur.";
        document.getElementById("P4").innerText = "Au Burkina Faso seulement 41,2% des jeunes ont la chance d’être alphabétisé. La population burkinabè est constamment confrontée à des situations de précarité, et l’analphabétisme est la première barrière qui empêche le développement de la société.C'est pourquoi nous voulons que ces jeunes puissent avoir toutes les cartes en main pour s'épanouir et être maître de leur destin en commençant par leur fournir un cadre adéquat où pouvoir étudier.";
        document.getElementById("P5").innerText = "La banlieue où se situe l’école se situe dans le quartier de dji ko fè, dans la commune rurale de ";
        document.getElementById("P6").innerText = ", qui est extrêmement pauvre. L’accès à l’eau potable est un souci majeur et le quartier ne compte pas d’écoles publiques, mais quelques écoles privées qui ne sont réservées qu’aux personnes riches. Ces écoles sont très chères. Notre projet est de créer un grand centre scolaire pour les enfants issus des familles pauvres, les orphelins et les enfants vulnérables ; comprenant ainsi le parcours de la maternelle au BAC. Nous voudrions aussi pouvoir héberger les enfants qui auraient des difficultés pour se déplacer jusqu’au centre, et développer un potager et une cantine pour pouvoir aussi prendre en charge l’un de ses repas journaliers.";
        document.getElementById("T1").innerText = "Qui sommes nous ?";
        document.getElementById("T2").innerText = "Président située au Burkina-Faso";
        document.getElementById("T3").innerText = "Responsable branche Française";
        document.getElementById("T4").innerText = "Pourquoi nous faisons cela ?";
        document.getElementById("T5").innerText = "Où sommes nous ?";
        break;
    }
}

function redir(pos){
    window.location.href = "http://localhost:8000"+pos;
}
