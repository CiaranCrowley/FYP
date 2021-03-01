import { IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonList, IonLoading, IonMenuButton, IonPage, IonRadio, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import firebase from '../../../firebaseConfig';

const Carrick_All = () => {

	const [dataList, setDataList] = useState([]);
	const [loading, setLoading] = useState(false);

	const ref = firebase.firestore().collection("Data");

	function getData() {
		setLoading(true);
		ref.onSnapshot((querySnapshot) => {
			const items = [];
			querySnapshot.forEach((doc) => {
				items.push(doc.data());
			});
			setDataList(items);
			setLoading(false);
		});
	}

	useEffect(() => {
		getData();
	}, []);

	if (loading) {
		return (
			<IonPage>
				<IonLoading isOpen={loading}></IonLoading>
			</IonPage>
		)
	}

	// Gets objects from Database and logs them to console (https://www.youtube.com/watch?v=v0TKYSkZ2tI)  MICHAEL BARCOES METHOD
	// useEffect(() => {
	// 	const dataRef = firebase.firestore().collection("Data")
	// 	dataRef.get().then((snapshot) => {
	// 		const data = snapshot.docs.map((doc) => ({
	// 			id: doc.id,
	// 			...doc.data(),
	// 		}))
	// 		setDataList(data)
	// 	})
	// }, [])

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
							<IonRow>
								<IonCol id="tagNo" size="12">{data.tagNo}</IonCol>
							</IonRow>
						</IonGrid>
					</IonCard>
				)}
			</IonContent>

		</IonPage>
	);
};

export default Carrick_All;