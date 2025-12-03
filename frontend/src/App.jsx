import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
import RoleBasedRoute from './components/RoleBasedRoute'

// pages
import Login from './pages/Login'
import Register from './pages/Register'
import AdminDashboard from './pages/admin/AdminDashboard'
import UserDashboard from './pages/user/UserDashboard'
import OwnerDashboard from './pages/owner/OwnerDashboard'
import StoreBrowser from './pages/user/StoreBrowser'
import UpdatePassword from './pages/user/UpdatePassword'
import StoreList from './pages/admin/StoreList'
import UserList from './pages/admin/UserList'
import AddUser from './pages/admin/AddUser'
import StoreRatings from './pages/owner/StoreRatings'

export default function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/stores" replace />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* User routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/stores" element={<StoreBrowser />} />
            <Route path="/me" element={<UserDashboard />} />
            <Route path="/me/password" element={<UpdatePassword />} />
          </Route>

          {/* Admin routes */}
          <Route element={<RoleBasedRoute allowedRoles={['ADMIN']} />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<UserList />} />
            <Route path="/admin/users/add" element={<AddUser />} />
            <Route path="/admin/stores" element={<StoreList />} />
          </Route>

          {/* Store owner routes */}
          <Route element={<RoleBasedRoute allowedRoles={['STORE_OWNER']} />}>
            <Route path="/owner" element={<OwnerDashboard />} />
            <Route path="/owner/stores/:id/ratings" element={<StoreRatings />} />
          </Route>

          <Route path="*" element={<div>404 - Not Found</div>} />
        </Routes>
      </main>
    </div>
  )
}
