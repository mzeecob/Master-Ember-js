import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import firebase from 'firebase/app';

export default Route.extend({
  session: service(),
  firebaseApp: service(),
  actions: {
    logout() {
      return this.get('session').invalidate();
    },
    async login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      const auth = await this.get('firebaseApp').auth();
      return auth.signInWithPopup(provider);
    }
  }
});
