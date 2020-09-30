import React, {Component} from "react"
import LandingScreen1 from "./landing-screen-1/landing-screen-1"
import LandingScreen2 from "./landing-screen-2/landing-screen-2"
import LandingScreen3 from "./landing-screen-3/landing-screen-3"
import LandingScreen4 from "./landing-screen-4/landing-screen-4"
import LandingScreen5 from "./landing-screen-5/landing-screen-5"
import LandingScreen6 from "./landing-screen-6/landing-screen-6"
import LandingScreen7 from "./landing-screen-7/landing-screen-7"
import LandingScreen8 from "./landing-screen-8/landing-screen-8"
import LandingScreen9 from "./landing-screen-9/landing-screen-9"
import LandingScreen10 from "./landing-screen-10/landing-screen-10"
import {Helmet} from "react-helmet"
import axios from "axios"

class Landing extends Component{

  state={
    content:{
    
    //row1
      "r1h1": "A platform created to ease global trade.",
      "r1p1": "Online video classes with in-depth & practical skills. Education made easy, affordable and fun!",
      "r2h1": "About Eduport:",
      "r2p1":"Eduport is training centre of Indiaport. We provide helping hand to India’s export business to ease its global trade.Eduport has taken an initiative to make people aware of various opportunities in the International market with our unique way of training, the participants. Eduport with its exclusive mastery aims to hasten the globalization of India and build an International business by educating and brushing exim skills of the working class.",
    
    
   //row 2   
      "r2h2": "COURSE DETAILS",
      "r2h3": "r2h3",
      "r2list1": [
          {
              "icon": " fa-book",
              "p1": "Modules",
              "p2": "14"
          },
          {
              "icon": " fa-calendar",
              "p1": "Duration ",
              "p2": " 1 Month"
          },
          {
              "icon": " fa-clock-o",
              "p1": "Zoom Call ",
              "p2": " Every Sunday "
          },
          {
              "icon": "fa-book",
              "p1": "premium helpdesk expert",
              "p2": ""
          }
      ],
      "r2list2": [
          {
              "icon": " fa-video-camera",
              "p1": "Video tutorials"
          },
          {
              "icon": " fa-mobile",
              "p1": "Mobile application"
          },
          {
              "icon": "Flexible online classes",
              "p1": "Powerpoint and PDF presentation"
          },
          {
              "icon": "Pause courses",
              "p1": "Offline Mode "
          }
      ],




    //row 3 -   Cards
      "r3h1": "Who can Enroll:",//Heading
      
      "r3h2": "For Students",//card-1 heading
      "r3h3": "Students ",//card-1 flip heading

      "r3h4": "For Professionals",//card-2 heading
      "r3h5": "Professionals ",//card-2 flip heading

      "r3h6": "For Entrepreneurs",//card-3 heading
      "r3h7": "Entrepreneurs ",//card-3 flip heading

      "r3p1": "International trade is one of the top industries of the new millennium. ", //card-1 paragraph
      "r3p2":"International trade is one of the top industries of the new millennium.One can not just help in the growth of nations economy but, largely contribute to its profit.",//card-1 flip paragraph

      "r3p3":"While importing products can reduce costs, exporting products guarantee an increase in sale. ",//card-2 paragraph
      "r3p4":"While importing products can reduce costs, exporting products guarantee an increase in sale. Exporting product or working as an import-export agent, this industry offers exciting and fulfilling opportunities.",//card-2 flip paragraph
      
      "r3p5": "Exporting products is good to increase business. ",//card-3 paragraph
      "r3p6": "Exporting products is good to increase business. Instead of earning finance by selling products only in the local market, an entrepreneur can take its business abroad and discover new opportunities, diversify risk and make money internationally",//card-3 flip paragraph
      
      
      
     //row 4 

     "r4h1": "How it works",//heading
      "r4": [
          {
              "h1": "Complete all 14 modules",
              "p1": "Learn new skills with our bite-sized video tutorials, then test your knowledge with a quick quiz."
          },
          {
              "h1": "Take the final exam",
              "p1": "Pass the final 40-question exam and get certified.\n\n"
          },
          {
              "h1": "Share your certificate",
              "p1": "Download and showcase your new qualification on LinkedIn and your CV."
          }
      ],





   //row 5   --  Sliding Cards (Modules)
        
   

   //module list
      "r5": [
 
     //module 1
          { 
              "h1": " Parties and places involved in import-export",//heading 1
              "h2": "14 Lesson /50 mins ",//heading 2
              "icon": " fa-mobile",//icon name
             
              //list
               "list": [
                  "Import",
                  "EOU",
                  "Status Holder Exporter",
                  "Green Channel",
                  "Major ports in India",
                  "CF",
                  "Non-Vessel Operating Common Carriers"
              ]
          },

       
       //module 2   
          {
             
              "h1": "Types of Transportation, Container and packaging",
              "h2": "8 Lessons / 30 min",
              "icon": " fa-mobile\n",
              "list": [
                  "i. Shipment by Air",
                  "ii. Road transport",
                  "iv. Types of Shipping Containers",
                  "v. Freight",
                  "vi. FCL & LCL",
                  "vii. Ocean Container Dimension",
                  "viii. Types of Packages",
                  ""
              ]
          },
         
         
        //module 
          {
              
              "h1": "Basic Registration for Exim",
              "h2": "10 Lessons / 45 min",
              "icon": " fa-mobile\n",
              "list": [
                  " viii. Find Supplier & Market Selection",
                  "viii. Find Supplier & Market Selection",
                  "ix. Find Buyers from EPC ",
                  " x.  Commodity Board"
              ]
          },

  
         
        //module 
           {
             
              "h1": "Basic Terms",
              "h2": "4 Lessons / 30 min",
              "icon": " fa-mobile",
              "list": [
                  "SION",
                  "GST","iii. GST & LUT "]},
       
           
         
        //module 
         {
             
              "h1": "Incoterms",
              "h2": "",
              "icon": "fa-mobile",
              "list": []
          },
         
            
         
        //module 
          {
              
              "h1": "Export Incentives",
              "h2": "6 lesson /30 min",
              "icon": "fa-mobile",
              "list": [
                  "i. Export Promotion Schemes",
                  "ii. Duty Credit Scrips",
                  "iii. Duty Drawback Scrips",
                  "iv. EPCG",
                  "v. GST REfunds on Account of Export",
                  "  vi. Interest Equalisation Scheme "
              ]
          },
        
        
            
         
        //module 
          {
              
              "h1": "Risk management and insurance",
              "h2": "4 lesson / 30 min",
              "icon": "fa-mobile",
              "list": [
                  "i. Risk Management",
                  "ii.Marine Insurance",
                  "iii. Warehousing",
                  "iv. ECGC"
              ]
          },
          
          
            
         
        //module 
          {
              
              "h1": "Documents",
              "h2": "13 lesson/50 min",
              "icon": "fa-mobile",
              "list": [
                  "i. Invoice",
                  "ii. Buyer and Consignee",
                  "iii. Packing List",
                  "iv. Certificate of Origin",
                  "v. Mates Receipt",
                  "vi. Shipping Bill",
                  "vii. Bill of Lading",
                  "viii. Received for Shipment",
                  "ix. Shipped on Board",
                  "x. Clean Bill of Lading",
                  "xi. Freight Prepaid",
                  "xii. Freight Pay",
                  "xiii. BRC"
              ]
          },
         
         
            
         
        //module 
          {
             
              "h1": "Export Procedure",
              "h2": "",
              "icon": "fa-mobile",
              "list": []
          },
        
        
        
          
         
        //module 
          {
             
              "h1": "Modes of Payment",
              "h2": "4 lesson / 30 min",
              "icon": "fa-mobile",
              "list": [
                  "i. Payment in International Transaction ",
                  "ii. Advance Payment",
                  "iii. Documentary Bill",
                  "iv. L/C"
              ]
          },
        
        
            
         
        //module 
          {
             
              "h1": "Special shipments",
              "h2": "7 lesson / 30 min",
              "icon": "fa-mobile",
              "list": [
                  "i. Re-Import of Rejected Goods",
                  "ii. Re-Export of Imported Goods",
                  "iii. Cut off Date & Time",
                  "iv. Shut Out of Export Cargo",
                  "v. Short Shipment of Export Cargo",
                  "vi. Notify Party",
                  "vii. To Order"
              ]
          },
       
       
       
       
            
         
        //module 
          {
            
              "h1": "Pre- Shipment & Post Shipment",
              "h2": "",
              "icon": "fa-mobile",
              "list": []
          },
       
       
       
       
       
       
            
         
        //module 
          {
             
              "h1": "Sterilization ",
              "h2": "4 lesson / 30 mins ",
              "icon": "fa-mobile",
              "list": [
                  "i. Fumigation of Export Goods",
                  "ii. Phytosanitary",
                  "iii. Inspection and Certification of Meat product",
                  "iv. ISPM"
              ]
          },
        
        
        
            
         
        //module 
          {
             
              "h1": "Other Documents",
              "h2": "4 lesson / 30 mins ",
              "icon": "fa-mobile",
              "list": [
                  "i. CE Certificate for Engineering Goods",
                  "ii. IGM",
                  "iii. Bill of Entry",
                  "iv. High Sea Sale"
              ]
          }


          /*Format to add new module:
                                    
          {
             
            "h1": "Other Documents",
            
            "h2": "4 lesson / 30 mins ",
           
            "icon": "fa-mobile",
           
            "list": [
                "i. CE Certificate for Engineering Goods",
                "ii. IGM",
                "iii. Bill of Entry",
                "iv. High Sea Sale"
            ]
        }
     
        */




              ],

  //-------------------------------------module end    
      

// Content below Mobile App 
"r9h1": "Design For Busy Life.",

"r9": [
          {
              "h1": "Adaptive learning ",
              "p1": "Learning with EduPorts is dynamic, and responsive to unique learning needs of import and export. "
          },
          {
              "h1": "Unlimitted doubt solving ",
              "p1": "Now it becomes very easy for  to clear doubt anytime anywhere. "
          },
          {
              "h1": "Personalised Journey ",
              "p1": "Personalised journey  can be design according to your  course structure. "
          },
          {
              "h1": "Assistance for Job and Interview ",
              "p1": ""
          },
          {
              "h1": "Pause Break",
              "p1": "Take break as per your convince. Pause the lecture and take break anytime . "
          },
          {
              "h1": "Practical Training Certificate in import export management ",
              "p1": "p1"
          }
      ],



//reviews----------------------
      
      "reviews": [
        

        //review 1
        {
              "name": "- Ritika Jain",
              "comment":"One of the best short courses on moving to online teaching ever: full of practical exercises, tips and ideas. ",
              "rating": "4.3"
          },




          //review 2
          {
              "name": "-shrishti sharma",
              "comment": "This is the first time I have attended a class in this format and wondered how effective it would be. It was very effective and therefore I would definitely be interested in attending other classes in the same format. Would recommend 100%",
              "rating": "4.4"
          }



          //format to add review
        //    {
        //     "name": "-shrishti sharma",
        //     "comment": "\"This is the first time I have attended a class in this format and wondered how effective it would be. It was very effective and therefore I would definitely be interested in attending other classes in the same format. Would recommend 100%",
        //     "rating": "4.4"
        //     }


      ],
      "reviewh1": "Reviews",
      "r10h1": "Talk To Our Expert  "
          },

          "r8h1": "let us come together and think about the ways India does not have to import but we export to the world. ",
          "r8h2": "- Narendra Modi -",
  }

