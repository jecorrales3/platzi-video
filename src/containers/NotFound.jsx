import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
  <>
    <div className="body bg-purple">
      <div className="stars">
        <div className="central-body">
          <img
            className="image-404 img-svg"
            src="http://salehriaz.com/404Page/img/404.svg"
            width="300px"
            alt="404"
          />
          <br />
          <br />
          <br />
          <Link className="btn btn-primary" to="/">
            GO BACK HOME
          </Link>
        </div>
        <div className="objects">
          <img
            className="object_rocket img-svg"
            src="http://salehriaz.com/404Page/img/rocket.svg"
            width="40px"
            alt="rocket"
          />
          <div className="earth-moon img-svg">
            <img
              className="object_earth img-svg"
              src="http://salehriaz.com/404Page/img/earth.svg"
              width="100px"
              alt="earth"
            />
            <img
              className="object_moon img-svg"
              src="http://salehriaz.com/404Page/img/moon.svg"
              width="80px"
              alt="moon"
            />
          </div>
          <div className="box_astronaut">
            <img
              className="object_astronaut img-svg"
              src="http://salehriaz.com/404Page/img/astronaut.svg"
              width="140px"
              alt="astronaut"
            />
          </div>
        </div>
        <div className="glowing_stars">
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
        </div>
      </div>
    </div>
  </>
);

export default NotFound;
