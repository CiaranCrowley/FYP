import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { loggedInUser } from '../Login';
import './styles.css';

const Home = () => {

	function resetUser() {
		var user = loggedInUser;
		return user;
	}
	resetUser();

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
	// reloadPage();

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Home</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>

				<IonButton class="login-button" color="primary" expand="full" shape="round" routerLink="/page/Login">Login</IonButton>
				<IonButton class="register-button" color="secondary" expand="full" shape="round" routerLink="/page/Register">Register</IonButton>

			</IonContent>

		</IonPage>
	);
};

export default Home;
