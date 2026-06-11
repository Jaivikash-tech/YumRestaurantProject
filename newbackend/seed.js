const mongoose = require("mongoose");
const Food = require("./models/Food");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/truyum')
  .then(async () => {
    // Clear all existing foods
    await Food.deleteMany({});
    
    // Insert new batch of foods
    await Food.insertMany([
      // Biriyani Category
      {
        name: 'Chicken Biriyani',
        description: 'Classic aromatic chicken biriyani',
        category: 'Biriyani',
        price: 250,
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=300',
        isActive: true
      },
      {
        name: 'Mutton Biriyani',
        description: 'Authentic Hyderabadi Mutton Biriyani',
        category: 'Biriyani',
        price: 350,
        image: 'https://images.unsplash.com/photo-1589302168068-964664d93cb0?q=80&w=300z',
        isActive: true
      },
      {
        name: 'Veg Biriyani',
        description: 'Healthy and spicy vegetable biriyani',
        category: 'Biriyani',
        price: 180,
        image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=300',
        isActive: true
      },
      // Snacks Category
      {
        name: 'Chicken Burger',
        description: 'Delicious chicken burger with extra cheese',
        category: 'Snacks',
        price: 150,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=300',
        isActive: true
      },
      {
        name: 'French Fries',
        description: 'Crispy golden potato fries',
        category: 'Snacks',
        price: 90,
        image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=300',
        isActive: true
      },
      {
        name: 'Veg Pizza',
        description: 'Wood fired pizza with fresh vegetables',
        category: 'Snacks',
        price: 299,
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=300',
        isActive: true
      },
      // Drinks Category
      {
        name: 'Cold Coffee',
        description: 'Refreshing cold coffee with ice cream',
        category: 'Drinks',
        price: 120,
        image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=300',
        isActive: true
      },
      {
        name: 'Fresh Lime Soda',
        description: 'Sweet and salty fresh lime soda',
        category: 'Drinks',
        price: 60,
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=300',
        isActive: true
      },
      {
        name: 'Mango Milkshake',
        description: 'Thick and creamy mango milkshake',
        category: 'Drinks',
        price: 110,
        image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=300',
        isActive: true
      }
    ]);
    console.log('Successfully seeded 9 food items!');
    
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
