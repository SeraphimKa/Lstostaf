import InputField from "./components/InputField";

import { useState } from "react";

//styles
import "./App.css";

const App: React.FC = () => {
  const [lst, setLst] = useState<string>("");
  return (
    <div className="App">
      <h1 className="heading">Lstostaf</h1>
      <InputField lst={lst} setLst={setLst} />
    </div>
  );
};

export default App;