  componentDidMount=()=>{
    window.scrollTo({top:0,behavior:"smooth"})
  //   axios.get("/v1/content/landing").then(res=>{
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
              <title>{"Eduport By IndiaPort"}</title>
              <link rel="canonical" href={"http://vast-reaches-61761.herokuapp.com/pricing"} />
              <meta name="description" content={"making india world's factory"} />
          </Helmet>
          { !this.state.content.r1h1?null: <div className="landing">
              <LandingScreen1 content={this.state.content}  styles={this.props.styles}/>
              <hr  className="hr"/>
              <LandingScreen2 content={this.state.content}  styles={this.props.styles}/>
              <hr  className="hr"/>
              <LandingScreen3 content={this.state.content}  styles={this.props.styles}/>
              <hr  className="hr"/>
              <LandingScreen4 content={this.state.content}  styles={this.props.styles}/>
              <hr  className="hr"/>
              <LandingScreen5 content={this.state.content}  styles={this.props.styles}/>
              <hr  className="hr"/>
              <LandingScreen6 content={this.state.content}  styles={this.props.styles}/>

              <LandingScreen8 content={this.state.content}  styles={this.props.styles}/>
              <hr  className="hr"/>
              <LandingScreen7 content={this.state.content}  styles={this.props.styles}/>
              <hr  className="hr"/>
              <LandingScreen9 content={this.state.content}  styles={this.props.styles}/>
              <hr  className="hr"/>
              <LandingScreen10 content={this.state.content}  styles={this.props.styles}/>
              <hr  className="hr"/>

          </div>}
          </>
     )
   }
 }


export default Landing;
