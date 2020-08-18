import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

import thunk from "redux-thunk";
import rootReducers from "./reducers/index";

const store = createStore(rootReducers, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
