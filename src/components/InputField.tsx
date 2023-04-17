//hooks
import { useRef } from "react";

//styles
import "./styles.css";

interface Props {
  lst: string;
  setLst: React.Dispatch<React.SetStateAction<string>>;
  handleSumbit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const InputField: React.FC<Props> = ({ lst, setLst, handleSumbit }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleSumbit(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        value={lst}
        onChange={(e) => setLst(e.target.value)}
        placeholder="Enter a lst"
        className="input__box"
      />
      <button className="input__submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default InputField;
