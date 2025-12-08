import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
    return (
        <div className="app">
            <Header></Header>
            <Hero>
                <h1 className="text-2xl text-green-500">Hero Component</h1>
            </Hero>
        </div>
    )
}

export default App;