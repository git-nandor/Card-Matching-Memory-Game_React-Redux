import React from "react";
import { ERROR_SOMETHING_WENT_WRONG } from "../strings";

const ErrorFallback = () => {
  return (
    <>
      <div className="error-container">
        <img src={require(`../images/question-cat.png`)} alt="question-cat" />
        <h1>{ERROR_SOMETHING_WENT_WRONG}</h1>
      </div>
    </>
  );
};
export default ErrorFallback;
