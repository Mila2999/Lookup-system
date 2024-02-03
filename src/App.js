import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import classes from './App.css';
function App() {
  return (
    <div className={classes.container}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
