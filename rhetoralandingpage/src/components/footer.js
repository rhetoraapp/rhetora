import React from 'react';
import $ from 'jquery';

const footer = () => {

    return (
      <div>
      <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="/" class="nav-link px-3 text-muted">Home</a></li>
      <li class="nav-item"><a href="/ourstory" class="nav-link px-3 text-muted">Our Story</a></li>
      <li class="nav-item"><a href="/community" class="nav-link px-3 text-muted">Community</a></li>
      <li class="nav-item"><a href="/contactus" class="nav-link px-3 text-muted">Contact us</a></li>
      <li class="nav-item"><a href="/join" class="nav-link px-3 text-muted">Join Waitlist</a></li>
    </ul>
    <p class="text-center text-muted">© 2022 rhetora</p>
  </footer>
      </div>
    );
  };
  
  export default footer;