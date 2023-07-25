import React from 'react';
import svg from "../Assets/2.webp";
import {AiFillGoogleCircle,
        AiFillAmazonCircle,
        AiFillYoutube,
        AiFillInstagram,

} from "react-icons/ai";




const Home = () => {
  return (
    <>

     {/* div1 */}
       <div className='home' id='home'>
          <main>
            <h1>Dev Ninjas</h1>
            <p>Solution to all your problems</p>
            
          </main>
       </div>

       <div className="home2">


           
             <img src={svg}  alt="Graphics" />
             <div>
               <p>
               We are a full stack development company that specializes in building custom web and mobile applications. We have a team of experienced engineers who can handle all aspects of your project, from the front end to the back end.
               We offer a wide range of services, including: web development, mobile development, API development, database development, and more. We can also help you with your project management and testing needs.
              </p>


             </div>
            

         
         


       </div>


       {/*about*/}

      <div className="home3" id='about'>
        <div>
            <h1>Who are We?</h1>
            <p> We are a full stack development company that specializes in building custom web and mobile applications. We have a team of experienced engineers who can handle all aspects of your project, from the front end to the back end.
            We are committed to providing our clients with the highest quality services. We work closely with our clients to understand their needs and to deliver a product that meets their expectations.
            There are many reasons why you should choose us for your full stack development needs. Here are just a few:

            1. We have a team of experienced engineers who can handle all aspects of your project.
            <br />
            2. We are committed to providing our clients with the highest quality services.
            <br />
            3. We work closely with our clients to understand their needs and to deliver a product that meets their expectations.
            </p>
        </div>
      </div>

{/* home4 */}
      <div className="home4" id="brands">
         <div>
            <h1>Brands</h1>
            <article>

                <div style={{animationDelay:"0.3s"}}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>
                <div style={{animationDelay:"0.5s"}}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>
                <div style={{animationDelay:"0.7s"}}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>
                <div style={{animationDelay:"1s"}}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
            </article>
         </div>
              
      </div>


    </>
  )
}

export default Home