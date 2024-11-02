import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import { FiShoppingCart } from "react-icons/fi";
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { notification } from 'antd'; 
import { useCart } from '../../contexts/CartContext';
import { auth } from '../../firebase/config';  
import { toast } from 'react-toastify';

const Header = () => {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState(location.pathname);
    const { cart } = useCart(); 
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        });
 
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => { 
        try {
            await signOut(auth);  
            toast.success('You have been logged out successfully.');
            window.location.href = '/login'; 
        } catch (error) {
            notification.error({
                message: 'Error',
                description: `Error logging out: ${error.message}`,
            });
        }
    };

    return (
        <Navbar bg="light" expand="lg" className="text-center">
            <Container>
                <Navbar.Brand as={Link} to="/" className="mx-auto">
                    <img src="http://lenos.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/elementor/thumbs/Logo-new-pludvtq5fdp2nryc52fb47i2al3kp49nz7tk4abwei.png" alt="Logo" width="130px" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className="mx-auto mt-3 ">
                        <Nav.Link as={Link} to="/" active={activeSection === '/'} onClick={() => setActiveSection('/')}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" active={activeSection === '/about'} onClick={() => setActiveSection('/about')}>About</Nav.Link>
                        <Nav.Link as={Link} to="/shop" active={activeSection === '/buyer-dashboard'} onClick={() => setActiveSection('/buyer-dashboard')}>Shop</Nav.Link>
                        <Nav.Link as={Link} to="/contact" active={activeSection === '/contact'} onClick={() => setActiveSection('/contact')}>Contact</Nav.Link> 
                        <Nav.Link as={Link} to="/orders" active={activeSection === '/my-orders'} onClick={() => setActiveSection('/my-orders')}>My Orders</Nav.Link>
                    </Nav>
                    <div className="d-flex align-items-center justify-content-center">
                        {isLoggedIn ? (
                            <Button onClick={handleLogout} style={{ backgroundColor: "red", border: "0", padding: "10px 20px" }}>
                                <FaSignOutAlt /> Logout
                            </Button>
                        ) : (
                            <Button style={{ backgroundColor: "#AE845F", border: "0", padding: "10px 20px" }} as={Link} to="/login">Login</Button>
                        )}
                        <Link to="/cart" className="icons ms-3 position-relative mt-3 mb-2" style={{color: "black"}}>
                            <FiShoppingCart size={24} />
                            <span
                                className="badge bg-danger position-absolute top-0 start-100 translate-middle"
                                style={{
                                    fontSize: "0.75rem",
                                    padding: "0.3em 0.5em",
                                    borderRadius: "50%",
                                }}
                            >
                                {cart.length} 
                            </span>
                        </Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
