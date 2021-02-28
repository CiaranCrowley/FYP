import { IonButtons, IonContent, IonHeader, IonCard, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCardHeader } from '@ionic/react';
import React from 'react';

const Kilkenny_Equip_Types: React.FC = () => {
	return (
		<IonPage>

			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Kilkenny Equipment Types</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				
				<IonCard routerLink="/page/Kilkenny_All">
					<IonCardHeader>All Equipment Types</IonCardHeader>
				</IonCard>
				
				<IonCard routerLink="/page/Kilkenny_Motors">
					<IonCardHeader>Motors</IonCardHeader>
				</IonCard>

				<IonCard routerLink="/page/Kilkenny_Pumps">
					<IonCardHeader>Pumps</IonCardHeader>
				</IonCard>

				<IonCard routerLink="/page/Kilkenny_FlowMeters">
					<IonCardHeader>Flow Meters</IonCardHeader>
				</IonCard>

			</IonContent>
			
		</IonPage>
	);
};

export default Kilkenny_Equip_Types;