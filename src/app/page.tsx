'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Button from '@/components/ui/Button';
import CheckBox from '@/components/ui/CheckBox';
import { SpecialtyServicesCards } from '@/components/ui/specialty-services-cards';
import { YouTubeVideo } from '@/components/ui/youtube-video';

interface InstallationStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  textColor: string;
}

interface ServiceFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const HomePage: React.FC = () => {
  const [selectedAdvantage, setSelectedAdvantage] = useState(0);
  const [contactForm, setContactForm] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [checkboxStates, setCheckboxStates] = useState({
    sustainable: true,
    ecoFriendly: true,
    financialSavings: true
  });

  const installationSteps: InstallationStep[] = [
    {
      id: '01',
      number: '01',
      title: 'Site Analysis',
      description: 'Carefully trained installers evaluate your roof slope, attic dimensions, and structural requirements to determine optimal placement for maximum efficiency.',
      icon: '/images/img_blueprint_1.svg',
      bgColor: 'bg-white',
      textColor: 'text-[#faf2e5]'
    },
    {
      id: '02',
      number: '02',
      title: 'Precision Installation',
      description: 'Expert mounting of Solar Star fans and Solatube systems on low or steep sloped roofs, ensuring weatherproof seals and structural protection.',
      icon: '/images/img_maintenance_1.svg',
      bgColor: 'bg-[#faf2e5]',
      textColor: 'text-white'
    },
    {
      id: '03',
      number: '03',
      title: 'System Integration',
      description: 'Seamless connection of solar-powered motors and light delivery systems, requiring no electrical hookup while maintaining roof integrity.',
      icon: '/images/img_solar_energy_1.svg',
      bgColor: 'bg-white',
      textColor: 'text-[#faf2e5]'
    },
    {
      id: '04',
      number: '04',
      title: 'Performance Testing',
      description: 'Comprehensive testing ensures whisper-quiet operation, optimal airflow, and brilliant light delivery while verifying all warranty requirements.',
      icon: '/images/img_house_1.svg',
      bgColor: 'bg-[#faf2e5]',
      textColor: 'text-white'
    }
  ];

  const serviceFeatures: ServiceFeature[] = [
    {
      id: '1',
      title: 'Solatube Daylighting',
      description: 'Revolutionary breakthrough technology captures and delivers brilliant natural sunlight to any room, reducing electric bills year-round with zero operating costs',
      icon: '/images/img_material_symbols_eco_outline.svg'
    },
    {
      id: '2',
      title: 'Solar Star Attic Fans',
      description: 'Environmentally-friendly ventilation powered by the sun. Whisper-quiet operation protects roof structure and qualifies for 30% Federal tax credit',
      icon: '/images/img_grommet_icons_technology.svg'
    },
    {
      id: '3',
      title: 'Professional Installation',
      description: 'Seasoned installers expertly trained for low or steep sloped roofs with small or large attic spaces. Premier dealer certification ensures quality',
      icon: '/images/img_mdi_email_certified_outline.svg'
    },
    {
      id: '4',
      title: 'Complete Attic Protection',
      description: 'Reduce core temperature, prevent moisture damage, and maintain structural integrity with our technically-advanced ventilation solutions',
      icon: '/images/img_bx_support.svg'
    }
  ];

  const advantages = [
    { title: 'Solar Tubes', bgImage: '/images/img_.png' },
    { title: 'Skylights', bgImage: '/images/img__0x0.png' },
    { title: 'Attic Fans', bgImage: '/images/img__1.png' },
    { title: 'Roofing', bgImage: '/images/img__2.png' },
    { title: 'Solar Lights', bgImage: '/images/img__3.png' }
  ];

  const handleContactFormChange = (field: keyof ContactFormData, value: string) => {
    setContactForm(prev => ({ ...prev, [field]: value }));
  };

