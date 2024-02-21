import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./FoodDelivery";

// const heading = React.createElement("h1", { id: "heading" }, "This is heading");

// const root = ReactDOM.createRoot(document.getElementById("root"));

//React element
const jsxHeading = <h1 id="jsxHeading">This is JSX Heading</h1>;

// root.render(jsxHeading);

//React functional component

const HeadingComponent = () => {
  return <h1 id="funcComp">This is functional component</h1>;
};

//same can be written as:
const HeadingComponent1 = () => (
  <div>
    <HeadingComponent />
    <h1>This is funnnnn</h1>
  </div>
);

//A React element can be rendered inside React component and vice versa...
const ReactComp = () => <h3>React component inside React element</h3>;
const elem = <span>This is a react Elem {<ReactComp />}</span>;
const normalVar = "Helu Shubhi!!";
const AnotherHeading = () => <h2>This is another nested react component</h2>;
const NestedHeading = () => (
  <div>
    <h1>This is inside of React component</h1>
    {elem}
    {/* 3 ways a react component can be rendered */}
    {AnotherHeading()}
    <AnotherHeading></AnotherHeading>
    <AnotherHeading />
    <div>This is js code computation of 100 + 200 = {100 + 200}</div>
    <div>This is Normal variable = {normalVar}</div>
  </div>
);

//creating our first app: 20/02

// root.render(<Header />);
