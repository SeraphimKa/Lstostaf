//components
import SingleLst from "./SingleLst";

//types
import { Lst } from "./model";

//styles
import "./styles.css";

interface Props {
  lstostaf: Lst[];
  setLstostaf: React.Dispatch<React.SetStateAction<Lst[]>>;
}

const Lstostaf: React.FC<Props> = ({ lstostaf, setLstostaf }) => {
  return (
    <div className="Lstostaf">
      {lstostaf.map((lst) => (
        <SingleLst lst={lst} lstostaf={lstostaf} setLstostaf={setLstostaf} />
      ))}
    </div>
  );
};
export default Lstostaf;
