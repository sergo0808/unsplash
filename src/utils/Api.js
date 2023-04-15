const BASE_URL = "https://api.unsplash.com/photos/";
const CLIENT_ID = "-PBB9VLaTyaPef1htH7ymPPgYUjgL0ji5Y1QzWx_aLg";

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
};

export const getFotos = () => {
  return fetch(`${BASE_URL}/random?client_id=${CLIENT_ID}&count=20`).then((res) =>
    handleResponse(res)
  );
};

export const changeLikeCardStatus = (id, isLiked) => {
  return fetch(`${BASE_URL}/cards/` + id + "/likes", {
    method: isLiked ? "PUT" : "DELETE",
  }).then(this._handleResponse);
};
