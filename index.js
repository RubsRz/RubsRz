// =====================================================
// DATOS — edita aquí para actualizar el portafolio
// =====================================================

// Fecha en la que empezaste a trabajar como desarrollador (para "X+ años")
const CAREER_START = new Date(2023, 1, 1); // febrero 2023

const experience = [
    {
        company: "QMC MEX",
        role: { es: "Desarrollador Web", en: "Web Developer" },
        period: { es: "Feb 2023 — Actualidad", en: "Feb 2023 — Present" },
        current: true,
        points: {
            es: [
                "Diseñé y desarrollé sistemas de gestión de cursos para Mercedes-Benz en EE. UU. y México, agilizando la emisión de certificaciones.",
                "Implementé para QMC un sistema de gestión de eventos, cotizaciones y horarios de cursos.",
                "Lideré el desarrollo front-end del sitio web de una nueva universidad, coordinando tareas y al equipo de desarrollo.",
            ],
            en: [
                "Designed and built course management systems for Mercedes-Benz in the US and Mexico, streamlining certification issuance.",
                "Built an internal system for QMC to manage events, quotes and course schedules.",
                "Led front-end development for a new university's website, coordinating tasks and the dev team.",
            ],
        },
    },
    {
        company: "QMC MEX",
        role: { es: "Auxiliar de Soporte y Redes", en: "IT Support & Networking Assistant" },
        period: { es: "Oct 2022 — Feb 2023", en: "Oct 2022 — Feb 2023" },
        points: {
            es: ["Mantenimiento de equipos, respaldos de datos y soporte técnico a computadoras y dispositivos móviles."],
            en: ["Hardware maintenance, data backups and technical support for computers and mobile devices."],
        },
    },
    {
        company: "Electronic Cats",
        role: { es: "Especialista en WordPress", en: "WordPress Specialist" },
        period: { es: "May 2022 — Ago 2022", en: "May 2022 — Aug 2022" },
        points: {
            es: ["Implementé nuevas funcionalidades en el sitio web de la empresa con WordPress y plugins."],
            en: ["Shipped new features for the company website using WordPress and plugins."],
        },
    },
    {
        company: "Universidad Tecnológica de Aguascalientes",
        role: { es: "Ingeniería en Desarrollo y Gestión de Software", en: "B.Eng. in Software Development" },
        period: { es: "2020 — 2024", en: "2020 — 2024" },
        education: true,
        points: { es: [], en: [] },
    },
];

