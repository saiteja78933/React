import { useContext} from "react";
import { useHistory, useParams } from "react-router-dom";
import { Product as ProductObj} from "../Types/Product";
import "./Product.scss";
import { ApplicationContext } from "../Context/ApplicationContext";
type ProductParamType={
  productId:string;
}
export const Product: React.FC = () => {
  const { products, setSidebar, setCart, cart } =
    useContext(ApplicationContext);
  const { productId } = useParams<ProductParamType>();
  const product = products.find(
    (eachProduct) => eachProduct.id === +productId
  );
  const history = useHistory();
  const handleHistory = () => {
    setSidebar(true);
    history.goBack();
  };

  const handleCart = (product: ProductObj) => {
    const cartList = [...cart];
    const findProduct = cartList.find(
      (eachItem) => eachItem.product.id === product.id
    );
    if (findProduct) {
      findProduct.quantity += 1;
      setCart([...cartList]);
    } else {
      setCart([...cartList, { product, quantity: 1 }]);
    }
  };
 

  if (!product) {
    return <div></div>;
  }

  return (
    <div className="product">
      <div className="back-button" onClick={handleHistory}>
        <button>← go-back</button>
      </div>
      <div className="display-container">
        <div className="images-container">
          <img src={product.images[0]} className="main-image" />
        </div>
        <div className="text-container">
          <p className="heading">Product Details</p>
          <p>Id : {product.id}</p>
          <p>Title : {product.title}</p>
          <p>Description : {product.description}</p>
          <p>Price : {product.price}</p>
          <button
            onClick={() => 
              handleCart(product)
            }
          >
            Add To cart
          </button>{" "}
        </div>
      </div>
    </div>
  );
};