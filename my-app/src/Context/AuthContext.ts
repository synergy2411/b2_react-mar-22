import React from 'react';

const AuthContext = React.createContext({
    isAuthenticated : false,
    createAt : new Date("Dec 21, 2019")
})

export default AuthContext;