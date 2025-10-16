import Hero from "../components/Hero";
import Navbar from "../components/Navbar";


const Home = () => {
 const teams = [
   {
     name: "Marketing Team",
     description: "A Marketing team promotes a companys product or services to attract customers and built its brand."
   },
   {
     name: "Sales Team",
     description: "A sales team workto sell a companys products or services and achieve its revenue goals."
   },
   {
     name: "Delivery Team",
     description: " A delivery team ensures products reach customers safely,accurately,and on time."
   }
 ];


 return (
   <div>
     <Navbar />
     <Hero />


     {/* ================= Card Layout ================= */}
     <section className="info-section">
       <h2>South India’s Trusted Wholesale Spice Partner</h2>
       <p>Our marketing, sales, and delivery teams work across South India to ensure every retailer and distributor gets high-quality masalas on time.</p>


       <div className="info-cards">
         {teams.map((team) => (
           <div key={team.name} className="info-card">
             <h3>{team.name}</h3>
             <p>{team.description}</p>
           </div>
         ))}
       </div>
     </section>


     {/* ================= Table Layout ================= */}
     <section className="info-section">
       <h2>Our Teams – Table View</h2>
       <table className="info-table">
         <thead>
           <tr>
             <th>Team</th>
             <th>Description</th>
           </tr>
         </thead>
         <tbody>
           {teams.map((team) => (
             <tr key={team.name}>
               <td>{team.name}</td>
               <td>{team.description}</td>
             </tr>
           ))}
         </tbody>
       </table>
     </section>
   </div>
 );
};


export default Home;