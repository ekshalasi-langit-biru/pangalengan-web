const Breadcrumbs = ({ paths }) => {
    return (
      <div className="text-sm text-gray-500 mb-4">
        {paths.map((path, idx) => (
          <span key={idx}>
            {path}
            {idx !== paths.length - 1 && " / "}
          </span>
        ))}
      </div>
    );
  };
  
export default Breadcrumbs;