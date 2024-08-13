
//import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailsContainer from './components/ItemDetailsContainer'
import Error404 from './components/Error404'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
  
        <BrowserRouter>
        
            <NavBar/>
            <Routes>
              <Route path="/" element={<ItemListContainer greeting="Hola"/>}/>
              <Route path="/category/:id" element={<ItemListContainer />}/>
              <Route path="/item/:id" element={<ItemDetailsContainer />}/>
              <Route path="*" element={<Error404 />}/>
            </Routes>
        </BrowserRouter>

    </>
  )
}

export default App
