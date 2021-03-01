import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonItem, IonInput, IonLoading } from '@ionic/react'
import React, { useState } from 'react'
import { Link, useHistory  } from 'react-router-dom'
import './styles.css'
import { loginUser } from '../../firebaseConfig'
import { toast } from '../../toast'

const Login: React.FC = () => {
	
	const [busy, setBusy] = useState<boolean>(false)
	const [email, setEmail] = useState('')
  	const [password, setPassword] = useState('')
	const history = useHistory()

  	async function login() {

		setBusy(true)
		const res = await loginUser(email, password)
		if(res) {
			toast("You have successfully logged in")
			history.push('/page/Site_List')
		}
		setBusy(false)
  	}

  return (
  	<IonPage>
		<IonHeader>
			<IonToolbar>
				<IonButtons slot="start">
					<IonMenuButton /> {/*Remove this towards end of development.  Dont want users to have access to menu options unless they are logged in*/}
				</IonButtons>
				<IonTitle>Login Page</IonTitle>
		  </IonToolbar>
		</IonHeader>

		<IonLoading message="Please wait..." duration={0} isOpen={busy} />

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
