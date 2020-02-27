import { observable } from "mobx";

interface IStore {
  party: PartyType;
  cats: CatType[];
}

class Store implements IStore {
  public party: PartyType = {
    id: "3c197875-8abe-4bf0-8ed3-76c3c7e48eb8",
    name: "Mwashighadi Joram",
    title: "Front-End Engineer"
  };

  @observable public cats: CatType[] = [];
}

export const store = new Store();
