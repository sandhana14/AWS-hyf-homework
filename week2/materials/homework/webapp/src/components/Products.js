import useProducts from "../hooks/useProducts";
import useNotifications from "../hooks/useNotification";

function Products() {
  const { products, cart, addProduct, removeProduct, calculateSum } =
    useProducts();

  const { notifications, createNotification } = useNotifications();

  const isInCart = (product) => {
    return !cart.find((item) => item.id === product.id);
  };

  return (
    <div>
      <div className="row">
        {products.map((product) => {
          return (
            <div className="card col-md-4" key={product.id}>
              <div className="text-center">
                <img style={{ width: "400px" }} src={product.imageURL} />
              </div>
              <div className="card-body">
                <h2>{product.name}</h2>

                <p className="card-text">{product.description}</p>
                <p>
                  <strong>
                    price: {product.price} {product.currency}
                  </strong>
                </p>
                {isInCart(product) && (
                  <button
                    onClick={() => addProduct(product)}
                    className="btn btn-primary"
                  >
                    Select
                  </button>
                )}
                {!isInCart(product) && (
                  <button
                    onClick={() => removeProduct(product)}
                    className="btn btn-danger"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <form>
        <div className="form-group mt-4 col-md-4">
          <p className="mt-4">You will be charged: {calculateSum()}</p>

          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <button
          type="submit"
          className="btn btn-primary mt-3"
          onClick={(e) => {
            e.preventDefault();
            createNotification('"Thanks for buying products from our website"');
          }}
        >
          Buy now
        </button>
        <br />
        <br />
        <h4 className="text-success">{notifications}</h4>
      </form>
    </div>
  );
}

export default Products;
