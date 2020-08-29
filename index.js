import { getById } from "./arrayMethod.js";

const obtenerHeroe = (id) => {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      const res = getById(id);
      if (!res) {
        rejected("no existe este id");
      }
      resolve(res);
    }, 3000);
  });
};
obtenerHeroe(4)
  .then(console.log)
  //recibe y ejecuta el error, recibe el primer elemento
  .catch(console.warn);
