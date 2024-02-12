// components/forms/contact-form.tsx
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ErrorMsg from "../common/err-message";
import { notifySuccess } from "@/utils/toast";

interface IFormInput {
  activigion_id: string;
  xbox_id: string;
  sony_id: string;
}

const ContactForm: React.FC<{ onSubmitForm: (data: IFormInput) => void }> = ({ onSubmitForm }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (data) {
      onSubmitForm(data);
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="contact-form">
      <div className="row">
        <div className="col-sm-6">
          <ErrorMsg msg={errors.activigion_id?.message as string} />
          <div className="input-grp">
            <input {...register("activigion_id", { required: `Name is required!` })} name="activigion_id" id="activigion_id" type="text" placeholder="Activigion Name *" />
          </div>
        </div>
        <div className="col-sm-6">
          <ErrorMsg msg={errors.xbox_id?.message as string} />
          <div className="input-grp">
            <input {...register("xbox_id")} name="xbox_id" id="xbox_id" type="text" placeholder="Xbox Id *" />
          </div>
        </div>
        <div className="col-sm-6">
          <ErrorMsg msg={errors.sony_id?.message as string} />
          <div className="input-grp">
            <input {...register("sony_id")} name="sony_id" id="sony_id" type="text" placeholder="Sony Id *" />
          </div>
        </div>
      </div>
      <button type="submit" className="submit-btn">Submit Now</button>
    </form>
  );
};

export default ContactForm;
