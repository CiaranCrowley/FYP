import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './styles.css';

const Site_List: React.FC = () => {

	// ! Temporary
	// TODO: Find a way around this.  Not good to have this hard coded
	const carrick = "Carrick-on-Suir";
	const Kilkenny = "Kilkenny";
	const waterford = "Waterford";

	/**
	 * 	? What does this page need to do?
	 * 	* It needs to display some info on each Site and navige to the Equipment_Types display for each site
	 */

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Site List</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent className="ion-padding" fullscreen>

				<IonCard routerLink={`/page/Equip_Types/${carrick}`} >
					<img alt="" src="https://i.imgur.com/iBVlQ4h.png" />
					<IonCardHeader>
						<IonCardTitle>Carrick-on-Suir</IonCardTitle>
					</IonCardHeader>
					<IonCardContent>
						Water Treatment Site in Carrick-on-Suir
					</IonCardContent>
				</IonCard>

				<IonCard routerLink={`/page/Equip_Types/${Kilkenny}`}>
					<img alt="" src="https://i.imgur.com/HSPaGNN.png" />
					<IonCardHeader>
						<IonCardTitle>Kilkenny</IonCardTitle>
					</IonCardHeader>
					<IonCardContent>
						Water Treatment site in Waterford
					</IonCardContent>
				</IonCard>

				<IonCard routerLink={`/page/Equip_Types/${waterford}`}>
					<img alt="" src="https://i.imgur.com/OA8JArQ.png" />
					<IonCardHeader>
						<IonCardTitle>Waterford</IonCardTitle>
					</IonCardHeader>
					<IonCardContent>
						Water treatment site in Kilkenny
					</IonCardContent>
				</IonCard>

			</IonContent>
			
		</IonPage>
	);
};

export default Site_List;
