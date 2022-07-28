import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const inputGroupStyles = {
  div: "w-full  px-3 mb-6 md:mb-0",
  label: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
  input:
    "appearance-none block w-full bg-white-100 text-gray-700 border border-grey-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
  errorParagraf: "text-red-500 text-xs italic",
};

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
    <div className="inline-block relative w-64">
      <select
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        ref={ref}
        {...props}
      >
        {options.map(({ label, value }, index) => (
          <option key={index} value={value}>
            {label}
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
          data,
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
    reset();
  };

  return (
    <div className="border-2 m-5 p-5">
      <div className="text-center">
        <h1 className="text-lg font-bold">Wyślij nam wiadomość</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex">
          <div className="flex flex-col m-5">
            <div className={inputGroupStyles.div}>
              <label className={inputGroupStyles.label} htmlFor="name">
                Name
              </label>
              <Input
                placeholder="Name"
                className={inputGroupStyles.input}
                id="name"
                type="text"
                {...register("name", { required: true })}
              />
              {errors?.name?.type === "required" && (
                <p className={inputGroupStyles.errorParagraf}>
                  Please fill out this field.
                </p>
              )}
            </div>

            <div className={inputGroupStyles.div}>
              <label className={inputGroupStyles.label} htmlFor="email">
                Email
              </label>
              <Input
                placeholder="Email"
                className={inputGroupStyles.input}
                id="email"
                type="text"
                {...register("email", { required: true })}
              />
              {errors?.email?.type === "required" && (
                <p className={inputGroupStyles.errorParagraf}>
                  Please fill out this field.
                </p>
              )}
            </div>

            <div className={inputGroupStyles.div}>
              <label className={inputGroupStyles.label} htmlFor="phone">
                Telefon kontaktowy
              </label>
              <Input
                placeholder="Telefon"
                className={inputGroupStyles.input}
                id="phone"
                type="text"
                {...register("phone", { required: true, pattern: /^\d{9}$/ })}
              />
              {errors?.phone?.type === "pattern" && (
                <p>Please enter a valid phone number</p>
              )}
              {errors?.phone?.type === "required" && (
                <p>Please enter phone number</p>
              )}
            </div>

            <div className={inputGroupStyles.div}>
              <Select
                {...register("status")}
                options={[
                  { label: "Jesteś nowym klientem?", value: "unknown" },
                  {
                    label: "Tak, jestem nowym potencjalnym klientem.",
                    value: "new",
                  },
                  { label: "Tak, jestem obecnym klientem.", value: "current" },
                  { label: "Nie jestem klientem", value: "neither" },
                ]}
              />
            </div>
          </div>
          <div className="flex flex-col m-5">
            <div className="w-full  px-1 mb-6">
              <label className={inputGroupStyles.label} htmlFor="message">
                Message
              </label>
              <textarea
                placeholder="Your message"
                className="appearance-none block w-{300} bg-white-100 text-gray-700 border border-grey-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="message"
                style ={{minWidth:"300px"}}
                {...register("message", { required: true })}
              />
              {errors?.message?.type === "required" && (
               <p className={inputGroupStyles.errorParagraf}>
               Please fill out this field.
             </p>
              )}
            </div>
           
            <input 
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="submit"
              value="Send"
            />   
          </div>
          
        </div>
      </form>
    </div>
  );
};

export default Form;
