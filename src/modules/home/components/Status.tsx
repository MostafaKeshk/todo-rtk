import { Chip } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
type IProps = {
  status: boolean;
};

const Status: React.FC<IProps> = ({ status }) => {
  const color = status ? "success" : "warning";
  const label = status ? "Completed" : "In Progress";
  const Icon = status ? DoneIcon : AccessTimeIcon;

  return <Chip label={label} color={color} icon={<Icon />} />;
};

export default Status;
