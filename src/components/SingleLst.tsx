//hooks
import React, { useState, useRef, useEffect } from "react";

//types
import { Lst } from "./model";

//styles
import "./styles.css";

//icons
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface Props {
  lst: Lst;
  lstostaf: Lst[];
  setLstostaf: React.Dispatch<React.SetStateAction<Lst[]>>;
}

const SingleLst: React.FC<Props> = ({ lst, lstostaf, setLstostaf }) => {
  //Edit State
  const [edit, setEdit] = useState<boolean>(false);
  const [editLst, setEditLst] = useState<string>(lst.lst);
  //

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setLstostaf(
      lstostaf.map((lst) => (lst.id === id ? { ...lst, lst: editLst } : lst))
    );
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    setLstostaf(lstostaf.filter((lst) => lst.id !== id));
  };

  const handleDone = (id: number) => {
    setLstostaf(
      lstostaf.map((lst) =>
        lst.id === id ? { ...lst, active: !lst.active } : lst
      )
    );
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);
  return (
    <form className="lstostaf__single" onSubmit={(e) => handleEdit(e, lst.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editLst}
          onChange={(e) => setEditLst(e.target.value)}
          className="todos__single--title"
        />
      ) : lst.active ? (
        <s className="lstostaf__single--title">{lst.lst}</s>
      ) : (
        <span className="lstostaf__single--title">{lst.lst}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !lst.active) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span
          className="icon"
          onClick={() => {
            handleDelete(lstostaf[0].id);
          }}
        >
          <AiFillDelete />
        </span>
        <span
          className="icon"
          onClick={() => {
            handleDone(lstostaf[0].id);
          }}
        >
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleLst;
