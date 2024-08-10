import React, { useState, useEffect, useContext } from 'react';
import './Product.css';
import Images1 from '../images/Product/P1.png';
import Images2 from '../images/Product/P2.png';
import Images3 from '../images/Product/P3.png';
import Images4 from '../images/Product/P4.png';
import Images5 from '../images/Product/P5.png';
import Images6 from '../images/Product/P6.png';
import Images7 from '../images/Product/P7.png';
import Images8 from '../images/Product/P8.png';
import Images9 from '../images/Product/P9.png';
import SwiperComponent from "../components/SwiperComponent";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ManageCartContext } from '../Manage/ManageCart.js'; 

const productsData = [
   {
    id: 1,
    name: 'vivo T2x 5G (Sunset Orange, 128 GB)',
    price: 699,
    originalPrice: 799,
    image: Images1,
    category: 'Mobile',
    brand: 'Vivo',
    storage: '128 GB',
    discount: 10,
  },
   {
    id: 2,
    name: 'Polka Print Baby Boys Waistcoat',
    price: 599,
    originalPrice: 799,
    image: Images2,
    category: 'Fashion',
    brand: 'Generic',
    discount: 10,
  },
  {
    id: 3,
    name: 'Motorolla G16 Watch with Mettallic finish',
    price: 599,
    originalPrice: 799,
    image: Images3,
    category: 'Watch',
    brand: 'Motorola',
    storage: '128 GB',
    discount: 20,
  },
  {
    id: 4,
    name: 'Fiber Health Band',
    price: 1500,
    originalPrice: 2000,
    image: Images4,
    category: 'Fashion',
    brand: 'Generic',
    discount: 10,
  },
  {
    id: 5,
    name: 'Combo of 5 Tshirts',
    price: 1999,
    originalPrice: 2199,
    image: Images5,
    category: 'Fashion',
    brand: 'Generic',
    storage: '128 GB',
    discount: 10,
  },
  {
    id: 6,
    name: 'Women Pink Handbag',
    price: 1999,
    originalPrice: 2199,
    image: Images6,
    category: 'Fashion',
    brand: 'Generic',
    discount: 20,
  },
  {
    id: 7,
    name: 'Dungaree For Boys & Girls Casual Printed Cotton Blend',
    price: 599,
    originalPrice: 699,
    image: Images7,
    category: 'Fashion',
    brand: 'Generic',
    discount: 10,
  },
  {
    id: 8,
    name: 'LuvPure Water Purifire (20liters)',
    price: 599,
    originalPrice: 699,
    image: Images8,
    category: 'Home Appliances',
    brand: 'Generic',
    storage: '64 GB',
    discount: 10,
  },
  {
    id: 9,
    name: 'LG Washing Machine Automatic (50liters)',
    price: 599,
    originalPrice: 699,
    image: Images9,
    category: 'Home Appliances',
    brand: 'Generic',
    discount: 10,
  }, 
];




const Product = () => {
  const [products, setProducts] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [filters, setFilters] = useState({
    category: '',
    brand: '',
    priceRange: [0, 2000],
    storage: '',
  });
  const [likedProducts, setLikedProducts] = useState({});

  const { addToCart } = useContext(ManageCartContext);

  useEffect(() => {
    filterProducts();
  }, [filters]);

  const filterProducts = () => {
    let filtered = products.filter(
      (product) =>
        (filters.category === '' || product.category === filters.category) &&
        (filters.brand === '' || product.brand === filters.brand) &&
        (filters.storage === '' || product.storage === filters.storage) &&
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]
    );
    setFilteredProducts(filtered);
    setFiltersVisible(false);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handlePriceChange = (e) => {
    const value = Number(e.target.value);
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: [0, value],
    }));
  };

  const toggleLike = (id) => {
    setLikedProducts((prevLikes) => ({
      ...prevLikes,
      [id]: !prevLikes[id],
    }));
  };

  const toggleFilters = () => {
    setFiltersVisible(!filtersVisible);
  };

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
    alert(`${product.name} has been added to the cart successfully!`);
  };

  return (
    <div className="App">
      <Header />
      <div className="product-page">
        <div className={`sidebar ${filtersVisible ? 'visible' : ''}`}>
          <h1>Filters</h1>
          <div className="filter-section">
            <h3>Category</h3>
            <select name="category" onChange={handleFilterChange}>
              <option value="">All Categories</option>
              <option value="Mobile">Mobile</option>
              <option value="Fashion">Fashion</option>
              <option value="Home Appliances">Home Appliances</option>
            </select>
          </div>
          <div className="filter-section">
            <h3>Brand</h3>
            <select name="brand" onChange={handleFilterChange}>
              <option value="">All Brands</option>
              <option value="Vivo">Vivo</option>
              <option value="Generic">Generic</option>
              <option value="Motorola">Motorola</option>
              <option value="OnePlus">OnePlus</option>
              <option value="Realme">Realme</option>
              <option value="Thomson">Thomson</option>
            </select>
          </div>
          <div className="filter-section">
            <h3>Price</h3>
            <input 
              type="range" 
              name="priceRange" 
              min="0" 
              max="2000" 
              value={filters.priceRange[1]} 
              onChange={handlePriceChange}
            />
            <span>Up to QAR {filters.priceRange[1]}</span>
          </div>
          <div className="filter-section">
            <h3>Storage</h3>
            <select name="storage" onChange={handleFilterChange}>
              <option value="">All Storage</option>
              <option value="32 GB">32 GB</option>
              <option value="64 GB">64 GB</option>
              <option value="128 GB">128 GB</option>
              <option value="256 GB">256 GB</option>
              <option value="512 GB">512 GB</option>
              <option value="1 TB">1 TB</option>
            </select>
          </div>
          <button className="apply-filters" onClick={filterProducts}>Search</button>
        </div>
        <div className="product-list">
          <button className="filter-button mobile" onClick={toggleFilters}>🔍 Filters</button>
          {filteredProducts.map((product) => (
            <div key={product.id} className="product">
              {product.discount && <span className="discount-tag">{product.discount}%</span>}
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">
                <span className="current-price">QAR {product.price}</span>
                {product.originalPrice && <span className="original-price">QAR {product.originalPrice}</span>}
              </p>
              <button 
                className="add-to-cart" 
                onClick={() => handleAddToCart(product)} 
              >
                Add to Cart
              </button>
              <span 
                className={`like-icon ${likedProducts[product.id] ? 'liked' : ''}`} 
                onClick={() => toggleLike(product.id)}
              >
                &#9829;
              </span>
            </div>
          ))}
          {filteredProducts.length === 0 && (
            <p className="no-products">No products found matching your criteria.</p>
          )}
        </div>
      </div>
      <SwiperComponent />
      <Footer />
    </div>
  );
};

export default Product;