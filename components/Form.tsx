import React from "react";
import axios from "axios";

// interface IData {
//   "data": {
//     "city": string
//   }
// }

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

    // let formData = new FormData();

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
            name: state.city,
           
          }
        }
      );
      return response;
    };

    async function createCity() {
      try {
        if (!state) {
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

  // Use fetch or axios to submit the form
  //   await axios
  //     .post("https://sheltered-river-97651.herokuapp.com/api/cities", obj
  //     .then(({ data }) => {
  //       // const { redirect } = data;
  //       // // Redirect used for reCAPTCHA and/or thank you page
  //       // window.location.href = redirect;
  //     })
  //     .catch((e) => {
  //       window.location.href = e.response.data.redirect;
  //     });
  // }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="city"
        type="text"
        placeholder="Enter city"
        onChange={handleChange}
        value={state.city}
        required
      />
      {/* <textarea
        name="message"
        placeholder="Enter message"
        onChange={handleChange}
        value={state.message}
        required
      />
      <input type="file" name="file" onChange={handleChange} />
      <input
        name="bot-field"
        type="text"
        onChange={handleChange}
        style={{ display: "none" }}
      /> */}
      <button type="submit">Send</button>
    </form>
  );
};


export default Form