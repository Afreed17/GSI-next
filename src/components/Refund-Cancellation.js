import React from 'react';
import Navbar from './Header';
import Footer from './Footer';

const RefundCancellation = () => {
    return (
        <div>
            <Navbar /> {/* Navbar at the top */}
            <div style={{ padding: '80px',marginTop:'-80px',marginBottom: '-120px'}}> {/* Adjusted padding */}
                <h2 style={{ color: 'black'}}>Refund & Cancellation Policy</h2>
                <p style={{ color: 'GrayText'}}>
                  Customer satisfaction is our primary concern. In the event, if you are displeased with the product you purchased from next, 
                  refund will be given, provided the reasons are genuine. Please read the fine prints of each deal before buying it, it provides
                   all the details about the services or the product you purchase.<br></br>
                  Next refund and cancellation policy gives you an option to refund or cancel items purchased on getat for any reason within
                   the specified cancellation period.
                  In case of dissatisfaction from our services, clients have the right to cancel their order and request a refund from us.
                   Our Policy for the cancellation and refund will be as follows:
                </p>
                <h2 style={{ color: 'black'}}>Cancellation Policy</h2>
                <p style={{ color: 'GrayText'}}>
                For Cancellations please contact us via contact us link.<br></br>
                Requests received later than 10 business days prior to the end of the current service period will be treated as cancellation 
                of services for the next service period.
                </p>
                <h2 style={{ color: 'black'}}>Refund Policy</h2>
                <p style={{ color: 'GrayText'}}>
                Next makes best possible efforts to provide quality products and services. All products undergo quality checks and required tests
                to ensure efficiency, electrical safety & reliability.<br></br>
                In case any client is not completely satisfied with our products we can provide a refund.<br></br>
                You will receive the credit within a certainamount of days, depending on your card issuer's policies. 
                Refunds will be issued to the same payment method which were used at the time of purchase.
                </p>
                <h2 style={{ color: 'black'}}>Returns will not be accepted if</h2>
                <p style={{ color: 'GrayText'}}>
                The materials have been opened/used, either fully or partially.<br></br>
                The materials have been tampered after delivery. This includes faulty storage.<br></br>
                Partial returns will not be accepted
                </p>
                <h2 style={{ color: 'black'}}>Replacement Policy</h2>
                <p style={{ color: 'GrayText'}}>
                If the item you ordered arrived in physically damaged or defective condition or is different from their description on the product
                 detail page, or has missing parts or accessories, it will be eligible for free replacement.
                </p>
            </div>
            <Footer /> {/* Footer at the bottom */}
        </div>
    );
};

export default RefundCancellation;
