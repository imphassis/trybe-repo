import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import profilePicture from '../images/profile.jpg';

export default class About extends Component {
  render() {
    return (
      <div>
        <div class="container col-xxl-8 px-4 py-5">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
              <img
                src={profilePicture}
                class="d-block mx-lg-auto img-fluid"
                alt="PH at Domingos Martins"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div class="col-lg-6">
              <h1 class="display-5 fw-bold lh-1 mb-3">About me</h1>
              <p class="lead">
                <h3>PH Assis</h3>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, quo sapiente
                eligendi temporibus accusamus assumenda fuga aut minima molestiae enim odio, quas
                similique sequi sint, adipisci libero illum voluptates dignissimos. Optio ut veniam
                laboriosam et accusamus iure error doloribus officiis, adipisci excepturi obcaecati
                accusantium corporis quia itaque ea quaerat molestiae aliquam, voluptatem, nesciunt
                eaque doloremque hic suscipit reprehenderit impedit. Odio. Maxime doloremque
                sapiente, ipsum expedita distinctio natus minima quasi quibusdam dicta accusantium!
                Nisi, dignissimos? Debitis minus, itaque similique et in rem quia nisi expedita. Rem
                non sequi accusantium itaque possimus!
              </p>

              <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <Button
                  href="https://github.com/imphassis/"
                  type="button"
                  variant="secondary"
                  size="lg"
                  class="btn btn-primary btn-lg px-4 me-md-2"
                >
                  Dev GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
