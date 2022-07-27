import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <input ref={ref} {...props} />
));

type Option = {
  label: React.ReactNode;
  value: string | number | string[];
};

type SelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & { options: Option[] };

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, ...props }, ref) => (
    <select ref={ref} {...props}>
      {options.map(({ label, value }, index) => (
        <option key={index} value={value}>
          {label}
        </option>
      ))}
    </select>
  )
);

interface IFormInput {
  name: string;
  email: string;
  phone: string;
  status: string;
  message: string;
}

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    console.log(data);
    const addMessage = () => {
      const response = axios.post(
        `https://sheltered-river-97651.herokuapp.com/api/forms`,
        {
          data
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
    reset()
    
  };

  return (
    <>
      <h1>Wyślij nam wiadomość</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="Name" {...register("name", { required: true })} />
        {errors?.name?.type === "required" && <p>This is required.</p>}

        <Input placeholder="Email" {...register("email", { required: true })} />
        {errors?.name?.type === "required" && <p>This is required.</p>}

        <Input
          placeholder="Mobile number"
          {...register("phone", { required: true, pattern: /^\d{9}$/ })}
        />
        {errors?.phone?.type === "pattern" && (
          <p>Please enter a valid phone number</p>
        )}
        {errors?.phone?.type === "required" && <p>Please enter phone number</p>}

        <Select
          {...register("status")}
          options={[
            { label: "Jesteś nowym klientem?", value: "unknown" },
            { label: "Tak, jestem nowym potencjalnym klientem.", value: "new" },
            { label: "Tak, jestem obecnym klientem.", value: "current" },
            { label: "Nie jestem klientem", value: "neither" },
          ]}
        />

        <textarea
          placeholder="Message"
          {...register("message", { required: true })}
        />
        {errors?.message?.type === "required" && <p>This is required.</p>}

        <input type="submit" value="Send" />
      </form>
    </>
  );
};

export default Form;
