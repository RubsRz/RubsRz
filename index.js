const fadeOut = () => {
    const loaderWrapper = document.querySelector(".wrapper");
    loaderWrapper.classList.add("fade");
    textReveal("h3", 0, 500);
};

window.addEventListener("load", fadeOut);

let previousScroll = window.pageYOffset;
window.onscroll = function() {
    // Effect hide and show navbar
    let currentScroll = window.pageYOffset;
    if (previousScroll > currentScroll) {
        document.querySelector("nav").style.top = "0";
    } else {
        document.querySelector("nav").style.top = "calc(var(--nav-height) * -1)";
    }
    previousScroll = currentScroll;
    // Effect shadow navbar
    if (currentScroll > 80) {
        document.querySelector("nav").style.boxShadow = "0px 0px 10px 0px var(--shadow)";
    } else {
        document.querySelector("nav").style.boxShadow = "none";
    }
};

const showSidebar = () => {
    document.querySelector(".sidebar").classList.add("show-sidebar");
    document.querySelector(".overlay").classList.add("show-overlay");
};

const hideSidebar = () => {
    document.querySelector(".sidebar").classList.remove("show-sidebar");
    document.querySelector(".overlay").classList.remove("show-overlay");
};

document.querySelector(".switch input").addEventListener("change", (e) => {
    if (e.target.checked) {
        document.documentElement.style.setProperty("--background", "#171717");
        document.documentElement.style.setProperty("--text", "#f2f2f2");
        document.documentElement.style.setProperty("--second", "#212121");
        document.documentElement.style.setProperty("--shadow", "#000");
        document.documentElement.style.setProperty("--card", "#212121");
        document.querySelector("meta[name=theme-color]").setAttribute("content", "#171717");
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.style.setProperty("--background", "#fff");
        document.documentElement.style.setProperty("--text", "#171717");
        document.documentElement.style.setProperty("--second", "#ccc");
        document.documentElement.style.setProperty("--shadow", "#ccc");
        document.documentElement.style.setProperty("--card", "#fff");
        document.querySelector("meta[name=theme-color]").setAttribute("content", "#fff");
        localStorage.setItem("theme", "light");
    }
});

const skills = [{
        name: "HTML",
        img: "src/habilidades/html-5.svg",
        description: "Lenguaje de marcado para la creación de páginas web.",
        year: "2020",
    },
    {
        name: "CSS",
        img: "src/habilidades/css-3.svg",
        description: "Lenguaje de estilos para la creación de páginas web.",
        year: "2020",
    },
    {
        name: "Javascript",
        img: "src/habilidades/js.svg",
        description: "Lenguaje de programación para la creación de páginas web.",
        year: "2020",
    },
    {
        name: "React Native",
        img: "src/habilidades/react.svg",
        description: "Biblioteca Javascript de código abierto diseñada para crear interfaces de usuario.",
        year: "2022",
    },
    {
        name: "Angular",
        img: "src/habilidades/angular-icon.svg",
        description: "Framework de creación de páginas web.",
        year: "2021",
    },
    {
        name: "Ionic",
        img: "src/habilidades/ionic.png",
        description: "Framework para creación de aplicaciones móviles.",
        year: "2022",
    },
    {
        name: "jQuery",
        img: "src/habilidades/jquery.png",
        description: "JQuery facilita el uso de algunas funciones",
        year: "2022",
    },
    {
        name: "Express JS",
        img: "src/habilidades/express-js.png",
        description: "Infraestructura web rápida, minimalista y flexible para Node.js.",
        year: "2022",
    },
    {
        name: "MongoDB",
        img: "src/habilidades/mongodb.png",
        description: "Base de datos para la creación de páginas web.",
        year: "2022",
    },
    {
        name: "MySQL",
        img: "src/habilidades/sql.png",
        description: "Base de datos para la creación de páginas web.",
        year: "2018",
    },
    {
        name: "Bootstrap",
        img: "src/habilidades/bootstrap.svg",
        description: "Framework de creación de páginas web.",
        year: "2020",
    },
    {
        name: "Git",
        img: "src/habilidades/git.svg",
        description: "Software de control de versiones.",
        year: "2022",
    },
    {
        name: "Linux",
        img: "src/habilidades/linux.png",
        description: "Sistema operativo open source.",
        year: "2018",
    },
    {
        name: "Node JS",
        img: "src/habilidades/node-js.svg",
        description: "Entorno en tiempo de ejecución para la capa del servidor basado en el lenguaje de programación JavaScript.",
        year: "2022",
    },
    {
        name: "Firebase",
        img: "src/habilidades/firebase.svg",
        description: "Firebase como base de datos facilita la parte del backend en el desarrollo web y móvil",
        year: "2020",
    },
    {
        name: "Python",
        img: "src/habilidades/python.svg",
        description: "Lenguaje de programación interpretado de alto nivel, de uso común para la web y el desarrollo.",
        year: "2022",
    },
    {
        name: "React JS",
        img: "src/habilidades/react.svg",
        description: "Lenguaje de programación para la creación de páginas web.",
        year: "2022",
    },
    {
        name: "Typescript",
        img: "src/habilidades/typescript.svg",
        description: "Lenguaje de programación para la creación de páginas web.",
        year: "2022",
    }

];

