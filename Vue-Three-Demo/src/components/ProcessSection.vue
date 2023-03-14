<template>
  <article>
    <div id="gallery-transition-layer"></div>
    <section id="first-section">
      <div>
        <h1>Our Design Process</h1>
        <p class="left-text-allign">
          At our business, we believe that shoes are more than just a pair of
          functional items to wear. That's why we take each customer's unique
          idea and turn it into a beautiful and wholly unique shoe design.
        </p>
      </div>
    </section>

    <section id="second-section">
      <div>
        <h2 id="communication-header">
          Share Your<br />
          Vision
        </h2>
        <p class="left-text-allign">
          Simply provide us with your unique prompt and any details you want us
          to include in the design. We'll then suggest the perfect shoe or work
          with you to find the ideal canvas for your creation.
        </p>
      </div>
    </section>
    <figure id="first-figure">
      <img src="../assets/email-card.jpg" alt />
    </figure>

    <figure id="second-figure">
      <img src="../assets/shoes_card.jpg" alt />
    </figure>
    <section id="third-section">
      <div>
        <h2>Sketch & Approval</h2>
        <p>
          We create a basic sketch of your design and send it your way. Now you
          only have to give us the green light to start painting.
        </p>
      </div>
    </section>

    <section id="forth-section">
      <div>
        <h2>From sketch to reality</h2>
        <p class="left-text-allign">
          Our artists get to work, painting every detail onto your shoe. It's a
          mini masterpiece on your feet! We ship straight to your doorstep. Get
          ready to turn heads with your one-of-a-kind creation.
        </p>
      </div>
    </section>
    <figure id="third-figure">
      <img src="../assets/alien_shoe_showcase.jpg" alt />
    </figure>
  </article>
</template>

<script></script>

<style scoped>
*,
*:before,
*:after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  border: 0 none;
  position: relative;
}
article {
  background: #dabed3;
  background: -moz-linear-gradient(
    -45deg,
    #dabed3 1%,
    #a9b1e0 33%,
    #a9b1e0 53%,
    #898acb 100%
  );
  background: -webkit-linear-gradient(
    -45deg,
    #dabed3 1%,
    #a9b1e0 33%,
    #a9b1e0 53%,
    #898acb 100%
  );
  background: linear-gradient(
    135deg,
    #dabed3 1%,
    #a9b1e0 33%,
    #a9b1e0 53%,
    #898acb 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#dabed3', endColorstr='#898acb',GradientType=1 );
}
#gallery-transition-layer {
  height: 120px;
  width: 100%;
  border-bottom-right-radius: 3.5rem;
  background-color: var(--primary);
}
#gallery-transition-layer::after {
  content: "";
  width: 100px;
  height: 100px;
  float: right;
  margin-right: calc(100% - (50%) - 100px);
  margin-top: 120px;
  background-color: white;
  border-bottom-right-radius: 10rem;
}

@media screen and (min-width: 700px) {
  article {
    display: flex;
    flex-wrap: wrap;
  }
  section {
    background: var(--primary);
    color: var(--secondary);
    width: calc(50% + 1px);
    height: 100vh;
    margin: 0 0 10vh auto;
    position: sticky;
    top: 0;
    padding: 5vmin;
    box-shadow: -4px -4px 8px rgba(0, 0, 0, 0.4);
  }
  #first-section {
    box-shadow: none;
  }
  #first-section h1 {
    margin-top: 30px;
  }
  #second-section {
    z-index: 2;
  }
  #third-section {
    z-index: 4;
  }
  #forth-section {
    box-shadow: 0 -19px 19px 2px rgba(0, 0, 0, 0.1);
    z-index: 6;
  }
  #first-figure {
    z-index: 1;
  }
  #second-figure {
    z-index: 3;
  }
  #third-figure {
    z-index: 5;
  }
  figure {
    background: #eee;
    width: calc(50% + 1px);
    height: 100vh;
    margin: 0 auto 10vh 0;
    position: sticky;
    top: 0;
    overflow: hidden;
    box-shadow: 4px -4px 8px rgba(0, 0, 0, 0.4);
  }
  figure:nth-of-type(1),
  section:nth-of-type(1) {
    margin: 0 0 10vh 0;
    width: 50%;
  }
  figure:nth-of-type(1n) {
    margin: 0 0 10vh auto;
    box-shadow: -4px -4px 8px rgba(0, 0, 0, 0.4);
  }
  figure:nth-of-type(2n) {
    margin: 0 auto 10vh 0;
    box-shadow: -4px -4px 8px rgba(0, 0, 0, 0.4);
  }
  section:nth-of-type(2n) {
    margin: 0 auto 10vh 0;
    box-shadow: 4px -4px 8px rgba(0, 0, 0, 0.4);
  }
  figure:last-of-type,
  section:last-of-type {
    margin-bottom: 0;
  }
  section::before {
    background: inherit;
    z-index: 100;
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 7vmin;
    height: 7vmin;
    transform: translate(calc(-50% + 1px), -50%) rotate(-45deg);
    clip-path: polygon(-15% -15%, 110% 0%, 0% 110%);
    box-shadow: -4px -2px 8px rgba(0, 0, 0, 0.4);
    border-radius: 1.5vmin 0 0 0;
  }
  section:nth-of-type(2n)::before {
    left: auto;
    right: 0;
    transform: translate(calc(50% - 1px), -50%) rotate(-45deg) scale(-1);
  }
  figure img {
    z-index: 1;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    object-position: center;
  }
  section > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 1rem;
  }
  h1,
  h2 {
    margin: 15% 0 auto;
    font-size: calc(5vmin + 3vmax);
    text-align: center;
    font-weight: 700;
    line-height: 1;
    word-spacing: 0.5rem;
  }
  p {
    text-align: right;
    width: 100%;
    font-weight: 400;
    font-style: italic;
    font-size: calc(1.5vmin + 1.75vmax);
    margin-bottom: 5%;
  }
  .left-text-allign {
    text-align: left;
  }
}
</style>