// type: "mobile" | "web" | "api"
// - mobile: agrega capturas en `screens` (ej. ["src/img/app-1.webp", "src/img/app-2.webp"]).
//           Si no hay capturas, se muestra un mockup ilustrativo con `icon`.
// - web:    `image` es una captura del sitio; `imageMobile` (opcional) la versión en celular.
// - api:    `snippet` son líneas que se muestran en una terminal.
// Links opcionales: site (sitio en producción), repo, demo, store (Play Store / App Store / APK)
// `client`: para trabajo freelance o de cliente. `privateRepo: true` si el código no es público.
const projects = [
    {
        type: "web",
        name: "Transportes Mixtos Miranda",
        year: "2025",
        client: "Freelance",
        image: "src/img/tmm.webp",
        imageMobile: "src/img/tmm-mobile.webp",
        summary: {
            es: "Sitio corporativo para una empresa de transporte de carga en Aguascalientes. Partí de una propuesta de diseño y me encargué de todo lo demás: desarrollo, hosting, analítica y SEO.",
            en: "Corporate website for a freight transport company in Aguascalientes. I started from a design proposal and handled everything else: development, hosting, analytics and SEO.",
        },
        points: {
            es: [
                "SPA en React, rápida y adaptada a celular.",
                "Me adapté al hosting del cliente, un cPanel compartido sin Node.js: build 100% estático con Vite y formulario de contacto con un endpoint en PHP que envía los leads al correo de la empresa.",
                "Despliegue, SEO técnico (metadatos y Open Graph), Google Analytics y Google Search Console.",
            ],
            en: [
                "Fast, mobile-friendly React SPA.",
                "Adapted to the client's shared cPanel hosting with no Node.js: a fully static Vite build plus a PHP endpoint that emails contact-form leads to the company.",
                "Deployment, technical SEO (metadata and Open Graph), Google Analytics and Google Search Console.",
            ],
        },
        stack: ["React", "Vite", "React Router", "PHP", "Google Analytics"],
        site: "https://transmiranda.com",
        privateRepo: true,
    },
    {
        type: "mobile",
        name: "QR Check-In / Out",
        year: "2022",
        icon: "fa-solid fa-qrcode",
        accent: "#4f8cff",
        screens: [],
        summary: {
            es: "App móvil para registrar entradas y salidas de personal escaneando códigos QR, en lugar de listas en papel.",
            en: "Mobile app to log staff check-ins and check-outs by scanning QR codes instead of paper sign-in sheets.",
        },
        points: {
            es: [
                "Escaneo de QR con la cámara y generación de un QR personal por usuario.",
                "Inicio de sesión, historial de registros con fecha y hora, y pantalla de ajustes.",
                "Empaquetada como app nativa con Capacitor.",
            ],
            en: [
                "QR scanning with the camera and a personal QR code per user.",
                "Login, timestamped attendance history and a settings screen.",
                "Packaged as a native app with Capacitor.",
            ],
        },
        stack: ["Ionic", "Angular", "Capacitor", "TypeScript"],
        repo: "https://github.com/RubsRz/QR-Check-In-Out-Tracker",
    },
    {
        type: "api",
        name: "Transportistas API",
        year: "2022",
        snippet: [
            ["post", "/api/registros/login"],
            ["get", "/api/vehiculos/getEmptyVehiculos"],
            ["post", "/api/transiciones/addTransicion"],
            ["get", "/api/transiciones/getTransicion/:conductorId"],
        ],
        summary: {
            es: "Backend de una app móvil para empresas de transporte: controla qué conductor trae qué vehículo y el historial de cada cambio.",
            en: "Backend for a mobile app for transport companies: tracks which driver has which vehicle and the history of every handover.",
        },
        points: {
            es: [
                "API REST con Express y MongoDB para vehículos, registros y transiciones conductor ↔ vehículo.",
                "Login con contraseñas cifradas (bcrypt), gestión de empleados y consulta de vehículos disponibles.",
                "Pruebas unitarias, de integración y funcionales con Jest.",
            ],
            en: [
                "REST API with Express and MongoDB for vehicles, logs and driver ↔ vehicle handovers.",
                "Login with hashed passwords (bcrypt), employee management and available-vehicle lookup.",
                "Unit, integration and functional tests with Jest.",
            ],
        },
        stack: ["Node.js", "Express", "MongoDB", "Jest"],
        repo: "https://github.com/RubsRz/ApiTransportistas",
    },
    {
        type: "web",
        name: "Simulador de Uber",
        year: "2021",
        image: "src/img/simulador-uber.webp",
        summary: {
            es: "Web app que simula pedir un viaje: eliges destino en el mapa, ves la ruta, el costo estimado y pagas.",
            en: "Web app that simulates booking a ride: pick a destination on the map, see the route and estimated fare, then pay.",
        },
        points: {
            es: [
                "Mapa interactivo con cálculo de ruta, distancia y tiempo con Leaflet.",
                "Costo estimado según la distancia y pago integrado con PayPal.",
                "Autenticación e historial de viajes con Firebase.",
            ],
            en: [
                "Interactive map with route, distance and time calculation using Leaflet.",
                "Distance-based fare estimate and PayPal checkout.",
                "Authentication and trip history with Firebase.",
            ],
        },
        stack: ["Angular", "Firebase", "Leaflet", "PayPal"],
        repo: "https://github.com/RubsRz/SimuladorUber",
        demo: "https://simuladoruber-rubenrodriguez.netlify.app/",
    },
    {
        type: "api",
        name: "Generador de diplomas PDF",
        year: "2023",
        snippet: [
            ["cmd", "npm run dev"],
            ["out", "Servidor iniciado en el puerto 3000"],
            ["post", "/generatepdf"],
            ["get", "/scripts/pdfs/:filename"],
        ],
        summary: {
            es: "Servicio que genera diplomas y certificados en PDF a partir de una plantilla HTML y los datos de cada persona.",
            en: "Service that generates diplomas and certificates as PDFs from an HTML template and each person's data.",
        },
        points: {
            es: [
                "Renderiza una plantilla HTML con Handlebars y la convierte a PDF con Puppeteer.",
                "Llenas un formulario y obtienes el PDF personalizado listo para descargar o imprimir.",
            ],
            en: [
                "Renders an HTML template with Handlebars and turns it into a PDF with Puppeteer.",
                "Fill in a form and get a personalized PDF ready to download or print.",
            ],
        },
        stack: ["Node.js", "Express", "Puppeteer", "Handlebars"],
        repo: "https://github.com/RubsRz/PDF-Generator-using-Puppeteer",
    },
];

