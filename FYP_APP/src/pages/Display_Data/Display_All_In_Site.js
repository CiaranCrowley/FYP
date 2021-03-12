import { IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonLoading, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { book, home, pricetag } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import firebase from '../../firebaseConfig';

const Display_All_In_Site = () => {

	/**
	*  ? What does this page need to do?
	*  * This page will need to Read all of the data present on a site, much like All.js in the Equipment_Read sub folders
	* 
	*  ? How?
	*  * Use useParams to get the Site Name which is then put into the filter.
	*/

	/**
	* 	display data source:
	* 	https://github.com/samfromaway/firebase-tutorial/blob/master/src/SnapshotFirebase.js
	*/

	const [dataList, setDataList] = useState([]);
	const [busy, setBusy] = useState(false);

	const ref = firebase.firestore().collection("Data");

	// This line filters by Site Name
	const requiredRef = ref.where('siteName', '==', 'Carrick-on-Suir');

	function getData() {
		setBusy(true);
		requiredRef.onSnapshot((querySnapshot) => {
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
		);
	}

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>All Machines present in *Site Name*</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent className="ion-padding" fullscreen>
				{dataList.map((data) => (
					<IonCard key={data.id} routerLink={`/page/Equip_Edit/${data.id}`}>
						<IonGrid>
							<IonRow class="ion-nowrap">
								<IonCol size="0"><IonIcon icon={pricetag}></IonIcon></IonCol>
								<IonCol size="5" offset='0.2'>Tag No: {data.tagNo}</IonCol>
							</IonRow>
							<IonRow class="ion-nowrap">
								<IonCol size="0"><IonIcon icon={home}></IonIcon></IonCol>
								<IonCol size="12" offset='0.2'>Contract No.: {data.contractNo}</IonCol>
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
				))}
			</IonContent>

		</IonPage>
	);
}

export default Display_All_In_Site;
