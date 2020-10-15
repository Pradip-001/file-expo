import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { FileExplorer } from "./FileExplorer";
const content = {
  folder1: {
    file1: "hello",
  },
  folder2: {
    file2: "hello2",
  },
  folder3: {
    inFolder3: {
      hello: "hi",
    },
    inFolder32: {
      hello2: "hello2",
      inFolder343: {
        nowItsFine: "hehe",
      },
    },
  },
};

function App() {
  return <FileExplorer content={content} depth={25} />;
}

export default App;
