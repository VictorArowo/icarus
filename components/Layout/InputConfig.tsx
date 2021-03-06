import { useContext, useEffect, useState, ChangeEvent } from "react";
import { SelectedContext } from "../../context/SelectedContext";
import { Element } from "../../utils/form";
import DarkModeToggle from "./DarkModeToggle";
import InputSpecificConfig from "./InputSpecificConfig";
import { FormContext } from "../../context/FormContext";

interface Props {}

const InputConfig: React.FC<Props> = () => {
  const context = useContext(SelectedContext);
  const formContext = useContext(FormContext);

  const { form, changeForm: setForm } = formContext;

  const { selected } = context;
  const [data, setData] = useState<Element | undefined>(undefined);

  useEffect(() => {
    if (selected !== "") {
      setData(form["1"].find((elem) => elem.id === selected));
    }
  }, [selected]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.name);
    if (e.target.name === "title") {
      setData({ ...data!, title: e.target.value });
    } else {
      setData({ ...data!, supporting: e.target.value });
    }
  };

  useEffect(() => {
    if (data) {
      setForm({
        ...form,
        "1": form["1"].map((elem) =>
          elem.id === selected
            ? { ...elem, title: data!.title, supporting: data!.supporting }
            : elem
        ),
      });
    }
  }, [data]);

  return (
    <div className="mt-10 ml-8 overflow-auto rounded-md content-area w-72 bg-primary-background">
      {data ? (
        <div className="flex flex-col ">
          <div className="w-full py-5 pl-3 mb-1 text-sm font-bold uppercase border-b text-primary-text border-sec-background">
            {data?.text}
          </div>
          <div className="py-5 pl-3 mb-1 font-bold border-b text-primary-text border-sec-background">
            <div className="text-xs uppercase">Question</div>
            <textarea
              value={data?.title}
              name="title"
              onChange={handleChange}
              className="mt-2 bg-transparent border border-gray-400 form-textarea"
            />
          </div>
          <div className="py-5 pl-3 mb-1 font-bold border-b text-primary-text border-sec-background">
            <div className="text-xs uppercase">More Details</div>
            <textarea
              value={data?.supporting}
              name="supporting"
              onChange={handleChange}
              className="mt-2 bg-transparent border border-gray-400 form-textarea"
            />
          </div>
          <InputSpecificConfig elem={data} />
        </div>
      ) : (
        <div className="flex items-center justify-center h-full text-2xl text-center text-primary-text">
          Select an input to <br /> start editing
        </div>
      )}
    </div>
  );
};

export default InputConfig;
