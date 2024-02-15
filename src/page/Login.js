import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";
// import FooterTwo from "./FooterTwo";
import Footer from "./Footer";
import { Link } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const onSubmit = (e) => {
    e.preventDefault();

  };
  const sendLoginRequest = () => {
    axios.post('http://127.0.0.1:8000/api/login', {
      email: email,
      password: password,
    })
      .then(function (response) {
        // console.log(response.data.is_data);
        if(response.data.is_data == true){
          const token = response.data.data.token;
          const name = response.data.data.username;
          const userid = response.data.data.userid
          localStorage.setItem('token', token);
          localStorage.setItem('username', name);
          localStorage.setItem('userid', userid)
          alert('login successfull')

          setEmail('')
          setPassword('')
        }else{
          alert('try again')
        }
        

      })
      .catch(function (error) {
        alert("login failed, please try again")
      });
  }
  return (
    <>

      <Header />
      <div className="wrapper bg-opacity-default">
        <div className="rev_slider_wrapper fullwidth-container dark-spinner">
          <div className="container inner text-center">
            <div className="space40"></div>
            <h1 className="page-title">Login</h1>
            <p>New Member ?
              <Link to="/register">Register</Link>
              Now</p>
          </div>
        </div>
        {/* <!-- /.rev_slider_wrapper --> */}
      </div>

      <div className="wrapper light-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-md-3"></div>

            <div class="col-md-6">

              <div class="">
                <div class="card__header" style={{ marginTop: '5%' }}>
                  <div class="card__content">
                    <form method="POST" action="" onClick={onSubmit}>
                      <div class="form-group">
                        <label for="email">Your Email Id</label>
                        <input type="email" name="email" id="email" class="form-control"
                          placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                      </div>

                      <div class="form-group">
                        <label for="password">Your Password</label>
                        <input type="password" name="password" id="password" class="form-control"
                          placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} value={password} />
                      </div>

                      <div class="form-group form-group--password-forgot">
                        <label class="checkbox checkbox-inline" />

                        <span style={{ float: 'right' }} class="password-reminder">Forgot your password?
                          <a href="#">Click Here</a>
                        </span>
                      </div>
                      <div class="form-group--sm"> <button class="btn btn-success btn-lg btn-block" onClick={sendLoginRequest}>Sign in to your
                        account</button> </div>

                      <p style={{ textAlign: 'center' }}>New Member ?
                        <Link to="/register">Register</Link>
                        Here</p>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-md-3"></div>
            </div>
          </div>
        </div>
      </div>


      <Footer />

    </>
  )
}
export default Login