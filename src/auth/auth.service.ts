import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, User} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { onAuthStateChanged } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   private user: User | null = null;

  constructor(private auth: Auth, private router: Router) {
     onAuthStateChanged(this.auth, (user) => {
      this.user = user;
      if(user) {
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        localStorage.removeItem('user');
      }
     });
  }

   //inscription
  async signUp (email: string, password: string): Promise<any> {
    try {
      return await createUserWithEmailAndPassword(this.auth, email, password);
    } catch (error) {
      console.error('Erreur lors de l\'inscription.', error);
      throw error;
    }
  }

  // Connexion
  async signIn(email: string, password: string): Promise<any> {
    try {
      return await signInWithEmailAndPassword(this.auth, email, password);
    } catch (error) {
      console.error('Erreur lors de la connexion', error);
      throw error;
    }
  }

  // Déconnexion
 async signOut(): Promise<void> {
    await signOut(this.auth);
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

  //   Vérifier si l'utilisateur est connecté
  isLoggedIn(): boolean {
    return !! localStorage.getItem('user');
  }

  // Obtenir l'utilisateur connecté
  getUser(): User | null {
    return this.user;
  }
}
