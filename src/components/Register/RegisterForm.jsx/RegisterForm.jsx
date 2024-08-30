import { useState } from "react";
import emailjs from "@emailjs/browser";

import Form from "../../Form/Form";

const RegisterForm = () => {
  const [submited, setSubmited] = useState(false);

  const handleSubmit = (formData) => {
    if (!formData.email || !formData.password) {
      alert("rellena");
      return;
    }

    localStorage.setItem("user", JSON.stringify(formData));
    setSubmited(true);

    console.log(formData);

    emailjs.init({ publicKey: "yhwQFL0kVRjuUKS3E" });

    emailjs
      .send("contac_service", "contact_template", formData)
      .then((res) =>
        console.log("correo exitosamente enviado", res.status, res.text)
      )
      .catch((e) => console.error("error al enviar el correo", e));
  };

  return (
    <div>
      {submited ? (
        <p className="registration">
          Registration completed! Please check your email.
        </p>
      ) : (
        <Form onSubmit={handleSubmit} buttonContent="Create account" />
      )}
    </div>
  );
};

export default RegisterForm;
