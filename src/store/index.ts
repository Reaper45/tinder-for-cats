import CatStore, { ICatStore } from "./CatStore";
import { autorun, observable } from "mobx";

type SetPartyFn = (party: PartyType) => void;

export interface IRootStore {
  party: PartyType;
  catsStore: ICatStore;
  setParty: SetPartyFn;
}

class Store implements IRootStore {
  // Placeholder user details
  @observable public party: PartyType = {
    name: "Mwashighadi Joram",
    title: "Front-End Engineer"
  };

  public catsStore: ICatStore;

  constructor() {
    this.catsStore = new CatStore(this);
  }

  public setParty: SetPartyFn = (party) => {
    this.party = party;
  }
}

export const store = new Store();

// Fetch more cats if only 3 remaining
autorun(() => {
  if (store.catsStore.cats.length === 5) {
    store.catsStore.getMoreCats();
  }
});
