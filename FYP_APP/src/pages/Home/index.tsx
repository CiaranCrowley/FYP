/* eslint-disable no-labels */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import React, { Component } from 'react';
import { useParams } from 'react-router';
import { sign } from 'crypto';
import './styles.css';
import { Plugins } from '@capacitor/core';
import "@codetrix-studio/capacitor-google-auth";


const Home: React.FC = () => {

	async function signIn(this: any) {
		console.log(Plugins.GoogleAuth.signIn())
	}
	
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton /> {/* Remove this towards end of development.  Dont want users to have access to menu options unless they are logged in */}
					</IonButtons>
					<IonTitle>Home</IonTitle>
				</IonToolbar>
			</IonHeader>
			
			<IonContent fullscreen>

				{/* <IonButton class="" color="secondary" expand="full" shape="round" onClick={signIn}>Google Login</IonButton> */}
				<IonButton class="login-button-col" color="primary" expand="full" shape="round" routerLink="/page/Login">Login</IonButton>
				<IonButton class="register-button-col" color="secondary" expand="full" shape="round" routerLink="/page/Register">Register</IonButton>

			</IonContent>

		</IonPage>
  	);
};

export default Home;
