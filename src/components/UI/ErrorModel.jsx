import React from "react";
import Card from "./Card";

const ErrorModel = (props) => {
  return (
    <>
      <div className="backdrop" />
      <Card>
        <header>
          <h2>{props.title}</h2>
        </header>
        <main>
          <p>{props.content}</p>
        </main>
        <footer>
          <button>OK</button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModel;