  const handleContactSubmit = () => {
    console.log('Contact form submitted:', contactForm);
    // Track contact form submission
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'contact_form_submit', {
        event_category: 'engagement',
        event_label: 'contact_form',
        value: 1,
        name: contactForm.name,
        email: contactForm.email,
        phone: contactForm.phone
      });
    }
  };

  const handleCheckboxChange = (field: keyof typeof checkboxStates, checked: boolean) => {
    setCheckboxStates(prev => ({ ...prev, [field]: checked }));
  };

  const handleDiscoverSolutionsClick = () => {
    const bestServiceElement = document.querySelector('#best-service');
    if (bestServiceElement) {
      bestServiceElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-white flex flex-col items-center">
      <Header />
      <main className="w-full flex flex-col items-center gap-[40px] sm:gap-[50px] lg:gap-[60px]">
        {/* Hero Section */}
        <section id="hero" className="w-full flex items-center">
          <div className="w-full flex flex-col lg:flex-row items-start">
            <div className="w-full lg:w-1/2">
              <Image
                src="/images/img_ilustration_1.png"
                alt="Solar tubes bring natural light to your home - Professional installation by Solar Concepts AZ"
                width={1468}
                height={1704}
                quality={100}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                className="w-full h-auto object-contain select-none"
                style={{
                  imageRendering: 'crisp-edges',
                  WebkitImageRendering: 'crisp-edges',
                  MozImageRendering: 'crisp-edges',
                  msImageRendering: 'crisp-edges',
                  filter: 'contrast(1.05) saturate(1.1) brightness(1.02)',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  perspective: '1000px'
                }}
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-[16px] sm:gap-[24px] lg:gap-[32px] mt-[50px] sm:mt-[75px] lg:mt-[100px] px-4 sm:px-6 lg:px-0">
              <div className="flex justify-end mb-4 lg:mb-0 lg:mr-[140px]">
                <Image
                  src="/images/img_vector.svg"
                  alt="Decorative Vector"
                  width={100}
                  height={32}
                  className="w-[50px] h-[16px] sm:w-[75px] sm:h-[24px] lg:w-[100px] lg:h-[32px]"
                />
              </div>
              <div className="ml-0 sm:ml-[21px] lg:ml-[42px]">
                <Image
                  src="/images/img_vector_gray_200.svg"
                  alt="Decorative Vector Gray"
                  width={180}
                  height={44}
                  className="w-[90px] h-[22px] sm:w-[135px] sm:h-[33px] lg:w-[180px] lg:h-[44px]"
                />
              </div>
              <div className="relative w-full lg:w-[80%]">
                <div className="absolute top-[91px] sm:top-[136px] lg:top-[181px] right-0 lg:right-[85px] z-10">
                  <Image
                    src="/images/img_vector_gray_200.svg"
                    alt="Decorative Vector Gray"
                    width={180}
                    height={44}
                    className="w-[90px] h-[22px] sm:w-[135px] sm:h-[33px] lg:w-[180px] lg:h-[44px]"
                  />
                </div>
                <div className="flex flex-col gap-[20px] sm:gap-[30px] lg:gap-[40px]">
                  <div className="flex flex-col gap-[12px] sm:gap-[18px] lg:gap-[24px] items-center">
                    <h1 className="text-[34px] sm:text-[51px] lg:text-[68px] font-lato font-bold leading-[40px] sm:leading-[56px] lg:leading-[74px] text-left text-global-2 w-full antialiased heading-enhanced">
                      Harness the sun's power for{' '}
                      <span className="text-global-3">natural lighting</span>
                      {' '}and ventilation
                    </h1>
                    <p className="text-[15px] sm:text-[17px] lg:text-[19px] font-lato font-medium leading-[22px] sm:leading-[24px] lg:leading-[28px] text-left text-global-2 w-full antialiased text-enhanced">
                      Bring brilliant natural sunlight into any room with Solatube breakthrough technology while protecting your attic with whisper-quiet Solar Star fans. Reduce electric bills year-round and qualify for 30% Federal tax credits.
                    </p>
                  </div>
                  <Button
                    variant="gradient"
                    onClick={handleDiscoverSolutionsClick}
                    className="w-auto px-[14px] sm:px-[16px] lg:px-[18px] py-[14px] sm:py-[16px] lg:py-[18px] text-[14px] sm:text-[16px] lg:text-[18px] font-lato font-bold leading-[17px] sm:leading-[19px] lg:leading-[22px] rounded-[24px]"
                  >
                    Discover Solutions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Steps Section */}
        <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col gap-[29px] sm:gap-[43px] lg:gap-[58px] items-center">
            <h2 className="text-[25px] sm:text-[37px] lg:text-[50px] font-lato font-bold leading-[30px] sm:leading-[45px] lg:leading-[60px] text-center text-global-2 w-full sm:w-[85%] lg:w-[68%]">
              Expert installation on{' '}
              <span className="text-global-3">any roof type</span>
              {' '}with precision craftsmanship
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] sm:gap-[24px] lg:gap-[28px] w-full">
              {installationSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`${step.bgColor} rounded-[28px] shadow-[0_8px_32px_rgba(45,44,44,0.12)] hover:shadow-[0_12px_48px_rgba(45,44,44,0.18)] transition-all duration-300 hover:scale-[1.02] flex flex-col justify-end items-end w-full sm:w-[300px] lg:w-[320px] mx-auto border border-gray-100/50`}
                >
                  <div className="relative w-full h-[280px] sm:h-[360px] lg:h-[440px] p-[24px] sm:p-[28px] lg:p-[32px]">
                    <div className="flex flex-col h-full">
                      <div className="flex flex-col gap-[20px] sm:gap-[24px] lg:gap-[28px] h-full">
                        <div className="flex items-start gap-[12px] sm:gap-[14px] lg:gap-[16px]">
                          <div className="flex-shrink-0 p-2 bg-white/80 rounded-xl shadow-sm">
                            <Image
                              src={step.icon}
                              alt={step.title}
                              width={36}
                              height={36}
                              className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] lg:w-[36px] lg:h-[36px]"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] font-lato font-bold leading-[24px] sm:leading-[28px] lg:leading-[32px] text-left text-global-2 mb-2">
                              {step.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-[15px] sm:text-[17px] lg:text-[19px] font-lato font-medium leading-[22px] sm:leading-[24px] lg:leading-[27px] text-left text-global-2/90 flex-1 antialiased">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Energy Saving Section */}
        <section id="about" className="w-full flex justify-end items-center pr-[2%] sm:pr-[3%] lg:pr-[4%]">
          <div className="flex flex-col lg:flex-row justify-start items-center w-full">
            <div className="w-full lg:w-[48%] flex flex-col gap-[22px] sm:gap-[33px] lg:gap-[44px] px-4 sm:px-6 lg:px-0 lg:ml-[119px]">
              <div className="flex flex-col gap-[20px] sm:gap-[30px] lg:gap-[40px] items-center w-full lg:w-[86%]">
                <h2 className="text-[25px] sm:text-[37px] lg:text-[50px] font-lato font-bold leading-[30px] sm:leading-[45px] lg:leading-[60px] text-left text-global-2 w-full">
                  Combat heat and moisture with{' '}
                  <span className="text-global-3">advanced ventilation</span>
                  {' '}technology
                </h2>
                <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-lato font-normal leading-[16px] sm:leading-[18px] lg:leading-[21px] text-justify text-global-2 w-full">
                  Research proves heat and moisture are every attic's worst enemy. Our Solar Star attic fans cost nothing to operate, require no electrical hookup, and protect your roof's structural integrity while running whisper-quiet.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-start items-start w-full gap-8 sm:gap-12 lg:gap-16">
                <div className="flex flex-col gap-[12px] sm:gap-[16px] lg:gap-[20px] justify-start items-start w-full sm:w-[45%]">
                  <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-lato font-semibold leading-[20px] sm:leading-[22px] lg:leading-[24px] text-left text-global-2 uppercase tracking-wide">
                    Projects
                  </p>
                  <p className="text-[36px] sm:text-[48px] lg:text-[56px] font-lato font-black leading-[40px] sm:leading-[52px] lg:leading-[60px] text-left text-global-3">
                    1000+
                  </p>
                  <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-lato font-medium leading-[20px] sm:leading-[22px] lg:leading-[26px] text-left text-global-2 max-w-[280px]">
                    Successful installations of solar tubes, skylights, and roofing projects
                  </p>
                </div>
                <div className="flex flex-col gap-[12px] sm:gap-[16px] lg:gap-[20px] justify-start items-start w-full sm:flex-1">
                  <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-lato font-semibold leading-[20px] sm:leading-[22px] lg:leading-[24px] text-left text-global-2 uppercase tracking-wide">
                    Experience
                  </p>
                  <p className="text-[36px] sm:text-[48px] lg:text-[56px] font-lato font-black leading-[40px] sm:leading-[52px] lg:leading-[60px] text-left text-global-3">
                    40 Years
                  </p>
                  <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-lato font-medium leading-[20px] sm:leading-[22px] lg:leading-[26px] text-left text-global-2 max-w-[300px]">
                    Four decades of master craftsmanship and certified installation expertise
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[46%] mt-8 lg:mt-0">
              <Image
                src="/images/img_image_3.png"
                alt="Solar Concepts AZ - 40 years of master craftsmanship in solar tubes and roofing"
                width={1296}
                height={1408}
                quality={100}
                priority={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 648px"
                className="w-full h-auto object-contain select-none"
                style={{
                  imageRendering: 'crisp-edges',
                  WebkitImageRendering: 'crisp-edges',
                  filter: 'contrast(1.04) saturate(1.08) brightness(1.01)',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden'
                }}
              />
            </div>
          </div>
        </section>

        {/* Specialty Services Section */}
        <section id="services" className="w-full flex flex-col gap-[21px] sm:gap-[31px] lg:gap-[42px] justify-center items-center py-8">
          <h2 className="text-[25px] sm:text-[37px] lg:text-[50px] font-lato font-bold leading-[30px] sm:leading-[45px] lg:leading-[61px] text-center text-global-2">
            Our{' '}
            <span className="text-global-3">Specialty Services</span>
          </h2>
          <SpecialtyServicesCards
            items={advantages.map((advantage, index) => ({
              title: advantage.title,
              bgImage: advantage.bgImage,
              index: index
            }))}
            direction="right"
            speed="slow"
            pauseOnHover={true}
            className="w-full"
          />
        </section>

        {/* Solar Solution Video Section */}
        <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">
            <div className="w-full lg:w-1/2">
              <YouTubeVideo
                videoId="tpPvYhozmNk"
                title="Solar Tubes Installation Process"
                className="w-full"
              />
            </div>
            <div className="w-full lg:w-[44%] flex flex-col gap-[14px] sm:gap-[21px] lg:gap-[28px] justify-start items-start">
              <h2 className="text-[25px] sm:text-[37px] lg:text-[50px] font-lato font-bold leading-[30px] sm:leading-[45px] lg:leading-[60px] text-left text-global-2 w-full">
                See the{' '}
                <span className="text-global-3">Solar Star difference</span>
                {' '}in action
              </h2>
              <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-lato font-normal leading-[16px] sm:leading-[18px] lg:leading-[21px] text-justify text-global-2 w-full lg:w-[90%]">
                Watch how our solar-powered attic fans harness the sun's energy to drive whisper-quiet motors, pushing hot air through exhaust screens while protecting your roof's structural integrity.
              </p>
            </div>
          </div>
        </section>

        {/* Best Service Section */}
        <section id="best-service" className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row gap-[20px] sm:gap-[30px] lg:gap-[40px] justify-center items-center">
            <div className="w-full lg:w-[40%] flex flex-col gap-[65px] sm:gap-[97px] lg:gap-[130px] justify-start items-center">
              <div className="flex flex-col gap-[12px] sm:gap-[18px] lg:gap-[24px] justify-start items-start w-full">
                <h2 className="text-[25px] sm:text-[37px] lg:text-[50px] font-lato font-bold leading-[30px] sm:leading-[45px] lg:leading-[60px] text-left text-global-2 w-full">
                  We provide you with the{' '}
                  <span className="text-global-3">best service</span>
                </h2>
                <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-lato font-normal leading-[16px] sm:leading-[18px] lg:leading-[21px] text-justify text-global-2 w-full lg:w-[90%]">
                  We offer seamless installation and maintenance, ensuring optimal performance for your solar panels throughout your sustainable energy journey
                </p>
              </div>
              <Image
                src="/images/img_picture.png"
                alt="Service Picture"
                width={462}
                height={298}
                className="w-full h-auto rounded-[24px]"
              />
            </div>
            <div className="w-full lg:flex-1 ml-0 lg:ml-[40px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                {serviceFeatures.map((feature, index) => (
                  <div
                    key={feature.id}
                    className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 flex flex-col items-center text-center min-h-[320px] hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex flex-col gap-4 justify-center items-center h-full">
                      <div className="p-4 bg-gray-50 rounded-full">
                        <Image
                          src={feature.icon}
                          alt={feature.title}
                          width={48}
                          height={48}
                          className="w-12 h-12"
                        />
                      </div>
                      <div className="flex flex-col gap-3">
                        <h3 className="text-xl lg:text-2xl font-lato font-bold text-global-2 antialiased heading-enhanced">
                          {feature.title}
                        </h3>
                        <p className="text-sm lg:text-base font-lato font-medium leading-relaxed text-global-2 antialiased text-enhanced card-text">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Solar Concepts Solutions Section */}
        <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col gap-[34px] sm:gap-[51px] lg:gap-[68px] justify-start items-center">
            <h2 className="text-[25px] sm:text-[37px] lg:text-[50px] font-lato font-bold leading-[30px] sm:leading-[45px] lg:leading-[60px] text-center text-global-2 w-full sm:w-[85%] lg:w-[68%]">
              Solar Concepts Provides{' '}
              <span className="text-[#ff8400]">comprehensive solutions</span>
              {' '}for your home
            </h2>
            <div className="relative w-full h-[363px] sm:h-[544px] lg:h-[726px]">
              <div className="absolute top-[1px] sm:top-[1px] lg:top-[2px] right-0 w-[56%] h-[362px] sm:h-[543px] lg:h-[724px]">
                <Image
                  src="/images/img_union.png"
                  alt="Union Background"
                  width={684}
                  height={724}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-[56%] bg-[linear-gradient(135deg,#00000089_0%,_#00000089_100%)] rounded-[0px_24px_0px_0px] p-[11px] sm:p-[16px] lg:p-[22px]">
                  <div className="flex flex-col gap-[6px] sm:gap-[9px] lg:gap-[12px] justify-start items-start w-full">
                    <h3 className="text-[14px] sm:text-[21px] lg:text-[28px] font-lato font-bold leading-[17px] sm:leading-[25px] lg:leading-[34px] text-center text-white">
                      Residential
                    </h3>
                    <p className="text-[7px] sm:text-[10px] lg:text-[14px] font-lato font-normal leading-[9px] sm:leading-[14px] lg:leading-[19px] text-left text-white w-full">
                      Transform your home with solar tubes, skylights, and premium roofing solutions for natural lighting
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-[40%] h-[182px] sm:h-[273px] lg:h-[364px]">
                <Image
                  src="/images/img_rectangle_14.png"
                  alt="Commercial Background"
                  width={494}
                  height={364}
                  className="w-full h-full object-cover rounded-[0px_0px_24px_0px]"
                />
                <div className="absolute bottom-0 left-0 w-[80%] bg-[linear-gradient(135deg,#00000089_0%,_#00000089_100%)] rounded-[0px_24px_24px_0px] p-[11px] sm:p-[16px] lg:p-[22px]">
                  <div className="flex flex-col gap-[6px] sm:gap-[9px] lg:gap-[12px] justify-start items-start w-full">
                    <h3 className="text-[14px] sm:text-[21px] lg:text-[28px] font-lato font-bold leading-[17px] sm:leading-[25px] lg:leading-[34px] text-center text-white">
                      Commercial
                    </h3>
                    <p className="text-[7px] sm:text-[10px] lg:text-[14px] font-lato font-normal leading-[9px] sm:leading-[14px] lg:leading-[19px] text-left text-white w-[98%]">
                      Professional installation of solar tubes and roofing systems for commercial buildings and warehouses.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-[58%] h-[171px] sm:h-[256px] lg:h-[342px]">
                <Image
                  src="/images/img_rectangle_11.png"
                  alt="Utility Scale Background"
                  width={690}
                  height={342}
                  className="w-full h-full object-cover rounded-[24px_0px_0px_0px]"
                />
                <div className="absolute bottom-0 left-0 w-[56%] bg-[linear-gradient(135deg,#00000089_0%,_#00000089_100%)] rounded-[0px_24px_0px_0px] p-[13px] sm:p-[19px] lg:p-[26px]">
                  <div className="flex flex-col gap-[6px] sm:gap-[9px] lg:gap-[12px] justify-start items-start w-full">
                    <h3 className="text-[14px] sm:text-[21px] lg:text-[28px] font-lato font-bold leading-[17px] sm:leading-[25px] lg:leading-[34px] text-center text-white">
                      Roofing Services
                    </h3>
                    <p className="text-[7px] sm:text-[10px] lg:text-[14px] font-lato font-normal leading-[9px] sm:leading-[14px] lg:leading-[19px] text-left text-white w-full">
                      Complete roofing solutions including tile, clay tile, shingles, and shake wood with master craftsmanship.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full flex justify-start items-center px-4 sm:px-6 lg:px-8">
          <div
            className="w-full bg-global-1 flex justify-center items-center py-[55px] sm:py-[82px] lg:py-[110px] px-[28px] sm:px-[42px] lg:px-[56px] rounded-[24px] sm:rounded-[32px] lg:rounded-[40px]"
            style={{
              backgroundImage: 'url(/images/img_pexelskindelmedia9875676_1.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="flex flex-col justify-start items-center w-[80%]">
              <h2 className="text-[25px] sm:text-[37px] lg:text-[50px] font-lato font-bold leading-[30px] sm:leading-[45px] lg:leading-[60px] text-center text-white w-full">
                Brighten your home with natural light and expert craftsmanship
              </h2>
            </div>
          </div>
        </section>

        {/* Natural Lighting Section */}
        <section className="w-full bg-gray-50 py-4 lg:py-6">
          <div className="w-full max-w-[2100px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
              <div className="w-full lg:w-1/2 lg:pr-8">
                <h2 className="text-[28px] sm:text-[40px] lg:text-[48px] font-lato font-bold leading-tight text-global-2 mb-6">
                  <span className="text-global-3">Premier dealer</span>
                  {' '}of advanced solar solutions.
                </h2>
                <p className="text-[16px] lg:text-[18px] font-lato font-normal leading-relaxed text-global-2 mb-8">
                  Solar Concepts AZ is the premier dealer and installer of Solatube daylighting systems and Solar Star attic fans. Let the sun's power fuel simple motors that deliver brilliant natural light and superior ventilation.
                </p>
                <div className="flex flex-wrap gap-6 lg:gap-8">
                  <div className="flex items-center gap-3">
                    <CheckBox
                      checked={checkboxStates.sustainable}
                      onChange={(checked) => handleCheckboxChange('sustainable', checked)}
                      size="sm"
                    />
                    <span className="text-[16px] font-lato font-medium text-global-2">
                      Sustainable
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckBox
                      checked={checkboxStates.ecoFriendly}
                      onChange={(checked) => handleCheckboxChange('ecoFriendly', checked)}
                      size="sm"
                    />
                    <span className="text-[16px] font-lato font-medium text-global-2">
                      Eco Friendly
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckBox
                      checked={checkboxStates.financialSavings}
                      onChange={(checked) => handleCheckboxChange('financialSavings', checked)}
                      size="sm"
                    />
                    <span className="text-[16px] font-lato font-medium text-global-2">
                      Energy Savings
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <Image
                  src="/images/img_ilustration.svg"
                  alt="Natural lighting solutions with solar tubes and skylights - Solar Concepts AZ"
                  width={1800}
                  height={1200}
                  quality={100}
                  priority={false}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 900px"
                  className="w-full max-w-[900px] h-auto object-contain select-none"
                  style={{
                    imageRendering: 'crisp-edges',
                    WebkitImageRendering: 'crisp-edges',
                    filter: 'contrast(1.03) saturate(1.05) brightness(1.01)',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden'
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="w-full py-16 lg:py-20">
          <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
              {/* Left Side - Text Above Image */}
              <div className="w-full lg:w-1/2">
                {/* Premium Text Section */}
                <div className="mb-8 lg:mb-10">
                  <p className="text-global-3 text-lg lg:text-xl font-lato font-semibold mb-4 uppercase tracking-wide">
                    Make Appointment
                  </p>
                  <h2 className="text-global-2 text-3xl lg:text-5xl font-lato font-bold leading-tight mb-6">
                    Start your home improvement{' '}
                    <span className="text-global-3">project with us</span>
                  </h2>
                  <p className="text-global-2/80 text-lg font-lato font-medium leading-relaxed">
                    Ready to transform your home with natural lighting and premium solar solutions? Let's discuss your project and create the perfect solution for your needs.
                  </p>
                </div>

                {/* Clean Image */}
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/img_image_16.png"
                    alt="Solar installation project - Professional home improvement services"
                    width={600}
                    height={400}
                    className="w-full h-[300px] lg:h-[400px] object-cover"
                  />
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="w-full lg:w-1/2">
                <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-lato font-bold text-global-2 mb-6 text-center">
                    Let us Fill This form below
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-lato font-semibold text-global-2 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        value={contactForm.name}
                        onChange={(e) => handleContactFormChange('name', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-global-3 focus:border-transparent"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-lato font-semibold text-global-2 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={contactForm.phone}
                        onChange={(e) => handleContactFormChange('phone', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-global-3 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-lato font-semibold text-global-2 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => handleContactFormChange('email', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-global-3 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-lato font-semibold text-global-2 mb-2">
                        Message
                      </label>
                      <textarea
                        value={contactForm.message}
                        onChange={(e) => handleContactFormChange('message', e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-global-3 focus:border-transparent resize-none"
                        placeholder="Enter your message"
                      />
                    </div>
                    <Button
                      variant="gradient"
                      onClick={handleContactSubmit}
                      className="w-full py-3 text-lg font-lato font-bold rounded-lg mt-6"
                    >
                      Send
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;