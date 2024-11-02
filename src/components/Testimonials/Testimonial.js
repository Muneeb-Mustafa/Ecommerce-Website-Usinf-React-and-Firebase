import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Testimonial = () => {
  return (
    <MDBContainer className="my-5">
      <MDBCarousel>
        {/* First Slide */}
        <MDBCarouselItem className="active">
          <MDBRow>
            {/* First Testimonial */}
            <MDBCol md="4">
              <div className="testimonial text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(30).webp"
                  alt="avatar"
                  className="rounded-circle mb-4"
                  style={{ width: "100px" }}
                />
                <h5 className="mb-3">Samantha B.</h5>
                <p>Photographer</p>
                <p className="text-muted">
                  <i className="fas fa-quote-left pe-2"></i>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti.
                </p>
                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="far fa-star fa-sm"></i></li>
                </ul>
              </div>
            </MDBCol>

            {/* Second Testimonial */}
            <MDBCol md="4">
              <div className="testimonial text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
                  alt="avatar"
                  className="rounded-circle mb-4"
                  style={{ width: "100px" }}
                />
                <h5 className="mb-3">John D.</h5>
                <p>Web Developer</p>
                <p className="text-muted">
                  <i className="fas fa-quote-left pe-2"></i>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium.
                </p>
                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="far fa-star fa-sm"></i></li>
                  <li><i className="far fa-star fa-sm"></i></li>
                </ul>
              </div>
            </MDBCol>

            {/* Third Testimonial */}
            <MDBCol md="4">
              <div className="testimonial text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                  alt="avatar"
                  className="rounded-circle mb-4"
                  style={{ width: "100px" }}
                />
                <h5 className="mb-3">Lisa C.</h5>
                <p>Graphic Designer</p>
                <p className="text-muted">
                  <i className="fas fa-quote-left pe-2"></i>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos.
                </p>
                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="fas fa-star fa-sm"></i></li>
                </ul>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCarouselItem>

        {/* Second Slide */}
        <MDBCarouselItem>
          <MDBRow>
            {/* Fourth Testimonial */}
            <MDBCol md="4">
              <div className="testimonial text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(33).webp"
                  alt="avatar"
                  className="rounded-circle mb-4"
                  style={{ width: "100px" }}
                />
                <h5 className="mb-3">Mark T.</h5>
                <p>Software Engineer</p>
                <p className="text-muted">
                  <i className="fas fa-quote-left pe-2"></i>
                  Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                  esse quam nihil molestiae consequatur.
                </p>
                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="far fa-star fa-sm"></i></li>
                </ul>
              </div>
            </MDBCol>

            {/* Fifth Testimonial */}
            <MDBCol md="4">
              <div className="testimonial text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                  alt="avatar"
                  className="rounded-circle mb-4"
                  style={{ width: "100px" }}
                />
                <h5 className="mb-3">Alice R.</h5>
                <p>Content Writer</p>
                <p className="text-muted">
                  <i className="fas fa-quote-left pe-2"></i>
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam.
                </p>
                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="far fa-star fa-sm"></i></li>
                  <li><i className="far fa-star fa-sm"></i></li>
                  <li><i className="far fa-star fa-sm"></i></li>
                </ul>
              </div>
            </MDBCol>

            {/* Sixth Testimonial */}
            <MDBCol md="4">
              <div className="testimonial text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
                  alt="avatar"
                  className="rounded-circle mb-4"
                  style={{ width: "100px" }}
                />
                <h5 className="mb-3">James K.</h5>
                <p>Marketing Specialist</p>
                <p className="text-muted">
                  <i className="fas fa-quote-left pe-2"></i>
                  There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form.
                </p>
                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="fas fa-star fa-sm"></i></li>
                  <li><i className="far fa-star fa-sm"></i></li>
                  <li><i className="far fa-star fa-sm"></i></li>
                </ul>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCarouselItem>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default Testimonial;
