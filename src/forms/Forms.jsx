import { ErrorBoundary } from "react-error-boundary";

const Forms = () => {
  function search() {
    throw new Error("search error");
  }
  return (
    <>
      <ErrorBoundary fallback={<p>errorrr occurred</p>}>
        <form action={search}>
          <input type="text" name="message" />
          <button type="submit">Send</button>
        </form>
      </ErrorBoundary>
    </>
  );
};

export default Forms;
