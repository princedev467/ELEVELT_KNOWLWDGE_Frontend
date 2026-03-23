import React from 'react';

function Empty_Cart(props) {
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
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item"><a href="#">Courses</a></li>
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
  <section>
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          {/* Image */}
          <img src="assets/images/element/cart.svg" className="h-200px h-md-300px mb-3" alt />
          {/* Subtitle */}
          <h2>Your cart is currently empty</h2>
          {/* info */}
          <p className="mb-0">Please check out all the available courses and buy some courses that fulfill your needs.</p>
          {/* Button */}
          <a href="index.html" className="btn btn-primary mt-4 mb-0">Back to Shop</a>
        </div>
      </div>
    </div>
  </section>
  {/* =======================
Page content END */}
</main>

    );
}

export default Empty_Cart;