import React from "react";
import axios from "axios";
import { IMessage } from "../types";

const Form = () => {
  const [state, setState] = React.useState<IMessage>({
    name: "",
    email: "",
    phone: "",
    message: "",
    status: "unknown",
    // isRead: false,
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

    const addMessage = () => {
      const response = axios.post(
        `https://sheltered-river-97651.herokuapp.com/api/forms`,
        {
          data: { ...state },
        }
      );
      return response;
    };

    async function postMessage() {
      try {
        const res = await addMessage();
        console.log(res.data);
      } catch (error) {
        let message;
        if (error instanceof Error) message = error.message;
        else message = String(error);
        alert(message);
      }
    }

    postMessage();
    setState({ ...state, name: "" });
  }

  const options = [
    { label: "Jesteś nowym klientem?", value: "unknown" },
    { label: "Tak, jestem nowym potencjalnym klientem.", value: "new" },
    { label: "Tak, jestem obecnym klientem.", value: "current" },
    { label: "Nie jestem klientem", value: "neither" },
  ];

  

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    if(value === "unknown"||"new"||"current"||"neither"){
      setState({...state, status : value} )
    }
   
  };
  console.log("render")
  return (
    
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Enter your Name"
        onChange={handleChange}
        value={state.name}
        required
      />

      <input
        name="email"
        type="text"
        placeholder="Enter your Email"
        onChange={handleChange}
        value={state.email}
        required
      />

      <input
        name="phone"
        type="text"
        placeholder="Enter your Phone"
        onChange={handleChange}
        value={state.phone}
        required
      />

      <select value={state.status} onChange={handleSelectChange}>
        {options.map((option,index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>

      <input
        name="message"
        type="text"
        placeholder="Enter your Message"
        onChange={handleChange}
        value={state.message}
        required
      />

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " type="submit">Send</button>
    </form>
  );
};

export default Form;
