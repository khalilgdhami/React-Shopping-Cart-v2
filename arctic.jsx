function Article({ article, addToCart, isInCart }) {
  return (
    <div className={`card h-100 shadow-sm ${isInCart ? 'border-success' : ''}`}>
      <img
        src={article.img}
        className="card-img-top"
        alt={article.artic}
        style={{ height: '200px', objectFit: 'cover' }}
      />

      <div className="card-body position-relative d-flex flex-column">
        <h5 className="card-title">{article.artic}</h5>
        <p className="card-text text-muted flex-grow-1">{article.desctription}</p>
        <p className="card-text fw-bold">Price: ${article.prix}</p>

        <button
          className="btn btn-success btn-sm position-absolute top-0 end-0 m-2"
          onClick={() => addToCart(article)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Article;