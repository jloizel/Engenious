"use client"

import React, { useState, FormEvent } from 'react';
import AdminPage from '../../../components/admin/admin';
import NavbarMain2 from '../../../components/navbar/main/navbarMain2';
import styles from "./page.module.css"
import dotenv from "dotenv";

const AdminLoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  dotenv.config()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const storedEmail = process.env.REACT_APP_EMAIL;
    const storedPassword = process.env.REACT_APP_PASSWORD;

    if (email === storedEmail && password === storedPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  if (isAuthenticated) {
    return <AdminPage />;
  }

  return (
    <div>
      <NavbarMain2/>
      <div className={styles.container}>
        {!isAuthenticated ? (
        <div className={styles.loginForm}>
          <span className={styles.header}>Admin Access</span>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
              <label style={{marginRight: "46px"}}>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.inputContainer}>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className={styles.button}>Login</button>
          </form>
        </div>
        ) : <AdminPage/>}
      </div>
    </div>
  );
};

export default AdminLoginPage;
