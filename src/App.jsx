import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { tick } from "./store";
import Main from "./components/Main";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const id = setInterval(() => {
      dispatch(tick());
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  return <Main />;
}

export default App;
