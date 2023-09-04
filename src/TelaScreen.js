import React, { useState } from "react"
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [passoword, setPassoword] = useState('');

    const handleLogin = () => {
        console.log(`login com Email: ${email} e senha: ${passoword}`);
    };
};