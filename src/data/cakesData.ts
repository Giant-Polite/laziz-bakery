// cakesData.ts
export interface Cake {
  id: number;
  name: string;
  category: string;
  image: string;
  descriptor: string;
}

export const cakesData = {
  all: [
    // --- SPECIAL OCCASIONS (IDs 1-31) ---
    { id: 1, name: 'Anniversary Cake', category: 'Anniversary', image: '/images/anniversary/celebration-anniversary.jpg', descriptor: 'Elegant anniversary cake with gold and pink accents.' },
    { id: 2, name: 'Baby Shower Blue Bow', category: 'Baby', image: '/images/baby/baby-shower-blue-bow.jpg', descriptor: 'Perfect for a baby boy, with a sweet blue bow decoration.' },
    { id: 3, name: 'Baby Shower Gender Reveal', category: 'Baby', image: '/images/baby/baby-shower-gender-reveal.jpg', descriptor: 'Exciting gender reveal cake with soft pastel colors.' },
    { id: 4, name: 'Baby Shower Pink Gold', category: 'Baby', image: '/images/baby/baby-shower-pink-gold.jpg', descriptor: 'Delicate pink and gold baby shower cake with floral accents.' },
    { id: 5, name: 'Baby Shower Teddy Balloons', category: 'Baby', image: '/images/baby/baby-shower-teddy-balloons.jpg', descriptor: 'Whimsical baby shower cake featuring teddy bears and balloons.' },
    { id: 6, name: 'Birthday Blue Heart Husband', category: 'Birthday', image: '/images/birthday/birthday-blue-heart-husband.jpg', descriptor: 'Romantic birthday cake with a blue heart for a husband.' },
    { id: 7, name: 'Birthday Bluey Character', category: 'Birthday', image: '/images/birthday/birthday-bluey-character.jpg', descriptor: 'Fun Bluey-themed birthday cake for kids.' },
    { id: 8, name: 'Birthday Butterfly Pink', category: 'Birthday', image: '/images/birthday/birthday-butterfly-pink.jpg', descriptor: 'A beautiful pink butterfly cake perfect for a birthday.' },
    { id: 9, name: 'Birthday Chocolate Drip', category: 'Birthday', image: '/images/birthday/birthday-chocolate-drip.jpg', descriptor: 'Indulgent chocolate drip cake with rich dark chocolate.' },
    { id: 10, name: 'Birthday Fashion Silhouette', category: 'Birthday', image: '/images/birthday/birthday-fashion-silhouette.jpg', descriptor: 'A stylish fashion silhouette cake for a fashion lover.' },
    { id: 11, name: 'Birthday Football Theme', category: 'Birthday', image: '/images/birthday/birthday-football-theme.jpg', descriptor: 'Perfect for football fans, with team logos and colors.' },
    { id: 12, name: 'Birthday Funfetti', category: 'Birthday', image: '/images/birthday/birthday-funfetti.jpg', descriptor: 'Bright and cheerful funfetti cake with colorful sprinkles.' },
    { id: 13, name: 'Birthday Gold Leaves Spheres', category: 'Birthday', image: '/images/birthday/birthday-gold-leaves-spheres.jpg', descriptor: 'Elegant gold leaves cake perfect for a special birthday.' },
    { id: 14, name: 'Birthday Heart Vintage Ribbons', category: 'Birthday', image: '/images/birthday/birthday-heart-vintage-ribbons.jpg', descriptor: 'Vintage-inspired heart-shaped birthday cake with ribbons.' },
    { id: 15, name: 'Birthday Honeycomb Bee', category: 'Birthday', image: '/images/birthday/birthday-honeycomb-bee.jpg', descriptor: 'Adorable honeycomb bee-themed birthday cake.' },
    { id: 16, name: 'Birthday Lavender Floral', category: 'Birthday', image: '/images/birthday/birthday-lavender-floral.jpg', descriptor: 'Delicate lavender floral cake perfect for any birthday.' },
    { id: 17, name: 'Birthday Lavender Heart Cupcakes', category: 'Birthday', image: '/images/birthday/birthday-lavender-heart-cupcakes.jpg', descriptor: 'Lavender heart-shaped cupcakes, sweet and delicate.' },
    { id: 18, name: 'Birthday Navy Gold Drip 44th', category: 'Birthday', image: '/images/birthday/birthday-navy-gold-drip-44th.jpg', descriptor: 'Sophisticated navy and gold drip cake for a 44th birthday.' },
    { id: 19, name: 'Birthday Pink Ombre 40th', category: 'Birthday', image: '/images/birthday/birthday-pink-ombre-40th.jpg', descriptor: 'A beautiful pink ombre cake for a 40th birthday.' },
    { id: 20, name: 'Birthday Pink Ruffle Cake', category: 'Birthday', image: '/images/birthday/birthday-pink-ruffle-cake.jpg', descriptor: 'Elegant pink ruffle cake perfect for any occasion.' },
    { id: 21, name: 'Birthday Pink Swirl Gold', category: 'Birthday', image: '/images/birthday/birthday-pink-swirl-gold.jpg', descriptor: 'Gorgeous pink swirl cake decorated with golden accents.' },
    { id: 22, name: 'Birthday White Drip Gold', category: 'Birthday', image: '/images/birthday/birthday-white-drip-gold.jpg', descriptor: 'Classic white drip cake with gold details.' },
    { id: 23, name: 'Custom Chanel Quilted', category: 'Custom', image: '/images/custom/custom-chanel-quilted.jpg', descriptor: 'A custom-designed Chanel-inspired quilted cake.' },
    { id: 24, name: 'Custom Doctor Coat', category: 'Custom', image: '/images/custom/custom-doctor-coat.jpg', descriptor: 'Custom cake designed as a doctor’s coat for medical-themed events.' },
    { id: 25, name: 'Custom Gold Leopard 35th', category: 'Custom', image: '/images/custom/custom-gold-leopard-35th.jpg', descriptor: 'Bold custom gold leopard print cake for a 35th birthday.' },
    { id: 26, name: 'Wedding 5-Tier Greenery Roses', category: 'Wedding', image: '/images/wedding/wedding-5tier-greenery-roses.jpg', descriptor: 'Elegant 5-tier wedding cake with cascading greenery and roses.' },
    { id: 27, name: 'Wedding 5-Tier Roses Front', category: 'Wedding', image: '/images/wedding/wedding-5tier-roses-front.jpg', descriptor: 'Front view of a 5-tier wedding cake with intricate rose designs.' },
    { id: 28, name: 'Wedding Cascading Roses', category: 'Wedding', image: '/images/wedding/wedding-cascading-roses.jpg', descriptor: 'Gorgeous wedding cake with cascading roses down the tiers.' },
    { id: 29, name: 'Wedding Emerald Gold 3-Tier', category: 'Wedding', image: '/images/wedding/wedding-emerald-gold-3tier.jpg', descriptor: 'Sophisticated emerald green and gold 3-tier wedding cake.' },
    { id: 30, name: 'Wedding Pearl Roses 2-Tier', category: 'Wedding', image: '/images/wedding/wedding-pearl-roses-2tier.jpg', descriptor: 'Elegant 2-tier wedding cake adorned with pearl and rose accents.' },

    // --- PASTRIES (IDs 31+ so they show last) ---
    { id: 32, name: 'Laziz4', category: 'Pastries', image: '/images/Pastries/Laziz4.jpeg', descriptor: 'A delightful pastry with a perfect golden crust.' },
    { id: 33, name: 'Laziz6', category: 'Pastries', image: '/images/Pastries/Laziz6.jpeg', descriptor: 'Sweet and flaky, topped with rich cream filling.' },
    { id: 34, name: 'Laziz7', category: 'Pastries', image: '/images/Pastries/Laziz7.jpeg', descriptor: 'Crispy and airy, perfect for any occasion.' },
    { id: 35, name: 'Afghan Charcuterie Board', category: 'Pastries', image: '/images/Pastries/afghan-charcuterie-board.jpeg', descriptor: 'A rich and savory pastry assortment.' },
    { id: 36, name: 'Laziz Azizi Simyan', category: 'Pastries', image: '/images/Pastries/laziz-azizi-simyan.jpeg', descriptor: 'Traditional Afghan dessert, sweet and fragrant.' },
    { id: 37, name: 'Laziz Cream Roll', category: 'Pastries', image: '/images/Pastries/laziz-cream-roll.jpeg', descriptor: 'A creamy and light pastry roll, delicately sweet.' },
    { id: 38, name: 'Laziz Strawberry Cookie', category: 'Pastries', image: '/images/Pastries/laziz-strawberry-cookie.jpeg', descriptor: 'Soft, chewy, and bursting with fresh strawberry flavor.' },
    { id: 39, name: 'Laziz Waraqi', category: 'Pastries', image: '/images/Pastries/laziz-waraqi.jpeg', descriptor: 'Traditional pastry with a crisp outer layer and rich filling.' },
    { id: 40, name: 'Laziz White Choco Cookie', category: 'Pastries', image: '/images/Pastries/laziz-white-choco-cookie.jpeg', descriptor: 'White chocolate cookies with a soft, gooey center.' },
  ],
};