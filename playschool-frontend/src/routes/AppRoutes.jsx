import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Academic from '../pages/Academic';
import PlayMaterial from '../pages/PlayMaterial';
import CulturalEvent from '../pages/CulturalEvent';
import Infrastructure from '../pages/Infrastructure';
import StudentsStaff from '../pages/StudentsStaff';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/academic" element={<Academic />} />
      <Route path="/play-material" element={<PlayMaterial />} />
      <Route path="/cultural-event" element={<CulturalEvent />} />
      <Route path="/infrastructure" element={<Infrastructure />} />
      <Route path="/students-staff" element={<StudentsStaff />} />
    </Routes>
  );
};

export default AppRoutes;