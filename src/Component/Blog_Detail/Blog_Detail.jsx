import React, { useState } from 'react';
import { useGetBlogQuery } from '../../Redux/Api/blog.Api';
import { NavLink, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { useGetBlogSectionQuery } from '../../Redux/Api/blogSection.Api';
import DOMPurify from 'dompurify';
import { useGetTagQuery } from '../../Redux/Api/tag.Api';
import { useAddblogLikesMutation, useGetblogLikesQuery, useUpdateblogLikesMutation } from '../../Redux/Api/blogLikes.Api';
import { useSelector } from 'react-redux';


function Blog_Detail(props) {

  const { id } = useParams();

  //getData
  const { data: blog } = useGetBlogQuery();
  const { data: blogSection } = useGetBlogSectionQuery();
  const { data: blogLikes } = useGetblogLikesQuery();

  const [addData] = useAddblogLikesMutation();

  const [updateData] = useUpdateblogLikesMutation();

  console.log(blog);


  const auth = useSelector(state => state.auth)
  console.log("auth", auth);


  const filterBlog = blog?.data?.find((v) => v._id === id);
  console.log(filterBlog);

  const filterBlogSection = blogSection?.data?.filter((v) => v?.blog?._id === filterBlog?._id);
  console.log(filterBlogSection);


  const clean = DOMPurify.sanitize(filterBlog?.text);
  console.log(clean);



  const { data: Tag } = useGetTagQuery();
  console.log("tag", Tag?.data);
  let TagData = Tag?.data;


  const blogWords = filterBlog?.text?.length || 0;

  const sectionWords =
    filterBlogSection?.reduce((total, section) => {
      return total + (section?.description?.length || 0);
    }, 0) || 0;

  const totalWords = blogWords + sectionWords;


  const readMin = totalWords / 200;
  console.log(readMin);


const handleLikes = async (id) => {
  const BlogLikeExist = blogLikes?.data?.find(
    (v) => v?.blog === filterBlog?._id
  );

  if (!BlogLikeExist) {
   
    await addData({
      blog: id,
      user: auth?.auth?._id,
       likes: 1
    });

    return;
  }

  const isExist = BlogLikeExist?.user?.some(
    (v) => v.toString() === auth?.auth?._id
  );

  if (isExist) {
    console.log("Already liked");
    return;
  }

  await updateData({
    _id: BlogLikeExist._id,
    user: auth?.auth?._id,
  });
};

// console.log(blogLikes.data.like);

  return (
    <main>
      {/* =======================
Main Content START */}
      <section className="pb-0 pt-4 pb-md-5">
        <div className="container-fluid px-lg-5">

          <div className="card overflow-hidden h-200px h-sm-300px h-lg-400px h-xl-500px rounded-3 text-center">
            <img src={filterBlog?.content[0]?.url} alt="" />
          </div>
          <div
            className="d-flex justify-content-between align-items-center px-4 py-3"
            style={{

              borderBottom: "1px solid #e5e5e5"
            }}
          >
            <div className="d-flex align-items-center">
              <img
                src="../assets/images/avatar/07.jpg"
                alt=""
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  objectFit: "cover"
                }}
              />

              <div className="ms-3">
                <h5 className="mb-0">
                  {filterBlog?.instructor?.name}
                </h5>

                <p
                  className="mb-0"
                  style={{ color: "#8b8b8b" }}
                >
                  Editor at Eduport
                </p>
              </div>
            </div>

            <div className="d-flex align-items-center gap-4">

              <div>
                <i className="far fa-calendar me-2"></i>
                {dayjs(filterBlog?.date).format("DD MMM YYYY")}
              </div>

              <div>
                <i className="far fa-clock me-2"></i>
                {Math.floor(readMin)} min read
              </div>

              <div
                className="px-3 py-2 rounded-pill"
                onClick={() => handleLikes(filterBlog._id)}
                style={{
                  background: "#fff1df",
                  color: "#ff7300"
                }}
              >
                <i className="fas fa-heart me-2"></i>
                {blogLikes?.data?.like}
              </div>

              <div
                className="px-3 py-2 rounded-pill"
                style={{
                  background: "#e8f4ff",
                  color: "#007bff"
                }}
              >
                <i className="far fa-eye me-2"></i>
                2K
              </div>

            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="row mt-5">

            {/* LEFT SIDE */}
            <div className="col-lg-8">

              <div
                dangerouslySetInnerHTML={{
                  __html: clean
                }}
                style={{
                  fontSize: "20px",
                  lineHeight: "2",
                  color: "#8b8da5"
                }}
              />

              {/* BLOG SECTIONS */}

              {filterBlogSection?.map((section) => {

                const cleanDescription = DOMPurify.sanitize(section?.description);

                return (
                  <div key={section._id} className="mt-5">

                    <h4
                      style={{
                        fontSize: "35px",
                        fontWeight: "700",
                        color: "#5b5353"
                      }}
                    >
                      {section.title}
                    </h4>

                    <div
                      dangerouslySetInnerHTML={{
                        __html: cleanDescription
                      }}
                      style={{
                        fontSize: "20px",
                        lineHeight: "2",
                        color: "#8b8da5"
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="col-lg-4">
              {/* AUTHOR CARD */}
              <div
                className="p-4 mb-4"
                style={{
                  borderRadius: "20px",
                  background: "#24292e "
                }}
              >
                <h6
                  style={{
                    letterSpacing: "3px",
                    color: "#999"
                  }}
                >
                  ABOUT THE AUTHOR
                </h6>

                <div className="text-center mt-4">

                  <img
                    src="../assets/images/avatar/07.jpg"
                    alt=""
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%"
                    }}
                  />

                  <h3 className="mt-3">
                    {filterBlog?.instructor?.name}
                  </h3>

                  <p style={{ color: "#888" }}>
                    Editor at Eduport
                  </p>

                  <p style={{ color: "#666" }}>
                    Passionate educator and writer
                    exploring the frontiers of modern
                    learning.
                  </p>
                </div>
              </div>

              {/* RELATED BLOG */}

              <div
                className="p-4 mb-4"
                style={{
                  borderRadius: "20px",
                  background: "#24292e "
                }}
              >
                <h6
                  style={{
                    letterSpacing: "3px",
                    color: "#999"
                  }}
                >
                  YOU MAY ALSO LIKE
                </h6>

                {blog?.data
                  ?.filter((b) => b._id !== filterBlog?._id)
                  ?.slice(0, 3)
                  ?.map((item) => (
                    <NavLink
                      key={item._id}
                      to={`/blog-detail/${item._id}`}
                      className="d-flex mt-4 text-decoration-none"
                    >
                      <img
                        src={item?.content?.[0]?.url}
                        alt=""
                        style={{
                          width: "90px",
                          height: "70px",
                          borderRadius: "10px",
                          objectFit: "cover"
                        }}
                      />

                      <div className="ms-3">
                        <h6
                          style={{
                            color: "#222"
                          }}
                        >
                          {item.title}
                        </h6>

                        <small
                          style={{
                            color: "#999"
                          }}
                        >
                          {dayjs(item.date).format(
                            "DD MMM YYYY"
                          )}
                        </small>
                      </div>
                    </NavLink>
                  ))}
              </div>

              {/* TAGS */}

              <div
                className="p-4"
                style={{
                  borderRadius: "20px",
                  background: "#24292e "
                }}
              >
                <h6
                  style={{
                    letterSpacing: "3px",
                    color: "#999"
                  }}
                >
                  TAGS
                </h6>

                <div className="d-flex flex-wrap gap-2 mt-4">

                  {TagData?.map((tag) => (
                    <NavLink
                      key={tag._id}
                      to={`/Blog_Grid/${tag._id}`}
                      className="btn btn-light   btn-primary-soft-check"
                      style={{

                        borderRadius: "50px",

                      }}
                    >
                      {tag.tag}
                    </NavLink>
                  ))}

                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </main>

  );
}

export default Blog_Detail;