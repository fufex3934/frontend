import React from 'react'
import { BiComment } from 'react-icons/bi'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import { useNavigate } from 'react-router'
import './css/News.css'
const News = () => {
    const navigate=useNavigate()
  return (
    <div className='main-news'>
        <div className='sub-news'>
            <h1>News and <br/>Publications</h1>
            <p>The news about recent activities<br/>for needed peoples.</p>
            <button onClick={() => navigate('/news/:slug')}>More News</button>
        </div>

        <div className='news-show'>
            <a href="">
                <img src="images/new1.jpg" alt="" />
                <span className='text-white bg-[#329898] p-2 ms-8 spa'>July 24, 2023</span>
            </a>
            <div className="p-6">
                <p className=''>In
                    <a href="" className='ms-1 hover:text-[#329898] op'>Harari</a>,
                    <a href="" className='ms-1 hover:text-[#329898] op'>Economic Culture</a><br />
                    <span className='flex p-2'><BiComment className='mt-2 mr-1 -ml-2' />Comment off</span>
                </p>
                <a href="" className='text-2xl hover:text-[#329898] font-serif a'>Metro Road Design Plan <br />2025</a><br />
                <a href="" className='text-md flex font-light mt-6 continue hover:text-[#329898]'>Continue Reading<HiOutlineArrowLongRight className='ms-2 mt-2' /></a>
            </div>
        </div>

        <div className='news-show'>
            <a href="">
                <img src="images/new2.jpg" alt="" />
                <span className='text-white bg-[#329898] p-2 ms-8 spa'>July 24, 2023</span>
            </a>
            <div className="p-6">
                  <p className=''>In
                      <a href="" className='ms-1 hover:text-[#329898] op'>Harari</a>,
                      <a href="" className='ms-1 hover:text-[#329898] op'>Hyenas of Harar</a><br />
                      <span className='flex p-2'><BiComment className='mt-2 mr-1 -ml-2' />Comment off</span>
                  </p>
                  <a href="" className='text-2xl hover:text-[#329898] font-serif a'>Spotted Hyenas in Harar <br />2023</a><br />
                  <a href="" className='text-md flex font-light mt-6 continue hover:text-[#329898]'>Continue Reading<HiOutlineArrowLongRight className='ms-2 mt-2' /></a>
            </div>
        </div>

        <div className='news-show'>
            <a href="">
                <img  src="images/new3.jpg" alt="" />
                <span className='text-white bg-[#329898] p-2 ms-8 spa'>July 24, 2023</span>
            </a>
            <div className="p-6">
                <p className=''>In
                    <a href="" className='ms-1 hover:text-[#329898] op'>Harari</a>,
                    <a href="" className='ms-1 hover:text-[#329898] op'>Iconic Leader's</a><br />
                    <span className='flex p-2'><BiComment className='mt-2 mr-1 -ml-2' />Comment off</span>
                </p>
                  <a href="" className='text-2xl hover:text-[#329898] font-serif a'>Conversational Leadership <br />2023</a><br />
                <a href="" className='text-md flex font-light mt-6 continue hover:text-[#329898]'>Continue Reading<HiOutlineArrowLongRight className='ms-2 mt-2' /></a>
            </div>
        </div>

    </div>
  )
}

export default News;