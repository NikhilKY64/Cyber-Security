import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, MapPin, Menu, ChevronLeft, ChevronRight, AlertTriangle, X } from 'lucide-react';

// --- Components ---

const EducationalBanner = () => (
    <div className="bg-yellow-400 text-black text-center py-2 px-4 font-bold border-b border-yellow-500 flex items-center justify-center gap-2">
        <AlertTriangle size={20} />
        <span>EDUCATIONAL DEMO ONLY: This is a phishing awareness project. Do not enter real credentials.</span>
    </div>
);

const PhishingAlert = ({ onClose }) => (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-lg w-full p-6 relative shadow-2xl border-t-8 border-red-600">
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black">
                <X size={24} />
            </button>

            <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                    <AlertTriangle size={32} className="text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-red-600">You have been "Phished"!</h2>
                <p className="text-gray-600 mt-2">If this were a real attack, your credentials would now be stolen.</p>
            </div>

            <div className="bg-red-50 p-4 rounded border border-red-100 mb-6">
                <h3 className="font-bold text-red-800 mb-2">How this trap worked:</h3>
                <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
                    <li>The URL is not <strong>amazon.com</strong> or <strong>amazon.in</strong>.</li>
                    <li>The interface looks identical to earn your trust.</li>
                    <li>Urgency (like "Account Locked") is often used to trick you.</li>
                </ul>
            </div>

            <div className="text-center">
                <p className="mb-4 text-sm text-gray-700">Always check the address bar before entering passwords!</p>
                <button
                    onClick={onClose}
                    className="bg-gray-800 hover:bg-black text-white font-bold py-3 px-8 rounded transition-colors"
                >
                    Return to Safety
                </button>
            </div>
        </div>
    </div>
);

