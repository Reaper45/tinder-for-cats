import CatStore, { ICatStore } from "./CatStore";
import { autorun } from "mobx";

export interface IRootStore {
  party: PartyType;
  catsStore: ICatStore;
}

class Store implements IRootStore {
  public party: PartyType = {
    id: "3c197875-8abe-4bf0-8ed3-76c3c7e48eb8",
    name: "Mwashighadi Joram",
    title: "Front-End Engineer"
  };

  public catsStore: ICatStore;

  constructor() {
    this.catsStore = new CatStore(this);
  }

}

export const store = new Store();

autorun(() => {
  if (store.catsStore.cats.length !== 0  && store.catsStore.cats.length <= 3) {
    console.log("updating");
  }
});
