import axios from "axios";

const allWinApiAccon = 'https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id';
const Apikey = 'RGAPI-6f1273bc-598b-4fcd-b797-fb31ab182ed7';



async function getPlayerById(gameId, TagLine) {
  const response = await axios.get(`${allWinApiAccon}/${gameId}/${TagLine}?api_key=${Apikey}`);  
  
  console.log(response.data.puuid)
}




async function postAllWin(id, data, nome, img) {
  await allWinApiAccon.post("/", { id: id, nome: nome, data: data, imagem:img });
}
async function deleteAllwin(id) {
  await allWinApiAccon.delete("/" + id);
}
async function patchAllWin(id, data, nome, img ){
  await allWinApiAccon.patch("/"+id, { id: id, nome: nome, data: data, imagem:img });
}

export { getPlayerById, postAllWin, deleteAllwin, patchAllWin };