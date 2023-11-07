import {
  Box,
  Button,
  IconButton,
  TableCell,
  TableRow,
  TextField,
  Tooltip,
} from "@mui/material";
import { Todo } from "../../../types/ITodo";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import { useState } from "react";
import Status from "./Status";
import { useAlert } from "../../../context/AlertContext";

type IProps = {
  row?: Todo;
  handleEdit: (todoId: string, newTitle: string) => void;
  handleDone: (todoId: string) => void;
  handleOpenDelete: (todo: Todo) => void;
};

const TodoRow: React.FC<IProps> = ({
  row,
  handleEdit,
  handleDone,
  handleOpenDelete,
}) => {
  const [toggleEdit, setToggleEdit] = useState(false);
  const { setErrorMessage } = useAlert();
  const [value, setValue] = useState(row?.title || "");
  if (!row?.title) return null;

  const handleToggleEdit = () => {
    setToggleEdit(!toggleEdit);
  };

  const handleCancel = () => {
    setToggleEdit(false);
    setValue(row.title);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setValue(e.target.value);

  const handleEditRow = () => {
    if (!value) {
      setErrorMessage("Please enter a todo title");
      return;
    }
    handleEdit(row.id, value);
    setValue("");
    setToggleEdit(false);
  };

  return (
    <TableRow>
      <TableCell>{row.id}</TableCell>
      <TableCell>
        {toggleEdit ? (
          <TextField
            label="Outlined"
            variant="outlined"
            onChange={handleChange}
            value={value}
            size="small"
          />
        ) : (
          <>{row.title}</>
        )}
      </TableCell>
      <TableCell>
        <Status status={row.isDone} />
      </TableCell>
      <TableCell width="15%">
        {toggleEdit ? (
          <Box sx={{ display: "flex", gap: 0.5, justifyContent: "center" }}>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={handleEditRow}
            >
              Save
            </Button>
          </Box>
        ) : (
          <>
            {!row.isDone && (
              <Tooltip title="Complete">
                <IconButton onClick={() => handleDone(row.id)}>
                  <DoneIcon color="success" />
                </IconButton>
              </Tooltip>
            )}
            <Tooltip title="Edit">
              <IconButton onClick={handleToggleEdit}>
                <EditIcon color="primary" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton onClick={() => handleOpenDelete(row)}>
                <DeleteIcon color="error" />
              </IconButton>
            </Tooltip>
          </>
        )}
      </TableCell>
    </TableRow>
  );
};

export default TodoRow;
