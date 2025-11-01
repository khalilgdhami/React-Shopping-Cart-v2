import { useState } from 'react';
import Article from './arctic';
import Cart from './cart';

function App() {
  const articles = [
    {
      id: 1,
      artic: 'banan',
      desctription: 'Fresh yellow bananas',
      prix: 20,
      img: 'https://images.apollo247.in/pd-cms/cms/2025-05/AdobeStock_299290543.webp?tr=q-80,f-webp,w-400,dpr-2.5,c-at_max%201000w',
    },
    {
      id: 2,
      artic: 'pom de tair',
      desctription: 'Organic potatoes',
      prix: 15,
      img: 'https://img-3.journaldesfemmes.fr/ZfmzxO5Kyg0e3j1URh4V8Mf3slc=/1500x/smart/097777a79f144a048f7008573f8584d5/ccmcms-jdf/27424516.jpg',
    },
    {
      id: 3,
      artic: 'glasses',
      desctription: 'Stylish reading glasses',
      prix: 50,
      img: 'https://optimaxweb.glassesusa.com/image/upload/f_auto,q_auto:eco/ms/media/catalog_product/1/58-000016_f.jpg/h=310,w=620,fit=fill,bg=fff',
    },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (article) => {
    setCart((prev) => [...prev, article]);
  };

  const removeFromCart = (index) => {
    setCart((prev) => {
      const newCart = [];
      for (let i = 0; i < index; i++) newCart.push(prev[i]);
      for (let i = index + 1; i < prev.length; i++) newCart.push(prev[i]);
      return newCart;
    });
  };

  const isInCart = (article) => cart.some(c => c.id === article.id);

  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">Store</h1>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {articles.map((article) => (
          <div key={article.id} className="col">
            <Article
              article={article}
              addToCart={addToCart}
              isInCart={isInCart(article)}
            />
          </div>
        ))}
      </div>

      <div className="mt-5">
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
}

export default App;