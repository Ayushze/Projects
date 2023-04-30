import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div class="row1">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Guruji
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    Call with Astrologer
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link active" href="#">
                    Live(coming soon)
                  </a>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <h1 class="he1">Astrology for Clarity</h1>
      <hr />
      <div class="row2">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="img-fluid myimg"
                src="https://th.bing.com/th/id/OIP.yEvxQVpDd_iwUvlXEINNaQHaDt?pid=ImgDet&rs=1"
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="img-fluid myimg"
                src="https://th.bing.com/th/id/R.2aa81deea88f4dc24b6827a83497cfef?rik=6xz69CyG%2b8qUKg&riu=http%3a%2f%2fil5.picdn.net%2fshutterstock%2fvideos%2f3161551%2fthumb%2f1.jpg&ehk=3DU1ULFCFMxXE0TBxnXtU4U6NV1U2wTqpSsdG3jiPgQ%3d&risl=&pid=ImgRaw&r=0"
                alt="Second slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="img-fluid myimg"
                src="https://th.bing.com/th/id/OIP.S7vnOLe0eWGPm8pnD4l--QHaE8?pid=ImgDet&rs=1"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <hr />
      <div class="row3">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="img-fluid myimg"
                src="https://thumbs.dreamstime.com/b/anonymous-computer-programmer-hacker-working-typing-laptop-cyber-crime-concept-anonymous-computer-programmer-hacker-213606504.jpg"
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="img-fluid myimg"
                src="https://thumbs.dreamstime.com/b/anonymous-computer-programmer-hacker-working-typing-laptop-cyber-crime-concept-anonymous-computer-programmer-hacker-213606504.jpg"
                alt="Second slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="img-fluid myimg"
                src="https://thumbs.dreamstime.com/b/anonymous-computer-programmer-hacker-working-typing-laptop-cyber-crime-concept-anonymous-computer-programmer-hacker-213606504.jpg"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <hr />
      <div class="row-4">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="..." alt="Card image cap" />
          <div class="card-body">
            <p class="card-text">Name: XYZ contact: 123456789</p>
          </div>
        </div>
      </div>
      <div class="row4">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="img-fluid myimg"
                src="https://www.bing.com/images/blob?bcid=r10ndVLYvokFNA"
                alt="First slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <hr />
      <div class="row5">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="img-fluid myimg"
                src="https://th.bing.com/th/id/OIP.FrGD4XgdIArzuUNffYoJdQHaEZ?pid=ImgDet&rs=1"
                alt="First slide"
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="row6">
        <footer class="text-center text-lg-start bg-white text-muted">
          <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div class="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              <a href="" class="me-4 link-secondary">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="" class="me-4 link-secondary">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="" class="me-4 link-secondary">
                <i class="fab fa-google"></i>
              </a>
              <a href="" class="me-4 link-secondary">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="" class="me-4 link-secondary">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="" class="me-4 link-secondary">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </section>

          <section class="">
            <div class="container text-center text-md-start mt-5">
              <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold mb-4">
                    <i class="fas fa-gem me-3 text-secondary"></i>Company name
                  </h6>
                  <p>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>

                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold mb-4">Products</h6>
                  <p>
                    <a href="#!" class="text-reset">
                      Angular
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">
                      React
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">
                      Vue
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">
                      Laravel
                    </a>
                  </p>
                </div>

                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                  <p>
                    <a href="#!" class="text-reset">
                      Pricing
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">
                      Settings
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">
                      Orders
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">
                      Help
                    </a>
                  </p>
                </div>

                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i class="fas fa-home me-3 text-secondary"></i> New York, NY
                    10012, US
                  </p>
                  <p>
                    <i class="fas fa-envelope me-3 text-secondary"></i>
                    info@example.com
                  </p>
                  <p>
                    <i class="fas fa-phone me-3 text-secondary"></i> + 01 234
                    567 88
                  </p>
                  <p>
                    <i class="fas fa-print me-3 text-secondary"></i> + 01 234
                    567 89
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div
            class="text-center p-4"
            style="background-color: rgba(0, 0, 0, 0.025);"
          >
            © 2021 Copyright:
            <a class="text-reset fw-bold" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
