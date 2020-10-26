import React, { useState, useEffect, Fragment } from "react";
import { useHistory } from 'react-router-dom';


const ProviderRegister: React.FC<{}> = () => {


  const history = useHistory();
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    lat: "",
    lng: "",
  });
  const [produceState, setProduceState] = useState([]);

  const [produceInput, setProduceInput] = useState("");
  
  var renderedOutput = produceState.map(item => <div className= "fruitItemList mt-1 mb-1 ml-1 mr-1" key={item}> {item} </div>)

  const addProduce = (e) => {
    e.preventDefault();
    setProduceState(state => [...state, produceInput]);
    setProduceInput("")
  };

  const handleChange = (e: { target: { value: any; name: any; }; }) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleProduceChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    setProduceInput(value);
  };

  const handleSubmit = async () => {
    try {
      let res = await fetch("/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(state)
      })
      if (res.ok) {
        let data = await res.json();
        produceState.forEach(async fruit => {
          try {
            let submitProduce = await fetch("/api/fruits", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                userid: data.result.insertId,
                fruit: fruit
              })
            })
          } catch (err) {
            console.log(err)
          }
        })
        history.push('/map')
      } else {
        console.log('something went wrong')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className="container">
        <div className="card text-center signUpCard">
          <div className="card-body">
            <h5 className="card-title mt-0 mb-2">PROVIDER SIGN-UP</h5>
            <form action="">
              <div className="form-group mt-1 mb-1">
                <label className="formText">NAME</label>
                <input
                  name="name"
                  type="text"
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
              <div className="form-group mt-1 mb-1">
                <label className="formText">PICKUP LOCATION</label>
                <input
                  name="address"
                  type="text"
                  className="form-control mx-auto"
                  id="locationInput"
                  placeholder="123 Sesame Street New York, NY 12345"
                  onChange={handleChange}
                  value={state.address}
                />
              </div>
            </form>
            <hr className="signUpRule" />
            <h5 className="card-title mt-2 mb-2">WHAT CAN YOU PROVIDE?</h5>
            <form className="mx-auto">
              <div className="form-group mt-1 mb-1">
                <input
                  name="produceList"
                  type="text"
                  className="mx-auto"
                  id="produceType"
                  placeholder="apples, oranges, etc."
                  onChange={handleProduceChange}
                  value={produceInput}
                />
                <input type="image" onClick={addProduce} src="/assets/add-btnpng-01.png" name="submit" alt="add produce type" />
              </div>
            </form>
            <div className="itemContainer">{renderedOutput}</div>
            <hr className="signUpRule" />
            <button
              className="customBtn"
              onClick={handleSubmit}
            >SUBMIT</button>
          </div>
        </div>
      </div>
    </>
  );
};

// interface ProviderRegisterProps {
//   id: string;
//   email: string;
//   password: string;
//   key: string;
//   img: string;
//   location: string;
// }

export default ProviderRegister;