import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";
// import FooterTwo from "./FooterTwo";
import Footer from "./Footer";
import { Link } from 'react-router-dom';

const Register = () => {
    const [full_name, setName] = useState('')
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [c_password, setCPassword] = useState('')
    const onSubmit = (e) => {
        e.preventDefault();

    };
    const sendRegisterRequest = () => {
        axios.post('http://127.0.0.1:8000/api/register', {
            full_name: full_name,
            username: username,
            email: email,
            phone: phone,
            password: password,
            c_password: c_password,
        })
            .then(function (response) {
                const token = response.data.data.token
                const username = response.data.data.username
                const userid = response.data.data.userid

                localStorage.setItem('token', token)
                localStorage.setItem('username', username)
                localStorage.setItem('userid', userid)
                window.location.reload()
                alert('registration successful')

                setName('')
                setUserName('')
                setPhone('')
                setEmail('')
                setPassword('')
                setCPassword('')

            })

            .catch(function (error) {
                alert('something went wrong, please try again')
            });
    }
    return (
        <>

            <Header />
            <div className="wrapper bg-opacity-default">
                <div className="rev_slider_wrapper fullwidth-container dark-spinner">
                    <div className="container inner text-center">
                        <div className="space40"></div>
                        <h1 className="page-title">Register</h1>
                        <p>Already Registered ?
                            <Link to="/login" >Login</Link>
                            Now</p>
                    </div>
                </div>
                {/* <!-- /.rev_slider_wrapper --> */}
            </div>

            <div className="wrapper light-wrapper register_wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>

                        <div className="col-md-6">
                            <form method="POST" action="#" onSubmit={onSubmit}>

                                <div className="form-group">
                                    <label for="register_name">Your Name</label>
                                    <input type="text" name="full_name" id="register-name" className="form-control" placeholder="Enter your full Name" onChange={(e) => setName(e.target.value)} value={full_name} />
                                </div>
                                <div className="form-group">
                                    <label for="register_name">User Name</label>
                                    <input type="text" name="username" id="register-name" className="form-control" placeholder="Enter your user name" onChange={(e) => setUserName(e.target.value)} value={username} />
                                </div>
                                <div className="form-group">
                                    <label for="phone">Your Phone</label>
                                    <input type="text" name="phone" id="phone" className="form-control"
                                        placeholder="Enter your phone number" onChange={(e) => setPhone(e.target.value)} value={phone} />
                                </div>

                                <div className="form-group">
                                    <label for="email">Your Email</label>
                                    <input type="email" name="email" id="email" className="form-control"
                                        placeholder="Enter your email address" onChange={(e) => setEmail(e.target.value)} value={email} />
                                </div>

                                <div className="form-group">
                                    <label for="password">Your Password</label>
                                    <input type="password" name="password" id="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                                </div>

                                <div className="form-group">
                                    <label for="confirm_password">Confirm Password</label>
                                    <input type="password" name="c_password" id="confirm_password" className="form-control"
                                        placeholder="Confirm Password" onChange={(e) => setCPassword(e.target.value)} value={c_password} />
                                </div>

                                <div className="form-group form-group--submit"> <button className="btn btn-default btn-lg btn-block" onClick={sendRegisterRequest}>Create Your
                                    Account</button> </div>
                            </form>

                            <p style={{ textAlign: 'center' }}>Already Registered ?
                                <Link to="/Login">Login</Link>
                                Now</p>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>


            <Footer />

        </>
    )
}
export default Register