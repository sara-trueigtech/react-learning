import React, { useActionState } from "react";

const Forms = () => {
  async function formAct(curstate, formData)
  {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return "donedanand";
  }

  const [state, action, pending] = useActionState(formAct, null);

  return (
    <>
      <form action={action}>
        <input type="text" />
        <button type="submit" disabled={pending}>{pending ? "submitting" : "submiot"}</button>
      </form>
    </>
  );
};

export default Forms;
