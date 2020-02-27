import { observable, autorun } from "mobx";
import { IRootStore } from "store";
import  remove from "lodash.remove";

import { makeGetRequest } from "lib/utils";

type RemoveCatFn = (catId: string) => void;
type GetCatsFn = () => void;
type LikeCatFn = (cat: CatType) => void;
type DisLikeCatFn = (cat: CatType) => void;

export interface ICatStore {
  cats: CatType[];
  likes: CatType[];
  remove: RemoveCatFn;
  getCats: GetCatsFn;
  like: LikeCatFn;
  // dislike: DisLikeCatFn;
}

class CatStore implements ICatStore {
  @observable public cats: CatType[] = [];

  @observable public likes: CatType[] = [];

  public rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore;
  }

  public remove: RemoveCatFn = catId => {
    remove(this.cats, cat => cat.id === catId);
  };

  public getCats: GetCatsFn = async () => {
    const response = await makeGetRequest();
    const cats = await response.json();
    this.cats = cats;
  };

  public like: LikeCatFn = cat => {
    const existingCat = this.likes.find(likedCat => likedCat.id === cat?.id);
    if (existingCat === undefined) {
      this.likes.push(cat);
    }
  };

  // public dislike: DisLikeCatFn = cat => {};
}

export default CatStore;
