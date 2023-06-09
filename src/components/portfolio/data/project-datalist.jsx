export default function projectList(props) {
    const project = [
        {
            title: "Countries API",
            source: "countriesAPI.png",
            colab: [],
            description: `Site reproduisant l'API "restCountries" et affichant certaine information d'un pays (capital et nom du pays) lors de la recherche par pays ou capital ou une liste des pays d'un continent lors d'une recherche par continents ("region").`,
            technology: "Html, CSS3, Javascript, Heroku",
            link: "https://anthonydweb.github.io/countries_api/",
            responsive: ["mobile","tablette","Ipad"],
        },
        {
            title: "PokeDex",
            source: "pokeDex.png",
            colab: [],
            description: `Projet réalisé au cours de la formation Digitous ( de Konexio ) et ayant pour but de créer un mini site pour récupérer l’information d’un pokemon de manière aléatoire.`,
            technology: "React (hook), CSS3, Pokeapi (API)",
            link: "https://anthonydweb.github.io/pokeDex",
            responsive: [],
        },
        {
            title: "Puissance 4",
            source: "puissance4.png",
            colab: [
                {
                    name: "Julien Penot",
                },
                {
                    name: "Rahmad Abuzar",
                    link: "https://www.linkedin.com/in/rahmad-abuzar-83a114214"
                }
            ],
            description: `Projet réalisé au cours de la formation Digitous ( de Konexio ) et ayant pour but de coder en groupe un jeu parmis une liste.`,
            technology: "Html, CSS3, Javascript, React",
            link: "https://anthonydweb.github.io/puissance4",
            responsive: ["mobile","tablette","Ipad"],
        },
        {
            title: "Wheather App",
            source: "wheatherApp.png",
            colab: [],
            description: `Site affichant la méteo d'une ville ansi qu'une map géocalisé sur la ville recherché. Il y a la possibilité d'ajouter trois villes dans nos favoris et de définir une ville a afficher comme météo par défaut.`,
            technology: "Html, CSS3, Javascript, Hooks, Open Weather Map (API)",
            link: "https://anthonydweb.github.io/weatherApp",
            responsive: [],
        },
        {
            title: "Cuizine",
            source: "cuizine.png",
            colab: [],
            description: `Reproduction d'un site sur le thème de la cuisine.`,
            technology: "Html, CSS3, Bootstrap, Javascript",
            link: "https://anthonydweb.github.io/digitous-cuizine/index.html",
            responsive: ["mobile","tablette","Ipad"],
        },
        {
            title: "Game Help",
            source: "gameHelp.png",
            colab: [],
            description: `Il s'agit d'un  petit site web ayant pour pub de facilité le comptage du nombre de combats a faire pour obtenir un certain nombre de points, ou encore pour du random-fight (choix de personnage aléatoire pour des combats entre joueurs) sur leur jeux mobile.`,
            technology: "Html, CSS3, Javascript",
            link: "https://anthonydweb.github.io/gameHelp",
            responsive: [],
        },
    ]
    return project
}