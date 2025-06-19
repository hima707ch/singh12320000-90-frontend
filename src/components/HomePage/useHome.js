import { useState, useEffect } from 'react';

const useHome = () => {
  const [heroVariant, setHeroVariant] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroVariant(prev => prev === 1 ? 2 : 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleContact = async () => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: '',
          email: '',
          message: 'Interested in properties',
        }),
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error);
      
      alert('Thank you for your interest! We will contact you soon.');
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return {
    heroVariant,
    handleContact,
  };
};

export default useHome;