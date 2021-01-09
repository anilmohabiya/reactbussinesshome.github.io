import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';

import Navbar from './Navbar';
import {Switch,Route, Redirect} from 'react-router-dom';
import Contact from './Contact';
import OurTeam from './OurTeam';
import Services from './Services';
const App =()=>{

return(
<>
<Navbar />
<Switch>
<Route exact path="/" component={Home} />
<Route exact path="/contact" component={Contact} />
<Route exact path="/ourteam" component={OurTeam} />
<Route exact path="/services" component={Services} />

<Redirect to ="/" />
</Switch>


</>


  );
};
export default App;
