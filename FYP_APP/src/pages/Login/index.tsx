import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonItem, IonInput } from '@ionic/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { loginUser } from '../../firebaseConfig'
import { toast } from '../../toast'

const Login: React.FC = () => {
	
	const [email, setEmail] = useState('');
  	const [password, setPassword] = useState('');

  	async function login() {
		const res = await loginUser(email, password)
		if (!res) {
			toast('Error logging in with your credentials')
		} else {
			toast('You have logged in')
		}
  	}

  return (
  	<IonPage>
		<IonHeader>
			<IonToolbar>
				<IonButtons slot="start">
					<IonMenuButton /> {/* Remove this towards end of development.  Dont want users to have access to menu options unless they are logged in */}
				</IonButtons>
				<IonTitle>Login Page</IonTitle>
		  </IonToolbar>
		</IonHeader>

		<IonContent fullscreen>
			<IonContent className="ion-padding">

				<IonList class="login-username-input">
					<IonItem>
						<IonInput placeholder="Email" type="email" onIonChange={(e: any) => setEmail(e.target.value)}></IonInput>
					</IonItem>
					<IonItem>
						<IonInput placeholder="Password" type="password" onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
					</IonItem>
				</IonList>

				<IonButton class="login-button" color="primary" expand="full" shape="round" onClick={login}>Login</IonButton>
				<p>If you're new here, please register an account to login <Link to="/page/Register">Register</Link></p>

			</IonContent>
		</IonContent>
		
	 </IonPage>
  	);
};

export default Login;
