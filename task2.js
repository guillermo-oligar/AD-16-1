const form = document.getElementById("form1")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const firstName = form.elements["fname"].value;
    const lastName = form.elements["lname"].value;
    console.log(firstName, lastName);
});