import React from 'react';
import Navbar from './Header';
import Footer from './Footer';

const WarrantyReturn = () => {
    return (
        <div>
            <Navbar /> {/* Navbar at the top */}
            <div style={{ padding: '80px',marginTop:'-80px',marginBottom: '-120px'}}> {/* Adjusted padding */}
                <h2 style={{ color: 'black'}}>Warranty & Return Policy</h2>
                <p style={{ color: 'GrayText'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum.
                </p>

                <h2 style={{ color: 'black'}}>Return Policy</h2>
                <p style={{ color: 'GrayText'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum.
                </p>
         
            </div>
            <Footer /> {/* Footer at the bottom */}
        </div>
    );
};

export default WarrantyReturn;
