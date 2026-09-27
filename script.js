<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Gamers Lounge Game Center</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>

    <!-- NAVIGATION -->
    <header class="navbar">

        <div class="nav-container">

            <a href="#home" class="brand">
                <img src="logo.png" alt="Gamers Lounge Game Center">
            </a>

            <button class="menu-toggle" id="menuToggle">
                ☰
            </button>

            <nav id="navMenu">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#stations">Gaming</a>
                <a href="#tournaments">Tournaments</a>
                <a href="#gallery">Gallery</a>
                <a href="#contact">Contact</a>
            </nav>

        </div>

    </header>


    <!-- HERO -->
    <section class="hero" id="home">

        <div class="hero-content">

            <p class="small-title">WELCOME TO</p>

            <h1>
                GAMERS <span>LOUNGE</span>
            </h1>

            <h2>GAME CENTER</h2>

            <p class="hero-text">
                Your ultimate destination for gaming, competition,
                entertainment and unforgettable gaming experiences.
            </p>

            <div class="hero-buttons">
                <a href="#stations" class="btn primary">
                    EXPLORE GAMING
                </a>

                <a href="#contact" class="btn secondary">
                    CONTACT US
                </a>
            </div>

        </div>

        <div class="hero-glow"></div>

    </section>


    <!-- ABOUT -->
    <section class="section" id="about">

        <div class="section-title">
            <p>WHO WE ARE</p>
            <h2>ABOUT <span>GAMERS LOUNGE</span></h2>
        </div>

        <div class="about-grid">

            <div class="about-text">

                <h3>LEVEL UP YOUR GAMING EXPERIENCE</h3>

                <p>
                    Gamers Lounge Game Center is a place built for gamers.
                    Whether you're playing competitively, hanging out with
                    friends, or simply looking for a great gaming experience,
                    our game center is designed to bring gamers together.
                </p>

                <p>
                    Enjoy modern gaming setups, a competitive atmosphere,
                    and a community where every gamer has a place.
                </p>

            </div>

            <div class="about-card">

                <div class="card-icon">🎮</div>

                <h3>GAMING COMMUNITY</h3>

                <p>
                    Play. Compete. Connect.
                </p>

            </div>

        </div>

    </section>


    <!-- GAMING STATIONS -->
    <section class="section dark-section" id="stations">

        <div class="section-title">

            <p>WHAT WE OFFER</p>

            <h2>GAMING <span>EXPERIENCE</span></h2>

        </div>

        <div class="cards">

            <div class="game-card">

                <div class="game-icon">🖥️</div>

                <h3>PC GAMING</h3>

                <p>
                    Experience your favorite games with
                    high-performance gaming PCs.
                </p>

            </div>


            <div class="game-card">

                <div class="game-icon">🎮</div>

                <h3>CONSOLE GAMING</h3>

                <p>
                    Challenge your friends and enjoy
                    console gaming sessions.
                </p>

            </div>


            <div class="game-card">

                <div class="game-icon">🏆</div>

                <h3>COMPETITIVE GAMING</h3>

                <p>
                    Join competitions and test your skills
                    against other gamers.
                </p>

            </div>

        </div>

    </section>


    <!-- TOURNAMENT -->
    <section class="tournament" id="tournaments">

        <div class="tournament-content">

            <p class="small-title">READY PLAYER ONE?</p>

            <h2>
                JOIN THE <span>COMPETITION</span>
            </h2>

            <p>
                Watch this space for upcoming gaming tournaments,
                events and special competitions.
            </p>

            <a href="#contact" class="btn primary">
                JOIN US
            </a>

        </div>

    </section>


    <!-- GALLERY -->
    <section class="section" id="gallery">

        <div class="section-title">

            <p>INSIDE THE CENTER</p>

            <h2>GAMING <span>GALLERY</span></h2>

        </div>

        <div class="gallery">

            <div class="gallery-box">
                <span>GAMING</span>
            </div>

            <div class="gallery-box">
                <span>COMPETE</span>
            </div>

            <div class="gallery-box">
                <span>CONNECT</span>
            </div>

            <div class="gallery-box">
                <span>PLAY</span>
            </div>

        </div>

    </section>


    <!-- CONTACT -->
    <section class="section contact-section" id="contact">

        <div class="section-title">

            <p>GET IN TOUCH</p>

            <h2>CONTACT <span>US</span></h2>

        </div>


        <div class="contact-grid">

            <div class="contact-info">

                <div class="contact-item">
                    <div>📍</div>
                    <div>
                        <h3>LOCATION</h3>
                        <p>Your Game Center Address</p>
                    </div>
                </div>


                <div class="contact-item">
                    <div>📞</div>
                    <div>
                        <h3>PHONE</h3>
                        <p>Your Contact Number</p>
                    </div>
                </div>


                <div class="contact-item">
                    <div>✉️</div>
                    <div>
                        <h3>EMAIL</h3>
                        <p>your@email.com</p>
                    </div>
                </div>

            </div>


            <form class="contact-form" id="contactForm">

                <input
                    type="text"
                    placeholder="Your Name"
                    required
                >

                <input
                    type="email"
                    placeholder="Your Email"
                    required
                >

                <textarea
                    placeholder="Your Message"
                    rows="6"
                    required
                ></textarea>

                <button type="submit" class="btn primary">
                    SEND MESSAGE
                </button>

            </form>

        </div>

    </section>


    <!-- FOOTER -->
    <footer>

        <img src="logo.png" alt="Gamers Lounge">

        <p>
            © 2026 Gamers Lounge Game Center.
            All Rights Reserved.
        </p>

    </footer>


    <script src="script.js"></script>

</body>
</html>