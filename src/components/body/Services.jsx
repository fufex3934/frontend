  import React, { useState,useEffect } from 'react';
  import { TransitionGroup, CSSTransition } from 'react-transition-group';
  import Navs from '../navbars/navs';
  import Footer from './Footer';
  import safety from '/safety.jpg';
  import transport from '/transport.jpg';
  import judicial from '/judicial.jpg';
  import environment from '/environment.jpg';
  import admin from '/admin.jpg';
  import education from '/education.jpg';
  import infrastructure from '/infrastructure.jpg';
  import economic from '/economic.jpg';
  import health from '/health.jpg';
  import house from '/house.jpg';
  import disaster from '/disaster.jpg';
  import court from '/court.jpg';
  import legal from '/legal.png';
  import lawn from '/lawn.jpg';
  import criminal from '/criminal.jpg';
  import civil from '/civil.png';
  import legalAid from '/legalAid.jpg';
  import employment from '/employment.jpg';
  import { useTranslation } from 'react-i18next';

  const Services = () => {
    const {t} = useTranslation();
    const services = [
      {
        id: 1,
        title: `${t('services.publicLaw')}`,
        description: `${t('services.publicLawdesc')}`,
        image: safety,
        availability: `${t('services.available')}`,
        expertTeam: `${t('services.expert')}`,
        category: `${t('services.publicLaw')}`,
      },
      {
        id: 2,
        title: `${t('services.pTransport')}`,
        description: `${t('services.pTransportdesc')}`,
        image: transport,
        availability: `${t('services.available')}`,
        expertTeam: `${t('services.expert')}`,
        category: `${t('services.publicLaw')}`,
      },
      {
        id: 3,
        title: `${t('services.legalJudicial')}`,
        description: `${t('services.legalJudicialdesc')}`,
        image: judicial,
        availability: `${t('services.available')}`,
        expertTeam: `${t('services.expert')}`,
        category: `${t('services.publicLaw')}`,
      },
      {
        id: 4,
        title:`${t('services.eprotection')}`,
        description: `${t('services.eprotectiondesc')}`,
        image: environment,
        availability: `${t('services.available')}`,
        expertTeam: `${t('services.expert')}`,
        category: `${t('services.publicLaw')}`,
      },
      {
        id: 5,
        title: `${t('services.padmin')}`,
        description: `${t('services.padmindesc')}`,
        image: admin,
        availability: `${t('services.available')}`,
        expertTeam: `${t('services.expert')}`,
        category: `${t('services.publicLaw')}`,
      },
      {
        id: 6,
        title: `${t('services.education')}`,
        description: `${t('services.educationdesc')}`,
        image: education,
        availability: `${t('services.available')}`,
        expertTeam: `${t('services.expert')}`,
        category: `${t('services.socialWelfare')}`,
      },
      {
        id: 7,
        title: `${t('services.infrastructure')}`,
        description: `${t('services.infrastructuredesc')}`,
        image: infrastructure,
        availability: `${t('services.available')}`,
        expertTeam: `${t('services.expert')}`,
        category: `${t('services.socialWelfare')}`,
      },
      {
        id: 8,
        title: `${t('services.economicdev')}`,
        description: `${t('services.economicdevdesc')}`,
        image: economic,
        availability: `${t('services.available')}`,
        expertTeam: `${t('services.expert')}`,
        category: `${t('services.socialWelfare')}`,
      },
      {
        id: 9,
        title: `${t('services.healthcare')}`,
        description: `${t('services.healthcaredesc')}`,
        image: health,
        availability: `${t('services.available')}`,
        expertTeam: `${t('services.expert')}`,
        category: `${t('services.socialWelfare')}`,
      },
      {
        id: 10,
        title: `${t('services.employment')}`,
        description: `${t('services.employmentdesc')}`,
        image: employment,
        availability: `${t('services.available')}`,
        expertTeam: `${t('services.expert')}`,
        category: `${t('services.socialWelfare')}`,
      },
      {
        id: 11,
        title: `${t('services.phousing')}`,
        description: `${t('services.phousingdesc')}`,
        image: house,
        availability: `${t('services.available')}`,
        expertTeam: `${t('services.expert')}`,
        category: `${t('services.socialWelfare')}`,
      },
      {
        id: 12,
        title: `${t('services.putil')}`,
        description: `${t('services.putildesc')}`,
        image: economic,
        availability: `${t('services.available')}`,
        expertTeam: `${t('services.expert')}`,
        category: `${t('services.socialWelfare')}`,
      },
      {
        id: 13,
        title: `${t('services.disaster')}`,
        description: `${t('services.disasterdesc')}`,
        image: disaster,
        availability: `${t('services.available')}`,
        expertTeam: `${t('services.expert')}`,
        category: `${t('services.publicLaw')}`,
      },
      {
        id: 14,
        title: `${t('services.court')}`,
        description: `${t('services.courtdesc')}`,
        image: court,
        availability: `${t('services.available')}`,
        expertTeam: `${t('services.expert')}`,
        category: `${t('services.legalJudicial')}`,
      },
      {
        id: 15,
        title:  `${t('services.legalAid')}`,
        description:  `${t('services.legalAiddesc')}`,
        image: legal,
        availability: `${t('services.available')}`,
        expertTeam: `${t('services.expert')}`,
        category:  `${t('services.legalJudicial')}`,
      },
      {
        id: 16,
        title:  `${t('services.lawEnf')}`,
        description:  `${t('services.lawEnfdesc')}`,
        image: lawn,
        availability: `${t('services.available')}`,
        expertTeam: `${t('services.expert')}`,
        category:  `${t('services.legalJudicial')}`,
      },
      {
        id: 17,
        title:  `${t('services.criminal')}`,
        description:  `${t('services.criminaldesc')}`,
        image: criminal,
        availability: `${t('services.available')}`,
        expertTeam: `${t('services.expert')}`,
        category:  `${t('services.legalJudicial')}`,
      },
      {
        id: 18,
        title:  `${t('services.civilLaw')}`,
        description:  `${t('services.civilLawdesc')}`,
        image: civil,
        availability: `${t('services.available')}`,
        expertTeam: `${t('services.expert')}`,
        category:  `${t('services.legalJudicial')}`,
      },
      {
        id: 19,
        title:  `${t('services.LegalVulnerable')}`,
        description:  `${t('services.LegalVulnerabledesc')}`,
        image: legalAid,
        availability: `${t('services.available')}`,
        expertTeam: `${t('services.expert')}`,
        category:  `${t('services.legalJudicial')}`,
      },
    ];
    const [selectedCategory, setSelectedCategory] = useState('');
    const [showMenu, setShowMenu] = useState(false);

    const filterServices = (category) => {
      setSelectedCategory(category);
    };

    const clearFilter = () => {
      setSelectedCategory('');
    };

    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
    const handleDropdownItemClick = (category) => {
      // Perform actions related to opening the page based on the selected category
    
      // Close the dropdown menu
      setShowMenu(false);
    };
    const [loading, setLoading] = useState(true);
    const filteredServices = selectedCategory
      ? services.filter((service) => service.category === selectedCategory)
      : services;

      useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
      }, []);
      useEffect(() => {
        const handleLoad = () => {
          setLoading(false);
        };
    
        handleLoad(); // Mark the initial loading as complete when the component mounts
    
        window.addEventListener('load', handleLoad);
    
        return () => {
          window.removeEventListener('load', handleLoad);
        };
      }, []);
    return (
      <>
      <Navs/>
      {
        loading ? (
          <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 
           border-b-2 border-[#329898] transition-all duration-700">
          </div>
         </div>
        ):(
          <div className="container mx-auto px-4 py-8 my:24 mt-8 md:my-10 ">
    <h1 className="text-4xl font-bold mb-8 text-center">{t('services.header')}</h1>
    <div className="flex items-center  mb-4">
      <button
        className="bg-[#329898] text-white font-semibold py-2 px-4 rounded md:mr-3"
        onClick={clearFilter}
      >
       {t('services.allServices')}
      </button>

      {/* Hamburger menu for mobile */}
      <div className="relative inline-block sm:hidden ml-40">
        <button
          className="text-gray-700 p-2 rounded"
          onClick={() => {
            toggleMenu();
            setShowMenu(!showMenu);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Dropdown menu */}
        {showMenu && (
          <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded shadow-lg">
            <button
              className={`w-full text-left px-4 py-2 hover:bg-[#3bb5b5] hover:text-white ${
                selectedCategory === `${t('services.publicLaw')}` ? '' : ''
              }`}
              onClick={() => {
                filterServices(`${t('services.publicLaw')}`);
                handleDropdownItemClick(`${t('services.publicLaw')}`);
              }}
            >
              {t('services.publicLaw')}
            </button>
            <button
              className={`w-full text-left px-4 py-2 hover:bg-[#3bb5b5] hover:text-white ${
                selectedCategory === `${t('services.legalJudicial')}` ? '' : ''
              }`}
              onClick={() => {
                filterServices(`${t('services.legalJudicial')}`);
                handleDropdownItemClick(`${t('services.legalJudicial')}`);
              }}
            >
              {t('services.legalJudicial')}
            </button>
            <button
              className={`w-full text-left px-4 py-2 hover:bg-[#3bb5b5] hover:text-white ${
                selectedCategory === `${t('services.socialWelfare')}` ? '' : ''
              }`}
              onClick={() => {
                filterServices(`${t('services.socialWelfare')}`);
                handleDropdownItemClick(`${t('services.socialWelfare')}`);
              }}
            >
              {t('services.socialWelfare')}
            </button>
          </div>
        )}
      </div>

      {/* Category buttons */}
      <div className="hidden sm:flex">
        <button
          className={`${
            selectedCategory === `${t('services.publicLaw')}`
              ? 'bg-[#329898] text-white font-semibold py-2 px-4 rounded mr-2'
              : 'text-gray-500 py-2 px-4 rounded mr-2'
          }`}
          onClick={() => {
            filterServices(`${t('services.publicLaw')}`);
            setShowMenu(false);
          }}
        >
          {t('services.publicLaw')}
        </button>
        <button
          className={`${
            selectedCategory === `${t('services.legalJudicial')}`
              ? 'bg-[#329898] text-white font-semibold py-2 px-4 rounded mr-2'
              : 'text-gray-500 py-2 px-4 rounded mr-2'
          }`}
          onClick={() => {
            filterServices(`${t('services.legalJudicial')}`);
            setShowMenu(false);
          }}
        >
         {t('services.legalJudicial')}
        </button>
        <button
          className={`${
            selectedCategory === `${t('services.socialWelfare')}`
              ? 'bg-[#329898] text-white font-semibold py-2 px-4 rounded mr-2'
              : 'text-gray-500 py-2 px-4 rounded mr-2'
          }`}
          onClick={() => {
            filterServices(`${t('services.socialWelfare')}`);
            setShowMenu(false);
          }}
        >
          {t('services.socialWelfare')}
        </button>
      </div>
    </div>

    {/* Service cards */}
    <TransitionGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredServices.map((service) => (
        <CSSTransition key={service.id} timeout={500} classNames="fade">
          <div className="p-4 border border-gray-200 rounded">
            <img src={service.image} alt={service.title} className="mb-4 rounded w-80 h-52" />
            <h2 className="text-xl font-bold mb-2">{service.title}</h2>
            <p className="mb-4">{service.description}</p>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                {/* Calendar icon */}
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-9H9v1a1 1 0 102 0v1a1 1 0 01-1.8.6L8 10.52l-1.2.6A1 1 0 015 11V7a1 1 0 112 0v1h2V8a2 2 0 114 0v2a2 2 0 01-2 2zm0-5H9v1h2a1 1 0 010 2H9v1h2a2 2 0 100-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-500">{service.availability}</span>
            </div>
            <div className="flex items-center mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                {/* Dollar sign icon */}
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-9H9v1a1 1 0 102 0v1a1 1 0 01-1.8.6L8 10.52l-1.2.6A1 1 0 015 11V7a1 1 0 112 0v1h2V8a2 2 0 114 0v2a2 2 0 01-2 2zm0-5H9v1h2a1 1 0 010 2H9v1h2a2 2 0 100-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-500">{service.expertTeam}</span>
            </div>
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>
    </div>
        )
      }
    
      <Footer/>
      </>
    );
  };

  export default Services;
