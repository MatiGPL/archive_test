const data = {
    name : "Mateusz",
    surname: "Reczek",
    date: "24.07.2022"
}

    const container = document.getElementById("Container")    
    const header = document.createElement("h1");
    const paragraph = document.createElement("p");
    const option1 = document.createElement("div");
    const option2 = document.createElement("div");

    option1.classList.add("button")
    option2.classList.add("button")

    header.innerText = "Zadanie praktyczne z testu z dnia 23.07.2022"
    paragraph.innerText = "Dodawanie tekstu za pomocą JavaScript"

    option1.innerText = "Naciśnij tutaj..."
    option2.innerText = "...albo tutaj"

    container.appendChild(header)
    container.appendChild(paragraph)
    container.appendChild(option1)
    container.appendChild(option2)


const body = document.getElementById("Body")
const information = document.createElement("div")
information.classList.add("message")
information.innerText = `Zadanie wykonał ${data.name} ${data.surname} w dniu ${data.date}`

const clsBtn = document.createElement("button")
clsBtn.textContent = "Zamknij"
information.appendChild(clsBtn)

option1.addEventListener("click", () => (body.appendChild(information)))
option2.addEventListener("click", () => (window.alert(`Zadanie wykonał ${data.name} ${data.surname} w dniu ${data.date}`)));
clsBtn.addEventListener("click", () => (body.removeChild(information)))