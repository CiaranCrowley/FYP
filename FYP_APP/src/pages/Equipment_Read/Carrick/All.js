import { IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonList, IonLoading, IonMenuButton, IonPage, IonRadio, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import firebase from '../../../firebaseConfig';
import { pricetag, book, home } from 'ionicons/icons'

const Carrick_All = () => {

	const [dataList, setDataList] = useState([]);
	const [busy, setBusy] = useState(false)

	const ref = firebase.firestore().collection("Data");

	function getData() {
		setBusy(true);
		ref.onSnapshot((querySnapshot) => {
			const items = [];
			querySnapshot.forEach((doc) => {
				items.push(doc.data());
			});
			setDataList(items);
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
		)
	}

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
				{dataList.map((data) =>
					<IonCard key={data.id} /* routerLink={LINK}, data.id <= id of the piece of data on the card*/>
						<IonGrid>
							<IonRow class="ion-nowrap">
								<IonCol size="0"><IonIcon icon={pricetag}></IonIcon></IonCol>
								<IonCol size="12" offset='0.2'>Tag No: {data.tagNo}</IonCol>
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

export default Carrick_All;