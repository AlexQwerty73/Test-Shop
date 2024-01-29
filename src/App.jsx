import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/';

const App = () => {
  return (
    <>

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index />
        </Route>
      </Routes>

    </>
  );
}

export default App;
