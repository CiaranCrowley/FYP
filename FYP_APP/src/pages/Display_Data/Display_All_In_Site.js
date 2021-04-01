import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonLoading, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { book, home, pricetag } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'react-bootstrap-icons';
import { useHistory } from 'react-router-dom';
import firebase from '../../firebaseConfig';
import { Site_Name } from '../Equipment_Types/Equipment_Types';

const Display_Data_In_Site = () => {

   /**
   *  ? What does this page need to do?
   *  * This page will need to Read all of the data present on a site and return the data corresponding to the site and Equipment Type
   * 
   *  ? How?
   *  * With useParams, take the Site Name and Equipment Type and filter by those.
   */

   const [dataList, setDataList] = useState([]);
   const [busy, setBusy] = useState(false);
   const ref = firebase.firestore().collection("Data");
   const siteRef = ref.where('siteName', '==', Site_Name);
   const history = useHistory();

   /**
   * 	* Gets Data:
   * 	* https://github.com/samfromaway/firebase-tutorial/blob/master/src/SnapshotFirebase.js
   */
   function getData() {
      setBusy(true);
      siteRef.onSnapshot((querySnapshot) => {
         const items = [];
         querySnapshot.forEach((doc) => {
            items.push(doc.data());
         });
         setDataList(items);
         setBusy(false);
      });
   }

   // Back Button
   function back() {
      history.push(`/page/Site_List`);
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

   /**
    *		* Source: https://medium.com/@mertgursoy/how-to-refresh-a-page-only-once-with-javascript-cdbaf079fc73
    */
   function reloadPage() {
      var currentDocumentTimestamp =
         new Date(performance.timing.domLoading).getTime();
      // Current Time
      var now = Date.now();
      // Ten Seconds
      var tenSec = 10 * 1000;
      // Plus Ten Seconds
      var plusTenSec = currentDocumentTimestamp + tenSec;
      if (now > plusTenSec) {
         window.location.reload();
      } else { }
   }
   reloadPage();

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
                     <IonCol>
                        <IonTitle>All Machines present in {Site_Name}</IonTitle>
                     </IonCol>
                  </IonRow>
               </IonGrid>
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

export default Display_Data_In_Site;
