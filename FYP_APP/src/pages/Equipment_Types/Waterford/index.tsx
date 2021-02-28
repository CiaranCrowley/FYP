import { IonButtons, IonContent, IonHeader, IonCard, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCardHeader } from '@ionic/react';
import React from 'react';

const Waterford_Equip_Types: React.FC = () => {
	return (
		<IonPage>

			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Waterford Equipment Types</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				
				<IonCard routerLink="/page/Waterford_All">
					<IonCardHeader>All Equipment Types</IonCardHeader>
				</IonCard>
				
				<IonCard routerLink="/page/Waterford_Motors">
					<IonCardHeader>Motors</IonCardHeader>
				</IonCard>

				<IonCard routerLink="/page/Waterford_Pumps">
					<IonCardHeader>Pumps</IonCardHeader>
				</IonCard>

				<IonCard routerLink="/page/Waterford_FlowMeters">
					<IonCardHeader>Flow Meters</IonCardHeader>
				</IonCard>

			</IonContent>
			
		</IonPage>
	);
};

export default Waterford_Equip_Types;