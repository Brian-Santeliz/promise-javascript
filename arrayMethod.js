import heroes, { objeto } from "./data/heores.js";

//funciones
export const getById = (id) => heroes.find((heroe) => heroe.id === id);
