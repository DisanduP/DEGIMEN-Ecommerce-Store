import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getCategoryById, getProductById } from '../data/mockData';
import './Breadcrumb.css';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbs = [
    { name: 'Home', path: '/' }
  ];

  if (pathnames[0] === 'category' && pathnames[1]) {
    const categoryId = pathnames[1];
    const category = getCategoryById(categoryId);
    if (category) {
      breadcrumbs.push({
        name: category.name,
        path: `/category/${categoryId}`
      });
    }
  } else if (pathnames[0] === 'search') {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q');
    if (query) {
      breadcrumbs.push({
        name: `Search Results for "${query}"`,
        path: `/search?q=${encodeURIComponent(query)}`
      });
    }
  } else if (pathnames[0] === 'product' && pathnames[1]) {
    const productId = parseInt(pathnames[1]);
    const product = getProductById(productId);
    if (product) {
      const category = getCategoryById(product.category);
      if (category) {
        breadcrumbs.push({
          name: category.name,
          path: `/category/${product.category}`
        });
      }
      breadcrumbs.push({
        name: product.name,
        path: `/product/${productId}`
      });
    }
  }

  return (
    <nav className="breadcrumb">
      <div className="breadcrumb-container">
        {breadcrumbs.map((crumb, index) => (
          <React.Fragment key={crumb.path}>
            {index > 0 && <span className="breadcrumb-separator">/</span>}
            {index === breadcrumbs.length - 1 ? (
              <span className="breadcrumb-current">{crumb.name}</span>
            ) : (
              <Link to={crumb.path} className="breadcrumb-link">
                {crumb.name}
              </Link>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumb;
