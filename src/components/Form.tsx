"use client";

import { ChangeEvent, FormEvent, useState } from "react";

interface IForm {
  title: string;
}
export const Form = ({ title }: IForm) => {
  const [state, setState] = useState("");
  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };
  const handleSubmit = () => {
    alert("submit..." + state);
    setState("");
  };
  const handleSubmit2 = (e:FormEvent<HTMLFormElement>) => {
    alert("submit..." + state);
    setState("");
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit2}
      className="bg-orange-200 w-2/3 rounded-md p-4 flex gap-4 flex-row  items-center justify-center h-64"
    >
      <div>
        <label htmlFor="name">{title}</label>
        <input
          value={state}
          onChange={handleChangeText}
          id="name"
          className="pl-2 h-12 rounded-md"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-white rounded-md pr-4 pl-4 h-12 mt-6 "
      >
        Submit
      </button>
      <input
        type="submit"
        className="bg-white rounded-md pr-4 pl-4 h-12 mt-6 "
      />
    </form>
  );
};
