import React from "react";

const Forms = () => {
  return (
    <>
      {/* data is sent with a get method in url */}
      <form method="get">
        <label>
          get name
          <input type="text" name="inputted-name" />
        </label>
        <button>save</button>
      </form>

      {/* data sent a post request in the request body to the server*/}
      <form method="post">
        <label>
          post name
          <input type="text" name="posted-name" />
        </label>
        <button>save</button>
      </form>

      {/* Form with fieldset, legend, and label */}
      <form method="post">
        <fieldset>
          <legend>do you agree???</legend>
          <label>
            <input type="radio" name="radio" value="yes" />
            yes
          </label>
          <label>
            <input type="radio" name="radio" value="no" />
            no
          </label>
        </fieldset>
      </form>

      {/* When the form is inside a <dialog>, closes the dialog and causes a submit event to be fired on submission, without submitting data or clearing the form. */}
      <dialog open>
        <form method="dialog">
          <legend>Do you agree?</legend>
          <button>OK</button>
          <button>no</button>
        </form>
      </dialog>
    </>
  );
};

export default Forms;
