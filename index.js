// Loader
const fadeOut = () => {
    const loaderWrapper = document.querySelector(".wrapper");
    loaderWrapper.classList.add("fade");
    textReveal("h3", 0, 500);
};

window.addEventListener("load", fadeOut);

// Navbar scroll effects - Versión mejorada
let lastKnownScroll = 0;
let ticking = false;
const nav = document.querySelector("nav");
const navHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'));

function handleScroll() {
    const currentScroll = window.pageYOffset;
    
    // Solo ejecutar si el cambio es significativo (mayor a 5px)
    if (Math.abs(currentScroll - lastKnownScroll) > 5) {
        // Hide/show navbar on scroll con límite superior
        if (currentScroll <= 0) {
            nav.style.top = "0";
        } else if (lastKnownScroll > currentScroll) {
            nav.style.top = "0";
        } else {
            nav.style.top = `-${navHeight}px`;
        }
        
        // Add shadow when scrolled
        if (currentScroll > 80) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
        
        lastKnownScroll = currentScroll;
    }
    
    // Reveal animations (optimizado)
    const reveals = document.querySelectorAll(".reveal:not(.active)");
    const windowHeight = window.innerHeight;
    const revealPoint = 150;
    
    reveals.forEach(reveal => {
        const revealTop = reveal.getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add("active");
        }
    });
}

// Usamos requestAnimationFrame para mejor performance
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
        });
        ticking = true;
    }
});

// Forzar estado inicial al cargar
window.addEventListener('load', () => {
    handleScroll();
});

// Sidebar functions
const showSidebar = () => {
    document.querySelector(".sidebar").style.display = "block";
    document.querySelector(".overlay").style.display = "block";
    document.body.style.overflow = "hidden";
};

const hideSidebar = () => {
    document.querySelector(".sidebar").style.display = "none";
    document.querySelector(".overlay").style.display = "none";
    document.body.style.overflow = "auto";
};

// Theme switcher
document.querySelector(".switch input").addEventListener("change", (e) => {
    if (e.target.checked) {
        document.documentElement.style.setProperty("--background", "#171717");
        document.documentElement.style.setProperty("--background-dark", "#121212");
        document.documentElement.style.setProperty("--text", "#f8f9fa");
        document.documentElement.style.setProperty("--text-light", "rgba(255, 255, 255, 0.7)");
        document.documentElement.style.setProperty("--card", "#212121");
        document.documentElement.style.setProperty("--card-dark", "#1e1e1e");
        document.documentElement.style.setProperty("--shadow", "0 4px 6px rgba(0, 0, 0, 0.3)");
        document.querySelector("meta[name=theme-color]").setAttribute("content", "#171717");
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.style.setProperty("--background", "#f8f9fa");
        document.documentElement.style.setProperty("--background-dark", "#171717");
        document.documentElement.style.setProperty("--text", "#212529");
        document.documentElement.style.setProperty("--text-light", "#6c757d");
        document.documentElement.style.setProperty("--card", "#ffffff");
        document.documentElement.style.setProperty("--card-dark", "#212121");
        document.documentElement.style.setProperty("--shadow", "0 4px 6px rgba(0, 0, 0, 0.1)");
        document.querySelector("meta[name=theme-color]").setAttribute("content", "#f8f9fa");
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
    }
});

