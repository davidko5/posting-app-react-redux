import { configureStore } from '@reduxjs/toolkit'
import postsReduser from '../features/posts/postsSlice'
import usersReduser from '../features/users/usersSlice'
import notificationsReduser from '../features/notifications/notificationsSlice'

export default configureStore({
  reducer: {
    posts: postsReduser,
    users: usersReduser,
    notifications: notificationsReduser,
  },
})
