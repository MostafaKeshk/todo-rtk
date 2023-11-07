import { Box, Container, Typography } from "@mui/material";
import Table from "../components/Table";
import Colors from "../theme/colors";
import { useSelector } from "react-redux";
import TodoRow from "../modules/home/components/TodoRow";
import useHomeContainer from "../modules/home/containers/useHomeContainer";
import TodoForm from "../modules/home/components/TodoForm";
import AlertDialog from "../components/AlertDialog";
import MainLayout from "../components/layouts/MainLayout";

const Home = () => {
  const todos = useSelector((state: any) => state.todos);

  const {
    handleAdd,
    value,
    handleChange,
    handleEdit,
    handleDone,
    handleOpenDelete,
    openDialog,
    selectedTodo,
    setOpenDialog,
    handleDelete,
  } = useHomeContainer();

  return (
    <MainLayout>
      <Box sx={{ backgroundColor: Colors.background, height: "100vh", py: 2 }}>
        <Container>
          <Typography
            variant="h1"
            component="h1"
            fontSize={30}
            mb={2}
            align="center"
          >
            Todo
          </Typography>
          <Table
            heads={["id", "name", "status", "actions"]}
            rows={todos}
            Row={
              <TodoRow
                handleEdit={handleEdit}
                handleDone={handleDone}
                handleOpenDelete={handleOpenDelete}
              />
            }
          />
          <TodoForm
            handleAdd={handleAdd}
            value={value}
            handleChange={handleChange}
          />

          <AlertDialog
            open={openDialog}
            handleClose={() => setOpenDialog(false)}
            onAgree={handleDelete}
            title={`Are you sure you want to delete ${selectedTodo.title}?`}
          />
        </Container>
      </Box>
    </MainLayout>
  );
};

export default Home;
