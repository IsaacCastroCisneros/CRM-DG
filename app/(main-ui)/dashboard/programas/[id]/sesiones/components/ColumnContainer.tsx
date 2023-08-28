import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { Column, Id, Task } from "./types";
import { CSS } from "@dnd-kit/utilities";
import { Dispatch, SetStateAction, useContext, useMemo, useState } from "react";
import TaskCard from "./TaskCard";
import sessionWithIdDeCabecera from "./ClientContent/interfaces/sessionWithIdDeCabecera";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripVertical } from "@fortawesome/free-solid-svg-icons";
import Option from "@/components/Option/Option";
import appContext from "@/context/appContext";
import RegularPopup from "@/components/RegularPopup/RegularPopup";
import DeleteAlert from "@/components/DeleteAlert/DeleteAlert";

interface Props {
  column: Column;
  tasks: sessionWithIdDeCabecera[];
}

function ColumnContainer({
  column,
  tasks,
}: Props) {
  
  const [editMode, setEditMode] = useState(false);
  const{setShowPopup}=useContext(appContext)
  const items = useMemo(() => {
    return tasks.map((task) => task.id);
  }, [tasks]);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
      bg-columnBackgroundColor
      opacity-40
      border-2
      border-pink-500
      w-[350px]
      h-[500px]
      max-h-[500px]
      rounded-md
      flex
      flex-col
      "
      ></div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex flex-col items-end gap-[1rem] h-[32rem] w-[325px] bg-white my-shadow ${
        isDragging
          ? "border-[3px] border-primary opacity-[.5] overflow-hidden rounded-[.5rem]"
          : ""
      }`}
    >
      <div className="flex w-[100%] px-[1rem] py-[.7rem] text-[1.2rem] rounded-[.5rem] font-bold justify-between bg-white">
        <div className="flex gap-[1rem] items-center">
          <div className="hover:cursor-grab" {...attributes} {...listeners}>
            <FontAwesomeIcon icon={faGripVertical} />
          </div>
          <span className="text-[1rem]">{title}</span>
        </div>
        <div className="flex items-center gap-[.5rem]">
          <Option
            label="Eliminar Cabecera"
            type="delete"
            onClick={() =>
              setShowPopup({
                show: true,
                popup: (
                  <RegularPopup
                    content={<DeleteAlert subject={`Cabecera ${title}`} />}
                    title="eliminar Cabecera"
                  />
                ),
              })
            }
          />
          <Option
            label="Editar Cabecera"
            type="edit"
        /*     onClick={() =>
              setShowPopup({
                show: true,
                popup: (
                  <RegularPopup
                    title="Editar Cabecera"
                    content={<CreateTitulo title={title} />}
                  />
                ),
              })
            } */
          />
        </div>
      </div>
      <div className='px-[1rem] py-[1.3rem] flex-1 w-[100%] flex flex-col justify-between'>
        <ul className={`flex flex-col max-w-[25rem] gap-[.5rem] overflow-y-auto`}>
          <SortableContext items={items}>
            {tasks.map((session, pos) => (
              <Session key={pos} {...session} />
            ))}
          </SortableContext>
        </ul>
      <MyLink className='w-[100%]'  href={`${path}/new`} icon={faPlusCircle}>
         Añadir Sesion
      </MyLink>
      </div>
    </div>
  );
}

export default ColumnContainer;
