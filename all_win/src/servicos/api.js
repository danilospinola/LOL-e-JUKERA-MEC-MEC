import axios from "axios";

const allWinApi = axios.create({ baseURL: `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id` });

async function getPlayerById(gameId, TagLine= "Br1") {
  const response = await allWinApi.get(`/${gameId}/${TagLine}`);

  return response.data;
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