// Skills data
const skills = [
    {
        name: "HTML",
        img: "src/habilidades/html-5.svg",
        description: "Lenguaje de marcado para la creación de páginas web.",
        year: "2020",
        category: "frontend"
    },
    {
        name: "CSS",
        img: "src/habilidades/css-3.svg",
        description: "Lenguaje de estilos para la creación de páginas web.",
        year: "2020",
        category: "frontend"
    },
    {
        name: "JavaScript",
        img: "src/habilidades/js.svg",
        description: "Lenguaje de programación para la creación de páginas web interactivas.",
        year: "2020",
        category: "frontend"
    },
    {
        name: "React Native",
        img: "src/habilidades/react.svg",
        description: "Framework para desarrollo de aplicaciones móviles multiplataforma.",
        year: "2022",
        category: "mobile"
    },
    {
        name: "Angular",
        img: "src/habilidades/angular-icon.svg",
        description: "Framework para construcción de aplicaciones web complejas.",
        year: "2021",
        category: "frontend"
    },
    {
        name: "Ionic",
        img: "src/habilidades/ionic.png",
        description: "Framework para creación de aplicaciones móviles híbridas.",
        year: "2022",
        category: "mobile"
    },
    {
        name: "jQuery",
        img: "src/habilidades/jquery.png",
        description: "Biblioteca JavaScript que simplifica el manejo del DOM.",
        year: "2022",
        category: "frontend"
    },
    {
        name: "Express JS",
        img: "src/habilidades/express-js.png",
        description: "Framework para aplicaciones web y APIs con Node.js.",
        year: "2022",
        category: "backend"
    },
    {
        name: "MongoDB",
        img: "src/habilidades/mongodb.png",
        description: "Base de datos NoSQL orientada a documentos.",
        year: "2022",
        category: "backend"
    },
    {
        name: "MySQL",
        img: "src/habilidades/sql.png",
        description: "Sistema de gestión de bases de datos relacional.",
        year: "2018",
        category: "backend"
    },
    {
        name: "Bootstrap",
        img: "src/habilidades/bootstrap.svg",
        description: "Framework CSS para diseño responsive.",
        year: "2020",
        category: "frontend"
    },
    {
        name: "Git",
        img: "src/habilidades/git.svg",
        description: "Sistema de control de versiones distribuido.",
        year: "2022",
        category: "tools"
    },
    {
        name: "Linux",
        img: "src/habilidades/linux.png",
        description: "Sistema operativo open source.",
        year: "2018",
        category: "tools"
    },
    {
        name: "Node JS",
        img: "src/habilidades/node-js.svg",
        description: "Entorno de ejecución para JavaScript del lado del servidor.",
        year: "2022",
        category: "backend"
    },
    {
        name: "Firebase",
        img: "src/habilidades/firebase.svg",
        description: "Plataforma para desarrollo de aplicaciones web y móviles.",
        year: "2020",
        category: "backend"
    },
    {
        name: "Python",
        img: "src/habilidades/python.svg",
        description: "Lenguaje de programación versátil y de alto nivel.",
        year: "2022",
        category: "backend"
    },
    {
        name: "React JS",
        img: "src/habilidades/react.svg",
        description: "Biblioteca JavaScript para construir interfaces de usuario.",
        year: "2022",
        category: "frontend"
    },
    {
        name: "TypeScript",
        img: "src/habilidades/typescript.svg",
        description: "Superset de JavaScript con tipado estático.",
        year: "2022",
        category: "frontend"
    }
];

// Projects data
const projects = [
    {
        name: "Lista De Gastos",
        description: "Aplicación web realizada en Angular que permite llevar un listado de gastos en base a un presupuesto dado, con gráficos y categorías.",
        img: "src/proyectos/lista-de-gastos.png",
        repo: "https://github.com/RubsRz/lista-de-gastos",
        demo: "https://listadegastos-rubenrodriguez.netlify.app/",
        tags: ["Angular"]
    },
    {
        name: "WeatherApp",
        description: "Aplicación que consume una API pública para mostrar el clima actual y pronóstico en cualquier ubicación, con búsqueda por ciudad.",
        img: "src/proyectos/WeatherApp.png",
        repo: "https://github.com/RubsRz/weatherAPP",
        demo: "https://weatherapp-ruben-rodriguez.netlify.app/",
        tags: ["Angular", "API"]
    },
    {
        name: "PokeFavs",
        description: "Aplicación web que utiliza la POKE API para mostrar información de Pokémon y permite guardar tus favoritos en localStorage.",
        img: "src/proyectos/pokefavs.png",
        repo: "https://github.com/RubsRz/pokefavs",
        demo: "https://pokefavs-rubenrodriguez.netlify.app/",
        tags: ["Angular", "API"]
    },
    {
        name: "Simulador De Uber",
        description: "Aplicación web que simula viajes de Uber, calculando costos aproximados y guardando el historial de viajes realizados.",
        img: "src/proyectos/simulador-uber.png",
        repo: "https://github.com/RubsRz/SimuladorUber",
        demo: "https://simuladoruber-rubenrodriguez.netlify.app/",
        tags: ["Angular", "Firebase"]
    },
    {
        name: "Bloc De Tareas",
        description: "Aplicación sencilla con localStorage para gestionar tareas pendientes, con marcado de completadas y filtros.",
        img: "src/proyectos/bloc-de-tareas.png",
        repo: "https://github.com/RubsRz/Bloc-De-Tareas",
        demo: "https://bloc-de-tareas-rubenrodriguez.netlify.app/",
        tags: ["HTML", "CSS", "JavaScript"]
    },
    {
        name: "Mini Juego",
        description: "Juego de Piedra, Papel, Tijeras, Lagarto y Spock inspirado en The Big Bang Theory, con marcador y animaciones.",
        img: "src/proyectos/pptls.png",
        repo: "https://github.com/RubsRz/PPTLS-Game",
        demo: "https://pptls-game-rubenrodriguez.netlify.app/",
        tags: ["HTML", "CSS", "JavaScript"]
    }
];

// DOM elements
const skillsGrid = document.querySelector(".skills-grid");
const projectsGrid = document.querySelector(".projects-grid");
const categoryButtons = document.querySelectorAll(".category-btn");
const yearElement = document.getElementById("year");

