import logo from './logo.svg';
import './App.css';
import BaiTapOanTuXi from './Component/BaiTapOanTuXi/BaiTapOanTuXi';
import Parent from './Lifecycle/Demo/Parent';
import BaiTapThuDo from './Component/BaiTapThuDo/BaiTapThuDo';
import DemoPureComponent from './Lifecycle/DemoPureComponent/DemoPureComponent';
import UserProfile from './FormValidation/UserProfile/UserProfile';
import DemoJSS from './JSS_StyledComponent/DemoJSS/DemoJSS';
import DemoTheme from './JSS_StyledComponent/Themes/DemoTheme';
import ToDoList from './JSS_StyledComponent/BaiTapStyleComponent/TodoList/ToDoList';
import BaiTapBookingTicket from './Component/BaiTapBookingTicket/BaiTapBookingTicket';
import BaiTapThuKinh from './Component/BaiTapThuKinh/BaiTapThuKinh';


function App() {
  return (
    <div className="App">
      {/* <BaiTapOanTuXi /> */}
      {/* <Parent /> */}
      {/* <BaiTapThuDo /> */}
      {/* <DemoPureComponent /> */}
      {/* <UserProfile /> */}
      {/* <DemoJSS /> */}
    {/* <DemoTheme /> */}
    <ToDoList />
    {/* <BaiTapBookingTicket /> */}
    {/* <BaiTapThuKinh /> */}
    </div>
  );
}

export default App;
