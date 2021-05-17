import {Switch, Route} from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Dash from './Components/Dash/Dash';
import Form from './Components/Form/Form';
import Post from './Components/Post/Post';

export default Component Switch {
  <Switch>
  <Route exact path= '/' component = {Auth} />
  <Route path='/dash' component = {Dash} />
  <Route path= '/post/:id' component = {Post} />
  <Route path= '/form' component= {Form} />
  </Switch>

}