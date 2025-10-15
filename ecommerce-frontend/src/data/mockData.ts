// Mock product data for the e-commerce store
export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  imageUrl: string;
  isOnSale: boolean;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Latest gadgets and electronic devices'
  },
  {
    id: 'books',
    name: 'Books',
    description: 'Wide selection of books and literature'
  },
  {
    id: 'clothing',
    name: 'Clothing',
    description: 'Fashion and apparel for all'
  }
];

export const products: Product[] = [
  // Electronics
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 199.99,
    category: 'electronics',
    image: '/images/headphones.jpg',
    description: 'High-quality wireless headphones with noise cancellation',
    imageUrl: '/images/headphones.jpg',
    isOnSale: false,
    rating: 4.5,
    reviewCount: 128
  },
  {
    id: 2,
    name: 'Smartphone',
    price: 699.99,
    category: 'electronics',
    image: '/images/smartphone.jpg',
    description: 'Latest smartphone with advanced features',
    imageUrl: '/images/smartphone.jpg',
    isOnSale: true,
    originalPrice: 799.99,
    rating: 4.2,
    reviewCount: 256
  },
  {
    id: 3,
    name: 'Laptop Computer',
    price: 1299.99,
    category: 'electronics',
    image: '/images/laptop.jpg',
    description: 'Powerful laptop for work and entertainment',
    imageUrl: '/images/laptop.jpg',
    isOnSale: false,
    rating: 4.7,
    reviewCount: 89
  },

  // Books
  {
    id: 4,
    name: 'The Great Gatsby',
    price: 12.99,
    category: 'books',
    image: '/images/gatsby.jpg',
    description: 'Classic American novel by F. Scott Fitzgerald',
    imageUrl: '/images/gatsby.jpg',
    isOnSale: false,
    rating: 4.3,
    reviewCount: 1247
  },
  {
    id: 5,
    name: 'To Kill a Mockingbird',
    price: 14.99,
    category: 'books',
    image: '/images/mockingbird.jpg',
    description: 'Pulitzer Prize-winning novel by Harper Lee',
    imageUrl: '/images/mockingbird.jpg',
    isOnSale: true,
    originalPrice: 16.99,
    rating: 4.8,
    reviewCount: 2156
  },
  {
    id: 6,
    name: '1984',
    price: 13.99,
    category: 'books',
    image: '/images/1984.jpg',
    description: 'Dystopian novel by George Orwell',
    imageUrl: '/images/1984.jpg',
    isOnSale: false,
    rating: 4.6,
    reviewCount: 1834
  },

  // Clothing
  {
    id: 7,
    name: 'Cotton T-Shirt',
    price: 19.99,
    category: 'clothing',
    image: '/images/tshirt.jpg',
    description: 'Comfortable cotton t-shirt in various colors',
    imageUrl: '/images/tshirt.jpg',
    isOnSale: false,
    rating: 4.1,
    reviewCount: 342
  },
  {
    id: 8,
    name: 'Denim Jeans',
    price: 79.99,
    category: 'clothing',
    image: '/images/jeans.jpg',
    description: 'Classic denim jeans with perfect fit',
    imageUrl: '/images/jeans.jpg',
    isOnSale: true,
    originalPrice: 99.99,
    rating: 4.4,
    reviewCount: 567
  },
  {
    id: 9,
    name: 'Winter Jacket',
    price: 149.99,
    category: 'clothing',
    image: '/images/jacket.jpg',
    description: 'Warm winter jacket for cold weather',
    imageUrl: '/images/jacket.jpg',
    isOnSale: false,
    rating: 4.5,
    reviewCount: 189
  }
];

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getCategoryById = (categoryId: string): Category | undefined => {
  return categories.find(category => category.id === categoryId);
};

export const getProductById = (productId: number): Product | undefined => {
  return products.find(product => product.id === productId);
};

export const searchProducts = (query: string): Product[] => {
  if (!query.trim()) return products;

  const searchTerm = query.toLowerCase().trim();

  return products.filter(product =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm)
  ).sort((a, b) => {
    // Sort by relevance: exact name matches first, then description matches
    const aNameMatch = a.name.toLowerCase().includes(searchTerm);
    const bNameMatch = b.name.toLowerCase().includes(searchTerm);

    if (aNameMatch && !bNameMatch) return -1;
    if (!aNameMatch && bNameMatch) return 1;

    return 0; // Maintain original order for same relevance
  });
};
