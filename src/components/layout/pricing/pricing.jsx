import React, {Component} from "react"
import Faq from "./faq/faq"
import Price from "./price/price"
import LandingScreen9 from "../landing/landing-screen-9/landing-screen-9"
import {Helmet} from "react-helmet"
import axios from "axios"


 class Pricing extends Component{


  state={
    //loading:true,
     content:{
      
     //pricings
      "pricings": [
         
        
        //card 1
        {
             
              "h1": "Classroom Training",
              "p1": "",
              "price": "27,999/-",
              "p2": "Classroom Training ",
              "list": [
                  "Each classroom session is facilitated by at least one certified instructor",
                  "Case studies provide the opportunity for learners to apply their new knowledge in complex, but real world scenarios."
              ]
          },

        //card 2  
          {
              
              "h1": "Online Education",
              "p1": "p1",
              "price": "9999/-",
              "p2": "Online trainnig ",
              "list": [
                  "Easy-to-use interface",
                  "Custom Branding",
                  "Offline Reading",
                  "Analytics",
                  "User-friendly",
                  "Attractive interface",
                  "Compelling course pages",
                  "Enforce flexibility",
                  "Time zone friendly"
              ]
          },
        
        
          //card 3
          {
              
              "h1": "For Business & Schools",
              "p1": "p1",
              "price": "Contact Sales",
              "p2": "p2",
              "list": []
          }
      ],



      "faqs": [
          {
              "ques": "What are the advantages of taking classes online?",
              "ans": "Convenience and flexibility are the most common advantages of online classes. Taking classes online is ideal for someone who wants to continue working and keen to learn new skills "
          },
          {
              "ques": "How much time should I spend on one class every week?",
              "ans": "The time you spend on a class can vary. No two instructors will format their classes exactly the same. Plan to spend 1 hours daily and 3 hours on Sunday. "
          },
          {
              "ques": "How is the material available online?",
              "ans": "After making the payments, you'll get a login ID password with anroid app link, Students log into our app and can select their course sites. Once a student is in their course site, they can access lectures, PowerPoint, emails, assignments, readings, documents, videos, links, discussion boards. \n\n"
          },
          {
              "ques": "How do I interact with the professor?",
              "ans": "Students and instructors communicate primarily through course sites and emails in online courses. "
          },
          {
              "ques": "Is there interaction with other online students?",
              "ans": "Yes, students will be grouped with different different batches where they will be able to interact with there classmates. "
          }
      ]
  },
   }

   componentDidMount=()=>{
    window.scrollTo({top:0,behavior:"smooth"})


  //   axios.get("/v1/content/pricing").then(res=>{
  //     console.log(JSON.stringify(res.data));
  //     this.setState({content:res.data,loading:false});
  // }).catch(err=>{this.setState({loading:false});alert("oops")})

  }

   render(){

    if(this.state.loading)
    return <div  id="loader1"><div class="loader">Loading...</div></div>


     return (<>
          <Helmet>
             <meta charSet="utf-8" />
             <title>{"Eduport By IndiaPort | Pricing"}</title>
             <link rel="canonical" href={"http://vast-reaches-61761.herokuapp.com/pricing"} />
             <meta name="description" content={"making india world's factory"} />
         </Helmet>
          <div styles={this.props.styles} className="pricing">
          {this.state.content.pricings?<Price pricings={this.state.content.pricings} styles={this.props.styles}/>:null}
          {this.state.content.faqs? <Faq faqs={this.state.content.faqs} styles={this.props.styles}/>:null}
          </div>
          </>
     )
   }
 }


export default Pricing;
