import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import carga from './carga';
import principal from './principal';
import login from './Login';
import registro from './registro';
import plantas from './plantas';
import interactua from './interactua';
import interactua2 from './interactua2';
import menu from './menu';
import menu2 from './menu2';
import crear from './crear';
import cuida from './cuida';
import usuario from './usuario';
import recupera from './recupera';
import notirec from './notirec';
import notirec2 from './notirec2';
import plantas2 from './plantas2';
import plantas3 from './plantas3';
import plantas4 from './plantas4';
import plantas5 from './plantas5';
import plantas6 from './plantas6';
import plantas7 from './plantas7';
import plantas8 from './plantas8';
import plantas9 from './plantas9';
import plantas10 from './plantas10';
import plantas11 from './plantas11';

const App=()=> {
  return (
<BrowserRouter>

<Route exact path='/' component={carga}/>
<Route exact path='/principal' component={principal}/>
<Route exact path='/login' component={login}/>
<Route exact path='/registro' component={registro}/>
<Route exact path='/plantas' component={plantas}/>
<Route exact path='/interactua' component={interactua}/>
<Route exact path='/menu' component={menu}/>
<Route exact path='/interactua2' component={interactua2}/>
<Route exact path='/menu2' component={menu2}/>
<Route exact path='/crear' component={crear}/>
<Route exact path='/cuida' component={cuida}/>
<Route exact path='/usuario' component={usuario}/>
<Route exact path='/recupera' component={recupera}/>
<Route exact path='/notirec' component={notirec}/>
<Route exact path='/notirec2' component={notirec2}/>
<Route exact path='/plantas2' component={plantas2}/>
<Route exact path='/plantas3' component={plantas3}/>
<Route exact path='/plantas4' component={plantas4}/>
<Route exact path='/plantas5' component={plantas5}/>
<Route exact path='/plantas6' component={plantas6}/>
<Route exact path='/plantas7' component={plantas7}/>
<Route exact path='/plantas8' component={plantas8}/>
<Route exact path='/plantas9' component={plantas9}/>
<Route exact path='/plantas10' component={plantas10}/>
<Route exact path='/plantas11' component={plantas11}/>

</BrowserRouter>
  );
}

export default App;
