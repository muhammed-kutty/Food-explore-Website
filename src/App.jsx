import './App.css';
import Layout from './LayoutRoutes/LayoutRoutees'
import {AppProvider} from './Context/AppProvider'
import {AllMenus} from './components/allmenuContext/AllmenuContext'


function App() {
  return (
    <>
    <AppProvider>
    <AllMenus>
      <Layout />
    </AllMenus>
    </AppProvider>
    
    
    </>
  );
}

export default App;
