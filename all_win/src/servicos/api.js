import axios from "axios";

const allWinApi = axios.create({ baseURL: `/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}?api_key=RGAPI-a4dd09f7-318e-46e8-8245-5566f7cc3aa9` });

async function getAllWin() {
  const response = await allWinApi.get("/");

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

export { getAllWin, postAllWin, deleteAllwin, patchAllWin };