import React from 'react';

const Footer = () => {
    return (
        <div className='flex flex-col gap-2 justify-center items-center p-10'>
             <div className="text-xl font-semibold">
        <span className="text-blue-600">Auction</span>
        <span className="text-yellow-500">Gallery</span>
      </div>
      <div className='flex gap-3'>
        <p>Bid.</p>
        <p>Win.</p>
        <p>Own.</p>
      </div>
      <div className='flex gap-8'>
        <p>Home</p>
        <p>Action</p>
        <p>Categories</p>
        <p>How to works</p>
      </div>  
      <div>
        <p>© 2025 AuctionHub. All rights reserved.</p>
        </div>  

            
        </div>
    );
};

export default Footer;