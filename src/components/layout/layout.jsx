import React, {Component} from "react"
import Landing from "./landing/landing"
import Pricing from "./pricing/pricing"
import Blogs from "./blogs/blogs"
import Post from "./blogs/post/post"
import AboutUs from "./about-us/about-us"
import ContactUs from "./contact-us/contact-us"
import Navigation from "./navigation/navigation"
import CallUsBar from "./call-us-bar/call-us-bar"
import {Switch,Route} from "react-router-dom"
import Footer from "./footer/footer"
import Fixed from "./fixed/fixed"


import Verify from "./admin/verify/verify"
import ChangePassword from "./admin/changePassword/changePassword"
import AdminBlogs from "./admin/blogs/blogs"
import AdminPost from "./admin/blogs/post/post"
import AdminNavigation from "./admin/navigation/navigation"
import AdminStudentList from "./admin/student-list/student-list"



 class Layout extends Component{


    state={

    }

   render(){



     return (
        <div className="layout">

        <Switch>
            
            <Route path="/">
               <CallUsBar authenticated={this.props.authenticated} styles={this.props.styles}/>
            </Route>
        </Switch>
           <hr className="hr"/>
           <Switch>
              
               <Route path="/">
                  <Fixed authenticated={this.props.authenticated} styles={this.props.styles}/>
               </Route>
           </Switch>
           <div className="main">
             <Switch>
                 <Route path="/admin">
                    <AdminNavigation authenticated={this.props.authenticated} styles={this.props.styles}/>
                 </Route>
                 <Route path="/">
                    <Navigation styles={this.props.styles}/>
                 </Route>
             </Switch>
             <Switch>
                <Route exact path="/">
                    <Landing  styleHandler={this.props.styleHandler}  styles={this.props.styles}/>
                </Route>
                <Route exact path="/pricing">
                    <Pricing   styles={this.props.styles}/>
                </Route>
                <Route exact path="/contactUs">
                    <ContactUs  styles={this.props.styles}/>
                </Route>
                <Route exact path="/aboutUs">
                    <AboutUs   styles={this.props.styles}/>
                 </Route>
                 <Route exact path="/blogs">
                     <Blogs   styles={this.props.styles}/>
                 </Route>
                 <Route exact path="/blogs:id">
                     <Post  styles={this.props.styles}/>
                 </Route>


                 <Route exact path="/admin/verify">
                     <Verify />
                 </Route>
                 <Route exact path="/admin/passwordReset/:key">
                     <ChangePassword />
                 </Route>
                  <Route exact path="/admin/blogs">
                      <AdminBlogs authenticated={this.props.authenticated}   styles={this.props.styles}/>
                  </Route>
                  <Route exact path="/admin/blogs:id">
                      <AdminPost authenticated={this.props.authenticated}  styles={this.props.styles}/>
                  </Route>
                  <Route exact path="/admin">
                      <AdminStudentList authenticated={this.props.authenticated}  styles={this.props.styles}/>
                  </Route>
             </Switch>
           </div>
           <Switch>
               
               <Route path="/">
                  <Footer styles={this.props.styles}/>
               </Route>
           </Switch>
        </div>
     )
   }
 }


export default Layout;
