import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Pages */
import Menu from './components/Menu';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Site_List from './pages/Site_List';
// Epuipment Type Pages
import Carrick_Equip_Types from './pages/Equipment_Types/Carrick';
import Kilkenny_Equip_Types from './pages/Equipment_Types/Kilkenny';
import Waterford_Equip_Types from './pages/Equipment_Types/Waterford';
// Equipment Data Pages
import Carrick_Equip_Data_Inputs from './pages/Equipment_Data_Input/Carrick';
import Kilkenny_Equip_Data_Inputs from './pages/Equipment_Data_Input/Kilkenny';
import Waterford_Equip_Data_Inputs from './pages/Equipment_Data_Input/Waterford';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/page/:name" component={Home} exact />
            <Route path="/page/Home" component={Home} exact />
            <Route path="/page/Login" component={Login} exact />
            <Route path="/page/Register" component={Register} exact />
            <Route path="/page/Site_List" component={Site_List} exact />
            {/* Equipment Type Pages Links */}
            <Route path="/page/Carrick_Equip_Types" component={Carrick_Equip_Types} exact />
            <Route path="/page/Kilkenny_Equip_types" component={Kilkenny_Equip_Types} exact />
            <Route path="/page/Waterford_Equip_Types" component={Waterford_Equip_Types} exact />
            {/* Equipment Data Inputs Pages */}
            <Route path="/page/Carrick_Equip_Data" component={Carrick_Equip_Data_Inputs} exact />
            <Route path="/page/Kilkenny_Equip_Data" component={Kilkenny_Equip_Data_Inputs} exact />
            <Route path="/page/Waterford_Equip_Data" component={Waterford_Equip_Data_Inputs} exact />
            <Redirect from="/" to="/page/Home" exact />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
