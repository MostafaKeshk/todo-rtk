import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addTodo,
  editTodo,
  completeTodo,
  removeTodo,
} from "../../../slices/todosSlice";
import { Todo } from "../../../types/ITodo";
import { useAlert } from "../../../context/AlertContext";

const useHomeContainer = () => {
  const [value, setValue] = useState("");

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo>({
    id: "",
    title: "",
    isDone: false,
  });

  const dispatch = useDispatch();
  const { setSuccessMessage, setErrorMessage } = useAlert();

  const handleAdd = () => {
    if (!value) {
      setErrorMessage("Please enter a todo title");
      return;
    }
    dispatch(addTodo(value));
    setValue("");
    setSuccessMessage("Todo has been added successfully");
  };

  const handleEdit = (todoId: string, newTitle: string) => {
    dispatch(editTodo({ todoId, newTitle }));
    setSuccessMessage("Todo has been edited successfully");
  };

  const handleDone = (todoId: string) => {
    dispatch(completeTodo(todoId));
    setSuccessMessage("Todo has been completed successfully");
  };

  const handleOpenDelete = (todo: Todo) => {
    setOpenDialog(true);
    setSelectedTodo(todo);
  };

  const handleDelete = () => {
    dispatch(removeTodo(selectedTodo.id));
    setOpenDialog(false);
    setSuccessMessage("Todo has been deleted successfully");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setValue(e.target.value);

  return {
    value,
    handleChange,
    handleAdd,
    handleEdit,
    handleDone,
    handleOpenDelete,
    openDialog,
    selectedTodo,
    setOpenDialog,
    handleDelete,
  };
};

export default useHomeContainer;
