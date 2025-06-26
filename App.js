import { Provider } from "react-redux";
import Router from "./src/routers/router";
import { persistor, store } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Router />;
      </PersistGate>
    </Provider>
  );
}
