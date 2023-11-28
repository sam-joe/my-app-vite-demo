import React from "react";
import { FormState } from "./FormWithState.styled";

const FormWithState = () => {
  return (
    <FormState>
      <h4>Form using State</h4>

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
    </FormState>
  );
};

export default FormWithState;
