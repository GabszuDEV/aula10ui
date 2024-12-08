import Header from "./components/header";
import ListrTarefa from "./pages/tarefa/ListarTarefa";
git commit -m "first commit"import { Drawer } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Header />
      <ListrTarefa />
      <Drawer/>
    </div>
  );
}

export default App;


