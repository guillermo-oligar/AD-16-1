const btnTask3 = document.getElementById("btnLinks");

btnTask3.addEventListener("click", () =>{
    const links = document.getElementsByTagName("a");
    const tL = links.length;
    const fL = links[0].href;
    const lL = links[links.length - 1].href;

    alert(`Total de links: ${tL} \n Primer link: ${fL} \n Último link: ${lL}`);
});