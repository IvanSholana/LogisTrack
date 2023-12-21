import { useState } from "react";
import CheckBoxForm from "../../components/CheckBoxForm/CheckBoxForm";

const FormRuanganContainer = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <CheckBoxForm />
    </>
  );
};
export default FormRuanganContainer;
