"use client"

import React, { useState, FormEvent, useEffect } from 'react';
import AdminPage from '../../../components/admin/admin';
import NavbarMain2 from '../../../components/navbar/main/navbarMain2';
import styles from "./page.module.css"

const AdminLoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL || '';
  const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || '';
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (email === adminEmail && password === adminPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  if (isAuthenticated) {
    return <AdminPage />;1
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
