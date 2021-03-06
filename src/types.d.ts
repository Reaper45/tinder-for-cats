// All our apps types
declare namespace NodeJS {
  export interface ProcessEnv {
    REACT_APP_CATS_API_KEY: string;
  }
}

declare type PartyType = {
  avatar?: string;
  name: string;
  title: string;
};

declare type CatType = {
  id: string;
  url: string;
};

declare type SwipeTo = "left" | "right" | null;
