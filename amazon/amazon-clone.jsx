import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, MapPin, Menu, ChevronLeft, ChevronRight } from 'lucide-react';

export default function AmazonClone() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const banners = [
    {
      id: 1,
      bg: 'linear-gradient(to bottom, #fde8e4 0%, #f8d5d0 100%)',
      title: 'Under ₹1,499',
      subtitle: 'Budget friendly headphones',
      brands: ['boAt', 'BOULT'],
      image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=400&fit=crop'
    },
    {
      id: 2,
      bg: 'linear-gradient(to bottom, #e3f2fd 0%, #bbdefb 100%)',
      title: 'Up to 50% off',
      subtitle: 'Electronics & Accessories',
      brands: [],
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=400&fit=crop'
    },
    {
      id: 3,
      bg: 'linear-gradient(to bottom, #fff3e0 0%, #ffe0b2 100%)',
      title: 'Great Indian Festival',
      subtitle: 'Top deals on Fashion',
      brands: [],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop'
    }
  ];

  const productSections = [
    {
      title: 'Bulk order discounts + Up to 18% GST savings',
      items: [
        { name: 'Up to 45% off | Laptops', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop' },
        { name: 'Up to 60% off | Kitchen appliances', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop' },
        { name: 'Min. 50% off | Office furniture', image: 'https://images.unsplash.com/photo-1538688273852-e29027c0c176?w=300&h=300&fit=crop' },
        { name: 'Up to 60% off | for Business Purchases', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300&h=300&fit=crop' }
      ]
    },
    {
      title: 'Revamp your home in style',
      items: [
        { name: 'Cushion covers, bedsheets & more', image: 'https://images.unsplash.com/photo-1616627547584-bf28cfedf8d5?w=300&h=300&fit=crop' },
        { name: 'Figurines, vases & more', image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=300&h=300&fit=crop' },
        { name: 'Home storage', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=300&h=300&fit=crop' },
        { name: 'Lighting solutions', image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=300&h=300&fit=crop' }
      ]
    },
    {
      title: 'Appliances for your home | Up to 55% off',
      items: [
        { name: 'Air conditioners', image: 'https://images.unsplash.com/photo-1631545806609-4b99a5ffcfe9?w=300&h=300&fit=crop' },
        { name: 'Refrigerators', image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=300&h=300&fit=crop' },
        { name: 'Microwaves', image: 'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=300&h=300&fit=crop' },
        { name: 'Washing machines', image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=300&h=300&fit=crop' }
      ]
    },
    {
      title: 'Starting ₹49 | Deals on home essentials',
      items: [
        { name: 'Cleaning supplies', image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300&h=300&fit=crop' },
        { name: 'Bathroom accessories', image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=300&h=300&fit=crop' },
        { name: 'Home tools', image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=300&h=300&fit=crop' },
        { name: 'Wallpapers', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=300&h=300&fit=crop' }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextBanner = () => setCurrentBanner((prev) => (prev + 1) % banners.length);
  const prevBanner = () => setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: Arial, sans-serif;
        }

        .amazon-orange {
          background-color: #febd69;
        }

        .amazon-dark {
          background-color: #131921;
        }

        .amazon-light-dark {
          background-color: #232f3e;
        }

        .product-card {
          transition: transform 0.2s;
        }

        .product-card:hover {
          transform: translateY(-2px);
        }

        .nav-item:hover {
          border: 1px solid white;
        }

        .search-btn:hover {
          background-color: #f3a847;
        }
      `}</style>

      {/* Top Header */}
      <header className="amazon-dark text-white">
        <div className="flex items-center px-4 py-2 gap-4">
          {/* Logo */}
          <div className="flex items-center cursor-pointer hover:border border-white p-1">
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold">
                <span className="text-white">amazon</span>
                <span className="text-xs">.in</span>
              </div>
              <div className="w-20 h-1 bg-orange-400 rounded-full mt-0.5"></div>
            </div>
          </div>

          {/* Deliver to */}
          <div className="flex items-center gap-1 cursor-pointer hover:border border-white p-2 rounded">
            <MapPin size={20} />
            <div className="text-xs">
              <div className="text-gray-300">Delivering to Prayagraj 211008</div>
              <div className="font-bold text-sm">Update location</div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-3xl">
            <div className="flex">
              <select className="bg-gray-200 text-black px-2 py-2 text-sm rounded-l border-r-2 border-gray-300 cursor-pointer">
                <option>All</option>
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Books</option>
                <option>Home & Kitchen</option>
              </select>
              <input
                type="text"
                placeholder="Search Amazon.in"
                className="flex-1 px-4 py-2 text-black outline-none"
              />
              <button className="amazon-orange px-4 py-2 rounded-r search-btn">
                <Search size={24} className="text-black" />
              </button>
            </div>
          </div>

          {/* Right side items */}
          <div className="flex items-center gap-6">
            {/* Language */}
            <div className="flex items-center gap-1 cursor-pointer hover:border border-white p-2 rounded">
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28 20'%3E%3Crect width='28' height='20' fill='%23FF9933'/%3E%3Crect y='13.33' width='28' height='6.67' fill='%23138808'/%3E%3Crect y='6.67' width='28' height='6.67' fill='white'/%3E%3Ccircle cx='14' cy='10' r='3' fill='%23000080'/%3E%3C/svg%3E" alt="IN" className="w-6 h-4" />
              <span className="font-bold">EN</span>
            </div>

            {/* Account */}
            <div className="cursor-pointer hover:border border-white p-2 rounded">
              <div className="text-xs">Hello, sign in</div>
              <div className="font-bold text-sm">Account & Lists</div>
            </div>

            {/* Returns */}
            <div className="cursor-pointer hover:border border-white p-2 rounded">
              <div className="text-xs">Returns</div>
              <div className="font-bold text-sm">& Orders</div>
            </div>

            {/* Cart */}
            <div className="flex items-center gap-1 cursor-pointer hover:border border-white p-2 rounded relative">
              <div className="relative">
                <ShoppingCart size={32} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 left-4 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="font-bold">Cart</span>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="amazon-light-dark px-4 py-2">
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-1 cursor-pointer nav-item p-2 rounded">
              <Menu size={20} />
              <span className="font-bold">All</span>
            </div>
            <span className="cursor-pointer nav-item p-2 rounded">MX Player</span>
            <span className="cursor-pointer nav-item p-2 rounded">Sell</span>
            <span className="cursor-pointer nav-item p-2 rounded">Bestsellers</span>
            <span className="cursor-pointer nav-item p-2 rounded">Today's Deals</span>
            <span className="cursor-pointer nav-item p-2 rounded">Mobiles</span>
            <span className="cursor-pointer nav-item p-2 rounded">Customer Service</span>
            <span className="cursor-pointer nav-item p-2 rounded">New Releases</span>
            <span className="cursor-pointer nav-item p-2 rounded">Prime</span>
            <span className="cursor-pointer nav-item p-2 rounded">Amazon Pay</span>
            <span className="cursor-pointer nav-item p-2 rounded">Electronics</span>
            <span className="cursor-pointer nav-item p-2 rounded">Fashion</span>
            <span className="cursor-pointer nav-item p-2 rounded">Home & Kitchen</span>
            <span className="cursor-pointer nav-item p-2 rounded">Computers</span>
            <span className="cursor-pointer nav-item p-2 rounded">Books</span>
            <span className="cursor-pointer nav-item p-2 rounded">Gift Cards</span>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="relative h-96 overflow-hidden">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentBanner ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ background: banner.bg }}
          >
            <div className="max-w-7xl mx-auto px-8 py-16 flex items-center justify-between">
              <div className="flex-1">
                <h1 className="text-5xl font-bold text-gray-900 mb-4">{banner.title}</h1>
                <p className="text-2xl text-gray-800 mb-6">{banner.subtitle}</p>
                {banner.brands.length > 0 && (
                  <div className="flex gap-4">
                    {banner.brands.map((brand, i) => (
                      <span key={i} className="text-3xl font-bold text-gray-900">{brand}</span>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex-1 flex justify-end">
                <img src={banner.image} alt={banner.title} className="h-72 object-contain" />
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevBanner}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded shadow-lg"
        >
          <ChevronLeft size={28} className="text-gray-800" />
        </button>
        <button
          onClick={nextBanner}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded shadow-lg"
        >
          <ChevronRight size={28} className="text-gray-800" />
        </button>
      </div>

      {/* Product Grid Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {productSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white p-5 shadow-md">
              <h2 className="text-xl font-bold mb-4 text-gray-900">{section.title}</h2>
              <div className="grid grid-cols-2 gap-4">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="cursor-pointer product-card">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-32 object-cover mb-2 rounded"
                    />
                    <p className="text-xs text-gray-800">{item.name}</p>
                  </div>
                ))}
              </div>
              <a href="#" className="text-blue-600 text-sm mt-4 inline-block hover:text-orange-600 hover:underline">
                See more
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Product Rows */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="bg-white p-5 shadow-md">
          <h2 className="text-2xl font-bold mb-4">Today's Deals</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'Kitchen Appliances', discount: '40-60% off', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=200&h=200&fit=crop' },
              { name: 'Headphones', discount: 'Up to 75% off', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop' },
              { name: 'Smart Watches', discount: 'Under ₹2,999', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop' },
              { name: 'Laptops', discount: 'Up to 40% off', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&h=200&fit=crop' },
              { name: 'Home Decor', discount: 'Min. 60% off', image: 'https://images.unsplash.com/photo-1616627547584-bf28cfedf8d5?w=200&h=200&fit=crop' },
              { name: 'Fitness Equipment', discount: 'Up to 70% off', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=200&h=200&fit=crop' }
            ].map((deal, index) => (
              <div key={index} className="cursor-pointer product-card">
                <img src={deal.image} alt={deal.name} className="w-full h-40 object-cover rounded mb-2" />
                <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 inline-block mb-1">
                  {deal.discount}
                </div>
                <p className="text-sm text-gray-800">{deal.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16">
        <div className="bg-gray-700 text-white text-center py-4 cursor-pointer hover:bg-gray-600">
          <p className="text-sm">Back to top</p>
        </div>
        
        <div className="amazon-light-dark text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold mb-4">Get to Know Us</h3>
                <ul className="text-sm space-y-2">
                  <li className="hover:underline cursor-pointer">About Us</li>
                  <li className="hover:underline cursor-pointer">Careers</li>
                  <li className="hover:underline cursor-pointer">Press Releases</li>
                  <li className="hover:underline cursor-pointer">Amazon Science</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Connect with Us</h3>
                <ul className="text-sm space-y-2">
                  <li className="hover:underline cursor-pointer">Facebook</li>
                  <li className="hover:underline cursor-pointer">Twitter</li>
                  <li className="hover:underline cursor-pointer">Instagram</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Make Money with Us</h3>
                <ul className="text-sm space-y-2">
                  <li className="hover:underline cursor-pointer">Sell on Amazon</li>
                  <li className="hover:underline cursor-pointer">Sell under Amazon Accelerator</li>
                  <li className="hover:underline cursor-pointer">Become an Affiliate</li>
                  <li className="hover:underline cursor-pointer">Advertise Your Products</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Let Us Help You</h3>
                <ul className="text-sm space-y-2">
                  <li className="hover:underline cursor-pointer">COVID-19 and Amazon</li>
                  <li className="hover:underline cursor-pointer">Your Account</li>
                  <li className="hover:underline cursor-pointer">Returns Centre</li>
                  <li className="hover:underline cursor-pointer">100% Purchase Protection</li>
                  <li className="hover:underline cursor-pointer">Amazon App Download</li>
                  <li className="hover:underline cursor-pointer">Help</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="amazon-dark text-white py-8">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="text-xl font-bold">
                <span className="text-white">amazon</span>
                <span className="text-xs">.in</span>
              </div>
            </div>
            <div className="text-xs text-gray-400">
              <p>© 1996-2026, Amazon.com, Inc. or its affiliates</p>
              <p className="mt-2 text-yellow-400">Educational demo for cybersecurity training. No real transactions.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
