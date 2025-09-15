import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const routeErr = useRouteError();
  console.log(routeErr);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#ff6600",
      }}
    >
      <h2>Oops! Something went wrong</h2>
      <h3 style={{ color: "#02060c73" }}>
        {routeErr.status} {routeErr.statusText}
      </h3>
      <p style={{ color: "#02060c73" }}>{routeErr.data}</p>
    </div>
  );
};
export default ErrorPage;
