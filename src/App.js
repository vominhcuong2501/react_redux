import logo from './logo.svg';
import './App.css';
import BaiTapOanTuXi from './Component/BaiTapOanTuXi/BaiTapOanTuXi';
import Parent from './Lifecycle/Demo/Parent';
import BaiTapThuDo from './Component/BaiTapThuDo/BaiTapThuDo';
import DemoPureComponent from './Lifecycle/DemoPureComponent/DemoPureComponent';
import UserProfile from './FormValidation/UserProfile/UserProfile';

function App() {
  return (
    <div className="App">
      {/* <BaiTapOanTuXi /> */}
      {/* <Parent /> */}
      {/* <BaiTapThuDo /> */}
      {/* <DemoPureComponent /> */}
      <UserProfile />
    </div>
  );
}

export default App;
