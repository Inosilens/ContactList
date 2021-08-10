
import './App.css';
import {store} from "../store";
import {Provider} from "react-redux";
import {Redirect, Route} from "react-router";
import {ContactList} from "../components/contactList";
import {BrowserRouter} from "react-router-dom";
import {ContactInfo} from "../components/contactInfo";
import ChangePerson from "../components/changePerson";

function App() {


  return (
      <BrowserRouter>
      <Provider store={store}>
       <div className="App">
           <Route path="/list" component={ContactList}/>
           <Route path="/info" component={ContactInfo}/>
           <Route path="/change" component={ChangePerson}/>
           <Redirect from="/" to="/list"/>
       </div>
     </Provider>
      </BrowserRouter>

  );
}

export default App;
