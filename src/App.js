import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import Routes from "./routes";
import client from "./api";
import "./App.css"

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
