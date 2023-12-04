<template>
  <div class="col-md-12">
    <div class="container">
      <header>
        <h1>About Online Bookstore</h1>
      </header>

      <section id="mission">
        <h2>Our Mission</h2>
        <p>We believe in the transformative power of books. Our mission is to connect readers with their next favorite read, foster a love for literature, and create a vibrant community of book lovers. Whether you're a seasoned reader or just starting your reading journey, we're here to inspire, guide, and celebrate the magic of storytelling.</p>
      </section>

      <section id="explore">
        <h2>Explore, Discover, Delight</h2>
        <p>Navigate through our extensive collection of books spanning various genres, from timeless classics to contemporary bestsellers. Our curated book lists and personalized recommendations make it easy for you to discover hidden gems and explore new worlds within the pages of a book. We're not just a bookstore; we're your companion on a literary adventure.</p>
      </section>

      <section id="features">
        <h2>Features That Set Us Apart</h2>
        <ul>
          <li><strong>Personalized Recommendations:</strong> Our advanced algorithms tailor book suggestions based on your reading history, preferences, and browsing habits.</li>
          <li><strong>Book Lists for Every Mood:</strong> Whether you're in the mood for a heartwarming romance, a gripping thriller, or an enlightening non-fiction piece, our thoughtfully curated book lists have you covered.</li>
          <li><strong>Community Connection:</strong> Join book clubs, participate in discussions, and connect with fellow readers who share your literary interests. Your next bookish friend might be just a click away!</li>
        </ul>
      </section>

      <section id="journey">
        <h2>Your Literary Journey Starts Here</h2>
        <p>Online Bookstore is more than a bookstore; it's a celebration of stories waiting to be explored. Join us on this literary journey, where every page turned is an adventure, and every book is a new friend waiting to be discovered.</p>
        <p>Embark on your reading adventure today. Let the pages turn, and the stories unfold.</p>
      </section>

    </div>
  </div>
</template>

<script>


export default {
  name: 'About',
  data() {
    return {
    };
  },
};
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f8f8;
  color: #333;
}


section {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1, h2 {
  color: #007BFF;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  margin-bottom: 10px;
}

a {
  color: #007BFF;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>