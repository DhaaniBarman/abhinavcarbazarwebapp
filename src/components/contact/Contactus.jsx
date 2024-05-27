import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelopeOpen, FaPhoneAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
const Contactus = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const validate = () => {
        const errors = {};
        if (!formData.name) {
            errors.name = "Name is required";
        }
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(formData.phone)) {
            errors.phone = "Phone number must be 10 digits";
        }
        if (!formData.subject) {
            errors.subject = "Subject is required";
        }
        if (!formData.message) {
            errors.message = "Message is required";
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            emailjs.send('service_3aqoqkg', 'template_dxu544o', formData, 'FPjTof1H8QgqSI45O')
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Form submitted successfully!');
                    setFormData({
                        name: '',
                        phone: '',
                        subject: '',
                        message: '',
                    });
                })
                .catch((err) => {
                    console.error('FAILED...', err);
                    alert('There was an error submitting the form. Please try again later.');
                });
        }
    };
    return (
        <div className="container-fluid mt-3 ">
            <h1 className="display-5 text-uppercase text-center pb-5">Contact US</h1>
            <div className="row pt-lg-5 p-md-0 m-md-0">
                <div className="col-lg-7 col-md-12 mb-lg-5">
                    <div className="contact-form bg-light mb-5 p-4">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-12 col-md-6 form-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control p-4"
                                        placeholder="Your Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.name && <small className="text-danger">{errors.name}</small>}
                                </div>
                                <div className="col-12 col-md-6 form-group mb-3">
                                    <input
                                        type="tel"
                                        className="form-control p-4"
                                        placeholder="Your Phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.phone && <small className="text-danger">{errors.phone}</small>}
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <input
                                    type="text"
                                    className="form-control p-4"
                                    placeholder="Subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.subject && <small className="text-danger">{errors.subject}</small>}
                            </div>
                            <div className="form-group mb-3">
                                <textarea
                                    className="form-control py-3 px-4"
                                    rows="5"
                                    placeholder="Message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                                {errors.message && <small className="text-danger">{errors.message}</small>}
                            </div>
                            <div>
                                <button className="btn btn-warning py-3 px-5" type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12">
                    <div className="d-flex flex-column justify-content-center px-4 py-5 contactinfo" >
                        <div className="d-flex my-3">
                            <FaMapMarkerAlt className="fa-2x text-warning flex-shrink-0 mr-3" />
                            <div>
                                <h5 className="text-warning">Address</h5>
                                <p><a className="text-white text-decoration-none" href="https://maps.app.goo.gl/wYguybxkqhWHunU26" target="_blank" rel="noopener noreferrer">Pushpnagar, Kachhpura Over Bridge, Kachnarcity, Jabalpur, Madhya Pradesh 482001</a></p>
                            </div>
                        </div>
                        <div className="d-flex my-3">
                            <FaEnvelopeOpen className="fa-2x text-warning flex-shrink-0 mr-3" />
                            <div>
                                <h5 className="text-warning">Email Address</h5>
                                <p><a href="mailto:nitin52269@gmail.com" className="text-light text-decoration-none">nitin52269@gmail.com</a></p>
                            </div>
                        </div>
                        <div className="d-flex my-3">
                            <FaPhoneAlt className="fa-2x text-warning flex-shrink-0 mr-3" />
                            <div>
                                <h5 className="text-warning">Contact Number</h5>
                                <p className="m-0"><a href="tel:+91-9302152269" className="text-light text-decoration-none">+91-9302152269</a></p>
                                <p className="m-0"><a href="tel:+91-9165812126" className="text-light text-decoration-none">+91-9165812126</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contactus;
