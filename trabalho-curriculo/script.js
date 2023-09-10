divExperiencias = document.querySelector("experiencias")

experiencias = [
    {
        "empresa": "E",
        "cargo": "Programador CSS",
        "descricao-cargo" : "Dev"

    }
]
ribute("class", "empresa")

divExperience = document.createElement("div")
divExperience.setAttribute("class", "experience")

empresa = document.createElement("h3")
empresa.setAtt
cargo = document.createElement("h4")
cargo.setAttribute("class", "cargo")

empresa.innerText = experiencias[0].empresa
cargo.innerText = experiencias[1].cargo


divExperience.appendChild(empresa)
divExperience.appendChild(cargo)
divExperiencias.appendChild(divExperience)

