import { Droppable, Draggable } from "react-beautiful-dnd";
import { FormState, Element } from "../utils/form";
import { Dispatch, SetStateAction, useContext } from "react";
import uuid from "react-uuid";
import Renderer from "../utils/Renderer";
import classNames from "../utils/classNames";
import { FormContext } from "../context/FormContext";
import elementAtoms from "../utils/elementAtoms";

interface Props {}

const Canvas: React.FC<Props> = () => {
  const context = useContext(FormContext);
  const { form: elements, changeForm: setForm } = context;

  return (
    <div className="flex flex-col w-8/12 h-full my-10 ml-5 overflow-auto rounded-md shadow-xl bg-primary-background content-area">
      <Droppable droppableId="1">
        {(provided, snapshot) => {
          return (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={classNames(
                "h-full w-full transition ease-in-out flex-grow duration-150 pb-24",
                snapshot.isDraggingOver ? "bg-gray-700" : ""
              )}
            >
              {elements["1"].map((elem, index) => (
                <Draggable draggableId={elem.id} key={elem.id} index={index}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <Renderer elem={elem} form={elements} index={index} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
};

export default Canvas;
