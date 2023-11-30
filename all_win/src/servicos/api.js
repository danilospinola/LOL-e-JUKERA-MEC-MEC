import axios from "axios";

const allWinApi = axios.create({ baseURL: `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id` });

async function getPlayerById(gameId = "NINJAKINGDOM", TagLine= "Br1") {
  const response = await allWinApi.get(`/${gameId}/${TagLine}`, 
  {
    headers: {
    'X-Riot-Token': 'RGAPI-a4dd09f7-318e-46e8-8245-5566f7cc3aa9',
    }
  }).then((res) => console.log(res))
  .catch((err) => console.error(err));
  
  console.log(response)
  return response;
}
async function postAllWin(id, data, nome, img) {
  await allWinApi.post("/", { id: id, nome: nome, data: data, imagem:img });
}
async function deleteAllwin(id) {
  await allWinApi.delete("/" + id);
}
async function patchAllWin(id, data, nome, img ){
  await allWinApi.patch("/"+id, { id: id, nome: nome, data: data, imagem:img });
}

export { getPlayerById, postAllWin, deleteAllwin, patchAllWin };