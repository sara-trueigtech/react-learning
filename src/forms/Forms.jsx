import React, { useActionState } from "react";

const Forms = () => {
  // async function formAct(curstate, formData)
  // {
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  //   return "donedanand";
  // }
  function inc(curState, formData)
  {
    return curState + 1;
  }

  // const [state, action, pending] = useActionState(formAct, null);
  const [state, action, pending] = useActionState(inc, 0);

  return (
    <>
      <form action={action}>
        <button type="submit">{state}</button>
      </form>
    </>
  );
};

export default Forms;
