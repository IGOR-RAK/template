import React from "react";
import axios from "axios";



 const Form = () => {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    message: "",
    
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setState({ ...state, [e.target.name]: e.target.files[0] });
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

  

    const mypayload = {
      data: {
        name: "Paris",
      },
    };

    const addCity = () => {
      const response = axios.post(
        `https://sheltered-river-97651.herokuapp.com/api/cities`,
        {
          "data": {
            name: state.name,
           
          }
        }
      );
      return response;
    };

    async function createCity() {
      try {
        if (!state.name) {
          alert("Add new city");
        } else {
          await addCity();
        }
      } catch (error) {
        let message;
        if (error instanceof Error) message = error.message;
        else message = String(error);
        alert(message);
      }
    }

    createCity()
  }


  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Enter city"
        onChange={handleChange}
        value={state.name}
        required
      />
    
      <button type="submit">Send</button>
    </form>
  );
};


export default Form