const projects = [{
        name: "Lista De Gastos",
        description: "Aplicación web realizada en Angular, que permite llevar un listado de gastos en base a un presupuesto dado",
        // skills: [""],
        img: "src/proyectos/lista-de-gastos.png",
        repo: "https://github.com/RubsRz/lista-de-gastos",
        demo: "https://listadegastos-rubenrodriguez.netlify.app/",
    },
    {
        name: "WeatherApp",
        description: "Aplicación que rescata los datos de una API publica para conocer el clima del lugar que desees",
        // skills: [""],
        img: "src/proyectos/WeatherApp.png",
        repo: "https://github.com/RubsRz/weatherAPP",
        demo: "https://weatherapp-ruben-rodriguez.netlify.app/",
    },
    {
        name: "PokeFavs",
        description: "Aplicación web realizada en angular que hace uso de la POKE API y permite guardar pokemones favoritos",
        // skills: [""],
        img: "src/proyectos/pokefavs.png",
        repo: "https://github.com/RubsRz/pokefavs",
        demo: "https://pokefavs-rubenrodriguez.netlify.app/",
    },
    {
        name: "Simulador De Uber",
        description: "Aplicación web que simula hacer viajes de uber, dando un costo aproximado de un viaje y guardando el historial de los viajes realizados",
        // skills: [""],
        img: "src/proyectos/simulador-uber.png",
        repo: "https://github.com/RubsRz/SimuladorUber",
        demo: "https://simuladoruber-rubenrodriguez.netlify.app/",
    },
    {
        name: "Bloc De Tareas",
        description: "Una aplicacion sencilla con localStorage para guardar tareas pendientes",
        // skills: [""],
        img: "src/proyectos/bloc-de-tareas.png",
        repo: "https://github.com/RubsRz/Bloc-De-Tareas",
        demo: "https://bloc-de-tareas-rubenrodriguez.netlify.app/",
    },
    {
        name: "Mini Juego",
        description: "Mini juego, Piedra Papel Tijera, incluyendo Lagarto y Spock como en la serie The Big Bang Theory",
        // skills: [""],
        img: "src/proyectos/pptls.png",
        repo: "https://github.com/RubsRz/PPTLS-Game",
        demo: "https://pptls-game-rubenrodriguez.netlify.app/",
    },

];


const skills_label = document.querySelector(".skills");
const projects_label = document.querySelector(".projects");
const time = document.querySelector(".time");

function render() {
    // Theme
    if (localStorage.getItem("theme") === "dark") {
        document.querySelector(".switch input").checked = true;
        document.documentElement.style.setProperty("--background", "#171717");
        document.documentElement.style.setProperty("--text", "#f2f2f2");
        document.documentElement.style.setProperty("--second", "#212121");
        document.documentElement.style.setProperty("--shadow", "#000");
        document.documentElement.style.setProperty("--card", "#212121");
        document.querySelector("meta[name=theme-color]").setAttribute("content", "#171717");
    } else {
        document.querySelector("meta[name=theme-color]").setAttribute("content", "#fff");
    }

    // Skills
    skills.forEach((skill) => {
        skills_label.innerHTML += `
        <div class="skill">
            <img src=${skill.img} width='50' arial-label="${skill.name}">
            <div class="skill-text">${skill.name}</div>
        </div>
        `;
    });


    // Projects
    projects.forEach((project) => {
        projects_label.innerHTML += `
        <div class="card">
            <div class="card-img">
                <img src="${project.img}" alt="" width="50"/>
                <filter/>
            </div>
            <div class="card-content">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                
                <div class="card-links">
                    <a href="${
                        project.repo
                    }" aria-label="REPO" target="_blank"><i class="uil uil-github"></i></a>
                    <a href="${
                        project.demo
                    }" aria-label="DEMO" target="_blank"><i class="uil uil-play-circle"></i></a>
                </div>
            </div>
        </div>
        `;
    });


    // Time
    setInterval(() => {
        currentTime = new Date();
        hours = currentTime.getHours();
        minutes =
            currentTime.getMinutes() < 10 ?
            "0" + currentTime.getMinutes() :
            currentTime.getMinutes();
        timeString = `${hours}:${minutes}`;
        time.innerHTML = timeString;
    }, 1000);
}

render();

const textReveal = (text, delay = 0, duration = 2000) => {
    let textWrapper = document.querySelector(text);
    textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter' style='display: inline-block;'>$&</span>"
    );
    anime.timeline().add({
        targets: text + " .letter",
        translateY: [200, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        delay: (el, i) => 1100 + 1000 * (delay - 1) + 50 * i,
        duration,
    });
};

gsap.set(".card", { opacity: 0, y: 100 });
ScrollTrigger.batch(".card", {
    onEnter: (t) => gsap.to(t, { stagger: 0.1, opacity: 1, y: 0 }),
    onLeaveBack: (t) => gsap.to(t, { opacity: 0, y: 100 }),
});

Draggable.create(".skill", {
    type: "x,y",
    edgeResistance: 0.75,
    bounds: ".desktop",
    inertia: true,
    cursor: "default",
    zIndexBoost: false,
});