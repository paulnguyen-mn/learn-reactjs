import counterReducer from '../features/Counter/counterSlice';
const { configureStore } = require('@reduxjs/toolkit');

const rootReducer = {
  count: counterReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
