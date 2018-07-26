import { TestBed, inject } from '@angular/core/testing';
import { AuthService } from './auth-service';

describe('AuthService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
          providers: [ AuthService ]
        });
    });

    const user1 = {
        email: 'shreya',
        password: 'shreya'
    };

    const user2 = {
        email: 'admin',
        password: 'admin'
    };

    it('should return isLoggedIn() to true if user Logged In', inject([ AuthService ], (service: AuthService) => {
        localStorage.setItem('user', JSON.stringify(user1));
        expect(service.isLogin()).toBeTruthy();
        localStorage.clear();
    }));

    it('should return isLoggedIn() to false if user Logged Out', inject([ AuthService ], (service: AuthService) => {
        expect(service.isLogin()).toBeFalsy();
    }));

    it('should return isAdmin() to true if user email is `admin`', inject([ AuthService ], (service: AuthService) => {
        localStorage.setItem('user', JSON.stringify(user2));
        expect(service.isAdmin()).toBeTruthy();
        localStorage.clear();
    }));

    it('should return isAdmin() to false if user email is not admin', inject([ AuthService ], (service: AuthService) => {
        localStorage.setItem('user', JSON.stringify(user1));
        expect(service.isAdmin()).toBeFalsy();
    }));
});
