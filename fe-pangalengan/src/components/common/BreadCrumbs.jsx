import { Link, useLocation, useNavigate } from "react-router-dom";

const Breadcrumbs = ({ paths }) => {
  const generatePath = (index) => {
    return "/" + paths.slice(0, index + 1).join("/");
  };
  return (
    <div className="mb-4 text-sm text-gray-500">
      {paths.map((path, idx) => (
        <span key={idx}>
          {idx === 0 ? (
            <Link to="/" className="hover:underline focus:font-bold">
              {path}
            </Link>
          ) : idx < paths.length - 1 ? (
            <Link
              to={`/${paths.slice(0, idx + 1).join("/")}`}
              className="hover:underline"
            >
              {path}
            </Link>
          ) : (
            <span>{path}</span>
          )}
          {idx !== paths.length - 1 && " / "}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
