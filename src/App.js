import BookList from './components/book/BookList';
import BookDetail from './components/book/BookDetail';
import './App.css';
import { Route, Switch } from 'react-router-dom';


function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <Switch>
        <Route path="/books/:id" component={BookDetail} />
        <Route path="/books" component={BookList} />
      </Switch>
    </main>
  );
}

export default App;
