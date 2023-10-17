import axios from "axios";
import { API } from "../../config";

export const addProduct = async (product: FormData) => {
  return await axios.post(`${API}/schalorships`, product);
};
