import React, { Suspense, lazy} from "react";
import ReactDOM from "react-dom/client";
//import App from "./App";
const App = lazy(() => import('./App'));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<h1>Loading...</h1>}>
      <App />
    </Suspense>
  </React.StrictMode>
);
