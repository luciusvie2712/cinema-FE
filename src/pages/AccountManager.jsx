import React, { useEffect, useState } from 'react'
import axiosInstance from '../../axiosInstance'
import Sidebar from '../components/Admin/Sidebar'
import '../assets/style/AccountManager.scss'

const AccountManager = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axiosInstance.get('/api/admin/users', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        setUsers(res.data)
      } catch (err) {
        console.error('Lỗi khi lấy danh sách user:', err)
      }
    }

    fetchUsers()
  }, [])

  const handleDelete = async (userId) => {
    const confirm = window.confirm('Bạn có chắc muốn xóa tài khoản này không?')
    if (!confirm) return

    try {
      await axiosInstance.delete(`/api/admin/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      setUsers(users.filter(user => user._id !== userId))
      alert('Xóa thành công!')
    } catch (err) {
      console.error('Lỗi khi xóa người dùng:', err)
      alert('Xóa thất bại!')
    }
  }

  return (
    <div className="account-manager__container">
      <Sidebar />
      <div className="account-manager__content">
        <h2 className="account-manager__title">Quản lý tài khoản người dùng</h2>
        <table className="account-manager__table">
          <thead>
            <tr>
              <th>Tên</th>
              <th>Email</th>
              <th>SĐT</th>
              <th>Vai trò</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.fullName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    className="account-manager__delete-btn"
                    onClick={() => handleDelete(user._id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AccountManager
