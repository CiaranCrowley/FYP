import {
	IonButton,
	IonButtons, IonCol, IonContent, IonDatetime, IonGrid, IonHeader, IonInput, IonItem, IonItemGroup, IonLabel, IonList, IonMenuButton, IonPage,
	IonRow, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToolbar
} from '@ionic/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Save } from 'react-bootstrap-icons';
import { v4 as uuidv4 } from "uuid";
import firebase from '../../firebaseConfig';

const Create_Data = () => {

	const ref = firebase.firestore().collection('Data');

	// Equipment Details
	const [user, setUser] = useState("");
	const [siteName, setSiteName] = useState("");
	const [category, setCategory] = useState("");
	const [contractNo, setContractNo] = useState("");
	const [tagNo, setTagNo] = useState("");
	const [location, setLocation] = useState("");
	const [manufacturer, setManufacturer] = useState("");
	const [serialNo, setSerialNo] = useState("");
	const [voltage, setVoltage] = useState("");
	const [rpm, setRPM] = useState("")
	// Equipment Installation Tests
	const [secure, setSecure] = useState("");
	const [weatherproof, setWeatherproof] = useState("");
	const [cableMarked, setCableMarked] = useState("");
	const [earthed, setEarthed] = useState("");
	const [installationTestDate, setInstallationtestDate] = useState("");
	// Commissioning Tests
	const [comments, setComments] = useState("");

	// Add new Data
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
								<IonTitle>Create</IonTitle>
							</IonCol>
							<IonCol size="12" offset='0.2'>
								<IonButton onClick={() => submit({
									user, siteName, category, contractNo, tagNo, location, manufacturer, serialNo, voltage,
									rpm, secure, weatherproof, cableMarked, earthed, installationTestDate, comments, id: uuidv4()
								})}><Save size="25"></Save></IonButton>

							</IonCol>
						</IonRow>
					</IonGrid>
				</IonToolbar>
			</IonHeader>

			<IonContent className="ion-padding" fullscreen>
				<IonTitle className="ion-padding">Details</IonTitle>
				<IonList>
					<IonItemGroup>
						<IonItem>
							<IonLabel>Created By: </IonLabel>
							<IonInput placeholder="Your Name" value={user} onIonChange={(e) => setUser(e.target.value)}></IonInput>
						</IonItem>
						<IonItem>
							<IonLabel>Site Name:</IonLabel>
							<IonSelect placeholder="Site Name" value={siteName} onIonChange={(e) => setSiteName(e.target.value)}>
								<IonSelectOption value="Carrick-on-Suir">Carrick-on-Suir</IonSelectOption>
								<IonSelectOption value="Kilkenny">Kilkenny</IonSelectOption>
								<IonSelectOption value="Waterford">Waterford</IonSelectOption>
							</IonSelect>
						</IonItem>
						<IonItem>
							<IonLabel>Category:</IonLabel>
							<IonSelect placeholder="Category" value={category} onIonChange={(e) => setCategory(e.target.value)}>
								<IonSelectOption value="Motor">Motor</IonSelectOption>
								<IonSelectOption value="Pump">Pump</IonSelectOption>
								<IonSelectOption value="Flow Meter">Flow Meter</IonSelectOption>
								<IonSelectOption value="Blank">Blank</IonSelectOption>
							</IonSelect>
						</IonItem>
						<IonItem>
							<IonLabel>Contract No.:</IonLabel>
							<IonInput placeholder="Contract No." value={contractNo} onIonChange={(e) => setContractNo(e.target.value)}></IonInput>
						</IonItem>
						<IonItem>
							<IonLabel>Tag No.:</IonLabel>
							<IonInput placeholder="Tag No." value={tagNo} onIonChange={(e) => setTagNo(e.target.value)}></IonInput>
						</IonItem>
						<IonItem>
							<IonLabel>Location:</IonLabel>
							<IonSelect placeholder="Location" value={location} onIonChange={(e) => setLocation(e.target.value)}>
								<IonSelectOption value="Sludge">Sludge</IonSelectOption>
								<IonSelectOption value="Treatment">Treatment</IonSelectOption>
								<IonSelectOption value="Waste">Waste</IonSelectOption>
							</IonSelect>
						</IonItem>
						<IonItem>
							<IonLabel>Manufacturer:</IonLabel>
							<IonSelect placeholder="Manufacturer" value={manufacturer} onIonChange={(e) => setManufacturer(e.target.value)}>
								<IonSelectOption value="Siemens">Siemens</IonSelectOption>
								<IonSelectOption value="Philips">Philips</IonSelectOption>
								<IonSelectOption value="Honda">Honda</IonSelectOption>
							</IonSelect>
						</IonItem>
						<IonItem>
							<IonLabel>Serial No.:</IonLabel>
							<IonInput placeholder="Serial No." value={serialNo} onIonChange={(e) => setSerialNo(e.target.value)}></IonInput>
						</IonItem>
						<IonItem>
							<IonLabel>Voltage:</IonLabel>
							<IonInput placeholder="Voltage" value={voltage} onIonChange={(e) => setVoltage(e.target.value)}></IonInput>
						</IonItem>
						<IonItem>
							<IonLabel>RPM:</IonLabel>
							<IonInput placeholder="RPM" value={rpm} onIonChange={(e) => setRPM(e.target.value)}></IonInput>
						</IonItem>
					</IonItemGroup>
				</IonList>

				<IonTitle className="ion-padding">Installation Tests</IonTitle>
				<IonList>
					<IonItemGroup>
						<IonItem>
							<IonLabel>Secure</IonLabel>
							<IonSelect placeholder="Secure" value={secure} onIonChange={(e) => setSecure(e.target.value)}>
								<IonSelectOption value="Yes">Yes</IonSelectOption>
								<IonSelectOption value="No">No</IonSelectOption>
							</IonSelect>
						</IonItem>
						<IonItem>
							<IonLabel>Weatherproof</IonLabel>
							<IonSelect placeholder="Weatherproof" value={weatherproof} onIonChange={(e) => setWeatherproof(e.target.value)}>
								<IonSelectOption value="Yes">Yes</IonSelectOption>
								<IonSelectOption value="No">No</IonSelectOption>
							</IonSelect>
						</IonItem>
						<IonItem>
							<IonLabel>Cable Marked</IonLabel>
							<IonSelect placeholder="Cable Marked" value={cableMarked} onIonChange={(e) => setCableMarked(e.target.value)}>
								<IonSelectOption value="Yes">Yes</IonSelectOption>
								<IonSelectOption value="No">No</IonSelectOption>
							</IonSelect>
						</IonItem>
						<IonItem>
							<IonLabel>Earthed</IonLabel>
							<IonSelect placeholder="Earthed" value={earthed} onIonChange={(e) => setEarthed(e.target.value)}>
								<IonSelectOption value="Yes">Yes</IonSelectOption>
								<IonSelectOption value="No">No</IonSelectOption>
							</IonSelect>
						</IonItem>
						{/* Figure out how to do this */}
						<IonItem>
							<IonLabel>Signed For Electrical Installer</IonLabel>
						</IonItem>
						<IonItem>
							<IonLabel>Date</IonLabel>
							<IonDatetime value={installationTestDate} onIonChange={(e) => setInstallationtestDate(e.target.value)}></IonDatetime>
						</IonItem>
					</IonItemGroup>
				</IonList>

				<IonTitle className="ion-padding">Commissioning Tests</IonTitle>
				<IonList>
					<IonItemGroup>
						<IonItem>
							<IonLabel>E-Stop/Isolator Check</IonLabel>
						</IonItem>
						<IonItem>
							<IonLabel>Continuity Check</IonLabel>
						</IonItem>
						<IonItem>
							<IonLabel>Voltage Check</IonLabel>
						</IonItem>
						<IonItem>
							<IonLabel>Overload Setting</IonLabel>
						</IonItem>
						<IonItem>
							<IonLabel>Heater Check</IonLabel>
						</IonItem>
						<IonItem>
							<IonLabel>Thermistor Check</IonLabel>
						</IonItem>
						<IonItem>
							<IonLabel>Seal Leak Check</IonLabel>
						</IonItem>
						<IonItem>
							<IonLabel>Insulation Check</IonLabel>
						</IonItem>
						<IonItem>
							<IonLabel>Resistance Check</IonLabel>
						</IonItem>
						<IonItem>
							<IonLabel>Opetating Voltage Check</IonLabel>
						</IonItem>
						<IonItem>
							<IonLabel>Rotation Check</IonLabel>
						</IonItem>
						<IonItem>
							<IonLabel>Operation on HMI?SCADA</IonLabel>
						</IonItem>
						<IonItem>
							<IonLabel>Test Equipment Type</IonLabel>
						</IonItem>
						<IonItem>
							<IonLabel>Comments</IonLabel>
							<IonTextarea placeholder="Comments" value={comments} onIonChange={(e) => setComments(e.target.value)}></IonTextarea>
						</IonItem>
					</IonItemGroup>
				</IonList>
			</IonContent>

		</IonPage>
	);
};

export default Create_Data;
