import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDeleteCartMutation, useGetCartQuery, useUpdateCartMutation } from '../../Redux/Api/Cart.Api';
import { useGetCourseQuery } from '../../Redux/Api/Course.Api';
import Carousel from 'react-material-ui-carousel';
import { useGetCouponQuery, useUpdateCouponMutation } from '../../Redux/Api/coupon.Api';
import { NavLink } from 'react-router-dom';
import Checkout from '../Checkout/Checkout';
import { useCreateOrderMutation } from '../../Redux/Api/Payment.Api';
import { Button } from '@mui/material';

function Cart(props) {

  const [couponcode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState('');
  const [selectedCoupon, setSelectedCoupon] = useState(null);

  const auth = useSelector(state => state.auth);
  console.log(auth);


  // console.log(couponcode);

  //delete cart items
  const [deleteData] = useDeleteCartMutation();

  const { data: cart } = useGetCartQuery();
  console.log(cart?.data);

  let cartData = cart?.data


  let cartUser = cartData?.find((v) => v.user_id === auth.auth?._id)
  console.log(cartUser);


  const { data: courseData, isLoading, isError } = useGetCourseQuery(); //get Data
  console.log("course", courseData);



  const [updateData] = useUpdateCartMutation();


  const [updateCoupon] = useUpdateCouponMutation();

  const handledelete = (id) => {
    //  let itemsindex= cartUser.items.findIndex((v)=>v._id===id);
    //   console.log(itemsindex);


    let deletdata = cartUser?.items.filter((v) => v._id !== id);
    console.log(deletdata);

    updateData({
      _id: cartUser._id,
      user_id: auth.auth._id,
      items: deletdata
    })
    console.log(cartUser);



  }

  const { data: coupon } = useGetCouponQuery();
  console.log(coupon?.data);


  const OrignalPrice = cartUser?.items?.reduce((acc, v) => {
    let cur = v.price.replace(/[^\d.]/g, '');
    return acc + Number(cur);
  }, 0)

  console.log(OrignalPrice);



  const handleCoupon = () => {

    const discountper = coupon?.data.find(
      (v) => v.name === couponcode
    );

    setSelectedCoupon(discountper);
    if (discountper) {
      const discoutnum = discountper.discount.replace('%', '');

      setDiscount(Number(discoutnum));
      setSelectedCoupon(discountper);
    } else {
      console.log('invalid coupon code');
      setDiscount(0);
      setSelectedCoupon(null);
    }
  };

  console.log(discount);

  // if(!cartUser?.items){
  //   setDiscount('');
  // }

  // FINAL TOTAL
  const discountPrice = OrignalPrice * discount / 100;
  let finalPrice = OrignalPrice - discountPrice;
  console.log(finalPrice);

  const [createOrder] = useCreateOrderMutation();

  const handleuse = async() => {

try {

    const order = await createOrder({
      amount: finalPrice ,
    }).unwrap();

    console.log(order);

    const options = {
      key: order.key,
      amount: order.amount,
      currency: order.currency,
      order_id: order.id,

      name: "Prince Movaliya",
      description: "Test Transaction",

      prefill: {
        name: "Elevent Knowledge",
        email: "example@gmail.com",
        contact: "9999999999",
      },

      theme: {
        color: "#F37254",
      },
    };

    const rzp = new Razorpay(options);

    rzp.open();

  } catch (error) {

    console.log("ERROR", error);

  }


    if (!selectedCoupon) return;

    if (selectedCoupon.userLimit > selectedCoupon.use) {

      updateCoupon({
        _id: selectedCoupon._id,
        use: selectedCoupon.use + 1,
      });

    } else {
      console.log('Invalid Coupon Code');

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
                <h1 className="m-0">My cart</h1>
                {/* Breadcrumb */}
                <div className="d-flex justify-content-center">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb breadcrumb-dots mb-0">
                      <li className="breadcrumb-item"> <a href="#">Home</a></li>
                      <li className="breadcrumb-item"> <a href="#">Courses</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Cart</li>
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
          <div className="row g-4 g-sm-5">
            {/* Main content START */}
            <div className="col-lg-8 mb-4 mb-sm-0">
              <div className="card card-body p-4 shadow">
                {/* Alert */}
                <div className="alert alert-danger alert-dismissible d-flex justify-content-between align-items-center fade show py-3 pe-2" role="alert">
                  <div>
                    <span className="fs-5 me-1">🔥</span>
                    These courses are at a limited discount, please checkout within<strong className="text-danger ms-1">2 days and 18 hours</strong>
                  </div>
                  <button type="button" className="btn btn-link mb-0 text-end" data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x-lg text-dark" /></button>
                </div>
                <div className="table-responsive border-0 rounded-3">
                  {/* Table START */}
                  <table className="table align-middle p-4 mb-0">
                    {/* Table head */}
                    {/* Table body START */}
                    <tbody className="border-top-0">
                      {/* Table item */}
                      {
                        cartUser?.items?.map((v) => {

                          let cartCourse = courseData?.data?.filter((v1) => v1._id === v.course);
                          console.log(cartCourse);

                          return (
                            <tr>

                              <td>
                                {
                                  cartCourse?.map((v2) => {

                                    return (
                                      <div className="d-lg-flex align-items-center">
                                        <div className="w-100px w-md-80px mb-2 mb-md-0">

                                          {
                                            <Carousel indicators={false}>
                                              {
                                                v2.course_img.map(v3 => (
                                                  <img src={v3.url} className="rounded" alt="course image" />

                                                ))
                                              }

                                            </Carousel>
                                          }
                                        </div>

                                        {/* Title */}
                                        <h6 className="mb-0 ms-lg-3 mt-2 mt-lg-0">
                                          <a href="#">{v2.name}</a>
                                        </h6>
                                      </div>
                                    )
                                  })
                                }
                              </td>
                              {/* Amount item */}
                              <td>
                                <h5 className="text-success mb-0">${v.price}</h5>
                              </td>
                              {/* Action item */}
                              <td>
                                <a href="#" className="btn btn-sm btn-success-soft px-2 me-1 mb-1 mb-md-0"><i className="far fa-fw fa-edit" /></a>
                                <button className="btn btn-sm btn-danger-soft px-2 mb-0" onClick={() => handledelete(v._id)}><i className="fas fa-fw fa-times" /></button>
                              </td>
                            </tr>
                          )
                        })
                      }

                    </tbody>
                  </table>
                </div>
                {/* Coupon input and button */}
                <div className="row g-3 mt-2">
                  <div className="col-md-6">
                    <div className="input-group">
                      <input className="form-control form-control " placeholder="COUPON CODE" onChange={(e) => setCouponCode(e.target.value)} />
                      <button type="button" className="btn btn-primary" onClick={handleCoupon}>Apply coupon</button>
                    </div>
                  </div>
                  {/* Update button */}
                  <div className="col-md-6 text-md-end">
                    <button className="btn btn-primary mb-0" disabled>Update cart</button>
                  </div>
                </div>
              </div>
            </div>
            {/* Main content END */}
            {/* Right sidebar START */}
            <div className="col-lg-4">
              {/* Card total START */}
              <div className="card card-body p-4 shadow">
                {/* Title */}
                <h4 className="mb-3">Cart Total</h4>
                {/* Price and detail */}
                {
                  <ul className="list-group list-group-borderless mb-2">

                    <li className="list-group-item px-0 d-flex justify-content-between">
                      <span className="h6 fw-light mb-0">Original Price</span>
                      <span className="h6 fw-light mb-0 fw-bold">${OrignalPrice ? OrignalPrice : 0}</span>
                    </li>

                    {discount && cartUser?.items ?
                      <li className="list-group-item px-0 d-flex justify-content-between">
                        <span className="h6 fw-light mb-0">Coupon Discount</span>
                        <span className="text-danger">{discount + '%'}</span>
                      </li> :
                      ''
                    }
                    <li className="list-group-item px-0 d-flex justify-content-between">
                      <span className="h5 mb-0">Total</span>
                      <span className="h5 mb-0">{finalPrice}</span>
                    </li>
                  </ul>}
                {/* Button */}
                <div className="d-grid">
                  <a className="btn btn-lg btn-success" 
                    state={{
                      cartData: cartUser,
                      finalPrice,
                      discount,
                      originalPrice: OrignalPrice
                    }}
                    onClick={handleuse} >Proceed to Checkout</a>
                  {/* <a className="btn btn-lg btn-success" onClick={handleuse}>Proceed to Checkout</a> */}
                </div>
                {/* Content */}
                <p className="small mb-0 mt-2 text-center">By completing your purchase, you agree to these <a href="#"><strong>Terms of Service</strong></a></p>
              </div>
              {/* Card total END */}
            </div>
            {/* Right sidebar END */}
          </div>{/* Row END */}
        </div>
      </section>
      {/* =======================
Page content END */}
    </main>

  );
}

export default Cart;