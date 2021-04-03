import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote
} from '@ionic/react';
import { add, business, home, logIn, logOut, paperPlaneOutline, paperPlaneSharp } from 'ionicons/icons';
import { useLocation } from 'react-router-dom';
import { loggedInUser } from '../pages/Login';
import './Menu.css';
interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/page/Home',
    iosIcon: home,
    mdIcon: home
  },
  {
    title: 'Login',
    url: '/page/Login',
    iosIcon: logIn,
    mdIcon: logIn
  },
  {
    title: 'Register',
    url: '/page/Register',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp
  },
  {
    title: 'Site List',
    url: '/page/Site_List',
    iosIcon: business,
    mdIcon: business
  },
  {
    title: 'Add Site',
    url: '/page/Add_Site',
    iosIcon: add,
    mdIcon: add
  }
];

const labels = ['Log out'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Inbox</IonListHeader>
          <IonNote>{loggedInUser}</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
        <IonList id="labels-list">
          {labels.map((label, index) => (
            <IonItem lines="none" key={index} routerLink={`/page/Home`}>
              <IonIcon slot="start" icon={logOut} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