// `icon`: archivo en src/icons (simpleicons.org) o una clase de Font Awesome.
// Al hacer hover se muestra el logo a color de src/icons/color (devicon.dev).
// Si no hay logo a color, pon `brand` con el color de la marca.
const stack = [
    {
        group: { es: "Mobile", en: "Mobile" },
        items: [
            { name: "React Native", icon: "react" },
            { name: "Ionic", icon: "ionic" },
            { name: "Capacitor", icon: "capacitor" },
        ],
    },
    {
        group: { es: "Frontend", en: "Frontend" },
        items: [
            { name: "React", icon: "react" },
            { name: "Angular", icon: "angular" },
            { name: "TypeScript", icon: "typescript" },
            { name: "JavaScript", icon: "javascript" },
            { name: "Vite", icon: "vite" },
        ],
    },
    {
        group: { es: "Backend", en: "Backend" },
        items: [
            { name: "Node.js", icon: "nodedotjs" },
            { name: "Express", icon: "express", brand: "var(--text)" },
            { name: "PHP", icon: "php" },
            { name: "Python", icon: "python" },
            { name: "Puppeteer", icon: "puppeteer" },
        ],
    },
    {
        group: { es: "Datos", en: "Data" },
        items: [
            { name: "MongoDB", icon: "mongodb" },
            { name: "MySQL", icon: "fa-solid fa-database", brand: "#4479a1" },
            { name: "Firebase", icon: "firebase" },
        ],
    },
    {
        group: { es: "Herramientas", en: "Tools" },
        items: [
            { name: "Git", icon: "git" },
            { name: "Jest", icon: "jest" },
            { name: "Linux", icon: "linux", brand: "#fcc624" },
            { name: "WordPress", icon: "wordpress" },
            { name: "cPanel", icon: "fa-solid fa-server", brand: "#ff6c2c" },
        ],
    },
    {
        group: { es: "SEO y analítica", en: "SEO & analytics" },
        items: [
            { name: "Google Analytics", icon: "googleanalytics", brand: "#e37400" },
            { name: "Search Console", icon: "googlesearchconsole", brand: "#458cf5" },
        ],
    },
];

// =====================================================
// TEXTOS (ES / EN)
// =====================================================

const i18n = {
    es: {
        "skip": "Saltar al contenido",
        "nav.experience": "Experiencia",
        "nav.projects": "Proyectos",
        "nav.stack": "Stack",
        "nav.contact": "Contacto",
        "hero.eyebrow": "Ingeniero en Desarrollo de Software · México",
        "hero.lead": "Construyo aplicaciones web y móviles, del backend a la pantalla. He hecho sistemas internos para empresas como Mercedes-Benz, apps en Ionic y React Native, y APIs en Node.js.",
        "hero.ctaProjects": "Ver proyectos",
        "hero.ctaCv": "Descargar CV",
        "hero.statYears": "años de experiencia profesional",
        "hero.statFocus": "y APIs con Node.js",
        "hero.badge": "Web & Mobile Developer",
        "experience.title": "Experiencia",
        "experience.education": "Educación",
        "experience.current": "Actual",
        "projects.title": "Proyectos",
        "projects.sub": "Una selección de lo que he construido: sitios para clientes, apps móviles y APIs.",
        "projects.more": "Ver más en GitHub",
        "projects.repo": "Código",
        "projects.demo": "Demo",
        "projects.store": "Descargar",
        "projects.site": "Ver sitio en vivo",
        "projects.private": "Código privado",
        "projects.illustrative": "Vista ilustrativa",
        "type.mobile": "App móvil",
        "type.web": "Web",
        "type.api": "Backend / API",
        "stack.title": "Stack",
        "contact.title": "¿Hablamos?",
        "contact.sub": "Si tienes un proyecto, una vacante o solo quieres platicar de tecnología, escríbeme.",
        "contact.name": "Nombre",
        "contact.email": "Email",
        "contact.message": "Mensaje",
        "contact.send": "Enviar mensaje",
    },
    en: {
        "skip": "Skip to content",
        "nav.experience": "Experience",
        "nav.projects": "Projects",
        "nav.stack": "Stack",
        "nav.contact": "Contact",
        "hero.eyebrow": "Software Engineer · Mexico",
        "hero.lead": "I build web and mobile apps, from the backend to the screen. I've shipped internal systems for companies like Mercedes-Benz, apps with Ionic and React Native, and APIs with Node.js.",
        "hero.ctaProjects": "See projects",
        "hero.ctaCv": "Download CV",
        "hero.statYears": "years of professional experience",
        "hero.statFocus": "and APIs with Node.js",
        "hero.badge": "Web & Mobile Developer",
        "experience.title": "Experience",
        "experience.education": "Education",
        "experience.current": "Current",
        "projects.title": "Projects",
        "projects.sub": "A selection of things I've built: client websites, mobile apps and APIs.",
        "projects.more": "See more on GitHub",
        "projects.repo": "Code",
        "projects.demo": "Demo",
        "projects.store": "Download",
        "projects.site": "Visit live site",
        "projects.private": "Private code",
        "projects.illustrative": "Illustrative view",
        "type.mobile": "Mobile app",
        "type.web": "Web",
        "type.api": "Backend / API",
        "stack.title": "Stack",
        "contact.title": "Let's talk",
        "contact.sub": "Have a project, a job opening, or just want to chat about tech? Drop me a line.",
        "contact.name": "Name",
        "contact.email": "Email",
        "contact.message": "Message",
        "contact.send": "Send message",
    },
};

