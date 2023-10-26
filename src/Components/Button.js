import React, { useContext } from "react";
import { connect } from "react-redux";
import { getFormData } from "../actions";
import { UserContext } from "./Info";

let Button = ({ getFormData }) => {
  const { title, setTitle } = useContext(UserContext);

  return (
    <>
      <h4>{title}</h4>
      <button onClick={getFormData}>Press to see data</button>
    </>
  );
};
const mapDispatchToProps = {
  getFormData: getFormData,
};
Button = connect(null, mapDispatchToProps)(Button);
export default Button;
