import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonImg, IonItem, IonList, IonMenuButton, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import './styles.css';

const Site_List: React.FC = () => {

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

			<IonContent fullscreen>

				<IonCard routerLink="/page/Carrick_Equip_Data">
					<img alt="" src="https://i.imgur.com/iBVlQ4h.png" />
					<IonCardHeader>
						<IonCardTitle>Carrick-on-Suir</IonCardTitle>
					</IonCardHeader>
					<IonCardContent>
						Water Treatment Site in Carrick-on-Suir
					</IonCardContent>
				</IonCard>

				<IonCard routerLink="/page/Kilkenny_Equip_Data">
					<img alt="" src="https://i.imgur.com/HSPaGNN.png" />
					<IonCardHeader>
						<IonCardTitle>Kilkenny</IonCardTitle>
					</IonCardHeader>
					<IonCardContent>
						Water Treatment site in Waterford
					</IonCardContent>
				</IonCard>

				<IonCard routerLink="/page/Waterford_Equip_Data">
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
