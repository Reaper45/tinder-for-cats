import { store } from "store";

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

export const LIKES_KEY = "LIKED_CATS";

export const likeCat = (cat: CatType) => {
  const cats = localStorage.getItem(LIKES_KEY);
  store.catsStore.like(cat);

  if (cats) {
    const parsedCats: CatType[] = JSON.parse(cats);
    const existingCat = parsedCats.find(parsedCat => parsedCat.id === cat?.id);

    if (existingCat === undefined) {
      localStorage.setItem(
        LIKES_KEY,
        JSON.stringify([...parsedCats, JSON.stringify(cat)])
      );
    }
  } else {
    localStorage.setItem(LIKES_KEY, JSON.stringify([JSON.stringify(cat)]));
  }
};

export const DIS_LIKES_KEY = "DIS_LIKED_CATS";

export const disLikeCat = (cat: CatType) => {
  const cats = localStorage.getItem(DIS_LIKES_KEY);
  if (cats) {
    const parsedCats: CatType[] = JSON.parse(cats);
    const existingCat = parsedCats.find(parsedCat => parsedCat.id === cat?.id);

    if (existingCat === undefined) {
      localStorage.setItem(
        DIS_LIKES_KEY,
        JSON.stringify([...parsedCats, JSON.stringify(cat)])
      );
    }
  } else {
    localStorage.setItem(DIS_LIKES_KEY, JSON.stringify([JSON.stringify(cat)]));
  }
};