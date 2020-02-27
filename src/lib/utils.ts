
const API_END_POINT =
  "https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc";

// Extend node typings
declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      REACT_APP_CATS_API_KEY: string;
    }
  }
}

export const makeGetRequest = async (): Promise<Response> => {
  return await fetch(API_END_POINT, {
    method: "GET",
    headers: {
      "x-api-key": process.env.REACT_APP_CATS_API_KEY
    }
  });
}