import React from 'react';
import { Tag, Clock, Check, ArrowRight } from 'lucide-react';

const Marketplace = () => {
  const listings = [
    {
      id: 1,
      title: 'Solar Farm Alpha Credits',
      amount: '500 tCO2e',
      price: '$12,500',
      status: 'Verified',
      expiry: '30 days'
    },
    {
      id: 2,
      title: 'Green Energy Beta Credits',
      amount: '300 tCO2e',
      price: '$7,500',
      status: 'Verified',
      expiry: '45 days'
    },
    {
      id: 3,
      title: 'Renewable Project Gamma',
      amount: '1000 tCO2e',
      price: '$25,000',
      status: 'Pending',
      expiry: '60 days'
    }
  ];

  return (
    <section id="marketplace" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Carbon Credit Marketplace
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse and trade verified carbon credits from renewable energy projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((listing) => (
            <div key={listing.id} className="marketplace-card">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{listing.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  listing.status === 'Verified' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {listing.status}
                </span>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <Tag className="w-5 h-5" />
                  <span>{listing.amount}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>Expires in {listing.expiry}</span>
                </div>
                <div className="text-2xl font-bold text-primary">
                  {listing.price}
                </div>
              </div>

              <button className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors flex items-center justify-center gap-2">
                Purchase Credits <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marketplace;