import { IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonLoading, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { book, home, pricetag } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { PencilSquare, Trash } from 'react-bootstrap-icons';
import firebase from '../../../firebaseConfig';

const Carrick_FlowMeters = () => {

	const [dataList, setDataList] = useState([])
	const [busy, setBusy] = useState(false)

	const ref = firebase.firestore().collection("Data")
	const requiredRef = ref.where('siteName', '==', 'Carrick-on-Suir')
	const catgoryRef = requiredRef.where('category', '==', 'Flow Meter')

	// https://www.youtube.com/watch?v=3ZEz-iposj8
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

	// Delete Data
	function deleteData(data) {
		ref
			.doc(data.id)
			.delete()
			.catch((err) => {
				console.error(err);
			});
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
					<IonTitle>Flow Meters Carrick</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				{dataList.map((data) =>
					<IonCard key={data.id} /* routerLink={LINK}, data.id <= id of the piece of data on the card*/>
						<IonGrid>
							<IonRow class="ion-nowrap">
								<IonCol size="0"><IonIcon icon={pricetag}></IonIcon></IonCol>
								<IonCol size="5" offset='0.2'>Tag No: {data.tagNo}</IonCol>
								<IonCol size="1" offset='0.2'><a href="/page/Carrick_Equip_Data"><PencilSquare size={20}></PencilSquare></a></IonCol>
								<IonCol size="1" offset='0.2'><a onClick={() => deleteData(data)}><Trash size={20}></Trash></a></IonCol>
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

export default Carrick_FlowMeters;