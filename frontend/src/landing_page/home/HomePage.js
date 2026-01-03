import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

// Sections
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';

function HomePage() {
  const [cookies, , removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (cookies.token) {
        try {
          const { data } = await axios.post(
            "http://localhost:3001/verify", 
            {},
            { withCredentials: true }
          );
          if (data.status) {
            setUsername(data.user);
            toast(`Hello ${data.user}`, { position: "top-right" });
          } else {
            setUsername(""); // token invalid
            removeCookie("token");
          }
        } catch (err) {
          console.error(err);
          setUsername(""); // error
          removeCookie("token");
        }
      }
    };
    verifyCookie();
  }, [cookies, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    setUsername("");
  };

  return (
    <>
      
      {/* Only show welcome + logout if user is logged in */}
      {username && (
        <div className="home_page">
          <h4>
            Welcome <span>{username}</span>
            <button onClick={Logout}>LOGOUT</button>
          </h4>
        </div>
      )}

      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
      <ToastContainer />
    </>
  );
}

export default HomePage;
