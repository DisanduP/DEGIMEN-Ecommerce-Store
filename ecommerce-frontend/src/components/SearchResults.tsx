import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductGrid from './ProductGrid';
import { searchProducts } from '../data/mockData';
import './SearchResults.css';

const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const searchResults = searchProducts(query);

  return (
    <div className="search-results-page">
      <div className="search-results-header">
        <h1 className="search-results-title">
          Search Results for "{query}"
        </h1>
        <p className="search-results-count">
          {searchResults.length} {searchResults.length === 1 ? 'product' : 'products'} found
        </p>
      </div>

      {searchResults.length === 0 ? (
        <div className="no-results">
          <div className="no-results-content">
            <h2>No products found</h2>
            <p>We couldn't find any products matching "{query}".</p>
            <p>Try searching with different keywords or browse our categories.</p>
          </div>
        </div>
      ) : (
        <ProductGrid
          products={searchResults}
        />
      )}
    </div>
  );
};

export default SearchResults;
