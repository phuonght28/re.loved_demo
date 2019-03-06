export const  CATEGORY = [
  { key: 'bestseller', title: 'Best Seller' },
  { key: 'all', title: 'See all' },
  { key: 'clothing', title: 'Clothing' },
  { key: 'shoes', title: 'Shoes' },
  { key: 'jewelry', title: 'Jewelry' },
  { key: 'watches', title: 'Watches' },
  {
    key: 'accessories', title: 'Accessories',
    child: [
      { key: 'EARRINGS', title: 'EARRINGS' },
      { key: 'NECKLACES', title: 'NECKLACES' },
      { key: 'BRACELETS', title: 'BRACELETS' },
      { key: 'RINGS', title: 'RINGS' },
      { key: 'STERLING', title: 'STERLING' },
    ]
  },
  {
    key: 'bags',
    title: 'Bags',
    child: [
      { key: 'handbags', title: 'Handbags' },
      { key: 'wallets', title: 'Wallets' },
      { key: 'backpacks', title: 'Backpacks Bags' },
    ]
  },
]