import { InputForm } from "../inputForm";
import "./style.scss";
import { PageApply } from "../pageApply";

export const FormData = () => {
  return (
    <div className="formData">
      <InputForm />
      <PageApply />
    </div>
  );
};
