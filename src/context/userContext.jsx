/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { getLocalStorage, saveLocalStorage } from '../utils/storage';
import authServices from "../services/authServices";
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment/moment";
import localization from 'moment/locale/fr'

moment.updateLocale('fr', localization);

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    let once = false;

    const initUser = async (jwtToken) => {
        once = true;
        try {
            let token = await getLocalStorage("token");
            if (jwtToken) {
                token = jwtToken;
            }

            if (token) {
                const user = await authServices.UserInfo(token);
                setToken(token);
                setUser(user);
            } else {
                await logout();
            }
        } catch (error) {
            await logout();
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (once === false) {
            initUser();
        }
    }, []);


    const login = async (credentials) => {
        let user = await authServices.login(credentials);
        const { token } = user;
        await saveLocalStorage("token", token);
        await initUser(token);
    }

    const logout = async () => {
        try {
            AsyncStorage.removeItem("token");
            setUser(null);
            setToken(null);
            once = false;
        } catch (error) {
            console.error("Error logging out user", error);
        }
    }

    return (
        <UserContext.Provider value={{
            user,
            token,
            isLoading,
            login,
            logout
        }}>
            {children}
        </UserContext.Provider>
    )
}