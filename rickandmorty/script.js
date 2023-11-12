const characterId = document.getElementById('characterId');
const btnGo = document.getElementById('btn_go');
const content = document.getElementById('content');
const image = document.getElementById('img');

const fetchApi = (value) => {
    const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data.name);
        return data;
    }); // Link da base de consulta (api geral)

    return result;
}

fetchApi(1);

btnGo.addEventListener('click', async (event) =>{
    event.preventDefault(); // Prevenir o padrão, que é o carregamento da página.
    const result = await fetchApi(characterId.value);
    content.textContent = `${JSON.stringify(result, undefined, 2)}`; // o parâmetro 2 é para dar um espaço.
    image.src = `${result.image}`;
});