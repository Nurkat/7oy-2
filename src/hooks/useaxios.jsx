import axios from "axios";
import { URL } from "./useENV";



export const useAxios = () => axios.create({baseURL: URL})