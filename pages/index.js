
import React from 'react';

export default function Home() {
  const data = {
  "restaurantName": "The Rusty Fork",
  "tagline": "Modern Comfort Food",
  "menuItems": [
    {
      "name": "Crispy Calamari",
      "description": "Served with house-made marinara",
      "price": 12,
      "category": "Appetizers"
    },
    {
      "name": "Truffle Fries",
      "description": "Parmesan, herbs, truffle aioli",
      "price": 8.5,
      "category": "Appetizers"
    },
    {
      "name": "Rusty Burger",
      "description": "Double patty, bacon jam, aged cheddar",
      "price": 16,
      "category": "Mains"
    },
    {
      "name": "Wild Mushroom Risotto",
      "description": "Arborio rice, wild mushrooms, pecorino",
      "price": 18,
      "category": "Mains"
    },
    {
      "name": "New York Cheesecake",
      "description": "Berry compote, graham crust",
      "price": 9,
      "category": "Desserts"
    }
  ]
};
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: '40px', maxWidth: '800px', margin: '0 auto', backgroundColor: '#121212', color: '#fff', minHeight: '100vh', borderRadius: '16px', marginTop: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px', borderBottom: '1px solid #333', paddingBottom: '20px' }}>
        <h1 style={{ color: '#8B5CF6', fontSize: '3rem', margin: 0 }}>{data.restaurantName}</h1>
        <p style={{ fontStyle: 'italic', color: '#A78BFA', marginTop: '10px' }}>{data.tagline}</p>
      </header>
      
      <main>
        {data.menuItems.map((item, idx) => (
          <div key={idx} style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #333' }}>
            <h2 style={{ margin: '0 0 10px 0', display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem' }}>
              <span>{item.name}</span> 
              <span style={{ color: '#8B5CF6' }}>$${item.price.toFixed(2)}</span>
            </h2>
            <p style={{ margin: 0, color: '#9CA3AF' }}>{item.description}</p>
            <span style={{ fontSize: '0.8rem', color: '#666', textTransform: 'uppercase', display: 'block', marginTop: '8px' }}>{item.category}</span>
          </div>
        ))}
      </main>
      <footer style={{ marginTop: '20px', textAlign: 'center', color: '#666', fontSize: '0.9rem' }}>
        Generated dynamically directly from menu file via 10xds Restaurant Builder
      </footer>
    </div>
  );
}
