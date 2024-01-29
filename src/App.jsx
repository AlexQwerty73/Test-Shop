import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/';
import { HomePage } from './pages';

const App = () => {
  return (
    <>

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index  element={<HomePage />}/>
        </Route>
      </Routes>

    </>
  );
}

export default App;
