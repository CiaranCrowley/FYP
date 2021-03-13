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
import React, { lazy, Suspense } from "react";
import { Redirect, Route } from 'react-router-dom';
/* Menu */
import Menu from './components/Menu';
/* Theme variables */
import './theme/variables.css';

// * Pages
const Home = lazy(() => import('./pages/Home'));
const Edit_Data = lazy(() => import('./pages/Equip_Data_Edit'));	// Equipment Edit Page
const Login = lazy(() => import('./pages/Login'));				// Login page
const Register = lazy(() => import('./pages/Register'));		// Register page
const Site_List = lazy(() => import('./pages/Site_List'));	// Site List
const Equip_Types = lazy(() => import('./pages/Equipment_Types/Equipment_Types'));	//Equipment Types page
const Display_All_In_Site = lazy(() => import('./pages/Display_Data/Display_All_In_Site'));		//Display all data entries in a given site page
const Display_Data_In_Site = lazy(() => import('./pages/Display_Data/Display_Data_In_Site'));	//Display all entries of a desired equipment type in a given site page
const Create_Data = lazy(() => import('./pages/Create_Data/Create_Data'));

const App: React.FC = () => {
	return (
		<IonApp>
			<Suspense fallback={<h1>Loading Page</h1>}>
				<IonReactRouter>
					<IonSplitPane contentId="main">
						<Menu />
						<IonRouterOutlet id="main">
							<Route path="/page/:name" component={Home} exact />
							<Route path="/page/Home" component={Home} exact />
							<Route path="/page/Login" component={Login} exact />
							<Route path="/page/Register" component={Register} exact />
							<Route path="/page/Site_List" component={Site_List} exact />

							{/* Equipment Edit Page */}
							<Route path="/page/Equip_Edit/:id" component={Edit_Data} exact />
							
							{/* This route allows the user to navigate from Site List to Equip_Types based on Site Name */}
							<Route path="/page/Equip_Types/:siteName" component={Equip_Types} exact />

							{/* This route allows users to navigate from Equip_Types to the Display All page to view all of the Equipment in a specific site for All site */}
							<Route path="/page/Display_All_In_Site" component={Display_All_In_Site} exact />

							{/* This route allows users to navige from Equip_Types to the Display page to view the desired Equipment Type in a specific site for ALL sites */}
							<Route path="/page/Display_Data/:equipType" component={Display_Data_In_Site} exact />
							
							{/* New Create Data Page */}
							<Route path="/page/Create_Data" component={Create_Data} exact />

							<Redirect from="/" to="/page/Home" exact />
						</IonRouterOutlet>
					</IonSplitPane>
				</IonReactRouter>
			</Suspense>
		</IonApp>
	);
};

export default App;
