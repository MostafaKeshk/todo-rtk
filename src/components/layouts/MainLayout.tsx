import AlertMessage from "../AlertMessage";
import { useAlert } from "../../context/AlertContext";

type IProps = {
  children: React.ReactElement<any, any> & React.ReactNode;
};

const MainLayout: React.FC<IProps> = ({ children }) => {
  const { value, msg, setValue, error } = useAlert();

  return (
    <>
      {children}
      <AlertMessage value={value} setValue={setValue} error={error} msg={msg} />
    </>
  );
};

export default MainLayout;
