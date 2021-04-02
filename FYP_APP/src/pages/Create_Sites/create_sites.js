import {
	IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonItemGroup, IonLabel, IonList, IonMenuButton, IonPage, IonRow,
	IonTitle, IonToolbar
} from '@ionic/react';
import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import firebase from '../../firebaseConfig';
import './style.css';

const Create_Sites = () => {

	/**
	 * 	? What does this page need to do?
	 * 	* It needs to allow the user to create a new site
	 */

	const ref = firebase.firestore().collection('Sites');

	const [siteName, setSiteName] = useState("");
	const [contact, setContact] = useState("");
	const [manager, setManager] = useState("");
	const [address, setAddress] = useState("");

	function submit(newData) {
		ref
			.doc(newData.id)
			.set(newData)
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonGrid>
						<IonRow class="ion-nowrap">
							<IonCol>
								<IonTitle>Add a new Site</IonTitle>
							</IonCol>
							<IonCol size="12" offset='0.2'>
								<button className="submitBtn" onClick={() => submit({ siteName, contact, manager, address, id: uuidv4() })}>Submit</button>
							</IonCol>
						</IonRow>
					</IonGrid>
				</IonToolbar>
			</IonHeader>

			<IonContent className="ion-padding" fullscreen>
				<IonList>
					<IonItemGroup>
						<IonItem>
							<IonLabel>Site Name</IonLabel>
							<IonInput placeholder="Carrick-on-Site" value={siteName} onIonChange={(e) => setSiteName(e.target.value)}></IonInput>
						</IonItem>
						<IonItem>
							<IonLabel>Contact</IonLabel>
							<IonInput placeholder="12345678" value={contact} onIonChange={(e) => setContact(e.target.value)}></IonInput>
						</IonItem>
						<IonItem>
							<IonLabel>Manager</IonLabel>
							<IonInput placeholder="Ciaran" value={manager} onIonChange={(e) => setManager(e.target.value)}></IonInput>
						</IonItem>
						<IonItem>
							<IonLabel>Address</IonLabel>
							<IonInput placeholder="Carrick-on-Suir" value={address} onIonChange={(e) => setAddress(e.target.value)}></IonInput>
						</IonItem>
					</IonItemGroup>
				</IonList>
			</IonContent>

		</IonPage>
	)
}

export default Create_Sites;