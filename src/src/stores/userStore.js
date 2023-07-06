import { defineStore } from 'pinia';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const useUserStore = defineStore('user', {
    state: () => ({
        user: null,
    }),
    actions: {
        async getUser(token) {
            if (!token) {
                this.setUser(null);
                return;
            }
            try {
                const { userId } = jwt_decode(token);
                const response = await axios.get(`http://localhost:3001/users/${userId}`);
                this.setUser(response.data);
            } catch (error) {
                console.error(error);
                this.setUser(null);
            }
        },
        setUser(user) {
            this.user = user;
            console.log('store', this.user);
        },
        loginUser(data) {
            this.setUser(data);
            console.log('store', this.user);
        },
        logoutUser() {
            this.setUser(null);
            console.log('store', this.user);
        },
    },
});

export { useUserStore };
