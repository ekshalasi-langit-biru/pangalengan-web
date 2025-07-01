import { Link, useLocation } from 'react-router-dom';

function matchPath(pattern, path) {
  if (!pattern.includes(':')) return pattern === path;
  const regexStr = '^' + pattern.replace(/:[^/]+/g, '[^/]+') + '$';
  return new RegExp(regexStr).test(path);
}

const Breadcrumb = ({ paths }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="text-sm text-gray-500 mb-4">
      {paths.map((path, idx) => {
        const isActive = matchPath(path.href, currentPath);
        const className = isActive ? 'text-black font-semibold' : '';

        return (
          <span key={idx}>
            {idx !== paths.length - 1 ? (
              <Link to={path.href} className={`hover:text-blue-500 ${className}`}>
                {path.label}
              </Link>
            ) : (
              <span className={className}>{path.label}</span>
            )}
            {idx !== paths.length - 1 && ' / '}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;