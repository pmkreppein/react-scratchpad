import React, {Component} from 'react';
import List from './List';
import Title from './Title';

const tasksArray = ['Vue', 'Phoenix/Elixir','Unity', 'AR Kit']

class Main extends Component {
  render(){
    return (
      <div>
        <Title title={"Rendered from array in JS File:"}/>
        <List tasks={tasksArray}/>
        <Title title={"Showing component using on the fly array for props:"}/>
        <List tasks={["Random","Array","For","Task","List"]}/>

        <Title title={"After shoving components into their own files:"}/>
        <List tasks={["Figure","Out","If","There","is","a","React","CLI"]}/>
      </div>
    )
  }
}

export default Main;
