import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './styles.css';

const Home: React.FC = () => {

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

				<IonButton class="login-button-col" color="primary" expand="full" shape="round" routerLink="/page/Login">Login</IonButton>
				<IonButton class="register-button-col" color="secondary" expand="full" shape="round" routerLink="/page/Register">Register</IonButton>

			</IonContent>

		</IonPage>
	);
};

export default Home;
