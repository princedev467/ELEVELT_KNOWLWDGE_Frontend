import React, { useContext, useEffect } from 'react';
import Header from '../Component/Header/Header';
import Footer from '../Component/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import About from '../Component/About/About';
import Home from '../Container/Home/Home'
import Become_Instructor from '../Component/Become_Instructor/Become_Instructor';
import Blog_Detail from '../Component/Blog_Detail/Blog_Detail';
import Blog_Grid from '../Component/Blog_Grid/Blog_Grid';
import Blog_Masonry from '../Component/Blog_Masonry/Blog_Masonry';
import Book_Class from '../Component/Book_Class/Book_Class';
import Cart from '../Component/Cart/Cart';
import Coming_Soon from '../Component/Coming_Soon/Coming_Soon';
import Contact_us from '../Component/Contact_us/Contact_us';
import Checkout from '../Component/Checkout/Checkout';
import Course_Added from '../Component/Course_Added/Course_Added';
import Course_Detail from '../Component/Course_Detail/Course_Detail';
import Course_Detail_Advance from '../Component/Course_Detail_Advance/Course_Detail_Advance';
import Course_Detail_Minimal from '../Component/Course_Detail_Minimal/Course_Detail_Minimal';
import Course_List_Minimal from '../Component/Course_List_Minimal/Course_List_Minimal';
import Course_List_Classic from '../Component/Course_List_Classic/Course_List_Classic';
import Course_Video_Player from '../Component/Course_Video_Player/Course_Video_Player';
import Course_Grid_Classic from '../Component/Course_Grid_Classic/Course_Grid_Classic';
import Course_Grid_Minimal from '../Component/Course_Grid_Minimal/Course_Grid_Minimal';
import Empty_Cart from '../Component/Empty_Cart/Empty_Cart';
import Error_404 from '../Component/Error_404/Error_404';
import Faq from '../Component/Faq/Faq';
import Forget_Password from '../Component/Forget_Password/Forget_Password';
import Instructor_Manage_Course from '../Component/Instructor_Manage_Course/Instructor_Manage_Course';
import Instructor_Order from '../Component/Instructor_Order/Instructor_Order';
import Instructor_Payout from '../Component/Instructor_Payout/Instructor_Payout';
import Instructor_Review from '../Component/Instructor_Review/Instructor_Review';
import Instructor_Single from '../Component/Instructor_Single/Instructor_Single';
import Instructor_List from '../Component/Instructor_List/Instructor_List';
import Instructor_Dashboard from '../Component/Instructor_Dashboard/Instructor_Dashboard';
import Instructor_Earning from '../Component/Instructor_Earning/Instructor_Earning';
import Instructor_Student_list from '../Component/Instructor_Student_list/Instructor_Student_list';
import Instructor_Create_Course from '../Component/Instructor_Create_Course/Instructor_Create_Course';
import Pricing from '../Component/Pricing/Pricing';
import Request_Access from '../Component/Request_Access/Request_Access';

import University_Admission_Form from '../Component/University_Admission_Form/University_Admission_Form';
import Student_Dashboard from '../Component/Student_Dashboard/Student_Dashboard';
import Student_Subscription from '../Component/Student_Subscription/Student_Subscription';
import Student_Course_list from '../Component/Student_Course_list/Student_Course_list';
import Student_Payment_Info from '../Component/Student_Payment_Info/Student_Payment_Info';
import Wishitlist from '../Component/Wishitlist/Wishitlist';
import Request_Demo from '../Component/Request_Demo/Request_Demo';
import PrivateRouts from './PrivateRouts';
import CategoryPage from '../Admin/Container/Category/CategoryPage';
import CategoryData from '../Component/Category/CategoryData';

import Chat from '../Container/Chat/Chat';

import Auth from '../Component/Register/Auth';
import NotificationDemo from '../Component/NotificationDemo/NotificationDemo';
import { useDispatch, useSelector } from 'react-redux';
import { userCheck } from '../Redux/slice/auth.slice';
import { ThemeContext } from '../context/theme.context';
import CourseDisplay from '../Component/Course/CourseDisplay';
// import Category from '../Component/Category/CategoryData';
import AdminRouts  from './AdminRouts';
import QuizPage from '../Component/QuizData/QuizPage';

