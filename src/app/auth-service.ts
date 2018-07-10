export class AuthService {

  user;

  isLogin() {
    this.user = JSON.parse(localStorage.getItem('user'));
    if (this.user != null) {
      return true;
    } else {
      return false;
    }
  }

  isAdmin() {
    this.user = JSON.parse(localStorage.getItem('user'));
    if (this.user != null && this.user.email === 'admin') {
      return true;
    } else {
      return false;
    }
  }

}
