import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"da-notes-88476","appId":"1:253794234582:web:ec21644eb9bb74e1699977","storageBucket":"da-notes-88476.firebasestorage.app","apiKey":"AIzaSyAX7I85ZrDydtyS4_qz9A1WbBJwggy-NZs","authDomain":"da-notes-88476.firebaseapp.com","messagingSenderId":"253794234582","measurementId":"G-YCCV3MJN3H"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
