import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './css/Gallery.css';
import Navs from '../navbars/navs';
import Footer from './Footer';

const Gallery = () => {
  const images = [
    {
      original: '/images/gallery/g1.jpg',
      thumbnail: '/images/gallery/g1.jpg',
      originalAlt: 'Harar City',
      sizes:1400
    },
    {
      original: '/images/gallery/g2.jpg',
      thumbnail: '/images/gallery/g2.jpg',
      originalAlt: 'Jegol Gate',
    },
    {
      original: '/images/gallery/g3.jpg',
      thumbnail: '/images/gallery/g3.jpg',
      originalAlt: 'Harar Mezoria',
    },
    {
      original: '/images/gallery/g4.jpg',
      thumbnail: '/images/gallery/g4.jpg',
      originalAlt: 'Harar Building',
    },
    {
      original: '/images/gallery/g5.jpg',
      thumbnail: '/images/gallery/g5.jpg',
      originalAlt: 'Harar Building',
    },
    {
      original: '/images/gallery/g6.jpg',
      thumbnail: '/images/gallery/g6.jpg',
      originalAlt: 'Harar City',
    },
    {
      original: '/images/gallery/g7.jpg',
      thumbnail: '/images/gallery/g7.jpg',
      originalAlt: 'Adiministration Buildinig',
    },
    {
      original: '/images/gallery/g8.jpg',
      thumbnail: '/images/gallery/g8.jpg',
      originalAlt: 'Real State',
    },
    {
      original: '/images/gallery/g9.jpg',
      thumbnail: '/images/gallery/g9.jpg',
      originalAlt: 'Harar City',
    },
    {
      original: '/images/gallery/g10.jpg',
      thumbnail: '/images/gallery/g10.jpg',
      originalAlt: 'Harar City of Peace',
    },
    {
      original: '/images/gallery/g11.jpg',
      thumbnail: '/images/gallery/g11.jpg',
      originalAlt: 'Police commission',
    },
    {
      original: '/images/gallery/g12.jpg',
      thumbnail: '/images/gallery/g12.jpg',
      originalAlt: 'Jegol Street',
    },
    {
      original: '/images/gallery/g13.jpg',
      thumbnail: '/images/gallery/g13.jpg',
      originalAlt: 'Harar City at Night',
    },
    {
      original: '/images/gallery/g14.jpg',
      thumbnail: '/images/gallery/g14.jpg',
      originalAlt: 'Harar City',
    },
    {
      original: '/images/gallery/g15.jpg',
      thumbnail: '/images/gallery/g15.jpg',
      originalAlt: 'Harar City',
    },
  ];
  return (
    <>
      <Navs />
      <ImageGallery items={images} slideOnThumbnailOver={true} />
      <Footer/>
    </>
  );
};
export default Gallery;
