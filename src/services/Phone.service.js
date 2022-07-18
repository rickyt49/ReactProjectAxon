import httpClient from "../http-common";
const getAll = () => {
  return httpClient.get("/phones");
};

const create = (data) => {
  return httpClient.post("/phones", data);
};

const get = (id) => {
  return httpClient.get(`/phones/${id}`);
};

const update = (id, data) => {
  return httpClient.put(`/phones/${id}`, data);
};

const remove = (id) => {
  return httpClient.delete(`/phones/${id}`);
};

const PhoneService = { getAll, create, get, update, remove };
export default PhoneService;
