//components
import InputField from "./components/InputField";
import Lstostaf from "./components/Lstostaf";

//hooks
import { useState } from "react";

//types
import { Lst } from "./components/model";

//styles
import "./App.css";

const App: React.FC = () => {
  const [lst, setLst] = useState<string>("");
  const [lstostaf, setLstostaf] = useState<Lst[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (lst) {
      setLstostaf([...lstostaf, { id: Date.now(), lst, active: true }]);
      setLst("");
    }
  };

  return (
    <div className="App">
      <h1 className="heading">Lstostaf</h1>
      <InputField lst={lst} setLst={setLst} handleSumbit={handleSubmit} />
      <Lstostaf lstostaf={lstostaf} setLstostaf={setLstostaf} />
    </div>
  );
};

export default App;
