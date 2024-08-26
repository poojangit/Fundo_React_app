
import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from '../pages/Login/Login';
import SignUp from '../pages/Signup/Signup';
import DrawerBar from '../component/Drawer/DrawerBar';
import { Archive } from '../component/NotesCompo/Archive';
import { ProtectedRoute } from './ProtectedRoute';
import { AuthRoute } from './AuthRoute';
import { NoteInput } from '../component/Dashboard/Dashboard';
import { TrashNotes } from '../component/NotesCompo/TrashNotes';
import { Reminder } from '../component/NotesCompo/Reminder';
import { Edit } from '../component/NotesCompo/Edit';


export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes >
          <Route path='/login' element={<AuthRoute><Login /></AuthRoute>} />
          <Route path='/register' element={<AuthRoute><SignUp /></AuthRoute>} />
          <Route path='/' element={<ProtectedRoute><DrawerBar /></ProtectedRoute>}>
            <Route path='/' element={<NoteInput />} />
            <Route path='/archive' element={<Archive />} />
            <Route path='/trash' element={<TrashNotes />} />
            <Route path='/reminder' element={<Reminder />} />
            <Route path='/edit' element={<Edit />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  )
}
