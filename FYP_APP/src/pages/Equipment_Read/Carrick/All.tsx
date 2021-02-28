import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect } from 'react';
import firebase from '../../../firebaseConfig' 

const Carrick_All: React.FC = () => {

	// Gets objects from Database and logs them to console
	useEffect(() => {
		const dataRef = firebase.database().ref("data")
		dataRef.on("value", (snapshot) => {
			console.log(snapshot.val())
		})
	}, [])

	return (
		<IonPage>

			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>All Carrick</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>

			</IonContent>
			
		</IonPage>
	);
};

export default Carrick_All;