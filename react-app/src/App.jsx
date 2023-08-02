
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sidebar from './component/Sidebar'
import Header from './component/Header'
import Content from './component/Content'
import HeaderMobile from './component/HeaderMobile'
import Edit from './component/Edit';

function App() {

  return (
    <>
      <Sidebar />
      <div className="relative w-full flex flex-col h-screen overflow-y-hidden">
        <Header />
        <HeaderMobile />
        <BrowserRouter>
          <Switch>
            <Route exact path="/profile"> 
              <Content />
            </Route>
            <Route path="/profile/:view"> 
              <Content />
            </Route>
            <Route path="/edit"> 
              <Edit />
            </Route>
          </Switch>
          
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
