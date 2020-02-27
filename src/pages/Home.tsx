import * as React from "react";

import { ICat } from "components/Cat";
import { makeGetRequest } from "lib/utils";

interface IHomeState {
  cats: ICat[] | any[];
}

class Home extends React.Component<{}, IHomeState> {
  constructor(props: any) {
    super(props)
    this.state = { cats: [] }
  }
  public componentDidMount() {
    this.getCats();
  }
  public getCats = async () => {
    const response = await makeGetRequest();
    const cats = await response.json();
    console.log({ cats });
  }
  public render() {
    return <div>Home</div>;
  }
};

export default Home;
