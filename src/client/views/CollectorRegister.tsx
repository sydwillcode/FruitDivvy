import * as React from "react";
import { useState, Fragment } from "react";
import { useHistory } from "react-router-dom";

const CollectorSignupForm: React.FC<{}> = () => {
  const history = useHistory();
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("/api/welcome", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });
      if (res.ok) {
        history.push("/api/welcome");
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(state);
  return (
      <>
    <div className="container">
      <div className="card text-center signUpCard">
        <div className="card-body">
          <h5 className="card-title mt-0 mb-2">COLLECTOR SIGN-UP</h5>
          <form action="">
            <div className="form-group mt-1 mb-1">
              <label className="formText">NAME</label>
              <input
                name="text"
                type="name"
                className="form-control mx-auto"
                id="nameInput"
                placeholder="Jane Doe"
                onChange={handleChange}
                value={state.name}
              />
            </div>
            <div className="form-group mt-1 mb-1">
              <label className="formText">EMAIL</label>
              <input
                name="email"
                type="text"
                className="form-control mx-auto"
                id="emailInput"
                placeholder="janedoe@email123.com"
                onChange={handleChange}
                  value={state.email}
              />
            </div>
            <div className="form-group mt-1 mb-1">
              <label className="formText">PASSWORD</label>
              <input
                name="password"
                type="password"
                className="form-control mx-auto"
                id="passwordInput"
                placeholder="********"
                onChange={handleChange}
                value={state.password}
              />
            </div>
          </form>
          <hr className="signUpRule" />
          <h5 className="card-title mt-2 mb-2">WHAT DO YOU NEED?</h5>
          <form className="form-inline">
            <div className="mx-auto">
              <input type="text" className="form-control" id="produceType" placeholder="apples, oranges, etc" />
              <div className="btn addItem">
                <img src="/assets/add-btnpng-01.png" alt="add produce type" />
              </div>
            </div>
          </form>
          <div className="itemContainer"></div>
          <hr className="signUpRule" />
          <button className="customBtn"
          onClick={handleSubmit}
          >SUBMIT</button>
        </div>
      </div>
    </div>
    </>
  );
};

// interface CollectorSignupFormProps {
//     id: string,
//     email: string,
//     password: string,
//     key: string,
//     img: string,
//     location: string
// }

export default CollectorSignupForm;
