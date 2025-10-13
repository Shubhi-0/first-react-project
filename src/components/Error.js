import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError()
  console.log(err)
  return (
    <>
      <h1>This is an error Page</h1>
      <h2>Oops!! Something went wrong!!!</h2>
      <div>{err?.data}</div>
    </>
  );
};
export default Error;
