import { IonButton, IonButtons, IonGrid, IonContent, IonDatetime, IonHeader, IonInput, IonItem, IonItemGroup, IonLabel, IonList, IonListHeader, IonMenuButton, IonPage, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToolbar, IonRow, IonCol } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import firebase from '../../firebaseConfig';
import { v4 as uuidv4 } from "uuid";
import { useParams } from 'react-router';

const Edit_Data = () => {

   // Equipment Details
   const siteName = "Carrick-on-Suir";
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

   const {id} = useParams();
   const [dataList, setDataList] = useState([]);
   const [busy, setBusy] = useState(false);
   const ref = firebase.firestore().collection("Data");

   function submit(newData) {
		ref.doc(newData.id).set(newData).catch((err) => {
			console.error(err);
		});
	}

   useEffect(() => {
      const dataRef = firebase.firestore().collection("Data").doc(id);
      dataRef.get(id).then(doc => {
         const data = { id: doc.id, ...doc.data()}
         setDataList(data);
      });
	}, [id]);


   return (
      <IonPage>

         <IonContent fullscreen>
            <IonListHeader>Details</IonListHeader>
            <IonList>
               <IonItemGroup>
                  <IonItem>
                     <IonLabel>Site Name: Carrick-on-Suir</IonLabel>
                     <IonButton onClick={() => submit({ siteName, category, contractNo, tagNo, location, manufacturer, serialNo, voltage, rpm, secure, weatherproof, cableMarked, earthed, installationTestDate, comments, id: uuidv4() })}>Submit</IonButton>
                  </IonItem>
                  <IonItem>
                     <IonLabel>Category:</IonLabel>
                     <IonSelect placeholder="Category" value={dataList?.category} onIonChange={(e) => setCategory(e.target.value)}>
                        <IonSelectOption value="Motor">Motor</IonSelectOption>
                        <IonSelectOption value="Pump">Pump</IonSelectOption>
                        <IonSelectOption value="Flow Meter">Flow Meter</IonSelectOption>
                        <IonSelectOption value="Blank">Blank</IonSelectOption>
                     </IonSelect>
                  </IonItem>
                  <IonItem>
                     <IonLabel>Contract No.:</IonLabel>
                     <IonInput placeholder="Contract No." value={dataList?.contractNo} onIonChange={(e) => setContractNo(e.target.value)}></IonInput>
                  </IonItem>
                  <IonItem>
                     <IonLabel>Tag No.:</IonLabel>
                     <IonInput placeholder="Tag No." value={dataList?.tagNo} onIonChange={(e) => setTagNo(e.target.value)}></IonInput>
                  </IonItem>
                  <IonItem>
                     <IonLabel>Location:</IonLabel>
                     <IonSelect placeholder="Location" value={dataList?.location} onIonChange={(e) => setLocation(e.target.value)}>
                        <IonSelectOption value="Sludge">Sludge</IonSelectOption>
                        <IonSelectOption value="Treatment">Treatment</IonSelectOption>
                        <IonSelectOption value="Waste">Waste</IonSelectOption>
                     </IonSelect>
                  </IonItem>
                  <IonItem>
                     <IonLabel>Manufacturer:</IonLabel>
                     <IonSelect placeholder="Manufacturer" value={dataList?.manufacturer} onIonChange={(e) => setManufacturer(e.target.value)}>
                        <IonSelectOption value="Siemens">Siemens</IonSelectOption>
                        <IonSelectOption value="Philips">Philips</IonSelectOption>
                        <IonSelectOption value="Honda">Honda</IonSelectOption>
                     </IonSelect>
                  </IonItem>
                  <IonItem>
                     <IonLabel>Serial No.:</IonLabel>
                     <IonInput placeholder="Serial No." value={dataList?.serialNo} onIonChange={(e) => setSerialNo(e.target.value)}></IonInput>
                  </IonItem>
                  <IonItem>
                     <IonLabel>Voltage:</IonLabel>
                     <IonInput placeholder="Voltage" value={dataList?.voltage} onIonChange={(e) => setVoltage(e.target.value)}></IonInput>
                  </IonItem>
                  <IonItem>
                     <IonLabel>RPM:</IonLabel>
                     <IonInput placeholder="RPM" value={dataList?.rpm} onIonChange={(e) => setRPM(e.target.value)}></IonInput>
                  </IonItem>
               </IonItemGroup>
            </IonList>

            <IonListHeader>Installation Tests</IonListHeader>
            <IonList>
               <IonItemGroup>
                  <IonItem>
                     <IonLabel>Secure</IonLabel>
                     <IonSelect placeholder="Secure" value={dataList?.secure} onIonChange={(e) => setSecure(e.target.value)}>
                        <IonSelectOption value="Yes">Yes</IonSelectOption>
                        <IonSelectOption value="No">No</IonSelectOption>
                     </IonSelect>
                  </IonItem>
                  <IonItem>
                     <IonLabel>Weatherproof</IonLabel>
                     <IonSelect placeholder="Weatherproof" value={dataList?.weatherproof} onIonChange={(e) => setWeatherproof(e.target.value)}>
                        <IonSelectOption value="Yes">Yes</IonSelectOption>
                        <IonSelectOption value="No">No</IonSelectOption>
                     </IonSelect>
                  </IonItem>
                  <IonItem>
                     <IonLabel>Cable Marked</IonLabel>
                     <IonSelect placeholder="Cable Marked" value={dataList?.cableMarked} onIonChange={(e) => setCableMarked(e.target.value)}>
                        <IonSelectOption value="Yes">Yes</IonSelectOption>
                        <IonSelectOption value="No">No</IonSelectOption>
                     </IonSelect>
                  </IonItem>
                  <IonItem>
                     <IonLabel>Earthed</IonLabel>
                     <IonSelect placeholder="Earthed" value={dataList?.earthed} onIonChange={(e) => setEarthed(e.target.value)}>
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
                     <IonDatetime value={dataList?.installationTestDate} onIonChange={(e) => setInstallationtestDate(e.target.value)}></IonDatetime>
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
                     <IonTextarea placeholder="Comments" value={dataList?.comments} onIonChange={(e) => setComments(e.target.value)}></IonTextarea>
                  </IonItem>
               </IonItemGroup>
            </IonList>
         </IonContent>
      </IonPage>
   );
};

export default Edit_Data;
