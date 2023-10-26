import React, { useState, createContext, useContext } from "react";
import { connect } from "react-redux";
import Button from "./Button";
import Loading from "./Loading";
import NewsItem from "./NewItem";
import { Counter } from "./Hooks/useReducer";
import { CallbackExample } from "./Hooks/useCallback";
import RefComponent from "./Hooks/useRef";

export const UserContext = createContext();

const Info = ({ formData }) => {
  const [title, setTitle] = useState("Redux Saga");

  return (
    <>
      <div>
        Info
        <div>{JSON.stringify(formData)}</div>
      </div>
      <div>
        <UserContext.Provider value={{ title, setTitle }}>
          <Component />
        </UserContext.Provider>
      </div>
    </>
  );
};

const Component = () => {
  // const title = useContext(UserContext);
  return (
    <>
      {/* <h3>{title}</h3> */}
      <Button />
      <Loading />
      <NewsItem />
      <Counter />
      <CallbackExample />
      <RefComponent />
    </>
  );
};

const mapStateToProps = (state) => ({
  formData: state.form.formData,
});

// Connect the component to the Redux store
export default connect(mapStateToProps, null)(Info);
// export default connect(mapStateToProps)(withRouter(Info));
