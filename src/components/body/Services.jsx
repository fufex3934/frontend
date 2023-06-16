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
  const services = [
    {
      id: 1,
      title: 'Public Safety and Law Enforcement',
      description: `The Public Safety and Law Enforcement 
      Services provided by the Harari Government are dedicated
       to maintaining the safety, security, and well-being of the 
       residents in the Harari region. Our highly trained and 
       committed team of law enforcement professionals work 
       tirelessly to prevent crime,
       enforce laws, and protect the rights 
       and interests of the community.We prioritize proactive crime
        prevention through regular patrols, surveillance, and intelligence 
        gathering. In case of incidents, our law enforcement officers respond 
        promptly, conduct thorough investigations, and ensure that perpetrators
         are brought to justice. We also place a strong emphasis on community-oriented 
         policing, building trust, and engaging with the residents of Harari to establish 
         partnerships and address local concerns.`,
      image: safety,
      availability: 'Available 24/7',
      expertTeam: 'Expert Team',
      category: 'Public Safety and Law Enforcement',
    },
    {
      id: 2,
      title: 'Public Transportation',
      description: `The public transportation services provided
       by the Harari Government are designed to offer convenient,
        affordable, and sustainable transportation options that reduce 
        congestion, promote environmental sustainability, and enhance accessibility 
        to different parts of the region. Our public transportation network is carefully
         planned and operated to ensure seamless connectivity and cater to the diverse travel
          requirements of the community. Buses play a crucial role in the public transportation 
          system, offering a cost-effective and widely accessible mode of transportation. 
          The Harari Government operates a fleet of modern buses that serve various routes
           within the region, connecting residential areas, commercial centers, educational institutions, 
           healthcare facilities, and other key destinations. `,
      image: transport,
      availability: 'Available 24/7',
      expertTeam: 'Expert Team',
      category: 'Public Safety and Law Enforcement',
    },
    {
      id: 3,
      title: 'Legal and Judicial Services',
      description: `Within the realm of legal services, the Harari Government 
      offers various resources and support to individuals and organizations. 
      This includes access to legal information, legal advice, and assistance in
       navigating the legal processes. The government may provide legal aid programs
        to ensure that individuals who cannot afford legal representation can still 
        access justice and receive a fair hearing.The judicial services provided by the 
        Harari Government are responsible for the fair and impartial resolution of disputes 
        and the administration of justice. This includes the operation of courts and tribunals 
        that handle civil, criminal, and administrative cases. The government ensures the appointment
         of qualified judges and magistrates who have the expertise and integrity to interpret and apply the law.`,
      image: judicial,
      availability: 'Available 24/7',
      expertTeam: 'Expert Team',
      category: 'Public Safety and Law Enforcement',
    },
    {
      id: 4,
      title: 'Environmental Protection',
      description: `The Harari Government is responsible for developing and implementing environmental
       policies, regulations, and laws aimed at mitigating environmental risks, reducing pollution, and 
       preserving natural habitats. These measures address a wide range of environmental concerns, including
        air and water quality, waste management, biodiversity conservation, and climate change mitigation.`,
      image: environment,
      availability: 'Available 24/7',
      expertTeam: 'Expert Team',
      category: 'Public Safety and Law Enforcement',
    },
    {
      id: 5,
      title: 'Public Administration',
      description: `In the realm of public administration, the Harari Government performs various 
      essential functions. These include policy formulation and implementation, budgeting and financial 
      management, human resource management, public service delivery, and regulatory oversight. The government
       strives to ensure that these functions are carried out with integrity, accountability, and responsiveness 
       to the needs of the public.`,
      image: admin,
      availability: 'Available 24/7',
      expertTeam: 'Expert Team',
      category: 'Public Safety and Law Enforcement',
    },
    {
      id: 6,
      title: 'Education',
      description: `Education is a fundamental government service that plays a crucial role in the development and progress
       of individuals and societies. The Harari Government recognizes the importance of education and is committed to providing
        accessible, high-quality, and inclusive educational opportunities for its citizens. Here is an overview of the government's 
        initiatives and services related to education:`,
      image: education,
      availability: 'Available 24/7',
      expertTeam: 'Expert Team',
      category: 'Social Welfare',
    },
    {
      id: 7,
      title: 'Infrastructure',
      description: `Infrastructure is a vital area of focus for the government as it plays a crucial role in supporting
       economic development, improving the quality of life for citizens, and facilitating the smooth functioning of various sectors.
        The Harari Government is committed to investing in and maintaining robust infrastructure across different domains. Here are some 
        key aspects of infrastructure development`,
      image: infrastructure,
      availability: 'Available 24/7',
      expertTeam: 'Expert Team',
      category: 'Social Welfare',
    },
    {
      id: 8,
      title: 'Economic Development',
      description: `Economic development is a key focus for the Harari Government as it aims to foster sustainable growth, create 
      employment opportunities, and improve the overall well-being of its citizens. The government implements various strategies
       and initiatives to promote economic development across different sectors. Here are some key aspects of economic development`,
      image: economic,
      availability: 'Available 24/7',
      expertTeam: 'Expert Team',
      category: 'Social Welfare',
    },
    {
      id: 9,
      title: 'HealthCare',
      description: `Healthcare is a top priority for the Harari Government as it recognizes the importance of
       ensuring access to quality healthcare services for all its citizens. The government implements various 
       initiatives and policies to promote healthcare and improve the well-being of the population. Here are some
        key aspects of healthcare in Harari`,
      image: health,
      availability: 'Available 24/7',
      expertTeam: 'Expert Team',
      category: 'Social Welfare',
    },
    {
      id: 10,
      title: 'Employment and Labor Services',
      description: `Employment and labor services play a crucial role in the Harari Government's efforts to foster a thriving 
      and inclusive economy, promote decent work opportunities, and ensure the protection of workers' rights. Here are key aspects
       of employment and labor services provided by the government`,
      image: house,
      availability: 'Available 24/7',
      expertTeam: 'Expert Team',
      category: 'Social Welfare',
    },
    {
      id: 10,
      title: 'Public Housing',
      description: `Public housing refers to housing units or developments that are owned, operated, or subsidized by the government 
      to provide affordable housing options for individuals and families with low to moderate incomes. The Harari Government recognizes
       the importance of accessible and affordable housing for its residents and offers public housing programs to address housing needs 
       and promote social well-being. Here are key aspects of public housing services provided by the government`,
      image: house,
      availability: 'Available 24/7',
      expertTeam: 'Expert Team',
      category: 'Social Welfare',
    },
    {
      id: 11,
      title: 'Public Utilities',
      description: `Public utilities encompass essential services provided by the government, ensuring the reliable provision of basic necessities to the public.
       These services include water supply, electricity generation and distribution, natural gas distribution, waste management, public transportation, telecommunications,
        postal services, and municipal services. The government regulates and manages these utilities to guarantee accessibility, affordability, and quality for the benefit
         of the community. By overseeing public utilities, the government plays a crucial role in supporting the well-being and development of society as a whole.`,
      image: economic,
      availability: 'Available 24/7',
      expertTeam: 'Expert Team',
      category: 'Social Welfare',
    },
    {
      id: 11,
      title: 'Disaster Management and Emergency Services',
      description: `In the field of disaster management, the Harari Government adopts a proactive approach
       by implementing comprehensive disaster preparedness and mitigation strategies. This involves conducting 
       risk assessments, developing emergency response plans, and establishing early warning systems to detect
        potential hazards and minimize their impact. The government collaborates with relevant stakeholders, including 
        local communities, NGOs, and international organizations, to enhance disaster resilience and promote a culture of preparedness.`,
      image: disaster,
      availability: 'Available 24/7',
      expertTeam: 'Expert Team',
      category: 'Public Safety and Law Enforcement',
    },
    {
      id: 12,
      title: 'Court System',
      description: `The court system is a fundamental component of the legal and judicial services provided by the Harari Government. 
      It serves as the cornerstone of the justice system, ensuring the fair and impartial resolution of disputes, interpretation and 
      enforcement of laws, and protection of individual rights. The Harari Government has established a well-structured and independent court
       system to uphold the rule of law and promote justice within the society.`,
      image: court,
      availability: 'Available 24/7',
      expertTeam: 'Expert Team',
      category: 'Legal and Judicial Services',
    },
    {
      id: 13,
      title: 'Legal Aid and Advice',
      description: `Legal Aid and Advice services are an essential component of the legal and judicial services 
      provided by the Harari Government. Recognizing the importance of equal access to justice, the government offers
       legal aid and advice to individuals who may have limited financial resources or face other barriers in obtaining legal
        assistance.`,
      image: legal,
      availability: 'Available 24/7',
      expertTeam: 'Expert Team',
      category: 'Legal and Judicial Services',
    },
    {
      id: 14,
      title: 'Law Enforcement',
      description: `Law enforcement is a critical component of maintaining public safety and upholding the rule of law within the jurisdiction of the Harari Government.
       The government is committed to ensuring the safety and security of its citizens, and law enforcement agencies play a vital role in achieving this objective.`,
      image: lawn,
      availability: 'Available 24/7',
      expertTeam: 'Expert Team',
      category: 'Legal and Judicial Services',
    },
    {
      id: 15,
      title: 'Criminal Justice System',
      description: `The criminal justice system in Harari is a comprehensive framework that encompasses various institutions, policies, and practices aimed at maintaining 
      public safety, upholding the rule of law, and ensuring justice for all individuals involved in criminal activities. It is designed to investigate crimes, prosecute offenders,
       and provide fair and impartial adjudication.`,
      image: criminal,
      availability: 'Available 24/7',
      expertTeam: 'Expert Team',
      category: 'Legal and Judicial Services',
    },
    {
      id: 16,
      title: 'Civil Law',
      description: `
      Civil law refers to a branch of law that deals with disputes between individuals, organizations, 
      or entities, where one party seeks legal remedies or compensation for harm or loss caused by another party's
       actions or omissions. It is a broad area of law that encompasses various legal issues, including contracts, property rights, 
       torts, family law, and more.`,
      image: civil,
      availability: 'Available 24/7',
      expertTeam: 'Expert Team',
      category: 'Legal and Judicial Services',
    },
    {
      id: 17,
      title: 'Legal Aid for Vulnerable Populations',
      description: `By providing legal aid to vulnerable populations, the Harari Government aims to promote access to justice, protect human rights, 
      address social inequalities, and ensure that everyone has a fair opportunity to seek legal redress. These efforts contribute to a more inclusive 
      and equitable legal system that supports the well-being and empowerment of all members of society.`,
      image: legalAid,
      availability: 'Available 24/7',
      expertTeam: 'Expert Team',
      category: 'Legal and Judicial Services',
    },
  ];

  const Services = () => {
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
          <div className="container mx-auto px-4 py-8 my:24 md:my-10 ">
    <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
    <div className="flex items-center  mb-4">
      <button
        className="bg-[#329898] text-white font-semibold py-2 px-4 rounded md:mr-3"
        onClick={clearFilter}
      >
        All Services
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
                selectedCategory === 'Public Safety and Law Enforcement' ? '' : ''
              }`}
              onClick={() => {
                filterServices('Public Safety and Law Enforcement');
                handleDropdownItemClick('Public Safety and Law Enforcement');
              }}
            >
              Public Safety and Law Enforcement
            </button>
            <button
              className={`w-full text-left px-4 py-2 hover:bg-[#3bb5b5] hover:text-white ${
                selectedCategory === 'Legal and Judicial Services' ? '' : ''
              }`}
              onClick={() => {
                filterServices('Legal and Judicial Services');
                handleDropdownItemClick('Legal and Judicial Services');
              }}
            >
              Legal and Judicial Services
            </button>
            <button
              className={`w-full text-left px-4 py-2 hover:bg-[#3bb5b5] hover:text-white ${
                selectedCategory === 'Social Welfare' ? '' : ''
              }`}
              onClick={() => {
                filterServices('Social Welfare');
                handleDropdownItemClick('Social Welfare');
              }}
            >
              Social Welfare
            </button>
          </div>
        )}
      </div>

      {/* Category buttons */}
      <div className="hidden sm:flex">
        <button
          className={`${
            selectedCategory === 'Public Safety and Law Enforcement'
              ? 'bg-[#329898] text-white font-semibold py-2 px-4 rounded mr-2'
              : 'text-gray-500 py-2 px-4 rounded mr-2'
          }`}
          onClick={() => {
            filterServices('Public Safety and Law Enforcement');
            setShowMenu(false);
          }}
        >
          Public Safety and Law Enforcement
        </button>
        <button
          className={`${
            selectedCategory === 'Legal and Judicial Services'
              ? 'bg-[#329898] text-white font-semibold py-2 px-4 rounded mr-2'
              : 'text-gray-500 py-2 px-4 rounded mr-2'
          }`}
          onClick={() => {
            filterServices('Legal and Judicial Services');
            setShowMenu(false);
          }}
        >
          Legal and Judicial Services
        </button>
        <button
          className={`${
            selectedCategory === 'Social Welfare'
              ? 'bg-[#329898] text-white font-semibold py-2 px-4 rounded mr-2'
              : 'text-gray-500 py-2 px-4 rounded mr-2'
          }`}
          onClick={() => {
            filterServices('Social Welfare');
            setShowMenu(false);
          }}
        >
          Social Welfare
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
