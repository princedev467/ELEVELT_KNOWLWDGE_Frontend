import React from 'react';
import { useDeleteWhistlistMutation, useGetWhistlistQuery, useUpdateWhistlistMutation } from '../../Redux/Api/Whistlist.Api';
import { useSelector } from 'react-redux';
import { useGetCourseQuery } from '../../Redux/Api/Course.Api';

function Wishitlist(props) {

  const auth = useSelector(state => state.auth);
  console.log(auth.auth);


  const { data: whistlist } = useGetWhistlistQuery();
  console.log(whistlist?.data);
  const { deleteData } = useDeleteWhistlistMutation();

  const [updateWhitlist] = useUpdateWhistlistMutation();

  const userWhistlist = whistlist?.data?.find((v) => v?.user_id === auth?.auth?._id);
  console.log(userWhistlist);

  const { data: course } = useGetCourseQuery();
  const handlewhistlist = async (course_id) => {



    let whistlistUser = whistlist?.data?.find((v) => v.user_id === auth.auth._id);


    let existData = whistlistUser?.items?.find((v) => v.course === course_id);
    console.log(existData);



    //if existdata remove from whistlist beacuse 
    if (existData) {
      let deletdata = whistlistUser?.items.filter((v) => v._id !== existData._id);
      console.log(deletdata);


      await updateWhitlist({
        _id: whistlistUser._id,
        user_id: auth.auth._id,
        items: deletdata
      })

      return;

    }

    const ItemsData = [...(whistlistUser?.items || [])];


    ItemsData.push({
      course: course_id,

    });

    console.log(ItemsData);


    //if user alredy exist obly
    if (whistlistUser) {
      await updateWhitlist({
        _id: whistlistUser._id,
        user_id: auth.auth._id,
        items: ItemsData
      })
    } else {
      await addWhistlist({
        user_id: auth.auth._id,
        items: ItemsData
      });
    }


  }

  return (
    <main>
      {/* =======================
Page Banner START */}
      <section className="py-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bg-light p-4 text-center rounded-3">
                <h1 className="m-0">Wishlist</h1>
                {/* Breadcrumb */}
                <div className="d-flex justify-content-center">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb breadcrumb-dots mb-0">
                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                      <li className="breadcrumb-item"><a href="#">Courses</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Wishlist</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =======================
Page Banner END */}
      {/* =======================
Page content START */}
      <section className="pt-5">
        <div className="container">
          {/* Content and button */}
          <div className="d-sm-flex justify-content-sm-between align-items-center mb-4">
            <h5 className="mb-2 mb-sm-0">You have {userWhistlist?.items?.length} items in wishlist</h5>
            <div className="text-end"> <button className="btn btn-danger-soft mb-0"><i className="fas fa-trash me-2" onClick={() => deleteData(userWhistlist._id)} />Remove all</button> </div>
          </div>
          <div className="row g-4">
            {/* Card item START */}

            {
              userWhistlist?.items?.map((v1) => {
                const wishlistCourse = course.data?.filter((v2) => v2._id === v1.course);

                  let existData = userWhistlist?.items?.some((v2) => v2.course === wishlistCourse._id);
                    console.log(existData);
                return wishlistCourse?.map((v4) => (
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="card shadow" key={v4._id}>
                      {/* Image */}
                      <img src={v4?.course_img[0]?.url} className="card-img-top" alt="course image" />
                      <div className="card-body pb-0">
                        {/* Badge and favorite */}
                        <div className="d-flex justify-content-between mb-2">
                          <a href="#" className="badge bg-success bg-opacity-10 text-success">Beginner</a>
                          <a href="#" className="h6 fw-light mb-0" onClick={() => handlewhistlist(v._id)}><i className={existData ? "fa-solid fa-heart" : "far fa-heart"} style={{ color: '#FF0542', fontSize: '20px' }} /></a>
                        </div>
                        {/* Title */}
                        <h5 className="card-title fw-normal">
                          <a href="#">{v4?.name}</a>
                        </h5>
                        <p className="mb-2 text-truncate-2">{v4?.description}</p>
                        {/* Rating star */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
                          <li className="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
                        </ul>
                      </div>
                      {/* Card footer */}
                      <div className="card-footer pt-0 pb-3">
                        <hr />
                        <div className="d-flex justify-content-between">
                          <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2" />9h 56m</span>
                          <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2" />65 lectures</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ));
              })
            }

          </div>
        </div>
      </section>
      {/* =======================
Page content END */}
    </main>

  );
}

export default Wishitlist;