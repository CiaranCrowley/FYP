import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonList, IonLoading, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { loginUser } from '../../firebaseConfig';
import { toast } from '../../toast';
import './styles.css';

const Login: React.FC = () => {

	const [busy, setBusy] = useState<boolean>(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();

	async function login() {

		setBusy(true);
		const res = await loginUser(email, password);
		if (res) {
			toast("You have successfully logged in");
			history.push('/page/Site_List');
		}
		setBusy(false);
	}

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
					</IonButtons>
					<IonTitle className="ion-text-center">Login Page</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonLoading message="Please wait..." duration={0} isOpen={busy} />

			<IonContent fullscreen>
				<IonContent className="ion-padding">

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
			</IonContent>

		</IonPage>
	);
};

export default Login;
