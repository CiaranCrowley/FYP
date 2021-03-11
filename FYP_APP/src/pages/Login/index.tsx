import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonList, IonLoading, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase from '../../firebaseConfig';
import { toast } from '../../toast';
import './styles.css';

const Login: React.FC = () => {

	const [busy, setBusy] = useState<boolean>(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();

	async function login() {

		setBusy(true);
		try {
			await firebase.auth().signInWithEmailAndPassword(email, password);
			history.push('/page/Site_List');
			setBusy(false);
			return true;
		} catch (error) {
			toast(error.message, 4000);
			return false;
		}
	}

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
					</IonButtons>
					<IonTitle className="ion-text-center">Login</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonLoading message="Please wait..." duration={0} isOpen={busy} />

			<IonContent className="ion-padding" fullscreen>

				<div className="center-content">
					<IonList>
						<IonItem>
							<IonInput placeholder="Email" type="email" onIonChange={(e: any) => setEmail(e.target.value)}></IonInput>
						</IonItem>
						<IonItem>
							<IonInput placeholder="Password" type="password" onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
						</IonItem>
					</IonList>
					<IonButton className="ion-margin-top" color="primary" expand="full" shape="round" onClick={login}>Login</IonButton>
					<p>If you're new here, please register an account to login <Link to="/page/Register">Register</Link></p>
				</div>

			</IonContent>

		</IonPage>
	);
};

export default Login;
