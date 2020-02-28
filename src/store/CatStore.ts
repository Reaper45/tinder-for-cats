import { observable } from "mobx";
import { IRootStore } from "store";
import  remove from "lodash.remove";

import { fetchCats } from "lib/utils";

type RemoveCatFn = (catId: string) => void;
type GetCatsFn = () => void;
type LikeCatFn = (cat: CatType) => void;
// type DisLikeCatFn = (cat: CatType) => void;

export interface ICatStore {
  cats: CatType[];
  likes: CatType[];
  page: number;
  remove: RemoveCatFn;
  getCats: GetCatsFn;
  getMoreCats: GetCatsFn;
  like: LikeCatFn;
  // dislike: DisLikeCatFn;
}

class CatStore implements ICatStore {
  @observable public cats: CatType[] = [];

  @observable public likes: CatType[] = [];

  public page: number = 1;

  public rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore;
  }

  public remove: RemoveCatFn = catId => {
    remove(this.cats, cat => cat.id === catId);
  };

  public getCats: GetCatsFn = async () => {
    const response = await fetchCats(this.page);
    const cats = await response.json();
    this.cats = cats;
  };

  public getMoreCats: GetCatsFn = async () => {
    const currentPage = this.page + 1;

    const response = await fetchCats(currentPage);
    this.page = currentPage;
    const cats = await response.json();
    Array.prototype.push.apply(this.cats, cats);
  };

  public like: LikeCatFn = cat => {
    const existingCat = this.likes.find(likedCat => likedCat.id === cat?.id);
    if (existingCat === undefined) {
      this.likes.push(cat);
    }
  };
}

export default CatStore;
