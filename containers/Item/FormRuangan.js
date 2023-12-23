import { useState } from "react";
import CheckBoxForm from "../../components/CheckBoxForm/CheckBoxForm";

const FormRuanganContainer = ({ navigation }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <CheckBoxForm press={() => navigation.navigate("detailruangan")} />
    </>
  );
};
export default FormRuanganContainer;
