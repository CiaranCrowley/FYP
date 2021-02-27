import { IonButton, IonButtons, IonContent, IonDatetime, IonHeader, IonInput, IonItem, IonItemGroup, IonLabel, IonList, IonListHeader, IonMenuButton, IonPage, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import './styles.css';
import { submitData } from "../../../firebaseConfig"

const Kilkenny_Equip_Data: React.FC = () => {

	// Equipment Details
	const [siteName, setSiteName] = useState("Kilkenny")
	const [category, setCategory] = useState("")
	const [contractNo, setContractNo] = useState("")
	const [tagNo, setTagNo] = useState("")
	const [location, setLocation] = useState("")
	const [manufacturer, setManufacturer] = useState("")
	const [serialNo, setSerialNo] = useState("")
	const [voltage, setVoltage] = useState("")
	const [rpm, setRPM] = useState("")
	// Equipment Installation Tests
	const [secure, setSecure] = useState("")
	const [weatherproof, setWeatherproof] = useState("")
	const [cableMarked, setCableMarked] = useState("")
	const [earthed, setEarthed] = useState("")
	const [installationTestDate, setInstallationtestDate] = useState("")
	// Commissioning Tests
	const [comments, setComments] = useState("")

	function submit() {
		submitData(siteName, category, contractNo, tagNo, location, manufacturer, serialNo, voltage, rpm, secure, weatherproof, cableMarked, earthed, installationTestDate, comments)
	}

	return (
		<IonPage>

			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Equipment Data</IonTitle>
					<IonButton onClick={submit}>Submit</IonButton>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>

				<IonListHeader>Details</IonListHeader>
				<IonList>
					<IonItemGroup>
						<IonItem>
							<IonLabel>Site Name: Kilkenny</IonLabel>
						</IonItem>
						<IonItem>
							<IonLabel>Category:</IonLabel>
							<IonSelect placeholder="Category" value={category} onIonChange={(e: any) => setCategory(e.target.value)}>
								<IonSelectOption value="Motor">Motor</IonSelectOption>
								<IonSelectOption value="Pump">Pump</IonSelectOption>
								<IonSelectOption value="Flow Meter">Flow Meter</IonSelectOption>
							</IonSelect>
						</IonItem>
						<IonItem>
							<IonLabel>Contract No.:</IonLabel>
							<IonInput placeholder="Contract No." value={contractNo} onIonChange={(e: any) => setContractNo(e.target.value)}></IonInput>
						</IonItem>
						<IonItem>
							<IonLabel>Tag No.:</IonLabel>
							<IonInput placeholder="Tag No." value={tagNo} onIonChange={(e: any) => setTagNo(e.target.value)}></IonInput>
						</IonItem>
						<IonItem>
							<IonLabel>Location:</IonLabel>
							<IonSelect placeholder="Location" value={location} onIonChange={(e: any) => setLocation(e.target.value)}>
								<IonSelectOption value="Sludge">Sludge</IonSelectOption>
								<IonSelectOption value="Treatment">Treatment</IonSelectOption>
								<IonSelectOption value="Waste">Waste</IonSelectOption>
							</IonSelect>
						</IonItem>
						<IonItem>
							<IonLabel>Manufacturer:</IonLabel>
							<IonSelect placeholder="Manufacturer" value={manufacturer} onIonChange={(e: any) => setManufacturer(e.target.value)}>
								<IonSelectOption value="Siemens">Siemens</IonSelectOption>
								<IonSelectOption value="Philips">Philips</IonSelectOption>
								<IonSelectOption value="Honda">Honda</IonSelectOption>
							</IonSelect>
						</IonItem>
						<IonItem>
							<IonLabel>Serial No.:</IonLabel>
							<IonInput placeholder="Serial No." value={serialNo} onIonChange={(e: any) => setSerialNo(e.target.value)}></IonInput>
						</IonItem>
						<IonItem>
							<IonLabel>Voltage:</IonLabel>
							<IonInput placeholder="Voltage" value={voltage} onIonChange={(e: any) => setVoltage(e.target.value)}></IonInput>
						</IonItem>
						<IonItem>
							<IonLabel>RPM:</IonLabel>
							<IonInput placeholder="RPM" value={rpm} onIonChange={(e: any) => setRPM(e.target.value)}></IonInput>
						</IonItem>
					</IonItemGroup>
				</IonList>

				<IonListHeader>Installation Tests</IonListHeader>
				<IonList>
					<IonItemGroup>
						<IonItem>
							<IonLabel>Secure</IonLabel>
							<IonSelect placeholder="Secure" value={secure} onIonChange={(e: any) => setSecure(e.target.value)}>
								<IonSelectOption value="Yes">Yes</IonSelectOption>
								<IonSelectOption value="No">No</IonSelectOption>
							</IonSelect>
						</IonItem>
						<IonItem>
							<IonLabel>Weatherproof</IonLabel>
							<IonSelect placeholder="Weatherproof" value={weatherproof} onIonChange={(e: any) => setWeatherproof(e.target.value)}>
								<IonSelectOption value="Yes">Yes</IonSelectOption>
								<IonSelectOption value="No">No</IonSelectOption>
							</IonSelect>
						</IonItem>
						<IonItem>
							<IonLabel>Cable Marked</IonLabel>
							<IonSelect placeholder="Cable Marked" value={cableMarked} onIonChange={(e: any) => setCableMarked(e.target.value)}>
								<IonSelectOption value="Yes">Yes</IonSelectOption>
								<IonSelectOption value="No">No</IonSelectOption>
							</IonSelect>
						</IonItem>
						<IonItem>
							<IonLabel>Earthed</IonLabel>
							<IonSelect placeholder="Earthed" value={earthed} onIonChange={(e: any) => setEarthed(e.target.value)}>
								<IonSelectOption value="Yes">Yes</IonSelectOption>
								<IonSelectOption value="No">No</IonSelectOption>
							</IonSelect>
						</IonItem>
						<IonItem>
							<IonLabel>Signed For Electrical Installer</IonLabel>
						</IonItem>
						<IonItem>
							<IonLabel>Date</IonLabel>
							<IonDatetime value={installationTestDate} onIonChange={(e: any) => setInstallationtestDate(e.target.value)}></IonDatetime>
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
							<IonTextarea placeholder="Comments" value={comments} onIonChange={(e: any) => setComments(e.target.value)}></IonTextarea>
						</IonItem>
					</IonItemGroup>
				</IonList>

			</IonContent>
			
		</IonPage>
	);
};

export default Kilkenny_Equip_Data;
