import React from 'react'
import { BiComment } from 'react-icons/bi'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import './css/News.css'
const News = () => {
  return (
    <div className='main-news'>
        <div className='sub-news'>
            <h1>News and <br/>Publications</h1>
            <p>The news about recent activities<br/>for needed peoples.</p>
            <button>More News</button>
        </div>
        <div className='news-show'>
            <a href="">
                <img src="images/explore.jpg" alt="" />
                <span className='text-white bg-red-500 p-2 ms-8'>July 24, 2020</span>
            </a>
            <div className="p-6">
                <p className=''>In
                    <a href="" className='ms-1 hover:text-red-600'>New Ustralian</a>,
                    <a href="" className='ms-1 hover:text-red-600'>Economic Culture</a><br />
                    <span className='flex p-2'><BiComment className='mt-2 mr-1 -ml-2' />Comment off</span>
                </p>
                <a href="" className='text-2xl hover:text-red-600 font-serif'>Metro Road Design Plan <br />2025</a><br />
                <a href="" className='text-md flex font-light mt-6'>Continue Reading<HiOutlineArrowLongRight className='ms-2 mt-2' /></a>
            </div>
        </div>
        <div className='news-show'>
            <a href="">
                <img src="images/explore.jpg" alt="" />
                <span className='text-white bg-red-500 p-2 ms-8'>July 24, 2020</span>
            </a>
            <div className="p-6">
                  <p className=''>In
                      <a href="" className='ms-1 hover:text-red-600'>New Ustralian</a>,
                      <a href="" className='ms-1 hover:text-red-600'>Economic Culture</a><br />
                      <span className='flex p-2'><BiComment className='mt-2 mr-1 -ml-2' />Comment off</span>
                  </p>
                  <a href="" className='text-2xl hover:text-red-600 font-serif'>Metro Road Design Plan <br />2025</a><br />
                  <a href="" className='text-md flex font-light mt-6'>Continue Reading<HiOutlineArrowLongRight className='ms-2 mt-2' /></a>
            </div>
        </div>
        <div className='news-show'>
            <a href="">
                <img src="images/explore.jpg" alt="" />
                <span className='text-white bg-red-500 p-2 ms-8'>July 24, 2020</span>
            </a>
            <div className="p-6">
                <p className=''>In
                    <a href="" className='ms-1 hover:text-red-600'>New Ustralian</a>,
                    <a href="" className='ms-1 hover:text-red-600'>Economic Culture</a><br />
                    <span className='flex p-2'><BiComment className='mt-2 mr-1 -ml-2' />Comment off</span>
                </p>
                <a href="" className='text-2xl hover:text-red-600 font-serif'>Metro Road Design Plan <br />2025</a><br />
                <a href="" className='text-md flex font-light mt-6'>Continue Reading<HiOutlineArrowLongRight className='ms-2 mt-2' /></a>
            </div>
        </div>
    </div>
  )
}

export default News;