function UserRouts(props) {
    const themeData = useContext(ThemeContext);
      console.log(themeData);

    const dispatch=useDispatch()
     useEffect(() => {
  
      dispatch(userCheck())
    
    }, [])


  

  
    return (
        <div className={themeData.theme==='light'?'dark':'light'}>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} ></Route>
                 {/* <Route path='/CategoryPage' element={<CategoryPage/>} ></Route> */}
                 {/* category */}
                  <Route path='/category' element={<CategoryData/>} ></Route>
                 <Route path='/category/:id' element={<CategoryData/>} ></Route>

                {/* course */}
                  <Route path='/course' element={<CourseDisplay/>} ></Route>
                   <Route path='/course/:id' element={<CourseDisplay/>} ></Route>

                  {/* course Detail*/}  
                <Route path='/Course_Detail' element={<Course_Detail />}></Route>
                 <Route path='/Course_Detail/:id' element={<Course_Detail />}></Route>
            
                {/* quizPage */}
                 <Route path='/quiz' element={< QuizPage />} ></Route>
                 <Route path='/quiz/:id' element={< QuizPage />} ></Route>
                 
{/* video player */}
                 <Route path='/Course_Video_Player/:id' element={< Course_Video_Player />} ></Route>
                 
                 {/* <Route path='/category/:id' element={<CategoryPage />} /> */}

                 {/* Instructor */}
                  <Route path='/Instructor_Create_Course' element={<Instructor_Create_Course />}></Route>
                <Route path='/Instructor_Create_Course/:id' element={<Instructor_Create_Course />}></Route>
               
                <Route path='/about' element={< About />} ></Route>
                 <Route path='/chat' element={<Chat />} ></Route>
                 <Route path='/about/:id' element={< About />} ></Route>
                <Route path='/Become_Instructor' element={< Become_Instructor />} ></Route>
                <Route path='/Blog_Detail' element={< Blog_Detail />} ></Route>
                <Route path='/Blog_Grid' element={<Blog_Grid />}></Route>
                <Route path='/Blog_Masonry' element={<Blog_Masonry />}></Route>
                <Route path='/Book_Class' element={<Book_Class />}></Route>
                <Route path='/Cart' element={<Cart />}></Route>
                <Route path='/Coming_Soon' element={< Coming_Soon />} ></Route>
                <Route path='/Contact_us' element={<Contact_us />}></Route>
                <Route path='/Checkout' element={<Checkout />}></Route>
                <Route path='/Course_Added' element={<Course_Added />}></Route>
                <Route path='/Course_Detail_Advance' element={<Course_Detail_Advance />} ></Route>
                <Route path='/Course_Detail_Minimal' element={< Course_Detail_Minimal />} ></Route>
                <Route path='/Course_List_Minimal' element={< Course_List_Minimal />} ></Route>
                <Route path='/Course_List_Classic' element={< Course_List_Classic />} ></Route>
                <Route path='/Course_Video_Player' element={<Course_Video_Player />}></Route>
                <Route path='/Course_Grid_Classic' element={<Course_Grid_Classic />}></Route>
                <Route path='/Course_Grid_Minimal' element={<Course_Grid_Minimal />}></Route>
                <Route path='/Empty_Cart' element={< Empty_Cart />} ></Route>
                <Route path='/Error_404' element={<Error_404 />}></Route>
                <Route path='/Faq' element={<Faq />}></Route>
                <Route path='/Forget_Password' element={<Forget_Password />}></Route>
                <Route path='/Instructor_Manage_Course' element={<Instructor_Manage_Course />}></Route>
                <Route path='/Instructor_Order' element={<Instructor_Order />}></Route>
                <Route path='/Instructor_Payout' element={<Instructor_Payout />}></Route>
                <Route path='/Instructor_Review' element={<Instructor_Review />}></Route>
                <Route path='/Instructor_Single' element={<Instructor_Single />}></Route>
                <Route path='/Instructor_List' element={< Instructor_List />} ></Route>
                <Route path='/Instructor_Earning' element={< Instructor_Earning />} ></Route>
                <Route path='/Instructor_Student_list' element={<Instructor_Student_list />}></Route>
                <Route path='/Pricing' element={<Pricing />}></Route>
                <Route path='/Request_Access' element={< Request_Access />} ></Route>
                <Route path='/Request_Demo' element={<Request_Demo />}></Route>
        
                {/* Auth */}
                
                 <Route path='/Auth' element={<Auth />}></Route>
                  <Route path='/Auth/:Instructor' element={<Auth />}></Route>
               
                {/* Notification */}
                NotificationDemo
                <Route path='/NotificationDemo' element={<NotificationDemo />}></Route>
                <Route path='/University_Admission_Form' element={<University_Admission_Form />}></Route>
                <Route path='/Student_Subscription' element={<Student_Subscription />}></Route>
                <Route path='/Student_Course_list' element={< Student_Course_list />} ></Route>
                <Route path='/Student_Payment_Info' element={<Student_Payment_Info />}></Route>
                <Route path='/Wishitlist' element={<Wishitlist />}></Route>

        <Route>
              <Route path='*' element={<Error_404 />}></Route>
        </Route>


                <Route element={<PrivateRouts  />}>
                    <Route path='/Student_Dashboard' element={<Student_Dashboard />}></Route>
                    <Route path='/Instructor_Dashboard' element={< Instructor_Dashboard />} ></Route>
                </Route>
                

            </Routes>
            <Footer />


        </div>
    );
}

export default UserRouts;