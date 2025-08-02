'use client';
import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  const quickLinks = [
    'About Us',
    'Solar Tubes',
    'Skylights',
    'Attic Solutions',
    'Roofing Services'
  ];

  const helpLinks = [
    'Account',
    'Privacy Policy',
    'Support Center',
    'Terms & Conditions'
  ];

  const socialIcons = [
    { src: '/images/img_instagram_icon.svg', alt: 'Instagram', size: 36 },
    { src: '/images/img_twitter_icon.svg', alt: 'Twitter', size: 38 },
    { src: '/images/img_facebook_icon.svg', alt: 'Facebook', size: 36 }
  ];

  const contactInfo = [
    { icon: '/images/img_solar_phone_bold.svg', text: '(480) 968-1777' },
    { icon: '/images/img_material_symbols_mail.svg', text: 'sales@solarconceptsaz.com' },
    { icon: '/images/img_mdi_location.svg', text: '916 S 52nd Suite # 100, Tempe, AZ 85281' }
  ];

  return (
    <footer className="w-full bg-global-3 mt-[106px] sm:mt-[150px] lg:mt-[212px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
        <div className="py-[30px] sm:py-[45px] lg:py-[60px]">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
            
            {/* Company Info Section */}
            <div className="w-full lg:w-[26%] flex flex-col gap-6">
              <div className="flex items-center p-4 lg:p-[22px]">
                <Image
                  src="/images/solar-concepts-logo.png"
                  alt="Solar Concepts - Arizona Premier Dealer"
                  width={400}
                  height={160}
                  className="w-[200px] h-[80px] sm:w-[300px] sm:h-[120px] lg:w-[400px] lg:h-[160px] object-contain"
                />
              </div>
              
              <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-lato font-normal leading-[18px] sm:leading-[19px] lg:leading-[21px] text-justify text-global-2">
                Solar Concepts AZ - Arizona's premier dealer for solar tubes, skylights, attic fans, roofing, and natural lighting solutions. 40 years of master craftsmanship and certified installation expertise.
              </p>
              <div className="mt-4">
                <p className="text-[12px] sm:text-[14px] lg:text-[16px] font-lato font-medium text-global-2">
                  Website: SolarConceptsAz.com
                </p>
                <p className="text-[12px] sm:text-[14px] lg:text-[16px] font-lato font-normal text-global-2">
                  Fax: (480) 968-0991
                </p>
              </div>
              
              <div className="flex justify-between items-center w-[60%] sm:w-[50%] lg:w-[60%]">
                {socialIcons.map((social, index) => (
                  <button
                    key={index}
                    className="transition-all duration-200 hover:scale-110 active:scale-95"
                    aria-label={social.alt}
                  >
                    <Image
                      src={social.src}
                      alt={social.alt}
                      width={social.size}
                      height={social.size}
                      className={`w-[${Math.floor(social.size * 0.7)}px] h-[${Math.floor(social.size * 0.7)}px] sm:w-[${Math.floor(social.size * 0.85)}px] sm:h-[${Math.floor(social.size * 0.85)}px] lg:w-[${social.size}px] lg:h-[${social.size}px]`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Links Section */}
            <div className="w-full lg:w-[58%] flex flex-col sm:flex-row justify-between gap-8 sm:gap-4">
              
              {/* Quick Links */}
              <div className="flex flex-col gap-6">
                <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-lato font-bold leading-[22px] sm:leading-[24px] lg:leading-[27px] text-justify text-global-2">
                  Quick Links
                </h3>
                <ul className="flex flex-col gap-6">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <button className="text-[14px] sm:text-[16px] lg:text-[18px] font-lato font-normal leading-[18px] sm:leading-[20px] lg:leading-[22px] text-justify text-global-2 hover:opacity-80 transition-opacity duration-200">
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Help Section */}
              <div className="flex flex-col gap-6">
                <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-lato font-bold leading-[22px] sm:leading-[24px] lg:leading-[27px] text-justify text-global-2">
                  Help
                </h3>
                <ul className="flex flex-col gap-6">
                  {helpLinks.map((link, index) => (
                    <li key={index} role="menuitem">
                      <button className="text-[14px] sm:text-[16px] lg:text-[18px] font-lato font-normal leading-[18px] sm:leading-[20px] lg:leading-[22px] text-justify text-global-2 hover:opacity-80 transition-opacity duration-200">
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Information */}
              <div className="flex flex-col gap-[20px] sm:gap-[23px] lg:gap-[26px] self-start w-full sm:w-[40%]">
                <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] font-lato font-bold leading-[22px] sm:leading-[24px] lg:leading-[27px] text-justify text-global-2">
                  Contact Information
                </h3>
                <div className="flex flex-col gap-[26px] sm:gap-[30px] lg:gap-[34px]">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center gap-5">
                      <Image
                        src={contact.icon}
                        alt=""
                        width={24}
                        height={24}
                        className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] lg:w-[24px] lg:h-[24px]"
                      />
                      {contact.icon.includes('phone') ? (
                        <a 
                          href={`tel:${contact.text}`}
                          onClick={() => {
                            if (typeof window !== 'undefined' && window.gtag) {
                              window.gtag('event', 'phone_click', {
                                event_category: 'contact',
                                event_label: 'phone_number',
                                value: 1
                              });
                            }
                          }}
                          className="text-[14px] sm:text-[16px] lg:text-[18px] font-lato font-normal leading-[18px] sm:leading-[20px] lg:leading-[22px] text-justify text-global-2 hover:text-global-3 transition-colors duration-200"
                        >
                          {contact.text}
                        </a>
                      ) : contact.icon.includes('mail') ? (
                        <a 
                          href={`mailto:${contact.text}`}
                          className="text-[14px] sm:text-[16px] lg:text-[18px] font-lato font-normal leading-[18px] sm:leading-[20px] lg:leading-[22px] text-justify text-global-2 hover:text-global-3 transition-colors duration-200"
                        >
                          {contact.text}
                        </a>
                      ) : (
                        <span className="text-[14px] sm:text-[16px] lg:text-[18px] font-lato font-normal leading-[18px] sm:leading-[20px] lg:leading-[22px] text-justify text-global-2">
                          {contact.text}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;