import React, { useState } from 'react';
import { useGetBlogQuery } from '../../Redux/Api/blog.Api';
import dayjs from 'dayjs';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useGetTagQuery } from '../../Redux/Api/tag.Api';

function Blog_Grid(props) {

  const { id } = useParams();
  const navigate = useNavigate();



  const { data: blog } = useGetBlogQuery();


  const [selectedTags, setSelectedTags] = useState([]);
  const [showAllTags, setShowAllTags] = useState(false);
  const [isActive, setISActive] = useState(false)
  const [selectedMonth, setSelectedMonth] = useState(null);

  let BlogData = blog?.data;
  console.log(BlogData);


  const { data: tag } = useGetTagQuery();

  const handleTagChange = (tagId) => {
    setISActive(!isActive);

    console.log(tagId);

    if (tagId === "all") {
      setSelectedTags([]);
    } else {
      if (selectedTags.includes(tagId)) {
        setSelectedTags(selectedTags.filter((id) => id !== tagId));
      } else {
        setSelectedTags([...selectedTags, tagId]);
      }
    }
  };

  const handleMonthChange = (month) => {
    if (month === "all") {
      setSelectedMonth(null);
    } else {
      setSelectedMonth(
        selectedMonth === month ? null : month
      );
    }
  };
  

  let filteredBlogs = BlogData;

  // Tag filter
  if (selectedTags.length > 0) {
    filteredBlogs = filteredBlogs?.filter((blog) =>
      selectedTags.includes(blog.tag._id)
    );
  }

  // Month filter
  if (selectedMonth) {
    filteredBlogs = filteredBlogs?.filter(
      (blog) =>
        dayjs(blog.date).format("MMMM") === selectedMonth
    );
  }

  // URL tag filter
  if (id && selectedTags.length === 0) {
    filteredBlogs = filteredBlogs?.filter(
      (blog) => blog.tag._id === id
    );

    // apply month filter again
    if (selectedMonth) {
      filteredBlogs = filteredBlogs?.filter(
        (blog) =>
          dayjs(blog.date).format("MMMM") === selectedMonth
      );
    }
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <main>
      <section className="py-5">
        <div className="container">
          <div className="row position-relative">
            {/* SVG decoration */}
            <figure className="position-absolute top-0 start-0 d-none d-sm-block">
              <svg width="22px" height="22px" viewBox="0 0 22 22">
                <polygon className="fill-purple" points="22,8.3 13.7,8.3 13.7,0 8.3,0 8.3,8.3 0,8.3 0,13.7 8.3,13.7 8.3,22 13.7,22 13.7,13.7 22,13.7 " />
              </svg>
            </figure>
            {/* Title and breadcrumb */}
            <div className="col-lg-10 mx-auto text-center position-relative">
              {/* SVG decoration */}
              <figure className="position-absolute top-50 end-0 translate-middle-y">
                <svg width="27px" height="27px">
                  <path className="fill-orange" d="M13.122,5.946 L17.679,-0.001 L17.404,7.528 L24.661,5.946 L19.683,11.533 L26.244,15.056 L18.891,16.089 L21.686,23.068 L15.400,19.062 L13.122,26.232 L10.843,19.062 L4.557,23.068 L7.352,16.089 L-0.000,15.056 L6.561,11.533 L1.582,5.946 L8.839,7.528 L8.565,-0.001 L13.122,5.946 Z" />
                </svg>
              </figure>
              {/* SVG decoration */}
              <figure className="position-absolute top-100 start-50 translate-middle mt-3 ms-n9 d-none d-lg-block">
                <svg>
                  <path className="fill-success" d="m181.6 6.7c-0.1 0-0.2-0.1-0.3 0-2.5-0.3-4.9-1-7.3-1.4-2.7-0.4-5.5-0.7-8.2-0.8-1.4-0.1-2.8-0.1-4.1-0.1-0.5 0-0.9-0.1-1.4-0.2-0.9-0.3-1.9-0.1-2.8-0.1-5.4 0.2-10.8 0.6-16.1 1.4-2.7 0.3-5.3 0.8-7.9 1.3-0.6 0.1-1.1 0.3-1.8 0.3-0.4 0-0.7-0.1-1.1-0.1-1.5 0-3 0.7-4.3 1.2-3 1-6 2.4-8.8 3.9-2.1 1.1-4 2.4-5.9 3.9-1 0.7-1.8 1.5-2.7 2.2-0.5 0.4-1.1 0.5-1.5 0.9s-0.7 0.8-1.1 1.2c-1 1-1.9 2-2.9 2.9-0.4 0.3-0.8 0.5-1.2 0.5-1.3-0.1-2.7-0.4-3.9-0.6-0.7-0.1-1.2 0-1.8 0-3.1 0-6.4-0.1-9.5 0.4-1.7 0.3-3.4 0.5-5.1 0.7-5.3 0.7-10.7 1.4-15.8 3.1-4.6 1.6-8.9 3.8-13.1 6.3-2.1 1.2-4.2 2.5-6.2 3.9-0.9 0.6-1.7 0.9-2.6 1.2s-1.7 1-2.5 1.6c-1.5 1.1-3 2.1-4.6 3.2-1.2 0.9-2.7 1.7-3.9 2.7-1 0.8-2.2 1.5-3.2 2.2-1.1 0.7-2.2 1.5-3.3 2.3-0.8 0.5-1.7 0.9-2.5 1.5-0.9 0.8-1.9 1.5-2.9 2.2 0.1-0.6 0.3-1.2 0.4-1.9 0.3-1.7 0.2-3.6 0-5.3-0.1-0.9-0.3-1.7-0.8-2.4s-1.5-1.1-2.3-0.8c-0.2 0-0.3 0.1-0.4 0.3s-0.1 0.4-0.1 0.6c0.3 3.6 0.2 7.2-0.7 10.7-0.5 2.2-1.5 4.5-2.7 6.4-0.6 0.9-1.4 1.7-2 2.6s-1.5 1.6-2.3 2.3c-0.2 0.2-0.5 0.4-0.6 0.7s0 0.7 0.1 1.1c0.2 0.8 0.6 1.6 1.3 1.8 0.5 0.1 0.9-0.1 1.3-0.3 0.9-0.4 1.8-0.8 2.7-1.2 0.4-0.2 0.7-0.3 1.1-0.6 1.8-1 3.8-1.7 5.8-2.3 4.3-1.1 9-1.1 13.3 0.1 0.2 0.1 0.4 0.1 0.6 0.1 0.7-0.1 0.9-1 0.6-1.6-0.4-0.6-1-0.9-1.7-1.2-2.5-1.1-4.9-2.1-7.5-2.7-0.6-0.2-1.3-0.3-2-0.4-0.3-0.1-0.5 0-0.8-0.1s-0.9 0-1.1-0.1-0.3 0-0.3-0.2c0-0.4 0.7-0.7 1-0.8 0.5-0.3 1-0.7 1.5-1l5.4-3.6c0.4-0.2 0.6-0.6 1-0.9 1.2-0.9 2.8-1.3 4-2.2 0.4-0.3 0.9-0.6 1.3-0.9l2.7-1.8c1-0.6 2.2-1.2 3.2-1.8 0.9-0.5 1.9-0.8 2.7-1.6 0.9-0.8 2.2-1.4 3.2-2 1.2-0.7 2.3-1.4 3.5-2.1 4.1-2.5 8.2-4.9 12.7-6.6 5.2-1.9 10.6-3.4 16.2-4 5.4-0.6 10.8-0.3 16.2-0.5h0.5c1.4-0.1 2.3-0.1 1.7 1.7-1.4 4.5 1.3 7.5 4.3 10 3.4 2.9 7 5.7 11.3 7.1 4.8 1.6 9.6 3.8 14.9 2.7 3-0.6 6.5-4 6.8-6.4 0.2-1.7 0.1-3.3-0.3-4.9-0.4-1.4-1-3-2.2-3.9-0.9-0.6-1.6-1.6-2.4-2.4-0.9-0.8-1.9-1.7-2.9-2.3-2.1-1.4-4.2-2.6-6.5-3.5-3.2-1.3-6.6-2.2-10-3-0.8-0.2-1.6-0.4-2.5-0.5-0.2 0-1.3-0.1-1.3-0.3-0.1-0.2 0.3-0.4 0.5-0.6 0.9-0.8 1.8-1.5 2.7-2.2 1.9-1.4 3.8-2.8 5.8-3.9 2.1-1.2 4.3-2.3 6.6-3.2 1.2-0.4 2.3-0.8 3.6-1 0.6-0.2 1.2-0.2 1.8-0.4 0.4-0.1 0.7-0.3 1.1-0.5 1.2-0.5 2.7-0.5 3.9-0.8 1.3-0.2 2.7-0.4 4.1-0.7 2.7-0.4 5.5-0.8 8.2-1.1 3.3-0.4 6.7-0.7 10-1 7.7-0.6 15.3-0.3 23 1.3 4.2 0.9 8.3 1.9 12.3 3.6 1.2 0.5 2.3 1.1 3.5 1.5 0.7 0.2 1.3 0.7 1.8 1.1 0.7 0.6 1.5 1.1 2.3 1.7 0.2 0.2 0.6 0.3 0.8 0.2 0.1-0.1 0.1-0.2 0.2-0.4 0.1-0.9-0.2-1.7-0.7-2.4-0.4-0.6-1-1.4-1.6-1.9-0.8-0.7-2-1.1-2.9-1.6-1-0.5-2-0.9-3.1-1.3-2.5-1.1-5.2-2-7.8-2.8-1-0.8-2.4-1.2-3.7-1.4zm-64.4 25.8c4.7 1.3 10.3 3.3 14.6 7.9 0.9 1 2.4 1.8 1.8 3.5-0.6 1.6-2.2 1.5-3.6 1.7-4.9 0.8-9.4-1.2-13.6-2.9-4.5-1.7-8.8-4.3-11.9-8.3-0.5-0.6-1-1.4-1.1-2.2 0-0.3 0-0.6-0.1-0.9s-0.2-0.6 0.1-0.9c0.2-0.2 0.5-0.2 0.8-0.2 2.3-0.1 4.7 0 7.1 0.4 0.9 0.1 1.6 0.6 2.5 0.8 1.1 0.4 2.3 0.8 3.4 1.1z" />
                </svg>
              </figure>
              {/* Title */}
              <h1>Blog Grid</h1>
              {/* Breadcrumb */}
              <div className="d-flex justify-content-center position-relative">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Library</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <section className="position-relative pt-0 pt-lg-5">
        <div className="container">
          <div className='row'>
            <div className="col-lg-9">
              <div className="row g-4 ">
                {
                  filteredBlogs?.map((b) => (

                    <div className="col-md-6 col-xl-4">
                      <NavLink to={`/Blog_Detail/${b._id}`}>
                        <div className="card" style={{ height: '400px', width: '260px' }}>
                          <div className="overflow-hidden rounded-3">
                            {
                              // b?.content?.map((c)=>(
                              <img src={b.content[0]?.url} className="card-img" alt="course image" style={{ width: '580px', height: '500px', objectFit: 'cover' }} />
                              // ))
                            }  {/* Overlay */}
                            <div className="bg-overlay bg-dark opacity-4" />
                            <div className="card-img-overlay d-flex align-items-start p-3">
                              {/* badge */}
                              <a href="#" className="badge bg-danger text-white">{b.tag.tag}</a>
                            </div>
                          </div>
                          {/* Card body */}
                          <div className="card-body">
                            {/* Title */}
                            <h5 className="card-title text-truncate-1">{b.title}</h5>
                            <p className="text-truncate-2 mt-3">{b.subtitle}</p>  {/* Info */}
                            <div className="d-flex justify-content-between mb-0 pt-5">
                              <h6 className="">{b?.instructor.name}</h6>
                              <span className="small"> {dayjs(b.date).format("DD MMM YYYY")}</span>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>

                  ))
                }
              </div>

            </div>
            <div className="col-lg-4 col-xl-3 pt-5 pt-lg-0">
              {/* Tag Filter Card */}
              <div className="card card-body shadow p-4 mb-4">
                {/* Title */}
                <h4 className="mb-3">Popular Tags:</h4>
                {/* Category group */}
                <div className="col-12">
                  <ul className="list-inline mb-0">
                    {/* All Checkbox */}
                    <li className="list-inline-item mb-2">
                      <input
                        type="checkbox"
                        className="btn-check"
                        checked={selectedTags.length === 0}
                        onChange={() => (handleTagChange("all"), navigate('/Blog_Grid'))}
                        id="flexCheckDefaultAll"
                      />
                      <label
                        className="btn btn-light btn-primary-soft-check"
                        htmlFor="flexCheckDefaultAll"
                      >
                        All
                      </label>
                    </li>

                    {tag?.data?.map((t) => {
                      const isChecked = selectedTags.includes(t._id);
                      return (
                        <li key={t._id} className="list-inline-item mb-2">
                          <input
                            type="checkbox"
                            className="btn-check"
                            checked={isChecked}
                            onChange={() => handleTagChange(t._id)}
                            id={`flexCheckDefault_${t._id}`}
                          />
                          <label
                            className="btn btn-light btn-primary-soft-check"
                            htmlFor={`flexCheckDefault_${t._id}`}
                          >
                            {t?.tag}
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <div className="card card-body shadow p-4 mb-4">
                <h4 className="mb-3">Month</h4>

                <div className="col-12">
                  <ul className="list-inline mb-0">

                    {/* All */}
                    <li className="list-inline-item mb-2">
                      <input
                        type="checkbox"
                        className="btn-check"
                        checked={selectedMonth === null}
                        onChange={() => handleMonthChange("all")}
                        id="month_all"
                      />
                      <label
                        className="btn btn-light btn-primary-soft-check"
                        htmlFor="month_all"
                      >
                        All
                      </label>
                    </li>

                    {/* Months */}
                    {months.map((month) => (
                      <li key={month} className="list-inline-item mb-2">
                        <input
                          type="checkbox"
                          className="btn-check"
                          checked={selectedMonth === month}
                          onChange={() => handleMonthChange(month)}
                          id={`month_${month}`}
                        />
                        <label
                          className="btn btn-light btn-primary-soft-check"
                          htmlFor={`month_${month}`}
                        >
                          {month}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>


          </div>
         
        </div>
      </section>
      {/* =======================
Page content END */}
    </main>

  );
}

export default Blog_Grid;