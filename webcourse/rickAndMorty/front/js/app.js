document.getElementById("fecthRickById").addEventListener("click", () => {
    let id = document.getElementById("rickId").value;
    axios.get(`http://localhost:3001/rickAndMorty/${id}`)
        .then(response =>{
            const character = response.data;
            const container = document.getElementById("output");
            container.appendChild(renderCharacter(character));
        })
    
})

function renderCharacter(character) {
    const card = document.createElement("div");
    card.className = "card col-sm-3";

    const img = document.createElement("img");
    img.className = "card-img-top";
    img.src = character.image;

    card.appendChild(img);
    return card;
}