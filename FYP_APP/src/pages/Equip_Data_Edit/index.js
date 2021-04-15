import {
	IonAlert, IonButton, IonButtons, IonCol, IonContent, IonDatetime, IonGrid, IonHeader, IonInput, IonItem, IonItemGroup, IonLabel, IonList,
	IonListHeader, IonLoading, IonMenuButton, IonPage, IonRow, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToolbar
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { ArrowLeft, PencilSquare, Trash } from 'react-bootstrap-icons';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import firebase from '../../firebaseConfig';
import "./style.css"

const Edit_Data = () => {

	/**
	*        * https://github.com/samfromaway/firebase-tutorial/blob/master/src/SnapshotFirebase.js
	*/

	// Equipment Details
	const [siteName, setSiteName] = useState("");
	const [category, setCategory] = useState("");
	const [contractNo, setContractNo] = useState("");
	const [tagNo, setTagNo] = useState("");
	const [location, setLocation] = useState("");
	const [manufacturer, setManufacturer] = useState("");
	const [serialNo, setSerialNo] = useState("");
	const [voltage, setVoltage] = useState("");
	const [rpm, setRPM] = useState("");
	// Equipment Installation Tests
	const [secure, setSecure] = useState("");
	const [weatherproof, setWeatherproof] = useState("");
	const [cableMarked, setCableMarked] = useState("");
	const [earthed, setEarthed] = useState("");
	const [installationTestDate, setInstallationtestDate] = useState("");
	// Commissioning Tests
	const [comments, setComments] = useState("");

	const { id } = useParams();
	const [dataList, setDataList] = useState([]);
	const ref = firebase.firestore().collection("Data");
	const [busy, setBusy] = useState(false);
	const [updateAlert, setUpdateAlert] = useState(false);
	const [deleteAlert, setDeleteAlert] = useState(false);
	const history = useHistory();

	// Get Data
	function getData() {
		setBusy(true);
		const dataRef = firebase.firestore().collection("Data").doc(id);
		dataRef.get(id).then(doc => {
			const data = { id: doc.id, ...doc.data() }
			setDataList(data);
		});
		setBusy(false);
	}

	// Update Data
	function updateData(updatedData) {
		setBusy(true);
		/**
		 *		* The following 6 lines for checking for empty fields is taken from MY stackoverflow question here:
		 *    * https://stackoverflow.com/questions/66872517/react-updating-one-piece-of-data-in-a-firestore-document-results-in-all-other-d
		 */
		let updatedFields = {};
		Object.keys(updatedData).forEach((field) => {
			if (updatedData[field] && updatedData[field].length > 0) {
				updatedFields[field] = updatedData[field];
			}
		});
		ref
			.doc(updatedData.id)
			.update(updatedFields)
			.then(() => setBusy(false))
			.catch((err) => {
				console.error(err);
				setBusy(false);
			});
		history.push('/page/Site_List');
	}

	// Delete Data
	function deleteData(deleteData) {
		ref
			.doc(deleteData.id)
			.delete()
			.catch((err) => {
				console.error(err);
			});
		history.push('/page/Site_List');
	}

	// Back Button
	function back() {
		history.push('/page/Site_List');
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
					<IonGrid>
						<IonRow>
							<IonCol size="3">
								<IonButton onClick={back}><ArrowLeft size={25}></ArrowLeft></IonButton>
							</IonCol>
							<IonCol size="5">
								<IonTitle>View, Edit, or Delete Data</IonTitle>
							</IonCol>
							<IonCol>
								<IonButton onClick={() => setUpdateAlert(true)}><PencilSquare size={25}></PencilSquare></IonButton>
								<IonAlert isOpen={updateAlert} onDidDismiss={() => setUpdateAlert(false)} header="Alert"
									message={'<strong>Are you sure you want to update this data?</strong>'}
									buttons={[
										{
											text: 'Cancel',
											role: 'cancel'
										},
										{
											text: 'Update',
											handler: () => updateData({
												siteName: siteName, category: category, contractNo: contractNo, tagNo: tagNo,
												location: location, manufacturer: manufacturer, serialNo: serialNo, voltage: voltage, rpm: rpm, secure: secure,
												weatherproof: weatherproof, cableMarked: cableMarked, earthed: earthed,
												installationTestDate: installationTestDate, comments: comments, id: id
											})
										}
									]}
								/>
							</IonCol>
							<IonCol>
								<IonButton onClick={() => setDeleteAlert(true)}><Trash size={25}></Trash></IonButton>
								<IonAlert isOpen={deleteAlert} onDidDismiss={() => setDeleteAlert(false)} header="Alert"
									message={'<strong>Are you sure you want to delete this data?. <p>It cannot be undone!!!</p></strong>'}
									buttons={[
										{
											text: 'Cancel',
											role: 'cancel'
										},
										{
											text: 'Delete',
											handler: () => deleteData({ id: id })
										}
									]}
								/>
							</IonCol>
						</IonRow>
					</IonGrid>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonList>
					<IonGrid>
						<IonRow class="ion-nowrap">
							<IonCol size="5">
								<IonListHeader>Details</IonListHeader>
							</IonCol>
						</IonRow>
					</IonGrid>
					<IonItemGroup>
						<IonItem>
							<IonLabel>Created By: </IonLabel>
							<IonLabel>{dataList.user}</IonLabel>
						</IonItem>
						<IonItem>
							<IonLabel>Site Name:</IonLabel>
							<IonSelect placeholder={dataList?.siteName} value={siteName} onIonChange={(e) => setSiteName(e.target.value)}>
								<IonSelectOption value="Carrick-on-Suir">Carrick-on-Suir</IonSelectOption>
								<IonSelectOption value="Kilkenny">Kilkenny</IonSelectOption>
								<IonSelectOption value="Waterford">Waterford</IonSelectOption>
							</IonSelect>
						</IonItem>
						<IonItem>
							<IonLabel>Category:</IonLabel>
							<IonSelect placeholder={dataList?.category} value={category} onIonChange={(e) => setCategory(e.target.value)}>
								<IonSelectOption value="Motor">Motor</IonSelectOption>
								<IonSelectOption value="Pump">Pump</IonSelectOption>
								<IonSelectOption value="Flow Meter">Flow Meter</IonSelectOption>
								<IonSelectOption value="Blank">Blank</IonSelectOption>
							</IonSelect>
						</IonItem>
						<IonItem>
							<IonLabel>Contract No.:</IonLabel>
							<IonInput placeholder={dataList?.contractNo} value={contractNo} onIonChange={(e) => setContractNo(e.target.value)}></IonInput>
						</IonItem>
						<IonItem>
							<IonLabel>Tag No.:</IonLabel>
							<IonInput placeholder={dataList?.tagNo} value={tagNo} onIonChange={(e) => setTagNo(e.target.value)}></IonInput>
						</IonItem>

						<IonItem>
							<IonLabel>Location:</IonLabel>
							<IonSelect placeholder={dataList?.location} value={location} onIonChange={(e) => setLocation(e.target.value)}>
								<IonSelectOption value="Sludge">Sludge</IonSelectOption>
								<IonSelectOption value="Treatment">Treatment</IonSelectOption>
								<IonSelectOption value="Waste">Waste</IonSelectOption>
							</IonSelect>
						</IonItem>
						<IonItem>
							<IonLabel>Manufacturer:</IonLabel>
							<IonSelect placeholder={dataList?.manufacturer} value={manufacturer} onIonChange={(e) => setManufacturer(e.target.value)}>
								<IonSelectOption value="Siemens">Siemens</IonSelectOption>
								<IonSelectOption value="Philips">Philips</IonSelectOption>
								<IonSelectOption value="Honda">Honda</IonSelectOption>
							</IonSelect>
						</IonItem>
						<IonItem>
							<IonLabel>Serial No.:</IonLabel>
							<IonInput placeholder={dataList?.serialNo} value={serialNo} onIonChange={(e) => setSerialNo(e.target.value)}></IonInput>
						</IonItem>
						<IonItem>
							<IonLabel>Voltage:</IonLabel>
							<IonInput placeholder={dataList?.voltage} value={voltage} onIonChange={(e) => setVoltage(e.target.value)}></IonInput>
						</IonItem>
						<IonItem>
							<IonLabel>RPM:</IonLabel>
							<IonInput placeholder={dataList?.rpm} value={rpm} onIonChange={(e) => setRPM(e.target.value)}></IonInput>
						</IonItem>
					</IonItemGroup>
				</IonList>

				<IonList>
					<IonListHeader>Installation Tests</IonListHeader>
					<IonItemGroup>
						<IonItem>
							<IonLabel>Secure:</IonLabel>
							<IonSelect placeholder={dataList?.secure} value={secure} onIonChange={(e) => setSecure(e.target.value)}>
								<IonSelectOption value="Yes">Yes</IonSelectOption>
								<IonSelectOption value="No">No</IonSelectOption>
							</IonSelect>
						</IonItem>
						<IonItem>
							<IonLabel>Weatherproof:</IonLabel>
							<IonSelect placeholder={dataList?.weatherproof} value={weatherproof} onIonChange={(e) => setWeatherproof(e.target.value)}>
								<IonSelectOption value="Yes">Yes</IonSelectOption>
								<IonSelectOption value="No">No</IonSelectOption>
							</IonSelect>
						</IonItem>
						<IonItem>
							<IonLabel>Cable Marked:</IonLabel>
							<IonSelect placeholder={dataList?.cableMarked} value={cableMarked} onIonChange={(e) => setCableMarked(e.target.value)}>
								<IonSelectOption value="Yes">Yes</IonSelectOption>
								<IonSelectOption value="No">No</IonSelectOption>
							</IonSelect>
						</IonItem>
						<IonItem>
							<IonLabel>Earthed:</IonLabel>
							<IonSelect placeholder={dataList?.earthed} value={earthed} onIonChange={(e) => setEarthed(e.target.value)}>
								<IonSelectOption value="Yes">Yes</IonSelectOption>
								<IonSelectOption value="No">No</IonSelectOption>
							</IonSelect>
						</IonItem>
						<IonItem>
							<IonLabel>Signed For Electrical Installer</IonLabel>
						</IonItem>
						<IonItem>
							<IonLabel>Date:</IonLabel>
							<IonDatetime className="dateTime" placeholder={dataList?.installationTestDate} value={installationTestDate} onIonChange={(e) =>
								setInstallationtestDate(e.target.value)}></IonDatetime>
						</IonItem>
					</IonItemGroup>
				</IonList>

				<IonList>
					<IonItemGroup>
						<IonItem>
							<IonLabel>Comments:</IonLabel>
							<IonTextarea className="Comments" placeholder={dataList?.comments} value={comments} onIonChange={(e) => setComments(e.target.value)}></IonTextarea>
						</IonItem>
					</IonItemGroup>
				</IonList>

			</IonContent>
		</IonPage>
	);
};

export default Edit_Data;
