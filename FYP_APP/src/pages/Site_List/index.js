import {
	IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonLoading, IonMenuButton,
	IonPage, IonRow, IonTitle, IonToolbar
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import firebase from '../../firebaseConfig';
import './styles.css';


const Site_List = () => {

	/**
	 * 	? What does this page need to do?
	 * 	* It needs to display some info on each Site and navige to the Equipment_Types display for each site
	 */

	const [siteList, setSiteList] = useState([]);
	const [busy, setBusy] = useState(false);
	const ref = firebase.firestore().collection("Sites");

	/**
	* 	* Gets Data:
	* 	* https://github.com/samfromaway/firebase-tutorial/blob/master/src/SnapshotFirebase.js
	*/
	function getData() {
		setBusy(true);
		ref.onSnapshot((querySnapshot) => {
			const items = [];
			querySnapshot.forEach((doc) => {
				items.push(doc.data());
			});
			setSiteList(items);
			setBusy(false);
		});
	}

	useEffect(() => {
		getData();
	}, []);

	if (busy) {
		return (
			<IonPage>
				<IonLoading isOpen={busy}></IonLoading>
			</IonPage>
		);
	}

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
				{siteList.map((data) => (
					<IonCard routerLink={`/page/Equip_Types/${data.siteName}`} >
						<img alt="" src={data.image} />
						<IonGrid>
							<IonRow class="ion-nowrap">
								<IonCol size="4">
									<IonCardHeader>
										<IonCardTitle>{data.siteName}</IonCardTitle>
									</IonCardHeader>
								</IonCol>
								<IonCol size="4">
									<IonCardHeader>
										<IonCardTitle>Manager: {data.manager}</IonCardTitle>
									</IonCardHeader>
								</IonCol>
							</IonRow>
							<IonRow class="ion-nowrap">
								<IonCol size="4">
									<IonCardHeader>
										<IonCardTitle>Contact: {data.contact}</IonCardTitle>
									</IonCardHeader>
								</IonCol>
								<IonCol size="12">
									<IonCardHeader>
										<IonCardTitle>Address: {data.address}</IonCardTitle>
									</IonCardHeader>
								</IonCol>
							</IonRow>
						</IonGrid>
						<IonCardContent>

						</IonCardContent>
					</IonCard>
				))}
			</IonContent>

		</IonPage>
	);
};

export default Site_List;
