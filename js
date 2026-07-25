const botaoMenu = document.getElementById("menu-mobile");
const menu = document.getElementById("menu");

botaoMenu.addEventListener("click", () => {

    menu.classList.toggle("menu-aberto");

});



document.querySelectorAll("#menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("menu-aberto");

    });

});



const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.padding = "5px 0";
        header.style.background = "#ffffff";
        header.style.boxShadow = "0 5px 25px rgba(0,0,0,.1)";

    }else{

        header.style.padding = "";
        header.style.background = "#ffffff";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    }

});



const elementos = document.querySelectorAll(
".card, .usuario-card, .card-dashboard");

const observador = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{

    threshold:0.2

});

elementos.forEach(elemento=>{

    elemento.style.opacity="0";
    elemento.style.transform="translateY(40px)";
    elemento.style.transition=".7s";

    observador.observe(elemento);

});



const voltarTopo = document.createElement("button");

voltarTopo.innerHTML = "↑";

voltarTopo.classList.add("voltar-topo");

document.body.appendChild(voltarTopo);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        voltarTopo.style.opacity="1";
        voltarTopo.style.visibility="visible";

    }else{

        voltarTopo.style.opacity="0";
        voltarTopo.style.visibility="hidden";

    }

});

voltarTopo.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});



voltarTopo.style.position="fixed";
voltarTopo.style.right="25px";
voltarTopo.style.bottom="25px";
voltarTopo.style.width="55px";
voltarTopo.style.height="55px";
voltarTopo.style.border="none";
voltarTopo.style.borderRadius="50%";
voltarTopo.style.background="#2563eb";
voltarTopo.style.color="#fff";
voltarTopo.style.fontSize="24px";
voltarTopo.style.cursor="pointer";
voltarTopo.style.boxShadow="0 10px 30px rgba(0,0,0,.2)";
voltarTopo.style.opacity="0";
voltarTopo.style.visibility="hidden";
voltarTopo.style.transition=".3s";

voltarTopo.addEventListener("mouseenter",()=>{

    voltarTopo.style.transform="scale(1.1)";
    voltarTopo.style.background="#7c3aed";

});

voltarTopo.addEventListener("mouseleave",()=>{

    voltarTopo.style.transform="scale(1)";
    voltarTopo.style.background="#2563eb";

});



const formulario = document.querySelector("form");

if(formulario){

    formulario.addEventListener("submit",(e)=>{

        e.preventDefault();

        alert("Mensagem enviada com sucesso!");

        formulario.reset();

    });

}
