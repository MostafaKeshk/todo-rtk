import { Box, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

type IProps = {
  text: string;
};

const EmptyMessage: React.FC<IProps> = ({ text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        py: 5,
      }}
    >
      <ErrorOutlineIcon sx={{ fontSize: 40 }} color="error" />
      <Typography variant="h5" component="h5">
        {text}
      </Typography>
    </Box>
  );
};

export default EmptyMessage;
