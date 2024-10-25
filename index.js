const express = require('express');
const path = require('path');
const app = express();

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Route for Home (index.html)
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Travel Explorer</title>
        <link rel="stylesheet" href="css/styles.css">
    </head>
    <body>
        <header>
            <h1>Travel Explorer</h1>
            <nav>
                <a href="/">Home</a>
                <a href="/destinations">Destinations</a>
                <a href="/book">Book Now</a>
            </nav>
        </header>

        <!-- Hero Section -->
        <section class="hero">
            <img src="images/hero.jpg" alt="Beautiful travel destination" class="hero-image">
            <div class="overlay">
                <h2>Your Adventure Awaits</h2>
                <p>Discover breathtaking places, book your dream trip, and create unforgettable memories.</p>
                <a href="/destinations" class="button">Explore Destinations</a>
            </div>
        </section>

        <!-- Popular Destinations Section -->
        <main>
            <section class="popular-destinations">
                <h2>Popular Destinations</h2>
                <div class="destination-grid">
                    <article>
                        <img src="images/paris.jpg" alt="Paris, France">
                        <h3>Paris, France</h3>
                        <p>Experience romance and culture in the City of Lights.</p>
                    </article>
                    <article>
                        <img src="images/kyoto.jpg" alt="Kyoto, Japan">
                        <h3>Kyoto, Japan</h3>
                        <p>Explore serene temples and gardens in historic Kyoto.</p>
                    </article>
                    <article>
                        <img src="images/newyork.jpg" alt="New York, USA">
                        <h3>New York, USA</h3>
                        <p>Feel the energy of the city that never sleeps.</p>
                    </article>
                </div>
            </section>
        </main>

        <footer>
            <p>&copy; 2024 Travel Explorer. All rights reserved.</p>
        </footer>
    </body>
    </html>
    `);
});

// Route for Destinations page
app.get('/destinations', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'destinations.html'));
});

// Route for Book page
app.get('/book', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'book.html'));
});

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
