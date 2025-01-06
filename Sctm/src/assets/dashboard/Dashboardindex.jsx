import {SideBar} from './SideBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router';

import {Home} from './page/home/Home';
import {Whatsapp} from './page/Whatsapp/Whatsapp';
import {TopBar} from './TopBar';
import {Student} from './page/student/Student';
import {AddStudent} from './page/student/AddStudent';
import {StudentDetail} from './page/student/StudentDetail';

export const Dashboardindex = () => {
  return (
    <SideBar>
      <TopBar />
      <Routes>
        <Route path="/student" element={<Student />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/whatsapp" element={<Whatsapp />} />
        {/* <Route path="/student" element={<Student />} /> */}
        <Route path="/student/add-student" element={<AddStudent />} />
        <Route path="/student/student-detail" element={<StudentDetail />} />
      </Routes>
    </SideBar>
  );
};
