import React, { useState } from 'react';
import '../styles/services.css'; // Assuming you have a CSS file for styling

function Services() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    { id: 1, name: 'Dermaplane', description: 'A gentle exfoliation treatment for smoother skin.', price: '£20', icon: 'fas fa-spa' },
    { id: 2, name: 'Steam Facials', description: 'Deep cleansing facials using steam.', price: 'From £39', icon: 'fas fa-water' },
    { id: 3, name: 'Microdermabrasion with Red Light Therapy', description: 'Non-invasive skin treatment for glowing skin.', price: '£45', icon: 'fas fa-lightbulb' },
    { id: 4, name: 'Microneedling with PRP or Mesotherapy', description: 'Advanced skin rejuvenation with microneedling.', price: '£80', icon: 'fas fa-syringe' },
    { id: 5, name: 'Mesotherapy', description: 'Skin hydration and rejuvenation treatment.', price: '£100', icon: 'fas fa-droplet' },
    { id: 6, name: 'Skin Boosters: Seventy Hyal', description: 'Skin booster for hydration and glow.', price: '£100', icon: 'fas fa-leaf' },
    { id: 7, name: 'Lumi Pro', description: 'Professional skin treatment for rejuvenation.', price: '£100', icon: 'fas fa-moon' },
    { id: 8, name: 'Lumi Eyes', description: 'Under-eye treatment for dark circles and fine lines.', price: '£80', icon: 'fas fa-eye' },
    { id: 9, name: 'Botox (Skin Smoothing Treatment)', description: 'Botox for wrinkle smoothing.', price: '£120 for 3 areas', icon: 'fas fa-face-smile' },
    { id: 10, name: 'Botox Top-Up', description: 'Additional Botox for skin smoothing.', price: '£20 top up', icon: 'fas fa-plus' },
    { id: 11, name: 'Lip Flip', description: 'Botox treatment to enhance lip shape.', price: '£50', icon: 'fas fa-lips' },
    { id: 12, name: 'Bunny Lines', description: 'Botox for fine lines around the nose.', price: '£50', icon: 'fas fa-rabbit' },
    { id: 13, name: 'Nefertiti Neck Lift', description: 'Botox for a lifted, contoured neck.', price: '£160', icon: 'fas fa-neck' },
    { id: 14, name: 'Dermal Fillers - Lips, Cheeks, Chin, Jaw', description: 'Fillers to add volume and definition.', price: 'From £120 for 1.1ml', icon: 'fas fa-face' },
    { id: 15, name: 'PRP - Hair Restoration', description: 'Platelet-rich plasma treatment for hair loss.', price: 'From £80', icon: 'fas fa-hair' },
    { id: 16, name: 'Filler Dissolving', description: 'Dissolve unwanted filler.', price: 'From £60 per session', icon: 'fas fa-trash' },
    { id: 17, name: 'Fat Dissolving with RF (Small Area)', description: 'Fat dissolving treatment for small areas.', price: '£60', icon: 'fas fa-snowflake' },
    { id: 18, name: 'Fat Dissolving with RF (Large Area)', description: 'Fat dissolving treatment for large areas.', price: '£100', icon: 'fas fa-snowflake' },
    { id: 19, name: 'Vitamins - B12 / C / D', description: 'Vitamin injections for health and wellness.', price: '£15', icon: 'fas fa-capsules' }
  ];

  const toggleService = (id) => {
    setActiveService(activeService === id ? null : id);
  };

  return (
    <section id="services">
      <h2>Our Services</h2>
      <div className="services-list">
        {services.map(service => (
          <div 
            key={service.id} 
            className={`service-item ${activeService === service.id ? 'active' : ''}`}
            onClick={() => toggleService(service.id)}
          >
            <div className="service-header">
              <i className={service.icon}></i>
              <h3>{service.name}</h3>
              <span className="toggle-icon">{activeService === service.id ? '-' : '+'}</span>
            </div>
            {activeService === service.id && (
              <div className="service-details">
                <div className="service-text">
                  <p>{service.description}</p>
                  <p className="service-price">Price: {service.price}</p>
                </div>
                <img src={service.image} alt={service.name} className="service-image" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
