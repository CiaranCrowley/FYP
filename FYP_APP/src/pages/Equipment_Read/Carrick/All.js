import { IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonLoading, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { book, home, pricetag } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import firebase from '../../../firebaseConfig';

const Carrick_All = () => {

	const [dataList, setDataList] = useState([])
	const [busy, setBusy] = useState(false)
	// const name = ['Carrick-on-Suir']
	const searchName = ['Carrick-on-Suir']

	const ref = firebase.firestore().collection("Data")
	const db = firebase.firestore()
	const siteRef = db.collection('Data')
	const requiredRef = siteRef.where('siteName', '==', 'Carrick-on-Suir')

	// https://www.youtube.com/watch?v=3ZEz-iposj8
	function getData() {
		setBusy(true)
		requiredRef.onSnapshot((querySnapshot) => {
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
					<IonTitle>All Carrick</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				{dataList.map((data) =>
					<IonCard key={data.id} /* routerLink={LINK}, data.id <= id of the piece of data on the card*/>
						<IonGrid>
							{/* <IonRow class="ion-nowrap">
								<IonCol size="0"><IonIcon icon={pricetag}></IonIcon></IonCol>
								<IonCol size="12" offset='0.2'>Tag No: {data.tagNo}</IonCol>
							</IonRow> */}
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