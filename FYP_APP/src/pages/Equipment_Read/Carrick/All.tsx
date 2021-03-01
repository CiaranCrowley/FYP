import { IonButtons, IonCard, IonCardHeader, IonContent, IonHeader, IonInput, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import firebase from '../../../firebaseConfig'

const Carrick_All: React.FC = () => {

	// const [dataList, setDataList] = useState([])

	// Gets objects from Database and logs them to console (https://www.youtube.com/watch?v=v0TKYSkZ2tI)
	// useEffect(() => {
	// 	const dataRef = firebase.database().ref("data")
	// 	dataRef.on("value", (snapshot) => {
	// 		// console.log(snapshot.val())
	// 		const data = snapshot.val()
	// 		const dataArray : string[] = []
	// 		for (let id in data) {
	// 			dataArray.push(data[id])
	// 		}
	// 		console.log(dataArray)
	// 		// setDataList(dataArray)
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
				<IonCard>
					{/* <IonCardHeader>{tagNo_val}, {cat_Val}, {contract_val}</IonCardHeader> */}
				</IonCard>
			</IonContent>

		</IonPage>
	);
};

export default Carrick_All;