const CV = {
    es: "src/cv/CV - RUBEN RODRIGUEZ - ESP.pdf",
    en: "src/cv/CV - RUBEN RODRIGUEZ - ENG.pdf",
};

// =====================================================
// RENDER
// =====================================================

let lang = "es";
try {
    lang = localStorage.getItem("lang") || (navigator.language.startsWith("es") ? "es" : "en");
} catch (e) { /* sin localStorage */ }

const t = (key) => i18n[lang][key] ?? key;

function renderTimeline() {
    document.getElementById("timeline").innerHTML = experience.map((job) => `
        <li class="timeline-item reveal ${job.current ? "is-current" : ""}">
            <div class="timeline-meta">
                <span class="timeline-period">${job.period[lang]}</span>
                ${job.current ? `<span class="pill pill-live">${t("experience.current")}</span>` : ""}
                ${job.education ? `<span class="pill">${t("experience.education")}</span>` : ""}
            </div>
            <div class="timeline-body">
                <h3>${job.role[lang]}</h3>
                <p class="timeline-company">${job.company}</p>
                ${job.points[lang].length ? `<ul>${job.points[lang].map((p) => `<li>${p}</li>`).join("")}</ul>` : ""}
            </div>
        </li>
    `).join("");
}

function projectMedia(p) {
    if (p.type === "web") {
        return `
            <div class="web-media ${p.imageMobile ? "has-phone" : ""}">
                <div class="browser">
                    <div class="browser-bar"><span></span><span></span><span></span></div>
                    <img src="${p.image}" alt="${p.name}" loading="lazy" />
                </div>
                ${p.imageMobile ? `<div class="phone phone-overlay"><img src="${p.imageMobile}" alt="${p.name} (móvil)" loading="lazy" /></div>` : ""}
            </div>`;
    }

    if (p.type === "mobile") {
        if (p.screens && p.screens.length) {
            return `<div class="phones">${p.screens.slice(0, 2).map((src) => `
                <div class="phone"><img src="${src}" alt="${p.name}" loading="lazy" /></div>`).join("")}
            </div>`;
        }
        return `
            <div class="phones">
                <div class="phone phone-illustration" style="--app:${p.accent || "var(--accent)"}">
                    <div class="phone-notch"></div>
                    <div class="app-icon"><i class="${p.icon}"></i></div>
                    <p class="app-name">${p.name}</p>
                    <div class="skeleton"><span></span><span></span><span></span></div>
                </div>
                <p class="media-note">${t("projects.illustrative")}</p>
            </div>`;
    }

    // api
    return `
        <div class="terminal">
            <div class="browser-bar"><span></span><span></span><span></span></div>
            <pre>${p.snippet.map(([kind, text]) => {
                if (kind === "cmd") return `<span class="t-prompt">$</span> ${text}`;
                if (kind === "out") return `<span class="t-out">${text}</span>`;
                return `<span class="t-method t-${kind}">${kind.toUpperCase()}</span> ${text}`;
            }).join("\n")}</pre>
        </div>`;
}

