import { createContext, useState } from 'react';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    const [profile, setProfile] = useState({
        _id: "",
        username: "",
        email: "",
        first_name: "",
        last_name: "",
        profile_created: "",
        account_type: "",
        skills:[],
        certifications:[],
        experience:[],
        hourly_rate:0,
        availability:'',
    });

    const updateProfile = (newProfile) => {
        setProfile((prevProfile) => ({ ...prevProfile, ...newProfile }));
    };

    return (
        <ProfileContext.Provider value={{ profile, updateProfile }}>
            {children}
        </ProfileContext.Provider>
    );
};
