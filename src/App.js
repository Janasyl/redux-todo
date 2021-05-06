
import './App.css';

function App {
  const dispatch = useDispatch();
  const items = useSelector(state => state);

  function onAddCallback(event)
}

function App() {
  return (
    <div className="App">
      <h1>Redux Input example</h1>

      <form>
        <input type="text"  name="text"placeholder="Please your text" required/>
        <button>Add</button>
      </form>
    </div>
  );
}

export default App;