const LoginPage = ({ onComplete, onCancel }) => {
    const [step, setStep] = useState(1); // 1 = email, 2 = password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleContinue = (e) => {
        e.preventDefault();
        if (email) setStep(2);
    };

    const handleSignIn = (e) => {
        e.preventDefault();
        if (password) onComplete();
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center pt-4">
            <div className="mb-4 cursor-pointer" onClick={onCancel}>
                <div className="flex flex-col items-center">
                    <div className="text-3xl font-bold flex items-start">
                        <span className="text-black">amazon</span>
                        <span className="text-sm pt-1">.in</span>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-[350px] p-6 border border-gray-300 rounded hover:shadow-sm">
                {step === 1 ? (
                    <form onSubmit={handleContinue}>
                        <h1 className="text-3xl font-normal mb-4">Sign in or create account</h1>

                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-1">Enter mobile number or email</label>
                            <input
                                type="text"
                                className="w-full border border-gray-400 rounded px-3 py-2 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoFocus
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-lg py-2 px-4 shadow-sm text-sm"
                        >
                            Continue
                        </button>

                        <div className="mt-4 text-xs text-gray-600 leading-snug">
                            By continuing, you agree to Amazon's <a href="#" className="text-blue-700 hover:underline hover:text-orange-700">Conditions of Use</a> and <a href="#" className="text-blue-700 hover:underline hover:text-orange-700">Privacy Notice</a>.
                        </div>

                        <div className="mt-6 border-t pt-6">
                            <div className="font-bold text-sm mb-2">Buying for work?</div>
                            <a href="#" className="text-sm text-blue-700 hover:underline hover:text-orange-700">Create a free business account</a>
                        </div>
                    </form>
                ) : (
                    <form onSubmit={handleSignIn}>
                        <h1 className="text-3xl font-normal mb-2">Sign in</h1>
                        <div className="flex justify-between items-center text-sm mb-4">
                            <span>{email}</span>
                            <button type="button" onClick={() => setStep(1)} className="text-blue-700 hover:underline hover:text-orange-700">Change</button>
                        </div>

                        <div className="mb-4">
                            <div className="flex justify-between items-center mb-1">
                                <label className="text-sm font-bold">Password</label>
                                <a href="#" className="text-xs text-blue-700 hover:underline hover:text-orange-700">Forgot password?</a>
                            </div>
                            <input
                                type="password"
                                className="w-full border border-gray-400 rounded px-3 py-2 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoFocus
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-lg py-1.5 px-4 shadow-sm text-sm mb-4"
                        >
                            Sign in
                        </button>

                        <div className="relative text-center my-4">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <span className="relative bg-white px-2 text-xs text-gray-500">or</span>
                        </div>

                        <button type="button" className="w-full bg-white border border-gray-300 rounded-lg py-1.5 px-4 shadow-sm text-sm hover:bg-gray-50 mb-3">
                            Sign in with a passkey
                        </button>
                        <button type="button" className="w-full bg-white border border-gray-300 rounded-lg py-1.5 px-4 shadow-sm text-sm hover:bg-gray-50">
                            Get an OTP on your phone
                        </button>
                    </form>
                )}
            </div>

            <div className="mt-8 w-full border-t border-gray-200">
                <div className="bg-gradient-to-b from-white to-gray-50 py-8 text-center">
                    <div className="flex justify-center gap-8 text-xs text-blue-700 mb-2">
                        <a href="#" className="hover:underline hover:text-orange-700">Conditions of Use</a>
                        <a href="#" className="hover:underline hover:text-orange-700">Privacy Notice</a>
                        <a href="#" className="hover:underline hover:text-orange-700">Help</a>
                    </div>
                    <div className="text-xs text-gray-600">
                        © 1996-2026, Amazon.com, Inc. or its affiliates
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function AmazonClone() {
    const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'login'
    const [showPhishingAlert, setShowPhishingAlert] = useState(false);

    const [currentBanner, setCurrentBanner] = useState(0);
    const [cartCount, setCartCount] = useState(0);

    // --- Data & Helpers for Home Page ---
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

    // If showing Login Page
    if (currentPage === 'login') {
        return (
            <>
                <EducationalBanner />
                <LoginPage
                    onComplete={() => setShowPhishingAlert(true)}
                    onCancel={() => setCurrentPage('home')}
                />
                {showPhishingAlert && (
                    <PhishingAlert onClose={() => {
                        setShowPhishingAlert(false);
                        setCurrentPage('home');
                    }} />
                )}
            </>
        );
    }

    // Home Page Navigation
    const navigateToLogin = () => setCurrentPage('login');

    return (
        <div className="min-h-screen bg-white">
            <EducationalBanner />

            <style>{`
        body { font-family: Arial, sans-serif; }
        .amazon-orange { background-color: #febd69; }
        .amazon-dark { background-color: #131921; }
        .amazon-light-dark { background-color: #232f3e; }
        .product-card { transition: transform 0.2s; }
        .product-card:hover { transform: translateY(-2px); }
        .nav-item:hover { border: 1px solid white; }
        .search-btn:hover { background-color: #f3a847; }
      `}</style>

            {/* Top Header */}
            <header className="amazon-dark text-white">
                <div className="flex items-center px-4 py-2 gap-4">
                    {/* Logo */}
                    <div className="flex items-center cursor-pointer hover:border border-white p-1" onClick={() => setCurrentPage('home')}>
                        <div className="flex flex-col items-center">
                            <div className="text-2xl font-bold">
                                <span className="text-white">amazon</span>
                                <span className="text-xs">.in</span>
                            </div>
                            <div className="w-20 h-1 bg-orange-400 rounded-full mt-0.5"></div>
                        </div>
                    </div>

                    {/* Deliver to */}
                    <div className="flex items-center gap-1 cursor-pointer hover:border border-white p-2 rounded hidden md:flex">
                        <MapPin size={20} />
                        <div className="text-xs">
                            <div className="text-gray-300">Delivering to Prayagraj 211008</div>
                            <div className="font-bold text-sm">Update location</div>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="flex-1 max-w-3xl">
                        <div className="flex h-10">
                            <select className="bg-gray-200 text-black px-2 text-sm rounded-l border-r-2 border-gray-300 cursor-pointer hidden sm:block w-16">
                                <option>All</option>
                            </select>
                            <input
                                type="text"
                                placeholder="Search Amazon.in"
                                className="flex-1 px-4 text-black outline-none rounded-l sm:rounded-l-none h-full"
                            />
                            <button className="amazon-orange px-4 rounded-r search-btn h-full flex items-center justify-center">
                                <Search size={22} className="text-black" />
                            </button>
                        </div>
                    </div>

                    {/* Right side items */}
                    <div className="flex items-center gap-2 md:gap-6">
                        {/* Language */}
                        <div className="flex items-center gap-1 cursor-pointer hover:border border-white p-2 rounded hidden md:flex">
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28 20'%3E%3Crect width='28' height='20' fill='%23FF9933'/%3E%3Crect y='13.33' width='28' height='6.67' fill='%23138808'/%3E%3Crect y='6.67' width='28' height='6.67' fill='white'/%3E%3Ccircle cx='14' cy='10' r='3' fill='%23000080'/%3E%3C/svg%3E" alt="IN" className="w-6 h-4" />
                            <span className="font-bold">EN</span>
                        </div>

                        {/* Account - CLICK TO SIGN IN */}
                        <div className="cursor-pointer hover:border border-white p-2 rounded" onClick={navigateToLogin}>
                            <div className="text-xs">Hello, sign in</div>
                            <div className="font-bold text-sm">Account & Lists</div>
                        </div>

                        {/* Returns */}
                        <div className="cursor-pointer hover:border border-white p-2 rounded hidden sm:block">
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
                            <span className="font-bold hidden sm:block">Cart</span>
                        </div>
                    </div>
                </div>

                {/* Navigation Bar */}
                <div className="amazon-light-dark px-4 py-2 overflow-x-auto">
                    <div className="flex items-center gap-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-1 cursor-pointer nav-item p-2 rounded">
                            <Menu size={20} />
                            <span className="font-bold">All</span>
                        </div>
                        {['MX Player', 'Sell', 'Bestsellers', 'Today\'s Deals', 'Mobiles', 'Customer Service', 'Electronics', 'Home & Kitchen'].map((item) => (
                            <span key={item} className="cursor-pointer nav-item p-2 rounded">{item}</span>
                        ))}
                    </div>
                </div>
            </header>

            {/* Hero Banner */}
            <div className="relative h-64 md:h-96 overflow-hidden">
                {banners.map((banner, index) => (
                    <div
                        key={banner.id}
                        className={`absolute inset-0 transition-opacity duration-700 ${index === currentBanner ? 'opacity-100' : 'opacity-0'
                            }`}
                        style={{ background: banner.bg }}
                    >
                        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-16 flex items-center justify-between">
                            <div className="flex-1 z-10">
                                <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">{banner.title}</h1>
                                <p className="text-lg sm:text-2xl text-gray-800 mb-4 sm:mb-6">{banner.subtitle}</p>
                                {banner.brands.length > 0 && (
                                    <div className="flex gap-4">
                                        {banner.brands.map((brand, i) => (
                                            <span key={i} className="text-2xl sm:text-3xl font-bold text-gray-900">{brand}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="flex-1 flex justify-end">
                                <img src={banner.image} alt={banner.title} className="h-48 sm:h-72 object-contain" />
                            </div>
                        </div>
                    </div>
                ))}

                <button
                    onClick={prevBanner}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-2 rounded shadow-lg border border-transparent hover:border-orange-300"
                >
                    <ChevronLeft size={24} className="text-gray-800" />
                </button>
                <button
                    onClick={nextBanner}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-2 rounded shadow-lg border border-transparent hover:border-orange-300"
                >
                    <ChevronRight size={24} className="text-gray-800" />
                </button>
            </div>

            {/* Product Grid Section */}
            <div className="max-w-7xl mx-auto px-4 -mt-16 sm:-mt-32 relative z-10 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {productSections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="bg-white p-5 shadow-md flex flex-col h-full">
                            <h2 className="text-xl font-bold mb-4 text-gray-900">{section.title}</h2>
                            <div className="grid grid-cols-2 gap-4 mb-4 flex-grow">
                                {section.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="cursor-pointer product-card">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-24 sm:h-32 object-cover mb-2 rounded"
                                        />
                                        <p className="text-xs text-gray-800 line-clamp-2">{item.name}</p>
                                    </div>
                                ))}
                            </div>
                            <a href="#" className="text-blue-600 text-sm inline-block hover:text-orange-600 hover:underline">
                                See more
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-8">
                <div className="bg-gray-700 text-white text-center py-4 cursor-pointer hover:bg-gray-600">
                    <p className="text-sm">Back to top</p>
                </div>

                <div className="amazon-light-dark text-white py-12">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div>
                                <h3 className="font-bold mb-4">Get to Know Us</h3>
                                <ul className="text-sm space-y-2 text-gray-300">
                                    <li className="hover:underline cursor-pointer">About Us</li>
                                    <li className="hover:underline cursor-pointer">Careers</li>
                                    <li className="hover:underline cursor-pointer">Press Releases</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold mb-4">Connect with Us</h3>
                                <ul className="text-sm space-y-2 text-gray-300">
                                    <li className="hover:underline cursor-pointer">Facebook</li>
                                    <li className="hover:underline cursor-pointer">Twitter</li>
                                    <li className="hover:underline cursor-pointer">Instagram</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold mb-4">Make Money with Us</h3>
                                <ul className="text-sm space-y-2 text-gray-300">
                                    <li className="hover:underline cursor-pointer">Sell on Amazon</li>
                                    <li className="hover:underline cursor-pointer">Become an Affiliate</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold mb-4">Let Us Help You</h3>
                                <ul className="text-sm space-y-2 text-gray-300">
                                    <li className="hover:underline cursor-pointer">Your Account</li>
                                    <li className="hover:underline cursor-pointer">Returns Centre</li>
                                    <li className="hover:underline cursor-pointer">Help</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="amazon-dark text-white py-8 border-t border-gray-600">
                    <div className="max-w-6xl mx-auto px-4 text-center">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <div className="text-xl font-bold">
                                <span className="text-white">amazon</span>
                                <span className="text-xs">.in</span>
                            </div>
                        </div>
                        <div className="text-xs text-gray-400">
                            <p>© 1996-2026, Amazon.com, Inc. or its affiliates</p>
                            <p className="mt-2 text-yellow-500 font-bold">EDUCATIONAL DEMO ONLY</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
