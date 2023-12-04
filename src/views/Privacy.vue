<template>
  <div class="col-md-12">
    <div class="container">
      <header>
        <h1>Privacy Policy</h1>
      </header>

      <section id="information">
        <p>Your privacy is important to us. It is Online Bookstore's policy to respect your privacy regarding any information we may collect from you across our website.</p>
      </section>

      <section id="information-collected">
        <h2>Information We Collect</h2>
        <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
        <p>Types of information we may collect include:</p>
        <ul>
          <li>Contact information, such as your name and email address.</li>
          <li>Demographic information, such as your location and preferences.</li>
          <li>Information about your interactions with our website, such as pages visited and books viewed.</li>
        </ul>
      </section>

      <section id="use-of-information">
        <h2>How We Use Your Information</h2>
        <p>We use the information we collect in various ways, including to:</p>
        <ul>
          <li>Personalize and improve your experience on our website.</li>
          <li>Send you newsletters, updates, and promotional materials.</li>
          <li>Analyze and monitor usage patterns to enhance our services.</li>
        </ul>
      </section>

      <section id="security">
        <h2>Security</h2>
        <p>We value your trust in providing us your personal information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage, is 100% secure and reliable, and we cannot guarantee its absolute security.</p>
      </section>

      <section id="third-parties">
        <h2>Third-Party Services</h2>
        <p>We may employ third-party companies and individuals due to the following reasons:</p>
        <ul>
          <li>To facilitate our service.</li>
          <li>To provide the service on our behalf.</li>
          <li>To perform service-related services.</li>
        </ul>
        <p>These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
      </section>

      <section id="changes">
        <h2>Changes to This Privacy Policy</h2>
        <p>We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.</p>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <a href="mailto:privacy@onlinebookstore.com">privacy@onlinebookstore.com</a>.</p>
      </section>

    </div>
  </div>
</template>

<script>


export default {
  name: 'Privacy',
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