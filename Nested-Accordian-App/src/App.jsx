import Folder from "./components/Folder";
import explorer from "./data";

const App = () => {
  return (
    <div>
      <h2>File Explorer</h2>
      <Folder explorer={explorer} />
    </div>
  );
};

export default App;