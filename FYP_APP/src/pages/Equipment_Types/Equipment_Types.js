import { IonButtons, IonCard, IonCardHeader, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';

const Equipment_Types = () => {

   // ! Temporary
   // TODO: Find a way around this.  Not good to have this hard coded
   const carrick = "Carrick-on-Suir";
   const kilkenny = "Kilkenny";
   const waterford = "Waterford";

   /**
    * 	? What does this page need to do?
    * 	* It needs to display some come cards which will allow the user to click on a card and be taken =>
    *    * to the page where each entry of that equipment type, located in that site, is displayed.
    * 
    *    ? How?
    *    * Get Site Name with useParams and store it in a variable.  Then using if statements, or a switch, navigate to the display pages.
    *    * EXAMPLE:
    *    *        if (siteName from useParams === carrick) {
    *    *           then the siteName in the routerLinks below are = to carrick
    *    *        }
    */

   const { siteName } = useParams();

   return (
      <IonPage>
         <IonHeader>
            <IonToolbar>
               <IonButtons slot="start">
                  <IonMenuButton />
               </IonButtons>
               <IonTitle>Equipment Types {siteName}</IonTitle>
            </IonToolbar>
         </IonHeader>

         <IonContent className="ion-padding" fullscreen>

            <IonCard routerLink="/page/Carrick_Equip_Data">
               <IonCardHeader>Add new Data</IonCardHeader>
            </IonCard>

            <IonCard routerLink="/page/Carrick_All">
               <IonCardHeader>View All Equipment Types</IonCardHeader>
            </IonCard>

            <IonCard routerLink="/page/Carrick_FlowMeters">
               <IonCardHeader>View Flow Meters</IonCardHeader>
            </IonCard>

            <IonCard routerLink="/page/Carrick_Motors">
               <IonCardHeader>View Motors</IonCardHeader>
            </IonCard>

            <IonCard routerLink="/page/Carrick_Pumps">
               <IonCardHeader>View Pumps</IonCardHeader>
            </IonCard>

         </IonContent>

      </IonPage>
   );
}

export default Equipment_Types;