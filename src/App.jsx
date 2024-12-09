import './App.css';
import ReactMemo from "./components/ReactMemo";
import NotReactMemo from "./components/NotReactMemo";
import UseMemo from "./components/UseMemo";
import NotUseMemo from "./components/NotUseMemo";
import UseCallback from "./components/UseCallback";
import NotUseCallback from "./components/NotUseCallback";
import NotUseMemoInCallback from "./components/NotUseMemoInCallback";


function App() {
    return (
        <div className="App">

            {/*<ReactMemo/>*/}
            {/*<NotReactMemo/>*/}

            {/*<UseMemo />*/}
            {/*<NotUseMemo />*/}

            <UseCallback />
            <NotUseCallback />
            <NotUseMemoInCallback />

        </div>
    );
}

export default App;
