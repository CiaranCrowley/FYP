import { IonButtons, IonContent, IonHeader, IonCard, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCardHeader } from '@ionic/react';
import React from 'react';

const Carrick_Equip_Types: React.FC = () => {
	return (
		<IonPage>

			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Carrick Equipment Types</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				
				<IonCard routerLink="/page/Carrick_All">
					<IonCardHeader>All Equipment Types</IonCardHeader>
				</IonCard>

				<IonCard routerLink="/page/Carrick_FlowMeters">
					<IonCardHeader>Flow Meters</IonCardHeader>
				</IonCard>

				<IonCard routerLink="/page/Carrick_Motors">
					<IonCardHeader>Motors</IonCardHeader>
				</IonCard>

				<IonCard routerLink="/page/Carrick_Pumps">
					<IonCardHeader>Pumps</IonCardHeader>
				</IonCard>

			</IonContent>
			
		</IonPage>
	);
};

export default Carrick_Equip_Types;