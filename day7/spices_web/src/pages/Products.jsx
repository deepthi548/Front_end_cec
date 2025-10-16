const spices = [
 { name: "Turmeric", img: "https://vibrantliving.in/cdn/shop/files/TurmericPowder.png?v=1731060171&width=1000" },
 { name: "Red Chilli", img: "https://goodness-farm.com/wp-content/uploads/2021/04/image-Red_Chilli_Karam_Podi-1590824175448.jpg"},
 { name: "Cumin Seeds", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOoneRJtDeHZ-2FpOk9-GGp-MPcBeGmPGurg&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOoneRJtDeHZ-2FpOk9-GGp-MPcBeGmPGurg&s"},
 { name: "Black Pepper", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4YgAfcxv4cbLzHe-c6qdO_bhW9UxAQuLSRQ&s"},
 { name: "Fenugreek", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaN_0xIkabjcwxpcKLCLuKBHu32lMlYRYwMQ&s"},
 { name: "Cinnamon", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9OjgvsomKhg_glCSVFjEuFomA8F27o5YTg&s"},
 { name: "Cardamon", img: "https://sahyadrinuts.com/wp-content/uploads/2021/01/cardamom.jpg"},
]

const Products = () => {
 return (
   <section className="products-section">
     <h2>Our Wholesale Products</h2>
     <div className="products-grid">
       {spices.map((spice) => (
         <div key={spice.name} className="product-card">
           <img src={spice.img} alt={spice.name} />
           <h3>{spice.name}</h3>
           <p>Pure and fresh spices directly from the source.</p>
         </div>
       ))}
     </div>
   </section>
 );
};


export default Products;


