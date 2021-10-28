
import CartList from './components/CartList';
import Products from './components/Products';
import GlobalStyle from './styles/global'

function App() {
  
  return (
      <>
        <GlobalStyle />
        <h1>Produtos</h1>
        <Products />
        <h1>Carrinho</h1>
        <CartList />
      </>
  );
}

export default App;
