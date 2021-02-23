import { IonButton, IonButtons, IonContent, IonDatetime, IonHeader, IonInput, IonItem, IonItemGroup, IonLabel, IonList, IonListHeader, IonMenuButton, IonPage, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import './styles.css';

const Carrick_Equip_Data: React.FC = () => {

	// Equipment Details
	const [category, setCategory] = useState<String>()
	const [contractNo, setContractNo] = useState<String>()
	const [tagNo, setTagNo] = useState<String>()
	const [location, setLocation] = useState<String>()
	const [manufacturer, setManufacturer] = useState<String>()
	const [serialNo, setSerialNo] = useState<String>()
	const [voltage, setVoltage] = useState<String>()
	const [rpm, setRPM] = useState<String>()
	// Equipment Installation Tests
	const [secure, setSecure] = useState<String>()
	const [weatherproof, setWeatherproof] = useState<String>()
	const [cableMarked, setCableMarked] = useState<String>()
	const [earthed, setEarthed] = useState<String>()
	// Commissioning Tests
	const [comments, setComments] = useState<String>()

	return (
		<IonPage>

			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Equipment Data</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>

				<IonListHeader>Details</IonListHeader>
				<IonList>
					<IonItemGroup>
						<IonItem>
							<IonLabel>Site Name: Carrick-on-Suir</IonLabel>
						</IonItem>
						<IonItem>
							<IonLabel>Category:</IonLabel>
							<IonSelect placeholder="Category" onIonChange={(e: any) => setCategory(e.target.value)}>
								<IonSelectOption value="Motor">Motor</IonSelectOption>
								<IonSelectOption value="Pump">Pump</IonSelectOption>
								<IonSelectOption value="Flow Meter">Flow Meter</IonSelectOption>
							</IonSelect>
						</IonItem>
						<IonItem>
							<IonLabel>Contract No.:</IonLabel>
							<IonInput placeholder="Contract No." onIonChange={(e: any) => setContractNo(e.target.value)}></IonInput>
						</IonItem>
						<IonItem>
							<IonLabel>Tag No.:</IonLabel>
							<IonInput placeholder="Tag No." onIonChange={(e: any) => setTagNo(e.target.value)}></IonInput>
						</IonItem>
						<IonItem>
							<IonLabel>Location:</IonLabel>
							<IonSelect placeholder="Location" onIonChange={(e: any) => setLocation(e.target.value)}>
								<IonSelectOption value="Sludge">Sludge</IonSelectOption>
								<IonSelectOption value="Treatment">Treatment</IonSelectOption>
								<IonSelectOption value="Waste">Waste</IonSelectOption>
							</IonSelect>
						</IonItem>
						<IonItem>
							<IonLabel>Manufacturer:</IonLabel>
							<IonSelect placeholder="Manufacturer" onIonChange={(e: any) => setManufacturer(e.target.value)}>
								<IonSelectOption value="Siemens">Siemens</IonSelectOption>
								<IonSelectOption value="Philips">Philips</IonSelectOption>
								<IonSelectOption value="Honda">Honda</IonSelectOption>
							</IonSelect>
						</IonItem>
						<IonItem>
							<IonLabel>Serial No.:</IonLabel>
							<IonInput placeholder="Serial No." onIonChange={(e: any) => setSerialNo(e.target.value)}></IonInput>
						</IonItem>
						<IonItem>
							<IonLabel>Voltage:</IonLabel>
							<IonInput placeholder="Voltage" onIonChange={(e: any) => setVoltage(e.target.value)}></IonInput>
						</IonItem>
						<IonItem>
							<IonLabel>RPM:</IonLabel>
							<IonInput placeholder="RPM" onIonChange={(e: any) => setRPM(e.target.value)}></IonInput>
						</IonItem>
					</IonItemGroup>
				</IonList>

				<IonListHeader>Installation Tests</IonListHeader>
				<IonList>
					<IonItemGroup>
						<IonItem>
							<IonLabel>Secure</IonLabel>
							<IonSelect placeholder="Secure" onIonChange={(e: any) => setSecure(e.target.value)}>
								<IonSelectOption value="Yes">Yes</IonSelectOption>
								<IonSelectOption value="No">No</IonSelectOption>
							</IonSelect>
						</IonItem>
						<IonItem>
							<IonLabel>Weatherproof</IonLabel>
							<IonSelect placeholder="Weatherproof" onIonChange={(e: any) => setWeatherproof(e.target.value)}>
								<IonSelectOption value="Yes">Yes</IonSelectOption>
								<IonSelectOption value="No">No</IonSelectOption>
							</IonSelect>
						</IonItem>
						<IonItem>
							<IonLabel>Cable Marked</IonLabel>
							<IonSelect placeholder="Cable Marked" onIonChange={(e: any) => setCableMarked(e.target.value)}>
								<IonSelectOption value="Yes">Yes</IonSelectOption>
								<IonSelectOption value="No">No</IonSelectOption>
							</IonSelect>
						</IonItem>
						<IonItem>
							<IonLabel>Earthed</IonLabel>
							<IonSelect placeholder="Earthed" onIonChange={(e: any) => setEarthed(e.target.value)}>
								<IonSelectOption value="Yes">Yes</IonSelectOption>
								<IonSelectOption value="No">No</IonSelectOption>
							</IonSelect>
						</IonItem>
						<IonItem>
							<IonLabel>Signed For Electrical Installer</IonLabel>
							
						</IonItem>
						<IonItem>
							<IonLabel>Date</IonLabel>
							<IonDatetime></IonDatetime>
						</IonItem>
					</IonItemGroup>
				</IonList>

				<IonListHeader>Commissioning Tests</IonListHeader>
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
							<IonTextarea placeholder="Comments" onIonChange={(e: any) => setComments(e.target.value)}></IonTextarea>
						</IonItem>
					</IonItemGroup>
				</IonList>

			</IonContent>
			
		</IonPage>
	);
};

export default Carrick_Equip_Data;
