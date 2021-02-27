import { IonButton, IonButtons, IonContent, IonHeader, IonItem, IonItemGroup, IonLabel, IonList, IonListHeader, IonCard, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCardHeader } from '@ionic/react';
import React, { useState } from 'react';

const Waterford_Equip_Types: React.FC = () => {
	return (
		<IonPage>

			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Equipment Types</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				
				{/* routerLink="/page/Carrick_All_Data" */}
				<IonCard>
					<IonCardHeader>All Equipment Types</IonCardHeader>
				</IonCard>
				
				{/* routerLink="/page/Carrick_Motor_Data" */}
				<IonCard>
					<IonCardHeader>Motors</IonCardHeader>
				</IonCard>

				{/* routerLink="/page/Carrick_Pump_Data" */}
				<IonCard>
					<IonCardHeader>Pumps</IonCardHeader>
				</IonCard>

				{/* routerLink="/page/Carrick_FlowMeter_Data" */}
				<IonCard>
					<IonCardHeader>Flow Meters</IonCardHeader>
				</IonCard>

			</IonContent>
			
		</IonPage>
	);
};

export default Waterford_Equip_Types;