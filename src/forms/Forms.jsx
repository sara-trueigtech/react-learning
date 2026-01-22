import { useActionState } from "react";
import { ErrorBoundary } from "react-error-boundary";

const Forms = () => {

  function formAct(curState, formData){
    'use server';
    const email = formData.get("email");

    if (!email.includes("@")) {
      return "Please enter a valid email";
    }

    return null;
  }

  const [state, action] = useActionState(formAct, null);
  return (
    <>
      <form action={action}>
        <input type="text" name="email"/>
        <button>submit</button>
        {!!state && <p>{state}</p>}
      </form>
    </>
  );
};

export default Forms;
