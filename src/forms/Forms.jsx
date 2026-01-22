import { useActionState } from "react";
import { ErrorBoundary } from "react-error-boundary";

const Forms = () => {
  function publish(formData)
  {
    alert("form sbmit through publish btn");
  }
  function draft(formData)
  {
    alert("form sbmit through draft btn");
  }
  

  return (
    <>
      <form action={draft}>
        <input type="text" name="article"/>
        <button type="submit">draft</button>
        <button formAction={publish}>publish</button>
      </form>
    </>
  );
};

export default Forms;
