import "./App.css";

import Layout from "./components/layout/Layout";
import ContextProvider from "./context/Context";

import AppRoutes from "./routes/AppRoutes";

function App(): JSX.Element {
  return (
    <ContextProvider>
      <Layout>
        <AppRoutes />
      </Layout>
    </ContextProvider>
  );
}

export default App;