// Render functions
function renderSkills(category = "all") {
    skillsGrid.innerHTML = "";
    
    const filteredSkills = category === "all" 
        ? skills 
        : skills.filter(skill => skill.category === category);
    
    filteredSkills.forEach((skill) => {
        const skillElement = document.createElement("div");
        skillElement.className = "skill-card reveal";
        skillElement.innerHTML = `
            <img src="${skill.img}" alt="${skill.name}" loading="lazy">
            <h4>${skill.name}</h4>
            <p>${skill.description}</p>
            <span class="year">Desde ${skill.year}</span>
        `;
        skillsGrid.appendChild(skillElement);
    });
    
    // Initialize scroll reveal
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((reveal, index) => {
        setTimeout(() => {
            reveal.classList.add("active");
        }, index * 100);
    });
}

function renderProjects() {
    projectsGrid.innerHTML = "";
    
    const techIcons = {
        "HTML": "src/habilidades/html-5.svg",
        "React": "src/habilidades/react.svg",
        "Node.js": "src/habilidades/node-js.svg",
        "Python": "src/habilidades/python.svg",
        "JQuery": "src/habilidades/jquery.png",
        "Bootstrap": "src/habilidades/bootstrap.svg",
        "MongoDB": "src/habilidades/mongodb.png",
        "MySQL": "src/habilidades/sql.png",
        "Express.js": "src/habilidades/express-js.png",
        "Ionic": "src/habilidades/ionic.png",
        "Angular": "src/habilidades/angular-icon.svg",
        "TypeScript": "src/habilidades/typescript.svg",
        "CSS": "src/habilidades/css-3.svg",
        "JavaScript": "src/habilidades/js.svg",
        "Firebase": "src/habilidades/firebase.svg",
        "API": "src/habilidades/api.svg",
    };
    
    projects.forEach((project) => {
        const projectElement = document.createElement("div");
        projectElement.className = "project-card reveal";
        projectElement.innerHTML = `
            <div class="project-img">
                <img src="${project.img}" alt="${project.name}" loading="lazy">
            </div>
            <div class="project-content">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="project-tech-stack">
                    ${project.tags.map(tag => `
                        <img src="${techIcons[tag] || 'src/habilidades/default.svg'}" 
                             alt="${tag}" 
                             title="${tag}"
                             class="tech-icon">
                    `).join("")}
                </div>
                <div class="project-links">
                    <a href="${project.repo}" target="_blank"><i class="fa-brands fa-github"></i> Repositorio</a>
                    <a href="${project.demo}" target="_blank">Demo <i class="fa-solid fa-play"></i></a>
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectElement);
    });
    
    // Initialize scroll reveal
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((reveal, index) => {
        setTimeout(() => {
            reveal.classList.add("active");
        }, index * 100);
    });
}

// Category filter
categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        categoryButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        renderSkills(button.dataset.category);
    });
});

// Typing animation
function typeAnimation() {
    const text = "Desarrollador de Software Multiplataforma";
    const element = document.querySelector(".typing-animation");
    let i = 0;
    
    const typing = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, 50);
}

// Text reveal animation
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

// GSAP animations
gsap.from("#home h1 span", {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
});

gsap.from(".tech-stack img", {
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.1,
    delay: 0.5,
    ease: "back.out"
});

gsap.from(".button", {
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 0.8,
    ease: "back.out"
});

gsap.from(".profile-img", {
    duration: 1.5,
    scale: 0.8,
    opacity: 0,
    delay: 0.3,
    ease: "power3.out"
});

// ScrollTrigger for cards
gsap.utils.toArray(".card").forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    });
});

// Initialize everything
function init() {
    // Set current year in footer
    yearElement.textContent = new Date().getFullYear();
    
    // Check for saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.querySelector(".switch input").checked = true;
        document.documentElement.style.setProperty("--background", "#171717");
        document.documentElement.style.setProperty("--background-dark", "#121212");
        document.documentElement.style.setProperty("--text", "#f8f9fa");
        document.documentElement.style.setProperty("--text-light", "rgba(255, 255, 255, 0.7)");
        document.documentElement.style.setProperty("--card", "#212121");
        document.documentElement.style.setProperty("--card-dark", "#1e1e1e");
        document.documentElement.style.setProperty("--shadow", "0 4px 6px rgba(0, 0, 0, 0.3)");
        document.querySelector("meta[name=theme-color]").setAttribute("content", "#171717");
        document.body.classList.add("dark-mode");
    }
    
    // Render content
    renderSkills();
    renderProjects();
    
    // Start typing animation
    setTimeout(typeAnimation, 500);
    
    // Initialize scroll reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", init);