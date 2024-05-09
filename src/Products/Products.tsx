import "./Products.scss";
import { Product } from "../Types/Product";
import { ApplicationContext } from "../Context/ApplicationContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
const Products: React.FC = () => {
  const { products, setSidebar, setCart, cart } =
    useContext(ApplicationContext);
  const [tempProducts, setTempProducts] = useState(products);
  const handleAddToCart = (product: Product) => {
    const cartList = [...cart];
    const find = cartList.find(
      (eachItem) => eachItem.product.id === product.id
    );

    if (find) {
      find.quantity += 1;
      setCart([...cartList]);
    } else {
      setCart([...cartList, { product, quantity: 1 }]);
    }
  };
  const handleSearch = (search: string) => {
    const temp = products.filter((product) => {
      return product.title.toLowerCase().includes(search.toLowerCase());
    });
    setTempProducts(temp);
  };
  return (
    <div className="product-list">
      <input type="text" onChange={(e) => handleSearch(e.target.value)} placeholder={"search products by name"}/>
      <div className="products-container">
        {tempProducts.map((eachProduct) => {
          return (
            <div key={eachProduct.id}>
              <Link
                to={`/products/${eachProduct.id}`}
                onClick={() => setSidebar(false)}
                className="link-text"
              >
                <div className="product">
                  <div>
                    <img src={eachProduct.images[0]} className="prod-image" />
                  </div>
                  <div>
                    <p>Name: {eachProduct.title}</p>
                    <p>Description: {eachProduct.description}</p>
                    <p>Price: ₹{eachProduct.price}</p>
                    <button
                      className="cart-button"
                      onClick={(e) => {
                        handleAddToCart(eachProduct);
                        e.preventDefault();e.stopPropagation();
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
