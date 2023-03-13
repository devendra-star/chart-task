
import './App.css'
import ScatterPlot from './components/ScatterPlot'
import data from './components/data'
import BarChart from './components/BarChart'
function App() {

  return (
    <div className="App">
      <ScatterPlot data={data} />
      <BarChart data={data} />

    </div>
  )
}

export default App
