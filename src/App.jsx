import React from 'react';
import './App.css'; 

const pricingData = [
  {
    title: 'FREE',
    price: '$0/month',
    features: [
      'Single User',
      '50GB Storage',
      'Unlimited Public Projects',
      'Community Access',
      'Unlimited Private Projects',
      'Dedicated Phone Support',
      'Free Subdomain',
      'Monthly Status Reports',
    ],
    availableFeatures: [true, true, true, true, false, false, false, false],
  },
  {
    title: 'PLUS',
    price: '$9/month',
    features: [
      '5 Users',
      '50GB Storage',
      'Unlimited Public Projects',
      'Community Access',
      'Unlimited Private Projects',
      'Dedicated Phone Support',
      'Free Subdomain',
      'Monthly Status Reports',
    ],
    availableFeatures: [true, true, true, true, true, true, true, false],
  },
  {
    title: 'PRO',
    price: '$49/month',
    features: [
      'Unlimited Users',
      '50GB Storage',
      'Unlimited Public Projects',
      'Community Access',
      'Unlimited Private Projects',
      'Dedicated Phone Support',
      'Free Subdomain',
      'Monthly Status Reports',
    ],
    availableFeatures: [true, true, true, true, true, true, true, true],
  },
];

const PricingCard = ({ title, price, features, availableFeatures }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <h4>{price}</h4>
      <ul>
        {features.map((feature, index) => (
          <li key={index} className={availableFeatures[index] ? '' : 'text-muted'}>
            {availableFeatures[index] ? '✔' : '✖'} {feature}
          </li>
        ))}
      </ul>
      <button>BUTTON</button>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <div className="card-container">
        {pricingData.map((data, index) => (
          <PricingCard
            key={index}
            title={data.title}
            price={data.price}
            features={data.features}
            availableFeatures={data.availableFeatures}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
