import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ApolloProvider } from "@apollo/client";
import Routes from "./routes";
import client from "./api";
import store from "./state";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <ToastContainer />
          <Routes />
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