function renderProjects() {
    document.getElementById("projects-list").innerHTML = projects.map((p) => `
        <article class="project reveal project-${p.type}">
            <div class="project-media">${projectMedia(p)}</div>
            <div class="project-body">
                <p class="project-kicker">${[p.client, t("type." + p.type), p.year].filter(Boolean).join(" · ")}</p>
                <h3>${p.name}</h3>
                <p class="project-summary">${p.summary[lang]}</p>
                <ul class="project-points">${p.points[lang].map((pt) => `<li>${pt}</li>`).join("")}</ul>
                <ul class="chips">${p.stack.map((s) => `<li>${s}</li>`).join("")}</ul>
                <div class="project-links">
                    ${p.site ? `<a href="${p.site}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> ${t("projects.site")}</a>` : ""}
                    ${p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> ${t("projects.repo")}</a>` : ""}
                    ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> ${t("projects.demo")}</a>` : ""}
                    ${p.store ? `<a href="${p.store}" target="_blank" rel="noopener"><i class="fa-solid fa-mobile-screen"></i> ${t("projects.store")}</a>` : ""}
                    ${p.privateRepo ? `<span class="private-note"><i class="fa-solid fa-lock"></i> ${t("projects.private")}</span>` : ""}
                </div>
            </div>
        </article>
    `).join("");
}

function stackIcon(item) {
    const brand = item.brand ? ` style="--brand: ${item.brand}"` : "";
    if (item.icon.startsWith("fa-")) {
        return `<span class="chip-icon-wrap"${brand} aria-hidden="true"><i class="chip-icon-fa ${item.icon}"></i></span>`;
    }
    return `
        <span class="chip-icon-wrap"${brand} aria-hidden="true">
            <span class="chip-icon" style="--icon: url('src/icons/${item.icon}.svg')"></span>
            ${item.brand ? "" : `<img class="chip-icon-color" src="src/icons/color/${item.icon}.svg" alt="" />`}
        </span>`;
}

function renderStack() {
    document.getElementById("stack-list").innerHTML = stack.map((g) => `
        <div class="stack-row">
            <h3>${g.group[lang]}</h3>
            <ul class="chips">${g.items.map((i) => `<li>${stackIcon(i)}${i.name}</li>`).join("")}</ul>
        </div>
    `).join("");
}

function applyLang() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        el.textContent = t(el.dataset.i18n);
    });
    document.getElementById("lang-toggle").textContent = lang === "es" ? "EN" : "ES";
    document.getElementById("cv-link").href = CV[lang];

    renderTimeline();
    renderProjects();
    renderStack();
    observeReveals();
}

// =====================================================
// UI
// =====================================================

const revealObserver = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" })
    : null;

function observeReveals() {
    document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => {
        if (revealObserver) revealObserver.observe(el);
        else el.classList.add("is-visible");
    });
}

document.getElementById("lang-toggle").addEventListener("click", () => {
    lang = lang === "es" ? "en" : "es";
    try { localStorage.setItem("lang", lang); } catch (e) { /* sin localStorage */ }
    applyLang();
});

document.getElementById("theme-toggle").addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    document.querySelector("meta[name=theme-color]").content = next === "dark" ? "#0b0d12" : "#f7f8fa";
    try { localStorage.setItem("theme", next); } catch (e) { /* sin localStorage */ }
});

const menuBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
menuBtn.addEventListener("click", () => {
    const open = navLinks.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", open);
});
navLinks.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
        navLinks.classList.remove("is-open");
        menuBtn.setAttribute("aria-expanded", "false");
    }
});

const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 10);
}, { passive: true });

// El nombre de la navbar aparece cuando el nombre grande del hero sale de pantalla
const heroName = document.querySelector(".hero h1");
if ("IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => {
        header.classList.toggle("show-logo", !entry.isIntersecting);
    }, { rootMargin: `-${parseInt(getComputedStyle(header).height)}px 0px 0px 0px` }).observe(heroName);
} else {
    header.classList.add("show-logo");
}

// =====================================================
// INIT
// =====================================================

const years = Math.floor((Date.now() - CAREER_START) / (365.25 * 24 * 60 * 60 * 1000));
document.getElementById("years-exp").textContent = `${years}+`;
document.getElementById("year").textContent = new Date().getFullYear();
applyLang();
