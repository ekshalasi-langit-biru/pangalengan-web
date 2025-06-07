import { Link } from 'react-router-dom';

const Breadcrumb = ({ paths }) => {
  return (
    <div className="text-sm text-gray-500 mb-4">
      {paths.map((path, idx) => (
        <span key={idx}>
          {idx !== paths.length - 1 ? (
            <Link to={path.href} className="hover:text-blue-500">
              {path.label}
            </Link>
          ) : (
            <span>{path.label}</span> 
          )}
          {idx !== paths.length - 1 && " / "}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;