export interface Cake {
  id: number;
  name: string;
  category: string;
  image: string;
  descriptor: string;
}

export const cookiesData = {
  all: [
    // --- PASTRIES (IDs 31+ so they show last) ---
    { id: 1, name: 'White Choco Cookie', category: 'Pastries', image: '/images/Pastries/laziz-white-choco-cookie.jpeg', descriptor: 'White chocolate cookies with a soft, gooey center.' },
    { id: 2, name: 'Pistachio Cake', category: 'Pastries', image: '/images/Pastries/Laziz4.jpeg', descriptor: 'A delightful pastry with a perfect golden crust.' },
    { id: 3, name: 'Nawrozi Cookie', category: 'Pastries', image: '/images/Pastries/Laziz6.jpeg', descriptor: 'Sweet and flaky, topped with rich cream filling.' },
    { id: 4, name: 'Chocolate Cookie', category: 'Pastries', image: '/images/Pastries/Laziz7.jpeg', descriptor: 'Crispy and airy, perfect for any occasion.' },
    { id: 5, name: 'Afghan Charcuterie Board', category: 'Pastries', image: '/images/Pastries/afghan-charcuterie-board.jpeg', descriptor: 'A rich and savory pastry assortment.' },
    { id: 6, name: 'Simyan', category: 'Pastries', image: '/images/Pastries/laziz-azizi-simyan.jpeg', descriptor: 'Traditional Afghan dessert, sweet and fragrant.' },
    { id: 7, name: 'Cream Roll', category: 'Pastries', image: '/images/Pastries/laziz-cream-roll.jpeg', descriptor: 'A creamy and light pastry roll, delicately sweet.' },
    { id: 8, name: 'Strawberry Jam Cookie', category: 'Pastries', image: '/images/Pastries/laziz-strawberry-cookie.jpeg', descriptor: 'Soft, chewy, and bursting with fresh strawberry flavor.' },
    { id: 9, name: 'Waraqi Cookie', category: 'Pastries', image: '/images/Pastries/laziz-waraqi.jpeg', descriptor: 'Traditional pastry with a crisp outer layer and rich filling.' },
    { id: 10, name: 'Namaki Cookie', category: 'Pastries', image: '/images/Pastries/Basir-Azizi-Namaki-Cookie.jpeg', descriptor: 'Traditional Afghan savory, salty butter cookies often enjoyed with tea' },
    { id: 11, name: 'Khatai Cookie', category: 'Pastries', image: '/images/Pastries/Basir-Azizi-Khatai-Cookie.jpeg', descriptor: 'Traditional Afghan shortbread cookies that are eggless, delicate, and known for their "melt-in-the-mouth" texture.' },
     ],
};