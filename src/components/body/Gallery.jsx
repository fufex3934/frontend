import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './css/Gallery.css';
import Navs from '../navbars/navs';
import Footer from './Footer';

const Gallery = () => {
  const images = [
    {
      src: '/images/gallery/g1.jpg',
      alt: 'Harar City',
    },
    {
      src: '/images/gallery/g2.jpg',
      alt: 'Jegol Gate',
    },
    {
      src: '/images/gallery/g3.jpg',
      alt: 'Harar Mezoria',
    },
    {
        src: '/images/gallery/g4.jpg',
        alt: 'Harar Building',
      },
      {
        src: '/images/gallery/g5.jpg',
        alt: 'Harar Building',
      },
      {
        src: '/images/gallery/g6.jpg',
        alt: 'Harar City',
      },
      {
        src: '/images/gallery/g7.jpg',
        alt: 'Adiministration Buildinig',
      },
      {
        src: '/images/gallery/g8.jpg',
        alt: 'Real State',
      },
      {
        src: '/images/gallery/g9.jpg',
        alt: 'Harar City',
      },
      {
        src: '/images/gallery/g10.jpg',
        alt: 'Harar City of Peace',
      },
      {
        src: '/images/gallery/g11.jpg',
        alt: 'Police commission',
      },
      {
        src: '/images/gallery/g12.jpg',
        alt: 'Jegol Street',
      },
      {
        src: '/images/gallery/g13.jpg',
        alt: 'Harar City at Night',
      },
      {
        src: '/images/gallery/g14.jpg',
        alt: 'Harar City',
      },
      {
        src: '/images/gallery/g15.jpg',
        alt: 'Harar City',
      },
    // Add more images here...
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (index) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Navs />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 my-36 md:my-36 lg:my-8 lg:mx-8">
        <TransitionGroup component={null}>
          {images.map((image, index) => (
            <CSSTransition key={index} timeout={500} classNames="fade">
              <div
                className="relative overflow-hidden cursor-pointer"
                onClick={() => openModal(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg">{image.alt}</p>
                </div>
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      {selectedImage !== null && (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center">
          <div
            className="fixed top-0 left-0 z-40 w-full h-full bg-black opacity-75"
            onClick={closeModal}
          ></div>
          <div className="relative z-50">
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-full"
            />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Gallery;
