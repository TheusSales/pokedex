const res = document.getElementById('res');

async function buscar(){
    try {
        let pokeNameInput = document.getElementById('entra'); // Obtém o elemento input
        let pokeName = pokeNameInput.value.toLowerCase(); // Obtém o valor do input e converte para minúsculas
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
        const data = await response.json();
        const prettyData = JSON.stringify(data, null, 2);
        res.innerHTML = `Resultado: ${prettyData}`;
    } catch (error) {
        res.innerHTML = `Ocorreu um erro: ${error}`;
    }
}