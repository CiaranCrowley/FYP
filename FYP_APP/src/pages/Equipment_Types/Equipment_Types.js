import { IonButtons, IonCard, IonCardHeader, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';

export var Site_Name;

const Equipment_Types = () => {

	/**
	 * 	? What does this page need to do?
	 * 	* It needs to display some come cards which will allow the user to click on a card and be taken =>
	 *    * to the page where each entry of that equipment type, located in that site, is displayed.
	 * 
	 *    ? How?
	 *    * Get Site Name with useParams and store it in a variable and export it.
	 */

	// TODO: Find a way around this.  Not good to have this hard coded
	const motor_data = 'Motor';
	const pump_data = 'Pump';
	const flow_meter_data = 'Flow Meter';
	const { siteName } = useParams();
	Site_Name = siteName; // Applies siteName to the global variable Site_Name
	
	/**
	 *		* Source: https://medium.com/@mertgursoy/how-to-refresh-a-page-only-once-with-javascript-cdbaf079fc73
	 */
	function reloadPage() {
		var currentDocumentTimestamp =
			new Date(performance.timing.domLoading).getTime();
		// Current Time
		var now = Date.now();
		// Ten Seconds
		var tenSec = 10 * 1000;
		// Plus Ten Seconds
		var plusTenSec = currentDocumentTimestamp + tenSec;
		if (now > plusTenSec) {
			window.location.reload();
		} else { }
	}
	reloadPage();

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Equipment Types {siteName}</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent className="ion-padding" fullscreen>

				<IonCard routerLink="/page/Create_Data">
					<IonCardHeader>Add new Data</IonCardHeader>
				</IonCard>

				<IonCard routerLink='/page/Display_All_In_Site'>
					<IonCardHeader>View All Equipment Types</IonCardHeader>
				</IonCard>

				{/* The following cards only navigate to the pages dedicated to each equip type */}
				<IonCard routerLink={`/page/Display_Data/${flow_meter_data}`}>
					<IonCardHeader>View Flow Meters</IonCardHeader>
				</IonCard>

				<IonCard routerLink={`/page/Display_Data/${motor_data}`}>
					<IonCardHeader>View Motors</IonCardHeader>
				</IonCard>

				<IonCard routerLink={`/page/Display_Data/${pump_data}`}>
					<IonCardHeader>View Pumps</IonCardHeader>
				</IonCard>

			</IonContent>

		</IonPage>
	);
}

export default Equipment_Types;