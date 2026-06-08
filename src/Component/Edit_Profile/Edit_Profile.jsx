import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../../Redux/slice/alert.Slice";
import { NavLink, useNavigate } from "react-router-dom";
import { IMAGE_URL } from "../../utility/url";
import { editProfile, userLogout } from "../../Redux/slice/auth.slice";

function UserEditProfile(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const auth = useSelector((state) => state.auth);
    const user = auth?.auth;

    const [avatarPreview, setAvatarPreview] = useState('')
    const [profileData, setProfileData] = useState({
        fullName: "",
        email: "",
        phone: "",
        about: "",
        facebook: "",
        twitter: "",
        linkedin: "",
        avatar: ""
    });

    const [avatarFile, setAvatarFile] = useState(null);

    useEffect(() => {
        if (user) {
            setProfileData({
                fullName: user.name || "",
                email: user.email || "",
                phone: user.mobile_no || "",
                about: user.about || "",
                facebook: user.facebookID || "",
                twitter: user.twitterID || "",
                linkedin: user.linkedInID || "",
                avatar: user.PFP || ""
            });
        }
    }, [user]);



    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleProfileSubmit = (e) => {
        e.preventDefault();
        if (!user?._id) {
            dispatch(setAlert({ text: "User not logged in!", variant: "error" }));
            return;
        }

        const updatedData = {
            _id: user._id,
            name: profileData.fullName,
            mobile_no: profileData.phone,
            about: profileData.about,
            facebookID: profileData.facebook,
            twitterID: profileData.twitter,
            linkedInID: profileData.linkedin,
            PFP: avatarFile
        };

        dispatch(editProfile(updatedData));
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];  // ✅ "files" not "file"
        if (file) {
            setAvatarFile(file);
            setAvatarPreview(URL.createObjectURL(file));  // use separate preview state
        }
    }

    return (
        <div>
            <main>
                {/* =======================
Page Banner START */}
                <section className="pt-0">
                    <div className="container-fluid px-0">
                        <div
                            className="card bg-blue h-100px h-md-200px rounded-0"
                            style={{
                                background:
                                    "url(../assets/images/pattern/04.png) no-repeat center center",
                                backgroundSize: "cover",
                            }}
                        ></div>
                    </div>
                    <div className="container mt-n4">
                        <div className="row">
                            <div className="col-12">
                                <div className="card bg-transparent card-body pb-0 ps-0 mt-2 mt-sm-0">
                                    <div className="row d-sm-flex justify-sm-content-between mt-2 mt-md-0">
                                        {/* Avatar */}
                                        <div className="col-auto">
                                            <div className="avatar avatar-xxl position-relative mt-n3">
                                                <img
                                                    className="avatar-img rounded-circle border border-white border-3 shadow"
                                                    src={auth?.auth?.PFP[0]?.url || "../assets/images/avatar/01.jpg"}
                                                    alt="avatar"
                                                />
                                                <span className="badge bg-success text-white rounded-pill position-absolute top-50 start-100 translate-middle mt-4 mt-md-5 ms-n3 px-md-3">
                                                    Pro
                                                </span>
                                            </div>
                                        </div>
                                        {/* Profile info */}
                                        <div className="col d-sm-flex justify-content-between align-items-center">
                                            <div>
                                                <h1 className="my-1 fs-4">{profileData.fullName}</h1>
                                                <ul className="list-inline mb-0">
                                                    <li className="list-inline-item me-3 mb-1 mb-sm-0">
                                                        <span className="h6">255</span>
                                                        <span className="text-body fw-light">points</span>
                                                    </li>
                                                    <li className="list-inline-item me-3 mb-1 mb-sm-0">
                                                        <span className="h6">7</span>
                                                        <span className="text-body fw-light">
                                                            Completed courses
                                                        </span>
                                                    </li>
                                                    <li className="list-inline-item me-3 mb-1 mb-sm-0">
                                                        <span className="h6">52</span>
                                                        <span className="text-body fw-light">
                                                            Completed lessons
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* Button */}
                                          
                                        </div>
                                    </div>
                                </div>
                                {/* Advanced filter responsive toggler START */}
                                {/* Divider */}
                                <hr className="d-xl-none" />
                                <div className="col-12 col-xl-3 d-flex justify-content-between align-items-center">
                                    <a className="h6 mb-0 fw-bold d-xl-none" href="#">
                                        Menu
                                    </a>
                                    <button
                                        className="btn btn-primary d-xl-none"
                                        type="button"
                                        data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasNavbar"
                                        aria-controls="offcanvasNavbar"
                                    >
                                        <i className="fas fa-sliders-h" />
                                    </button>
                                </div>
                                {/* Advanced filter responsive toggler END */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* =======================
Page Banner END */}
                {/* =======================
Page content START */}
                <section className="pt-0">
                    <div className="container">
                        <div className="row">
                            {/* Right sidebar START */}
                            <div className="col-xl-3">
                                {/* Responsive offcanvas body START */}
                                <nav className="navbar navbar-light navbar-expand-xl mx-0">
                                    <div
                                        className="offcanvas offcanvas-end"
                                        tabIndex={-1}
                                        id="offcanvasNavbar"
                                        aria-labelledby="offcanvasNavbarLabel"
                                    >
                                        {/* Offcanvas header */}
                                        <div className="offcanvas-header bg-light">
                                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                                                My profile
                                            </h5>
                                            <button
                                                type="button"
                                                className="btn-close text-reset"
                                                data-bs-dismiss="offcanvas"
                                                aria-label="Close"
                                            />
                                        </div>
                                        {/* Offcanvas body */}
                                        <div className="offcanvas-body p-3 p-xl-0">
                                            <div className="bg-dark border rounded-3 pb-0 p-3 w-100">
                                                {/* Dashboard menu */}
                                                <div className="list-group list-group-dark list-group-borderless">
                                                    <NavLink className="list-group-item" to={'/Student_Dashboard'}><i className="bi bi-ui-checks-grid fa-fw me-2" />Dashboard</NavLink>
                                                    <NavLink className="list-group-item " to={'/Student_Course_list'} ><i className="bi bi-basket fa-fw me-2" />My Courses</NavLink>
                                                    <NavLink className="list-group-item " to={'/Student_Payment_Info'}><i className="bi bi-ui-checks-grid fa-fw me-2" />Payment Info</NavLink>
                                                    <NavLink className="list-group-item" to={'/Wishitlist'}><i className="bi bi-cart-check fa-fw me-2" />Wishlist</NavLink>
                                                    <NavLink className="list-group-item active" to={'/Edit_Profile'}><i className="bi bi-pencil-square fa-fw me-2" />Edit Profile</NavLink>
                                                    <NavLink className="list-group-item text-danger bg-danger-soft-hover" onClick={() => (
                                                        dispatch(userLogout(auth.auth._id)),
                                                        navigate("/")
                                                    )} to={'/'}><i className="fas fa-sign-out-alt fa-fw me-2" />Sign Out</NavLink>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                                {/* Responsive offcanvas body END */}
                            </div>
                            {/* Right sidebar END */}
                            {/* Main content START */}
                            <div className="col-xl-9">
                                {/* Edit Profile Card START */}
                                <div className="card border rounded-3">
                                    {/* Card header START */}
                                    <div className="card-header border-bottom">
                                        <h3 className="mb-0">Edit Profile</h3>
                                    </div>
                                    {/* Card header END */}
                                    {/* Card body START */}
                                    <div className="card-body">
                                        {/* Form START */}
                                        <form className="row g-4" onSubmit={handleProfileSubmit}>
                                            {/* Upload image START */}
                                            <div className="col-12 justify-content-center align-items-center">
                                                <label className="form-label">Profile picture</label>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar avatar-xl me-3">
                                                        <img
                                                            className="avatar-img rounded-circle border border-white border-3 shadow"
                                                            src={avatarPreview || auth?.auth?.PFP[0]?.url || "../assets/images/avatar/01.jpg"}
                                                            alt="avatar"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="btn btn-primary-soft mb-0" htmlFor="upload-avatar">
                                                            Upload
                                                        </label>
                                                        <input
                                                            type="file"
                                                            id="upload-avatar"
                                                            className="d-none"
                                                            accept="image/*"
                                                            onChange={handleAvatarChange}
                                                        />
                                                        <button
                                                            type="button"
                                                            className="btn btn-ghost-danger mb-0 ms-2"
                                                            onClick={() => {
                                                                setAvatarFile(null);
                                                                setProfileData((prev) => ({
                                                                    ...prev,
                                                                    avatar: ""
                                                                }));
                                                            }}
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Upload image END */}

                                            {/* Full Name */}
                                            <div className="col-md-6">
                                                <label className="form-label">Full Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="fullName"
                                                    value={profileData.fullName}
                                                    onChange={handleProfileChange}
                                                    required
                                                />
                                            </div>

                                            {/* Email */}
                                            <div className="col-md-6">
                                                <label className="form-label">Email Address</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    disabled
                                                    value={profileData.email}
                                                    onChange={handleProfileChange}
                                                    required
                                                />
                                            </div>

                                            {/* Phone number */}
                                            <div className="col-md-6">
                                                <label className="form-label">Phone Number</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="phone"
                                                    value={profileData.phone}
                                                    onChange={handleProfileChange}
                                                />
                                            </div>

                                            {/* About / Bio */}
                                            <div className="col-12">
                                                <label className="form-label">About Me</label>
                                                <textarea
                                                    className="form-control"
                                                    rows="4"
                                                    name="about"
                                                    value={profileData.about}
                                                    onChange={handleProfileChange}
                                                />
                                            </div>

                                            <div className="col-12">
                                                <hr />
                                                <h5>Social Media Profiles</h5>
                                            </div>

                                            {/* Facebook */}
                                            <div className="col-md-4">
                                                <label className="form-label">Facebook Profile</label>
                                                <div className="input-group">
                                                    <span className="input-group-text"><i className="fab fa-facebook text-facebook"></i></span>
                                                    <input
                                                        type="url"
                                                        className="form-control"
                                                        name="facebook"
                                                        value={profileData.facebook}
                                                        onChange={handleProfileChange}
                                                        placeholder="https://facebook.com/username"
                                                    />
                                                </div>
                                            </div>

                                            {/* Twitter */}
                                            <div className="col-md-4">
                                                <label className="form-label">Twitter Profile</label>
                                                <div className="input-group">
                                                    <span className="input-group-text"><i className="fab fa-twitter text-twitter"></i></span>
                                                    <input
                                                        type="url"
                                                        className="form-control"
                                                        name="twitter"
                                                        value={profileData.twitter}
                                                        onChange={handleProfileChange}
                                                        placeholder="https://twitter.com/username"
                                                    />
                                                </div>
                                            </div>

                                            {/* LinkedIn */}
                                            <div className="col-md-4">
                                                <label className="form-label">LinkedIn Profile</label>
                                                <div className="input-group">
                                                    <span className="input-group-text"><i className="fab fa-linkedin text-linkedin"></i></span>
                                                    <input
                                                        type="url"
                                                        className="form-control"
                                                        name="linkedin"
                                                        value={profileData.linkedin}
                                                        onChange={handleProfileChange}
                                                        placeholder="https://linkedin.com/in/username"
                                                    />
                                                </div>
                                            </div>

                                            {/* Save Button */}
                                            <div className="col-12 text-end">
                                                <button type="submit" className="btn btn-primary mb-0">
                                                    Save Changes
                                                </button>
                                            </div>
                                        </form>
                                        {/* Form END */}
                                    </div>
                                    {/* Card body END */}
                                </div>
                                {/* Edit Profile Card END */}
                            </div>
                            {/* Main content END */}
                        </div>
                        {/* Row END */}
                    </div>
                </section>
                {/* =======================
Page content END */}
            </main>
        </div>
    );
}

export default UserEditProfile;