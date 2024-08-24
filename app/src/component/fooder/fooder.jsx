import React from "react";
import "./fooder.css"
// import fooder_log from "../assets/logo_big.png"
// import insta_icon from "../assets/instagram_icon.png";
// import whatapp_icon from "../assets/whatsapp_icon.png";
// import linked_in from "../assets/Linkedin-logo.png";



function Fooder(){

    return(
            <div>
            <footer class="footer">
              <div class="waves">
                <div class="wave" id="wave1"></div>
                <div class="wave" id="wave2"></div>
                <div class="wave" id="wave3"></div>
                <div class="wave" id="wave4"></div>
              </div>
              <ul class="social-icon">
                <li class="social-icon__item"><a class="social-icon__link" href="#">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a></li>
                <li class="social-icon__item"><a class="social-icon__link" href="#">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a></li>
                <li class="social-icon__item"><a class="social-icon__link" href="#">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a></li>
                <li class="social-icon__item"><a class="social-icon__link" href="#">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a></li>
              </ul>
              <ul class="menu">
                <li class="menu__item"><a class="menu__link" href="#">Home</a></li>
                {/* <li class="menu__item"><a class="menu__link" href="#">About</a></li> */}
                <li class="menu__item"><a class="menu__link" href="#">Services</a></li>
                <li class="menu__item"><a class="menu__link" href="#">Team</a></li>
                <li class="menu__item"><a class="menu__link" href="#">Contact</a></li>
          
              </ul>
              <p>&copy;2024 | All Rights Reserved</p>
            </footer>
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
          </div>
    )
}


export default Fooder;