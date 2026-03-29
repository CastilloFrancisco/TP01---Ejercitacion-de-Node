import axios from "axios";
const APIKEY = "e84efcd2";
const Test = async () => {

  // Esto solo busca ‘cars’

  const requestString = `http://www.omdbapi.com/?apikey=e84efcd2&s=cars`;

  const apiResponse = await axios.get(requestString);

  return apiResponse.data;

};


const OMDBSearchByPage = async (searchText, page = 1) => {
  let returnObject = {
    respuesta: false,
    cantidadTotal: 0,
    datos: []
  };
  // No seas vago, acá hay que hacer el cuerpo de la función!!!
  return returnObject;
};
const OMDBSearchComplete = async (searchText) => {
  let returnObject = {
    respuesta: false,
    cantidadTotal: 0,
    datos: []
  };
  // No seas vago, acá hay que hacer el cuerpo de la función!!!
  return returnObject;
};
const OMDBGetByImdbID = async (imdbID) => {
  let returnObject = {
    respuesta: false,
    cantidadTotal: 0,
    datos: {}
  };
  // No seas vago, acá hay que hacer el cuerpo de la función!!!
  return returnObject;
};
// Exporto todo lo que yo quiero exponer del módulo:
export { Test, OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID };