import { Test, OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID } from '../modules/OMDBWrapper.js';

let respuesta = await Test();

console.log('Test', respuesta);

let SearchByPage = await OMDBSearchByPage("gaturro", 1);

console.log("OMDBSearchByPage", SearchByPage);

let SearchComplete = await OMDBSearchComplete("shrek");

console.log("OMDBSearchComplete", SearchComplete);

let GetByImdbID = await OMDBGetByImdbID("tt0074119");
console.log("OMDBGetByImdbID", GetByImdbID);