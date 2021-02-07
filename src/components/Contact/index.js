import React from "react";

function Contact () {
  return (
    <div class="container">
      <section id="contact" class="contact-section">
        <h2>Contact Me</h2>
        <hr />
        <div class="row contact-icons">
          <div class="col text-center">
            <a href="https://www.linkedin.com/in/ben-g-b2a74353/"
            ><i class="fab fa-linkedin fa-9x"></i
            ></a>
          </div>
          <div class="col text-center">
            <a href="https://github.com/BenjDG"
            ><i class="fab fa-github-square fa-9x"></i
            ></a>
          </div>
          <div class="col text-center">
            <a href="mailto:bdgalloway85@gmail.com"
            ><i class="fas fa-envelope fa-9x"></i
            ></a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact;