import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
// import ExploreContainer from '../../components/ExploreContainer';
import './styles.css';

const Login: React.FC = () => {
	
	const { name } = useParams<{ name: string; }>();
	
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Login</IonTitle>
				</IonToolbar>
			</IonHeader>
			
			<IonContent fullscreen>
				
			</IonContent>

	 	</IonPage>
  	);
};

export default Login;