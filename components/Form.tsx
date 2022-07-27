import React from "react";
import axios from "axios";
import { IMessage } from "../types";
import { useForm, UseFormReturn, SubmitHandler } from "react-hook-form";
type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

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
    const value = e.target.value;
    if (value === "unknown" || "new" || "current" || "neither") {
      setState({ ...state, status: value });
    }
  };
  console.log("render");
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

<div className="inline-block relative w-64">
      <select
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        value={state.status}
        onChange={handleSelectChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
</div>
      

      <input
        name="message"
        type="text"
        placeholder="Enter your Message"
        onChange={handleChange}
        value={state.message}
        required
      />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
        type="submit"
      >
        Send
      </button>
    </form>
  );
};

export default Form;
