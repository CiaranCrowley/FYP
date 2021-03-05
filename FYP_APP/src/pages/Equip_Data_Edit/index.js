import { IonButton, IonCol, IonContent, IonDatetime, IonGrid, IonInput, IonItem, IonItemGroup, IonLabel, IonList, IonListHeader, IonPage, IonRow, IonSelect, IonSelectOption, IonTextarea } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { PencilSquare, Trash } from 'react-bootstrap-icons';
import { useParams } from 'react-router';
import firebase from '../../firebaseConfig';

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

   const { id } = useParams();
   const [dataList, setDataList] = useState([]);
   const ref = firebase.firestore().collection("Data");

   function updateData(updatedData) {
      // setBusy();
      ref
         .doc(updatedData.id)
         .update(updatedData)
         .catch((err) => {
            console.error(err);
         });
   }

   // Delete Data
   function deleteData(deleteData) {
      ref
         .doc(deleteData.id)
         .delete()
         .catch((err) => {
            console.error(err);
         });
   }

   useEffect(() => {
      const dataRef = firebase.firestore().collection("Data").doc(id);
      dataRef.get(id).then(doc => {
         const data = { id: doc.id, ...doc.data() }
         setDataList(data);
      });
   }, [id]);

   /* 
   *
   * https://github.com/samfromaway/firebase-tutorial/blob/master/src/SnapshotFirebase.js
   *
   */

   return (
      <IonPage>

         <IonContent fullscreen>
            <IonList>
               <IonGrid>
                  <IonRow class="ion-nowrap">
                     <IonCol size="5">
                        <IonListHeader>Details</IonListHeader>
                     </IonCol>
                     <IonCol>
                        <IonButton onClick={() => updateData({
                           siteName: siteName, category: category, contractNo: contractNo, tagNo: tagNo,
                           location: location, manufacturer: manufacturer, serialNo: serialNo, voltage: voltage, rpm: rpm, secure: secure, weatherproof: weatherproof,
                           cableMarked: cableMarked, earthed: earthed, installationTestDate: installationTestDate, comments: comments, id: id
                        })}><PencilSquare size={25}></PencilSquare></IonButton>
                     </IonCol>
                     <IonCol>
                        <IonButton onClick={() => deleteData({ id: id })}><Trash size={25}></Trash></IonButton>
                     </IonCol>
                  </IonRow>
               </IonGrid>
               <IonItemGroup>
                  <IonItem>
                     <IonLabel>Site Name: {dataList?.siteName}</IonLabel>
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
                  <IonItem>
                     <IonLabel>Signed For Electrical Installer</IonLabel>
                  </IonItem>
                  <IonItem>
                     <IonLabel>Date</IonLabel>
                     <IonDatetime value={installationTestDate} onIonChange={(e) => setInstallationtestDate(e.target.value)}></IonDatetime>
                  </IonItem>
               </IonItemGroup>
            </IonList>

            <IonList>
               <IonListHeader>Commissioning Tests</IonListHeader>
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

export default Edit_Data;
