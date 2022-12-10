//Crtiando uma api com base no axios para acessar a api do github pelo link.

import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.github.com'
})