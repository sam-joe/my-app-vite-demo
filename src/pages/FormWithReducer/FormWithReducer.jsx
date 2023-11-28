import React from "react";
import { FormReducer } from "./FormWithReducer.styled";

const FormWithReducer = () => {
  return (
    <FormReducer>
      <h4>Form using Reducer</h4>

      <form>
        <div>
          <label for="name">Name</label>
          <input type="text" id="name" />
        </div>

        <div>
          <label for="password">Password</label>
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
