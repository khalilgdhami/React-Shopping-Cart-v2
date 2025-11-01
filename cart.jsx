function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, it) => sum + it.prix, 0);

  return (
    <div className="card shadow">
      <div className="card-header bg-primary text-white">
        <h2 className="h5 mb-0">Panier (Cart)</h2>
      </div>
      <div className="card-body">
        {cart.length === 0 ? (
          <p className="text-muted">Your cart is empty</p>
        ) : (
          <>
            <ul className="list-group list-group-flush">
              {cart.map((item, idx) => (
                <li
                  key={idx}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span>
                    {item.artic} – ${item.prix}
                  </span>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromCart(idx)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-3 text-end">
              <strong>Total: ${total}</strong>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;