import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/typography.css';
import { Redirect, Route } from 'react-router-dom';
/* Pages */
import Menu from './components/Menu';
// Equipment Data Input Pages
import Carrick_Equip_Data_Inputs from './pages/Equipment_Data_Input/Carrick';
import Kilkenny_Equip_Data_Inputs from './pages/Equipment_Data_Input/Kilkenny';
import Waterford_Equip_Data_Inputs from './pages/Equipment_Data_Input/Waterford';
// Equipment Read Pages
import Carrick_All from './pages/Equipment_Read/Carrick/All';
import Carrick_FlowMeters from './pages/Equipment_Read/Carrick/FlowMeters';
import Carrick_Motors from './pages/Equipment_Read/Carrick/Motors';
import Carrick_Pumps from './pages/Equipment_Read/Carrick/Pumps';
import Kilkenny_All from './pages/Equipment_Read/Kilkenny/All';
import Kilkenny_FlowMeters from './pages/Equipment_Read/Kilkenny/FlowMeters';
import Kilkenny_Motors from './pages/Equipment_Read/Kilkenny/Motors';
import Kilkenny_Pumps from './pages/Equipment_Read/Kilkenny/Pumps';
import Waterford_All from './pages/Equipment_Read/Waterford/All';
import Waterford_FlowMeters from './pages/Equipment_Read/Waterford/FlowMeters';
import Waterford_Motors from './pages/Equipment_Read/Waterford/Motors';
import Waterford_Pumps from './pages/Equipment_Read/Waterford/Pumps';
// Equipment Edit Page
import Edit_Data from './pages/Equip_Data_Edit';
// Epuipment Type Pages
import Carrick_Equip_Types from './pages/Equipment_Types/Carrick';
import Kilkenny_Equip_Types from './pages/Equipment_Types/Kilkenny';
import Waterford_Equip_Types from './pages/Equipment_Types/Waterford';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Site_List from './pages/Site_List';
/* Theme variables */
import './theme/variables.css';

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
						{/* Equipment Read Pages */}
						<Route path="/page/Carrick_All" component={Carrick_All} exact />
						<Route path="/page/Carrick_FlowMeters" component={Carrick_FlowMeters} exact />
						<Route path="/page/Carrick_Motors" component={Carrick_Motors} exact />
						<Route path="/page/Carrick_Pumps" component={Carrick_Pumps} exact />
						<Route path="/page/Kilkenny_All" component={Kilkenny_All} exact />
						<Route path="/page/Kilkenny_FlowMeters" component={Kilkenny_FlowMeters} exact />
						<Route path="/page/Kilkenny_Motors" component={Kilkenny_Motors} exact />
						<Route path="/page/Kilkenny_Pumps" component={Kilkenny_Pumps} exact />
						<Route path="/page/Waterford_All" component={Waterford_All} exact />
						<Route path="/page/Waterford_FlowMeters" component={Waterford_FlowMeters} exact />
						<Route path="/page/Waterford_Motors" component={Waterford_Motors} exact />
						<Route path="/page/Waterford_Pumps" component={Waterford_Pumps} exact />
						{/* Equipment Edit Page */}
						<Route path="/page/Equip_Edit/:id"><Edit_Data></Edit_Data></Route>
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
