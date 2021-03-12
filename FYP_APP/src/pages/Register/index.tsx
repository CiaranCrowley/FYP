import { IonButtons, IonContent, IonHeader, IonInput, IonButton, IonList, IonMenuButton, IonPage, IonItem, IonTitle, IonToolbar, IonLoading } from '@ionic/react';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import React, { useState } from "react";
import { toast } from '../../toast';
import firebase from '../../firebaseConfig';

const Register: React.FC = () => {

	const [busy, setBusy] = useState<boolean>(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [cpassword, setCPassword] = useState('');
	const history = useHistory();

	async function register() {

		setBusy(true);
		// Validation
		if (password !== cpassword) {
			return toast('Passwords do not match');
		}
		if (email === '' || password === '') {
			return toast('Username and password are required');
		}

		try {
			await firebase.auth().createUserWithEmailAndPassword(email, password);
			toast('Registration successful');
			history.push('/page/Login');
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
					<IonTitle className="ion-text-center">Register</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonLoading message="Registering your details" duration={0} isOpen={busy} />

			<IonContent className="ion-padding" fullscreen>

				<div className="center-content">
					<IonList>
						<IonItem>
							<IonInput placeholder="Email" type="email" required onIonChange={(e: any) => setEmail(e.target.value)}></IonInput>
						</IonItem>
						<IonItem>
							<IonInput placeholder="Password" type="password" required onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
						</IonItem>
						<IonItem>
							<IonInput placeholder="Confirm Password" type="password" required onIonChange={(e: any) => setCPassword(e.target.value)}></IonInput>
						</IonItem>
					</IonList>
					<IonButton className="ion-margin-top" color="primary" expand="full" shape="round" onClick={register}>Register</IonButton>
					<p>Already have an account? <Link to="/page/Login">Login</Link></p>
				</div>

			</IonContent>

		</IonPage>
	);
};

export default Register;
