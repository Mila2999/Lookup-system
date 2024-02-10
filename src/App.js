import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import classes from './App.module.css';
function App() {
  return (
    <div className={classes.container}>
      <div className={classes.childContainer}>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
