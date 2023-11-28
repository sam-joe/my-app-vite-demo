import React from "react";
import { FormReducer } from "./FormWithReducer.styled";

const FormWithReducer = () => {
  return (
    <FormReducer>
      <h4>Form using Reducer</h4>

      <form>
        <div>
          <label forHtml="name">Name</label>
          <input type="text" id="name" />
        </div>

        <div>
          <label forHtml="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </FormReducer>
  );
};

export default FormWithReducer;
