import { defineStore } from 'pinia';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const useUserStore = defineStore('user', {
    state: () => ({
        user: null,
        isLoggedIn: false,
    }),
    actions: {
        async getUser(token) {
            if (!token) {
                this.setUser(null);
                this.isLoggedIn = false;
                return;
            }
            try {
                const { userId } = jwt_decode(token);
                const response = await axios.get(`http://localhost:3001/users/${userId}`);
                this.setUser(response.data);
                this.isLoggedIn = true;
            } catch (error) {
                console.error(error);
                this.setUser(null);
                this.isLoggedIn = false;
            }
        },
        setUser(user) {
            this.user = user;
            console.log('store', this.user);
        },
        loginUser(data) {
            this.setUser(data);
            this.isLoggedIn = true;
            console.log('store', this.user);
        },
        logoutUser() {
            this.setUser(null);
            this.isLoggedIn = false;
            console.log('store', this.user);
        },
    },
});

export { useUserStore };
