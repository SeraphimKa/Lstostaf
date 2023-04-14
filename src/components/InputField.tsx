//styles
import React from "react";
import "./styles.css";

interface Props {
  lst: string;
  setLst: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({ lst, setLst }) => {
  return (
    <form className="input">
      <input type="text" placeholder="Enter a lst" className="input__box" />
      <button className="input__submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default InputField;
