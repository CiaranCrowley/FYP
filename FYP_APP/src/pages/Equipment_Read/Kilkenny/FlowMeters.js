import { IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonLoading, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { book, home, pricetag } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import firebase from '../../../firebaseConfig';

const Kilkenny_FlowMeters = () => {

	/*
	*
	* https://github.com/samfromaway/firebase-tutorial/blob/master/src/SnapshotFirebase.js
	*
	*/

	const [dataList, setDataList] = useState([])
	const [busy, setBusy] = useState(false)

	const ref = firebase.firestore().collection("Data")
	const requiredRef = ref.where('siteName', '==', 'Kilkenny')
	const catgoryRef = requiredRef.where('category', '==', 'Flow Meter')

	function getData() {
		setBusy(true)
		catgoryRef.onSnapshot((querySnapshot) => {
			const items = []
			querySnapshot.forEach((doc) => {
				items.push(doc.data())
			})
			setDataList(items)
			setBusy(false)
		})
	}

	useEffect(() => {
		getData()
	}, []);

	if (busy) {
		return (
			<IonPage>
				<IonLoading isOpen={busy}></IonLoading>
			</IonPage>
		)
	}

	return (
		<IonPage>

			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Flow Meters Kilkenny</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				{dataList.map((data) =>
					<IonCard key={data.id} routerLink={`/page/Equip_Edit/${data.id}`}>
						<IonGrid>
							<IonRow class="ion-nowrap">
								<IonCol size="0"><IonIcon icon={pricetag}></IonIcon></IonCol>
								<IonCol size="5" offset='0.2'>Tag No: {data.tagNo}</IonCol>
							</IonRow>
							<IonRow class="ion-nowrap">
								<IonCol size="0"><IonIcon icon={book}></IonIcon></IonCol>
								<IonCol size="12" offset='0.2'>Category: {data.category}</IonCol>
							</IonRow>
							<IonRow class="ion-nowrap">
								<IonCol size="0"><IonIcon icon={home}></IonIcon></IonCol>
								<IonCol size="12" offset='0.2'>Site Name: {data.siteName}</IonCol>
							</IonRow>
						</IonGrid>
					</IonCard>
				)}
			</IonContent>

		</IonPage>
	);
};

export default Kilkenny_FlowMeters;