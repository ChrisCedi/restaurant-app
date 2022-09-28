import app from "firebase/compat/app";
import firebaseConfig from "./config";
import "firebase/compat/firestore";
import "firebase/compat/storage";

class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
    }
    this.db = app.firestore();
    this.storage = app.storage();
  }
}

export const firebase = new Firebase();
