import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Carrick_All: React.FC = () => {
	return (
		<IonPage>

			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>All Waterford</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>

			</IonContent>
			
		</IonPage>
	);
};

export default Carrick_All;