'use client'
import React, { useEffect, useState } from "react";
import BlogItem from "./blog-item";
import axios from "axios";
import Pagination from '@/context/pagination';

const BlogArea = () => {

  const [data,setData]=useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ totalPage, setTotalPage ] = useState(1);

  useEffect(()=>{
    const getData = () => {

      let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `${process.env.BACKEND_URL}/getTutorials?page=${currentPage}`,
          headers: {}
      };
    
      axios.request(config)
          .then((response: any) => {
            setData(response.data.data)
            setTotalPage(Math.ceil(response.data.length/9))

            console.log(JSON.stringify(response.data));
          })
          .catch((error: any) => {
              console.log(error);
          });
    
    }
getData();  
  },[currentPage])

  return (
    <section className="blog-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="blog-post-wrapper">
            {data && data.map((blog:any) => (
              <BlogItem key={blog._id} blog={blog} />
            ))}
            <div className="pagination__wrap">
              {/* pagination start */}
              <Pagination
            setCurrentPage={setCurrentPage}
             totalPage={totalPage}
              currentPage={currentPage}
            />
              {/* pagination end */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogArea;
