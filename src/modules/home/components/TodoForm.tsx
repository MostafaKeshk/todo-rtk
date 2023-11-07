import { Box, Button, TextField } from "@mui/material";

type IProps = {
  handleAdd: () => void;
  value: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const TodoForm: React.FC<IProps> = ({ handleAdd, value, handleChange }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mt: 2,
        justifyContent: "center",
      }}
    >
      <TextField
        label="Outlined"
        variant="outlined"
        onChange={handleChange}
        value={value}
        size="small"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAdd}
        sx={{ ml: 0.5 }}
      >
        Add
      </Button>
    </Box>
  );
};

export default TodoForm;
