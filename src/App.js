import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { Routes,Route } from 'react-router-dom';
import Footer from './components/Footer/footer';
import Register from './components/auth/Register'
import Intern from './components/Internships/Intern'
import JobAvl from './components/Job/JobAvl'
import JobDetail from './components/Job/JobDetail';
import InternDeatil from './components/Internships/InternDeatil';
import { useDispatch} from 'react-redux';
import { login,logout} from "./Feature/Userslice"
import { auth } from './firebase/firebase';
import { useEffect } from 'react';
import Profile from './profile/profile';
import AdminLogin from './Admin/AdminLogin';
import Adminpanel from './Admin/Adminpanel';
import Postinternships from './Admin/Postinternships';
import ViewAllApplication from './Admin/ViewAllApplication'
import DetailApplication from './Applications/DetailApplication';
import UserApplicatiom from './profile/UserApplication';
import UserDetailApplication from './Applications/DetailApplicationUser';
function App() {

  const dispatch=useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
      
      if(authUser){
        dispatch(login({
  
          uid:authUser.uid,
          photo:authUser.photoURL,
          name:authUser.displayName,
          email:authUser.email,
          phoneNumber:authUser.phoneNumber
        }))
        
      }
        else{
          dispatch(logout())
        }
    })
    },[dispatch] );
  return (
    <div className="App">
      <Navbar/>

      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/internship' element={<Intern/>}/>
          <Route path='/Jobs' element={<JobAvl/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/detailjob' element={<JobDetail/>}/>
          <Route path='/detailApplication' element={<DetailApplication/>}/>
          <Route path='/detailInternship' element={<InternDeatil/>}/>
          <Route path='/adminLogin' element={<AdminLogin/>}/>
          <Route path='/adminepanel' element={<Adminpanel/>}/>
          <Route path='/applications' element={<ViewAllApplication/>}/>
          <Route path='/UserapplicationDetail' element={<UserDetailApplication/>}/>
          <Route path='/userapplication' element={<UserApplicatiom/>}/>
      </Routes>
      <Footer />
    </div> 
  );
}

export default App;
  