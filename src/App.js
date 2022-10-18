import React from "react";
import { createGlobalStyle } from 'styled-components';
import { TodoTemplate } from "./component/TodoTemplate";
import {Tab} from "./Tab"
import useFetch from './util/useFetch'

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {

  const [data, isPending, error] = useFetch("http://localhost:3001/todos/");

  return (
  <>
      <GlobalStyle/>
      <TodoTemplate>
        { error && <div>{ error }</div> }
        <Tab data={data} isPending={isPending}/>
      </TodoTemplate>
  </>
  );
}

export default App;
