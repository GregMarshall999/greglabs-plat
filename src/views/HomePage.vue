<template>
  <div class="home-page">
    <section class="hero">
      <div class="hero-content">
        <h1>Welcome to the Greg-labs</h1>
        <p class="subtitle">
          A compilation of various IT mini projects
        </p>
        <p class="description">
          Hi! I'm Greg, I'm a software engineer and I build modern web apps offering a good user experience and clean code <br>
          Welcome to my Lab <br>
          Make yourself comfortable and feel free to explore!
        </p>
        <div class="cta-buttons">
          <a href="https://simubank.greg-labs.com" class="btn primary">My Current project</a>
          <RouterLink
            :to="{ name: 'contact' }"
            class="btn secondary"
          >
            Contact Me
          </RouterLink>
        </div>
      </div>
    </section>

    <section>
      <div class="about-greglabs">
        <h2>What is Greg-labs?</h2>
        <div class="about-content">
          <div class="about-text">
            <p>
              Greglabs is my personal development playground where I experiment with new technologies, 
              build innovative solutions, and showcase passion for software engineering. 
              It's a collection of mini-projects that demonstrate skills across different 
              technologies and frameworks.
            </p>
            <div>
              <p>Each project here represents a journey:</p> 
              <ul>
                <li>
                  From a need or a problem to solve
                </li>
                <li>
                  The exploration of new technologies for the solution
                </li>
                <li>
                  To the final result, a working solution with the mindset of less is more
                </li>
              </ul>
              <p>Full-stack web applications, mobile apps and automation tools, all have a story to tell. Will you be part of it?</p>
            </div>
            <p>
              Whether you're a fellow developer, a head hunter 😎, or just curious about my work 
              This labs is yours to explore ! 
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      id="skills"
      class="skills"
    >
      <h2>My Skills</h2>
      <div class="skills-grid">
        <div class="skill-card">
          <i class="fas fa-code" />
          <h3>Frontend Development</h3>
          <p>Vue.js, React, HTML5, CSS3, SASS, JavaScript, TypeScript</p>
        </div>
        <div class="skill-card">
          <i class="fas fa-server" />
          <h3>Backend Development</h3>
          <p>Java Spring, Python Django, C# .Net, Database Design</p>
        </div>
        <div class="skill-card">
          <i class="fas fa-mobile-alt" />
          <h3>Mobile Development</h3>
          <p>Vue Volar, React Native, Android Studio, Progressive Web Apps</p>
        </div>
        <div class="skill-card">
          <i class="fas fa-tools" />
          <h3>Tools & Technologies</h3>
          <p>Git, Docker, CI/CD, Trello, Figma, N8N</p>
        </div>
      </div>
    </section>

    <section
      id="projects"
      class="projects"
    >
      <h2>Featured Projects</h2>
      <div class="projects-grid">
        <div class="project-card">
          <div class="project-image">
            <img src="../assets/icons/simubank.ico" alt="Simum Bank" class="simubank-icon" />
          </div>
          <div class="project-content">
            <h3>Simu Bank</h3>
            <p>A web App for banking simulation.</p>
            <div class="project-tags">
              <span>Vue.js</span>
              <span>Java Spring</span>
              <span>PostgreSQL</span>
              <span>Docker</span>
            </div>
            <a
              href="https://simubank.greg-labs.com"
              class="btn"
            >View Project</a>
          </div>
        </div>
        <div class="project-card">
          <div class="project-image">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 164.67 125.35"
              width="100px"
              height="100px"
            >
              <g
                id="Calque_2"
                data-name="Calque 2"
              >
                <g
                  id="I_page_6"
                  data-name="I page 6"
                >
                  <path
                    class="cls-1"
                    d="M67.07,117.51A58.75,58.75,0,0,1,25.52,17.21,58.76,58.76,0,0,1,125.54,53H144.8V64.53H114.26V58.75A47.2,47.2,0,1,0,67.07,106Z"
                  />
                  <rect
                    class="cls-1"
                    x="17.27"
                    y="94.42"
                    width="10.01"
                    height="17.3"
                    transform="translate(-66.35 45.94) rotate(-45)"
                  />
                  <rect
                    class="cls-1"
                    x="4.65"
                    y="107.04"
                    width="10.01"
                    height="17.3"
                    transform="translate(-78.98 40.71) rotate(-45)"
                  />
                  <path
                    class="cls-2"
                    d="M82,79.19a27,27,0,0,0,3.51-3,25.44,25.44,0,0,0,3.14-3.8L98.2,75l4.37-16.75L93,55.7a26.18,26.18,0,0,0-2.51-9.14l7-7.05L85.11,27.35l-7,7.06A25.93,25.93,0,0,0,69,32l-2.64-9.57L49.66,27.05l2.63,9.56a26.26,26.26,0,0,0-3.51,3,25.55,25.55,0,0,0-3.14,3.8L36,40.85,31.68,57.6l9.6,2.5a25.84,25.84,0,0,0,2.5,9.13l-7,7.06L49.14,88.44l7-7a25.93,25.93,0,0,0,9.17,2.38l2.63,9.57,16.68-4.59ZM67.38,69.73l-.88-3.2a8.65,8.65,0,0,1-3.06-.79l-2.32,2.35L57,64l2.32-2.36a8.62,8.62,0,0,1-.84-3l-3.2-.83,1.46-5.59,3.2.84a7.87,7.87,0,0,1,1-1.27,9,9,0,0,1,1.17-1l-.88-3.19,5.57-1.53.88,3.19a8.67,8.67,0,0,1,3.06.8l2.32-2.36,4.11,4.06-2.32,2.36a8.63,8.63,0,0,1,.84,3L79,58l-1.46,5.59-3.2-.84A8.33,8.33,0,0,1,73.24,64a8.22,8.22,0,0,1-1.17,1L73,68.19Z"
                  />
                  <polygon
                    class="cls-1"
                    points="144.46 70.43 144.46 47.08 164.68 58.75 144.46 70.43"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div class="project-content">
            <h3>En Recherche Active</h3>
            <p>A French web App for job seekers in training.</p>
            <div class="project-tags">
              <span>Vue.js</span>
              <span>Java Spring</span>
              <span>MySQL</span>
            </div>
            <a
              href="https://en-recherche-active.com"
              class="btn"
            >View Project</a>
          </div>
        </div>
        <div class="project-card">
          <div class="project-image">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 100 100"
              width="100px"
              height="100px"
              xml:space="preserve"
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M20.9512 26.7803L40.691 60.3675L60.4309 26.7803L52.535 26.7803L40.691 46.9326L28.7484 26.7803L20.9512 26.7803Z"
                fill="#3DD491"
              />
            </svg>
          </div>
          <div class="project-content">
            <h3>GregLabs Med-Level</h3>
            <p>Vue.js Certification Mid-Level Training projects</p>
            <div class="project-tags">
              <span>Vue.js</span>
            </div>
            <RouterLink
              :to="{ name: 'med-level-movies' }"
              class="btn"
            >
              View Project
            </RouterLink>
          </div>
        </div>
        <div class="project-card">
          <div class="project-image">
            <img src="../assets/relays/relays.jpg" alt="IoT Relay Control System" />
          </div>
          <div class="project-content">
            <h3>IoT Relay Control System</h3>
            <p>Remote control of house appliances through a secure Android application</p>
            <div class="project-tags">
              <span>Android</span>
              <span>Java Spring</span>
              <span>Arduino</span>
              <span>IoT</span>
            </div>
            <RouterLink
              :to="{ name: 'relays' }"
              class="btn"
            >
              View Project
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.simubank-icon {
  margin-left: 10px;
  margin-top: 10px;
	width: 50px !important;
	height: 50px !important;
}

.home-page {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 20px;
}

/* Hero Section */
.hero {
	min-height: 60vh;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	padding: 60px 0;
}

.hero-content h1 {
	font-size: 3.5rem;
	margin-bottom: 1rem;
	color: #2c3e50;
}

.subtitle {
	font-size: 1.5rem;
	color: #42b983;
	margin-bottom: 1rem;
}

.description {
	font-size: 1.2rem;
	color: #666;
	max-width: 600px;
	margin: 0 auto 2rem;
}

.cta-buttons {
	display: flex;
	justify-content: center;
	gap: 20px;
}

/* Buttons */
.btn {
	display: inline-block;
	padding: 10px 20px;
	background: transparent;
	border: 2px solid #42b983;
	color: #42b983;
	text-decoration: none;
	border-radius: 25px;
	font-weight: 500;
	transition: all 0.3s ease;
	margin-top: 15px;
}

.btn:hover {
	background: #42b983;
	color: #1a2438;
	transform: translateY(-2px);
	box-shadow: 0 4px 12px rgba(66, 185, 131, 0.2);
}

.btn:active {
	transform: translateY(0);
	box-shadow: 0 2px 6px rgba(66, 185, 131, 0.2);
}

.btn.primary {
	background-color: #42b983;
	color: white;

	&:hover {
		color: #1a2438;
		transform: translateY(-2px);
	}
}

.btn.secondary {
	background-color: transparent;
	border: 2px solid #42b983;
	color: #42b983;

	&:hover {
		background: #42b983;
		color: #1a2438;
		transform: translateY(-2px);
	}
}

/* About Section */
.about-greglabs {
	padding: 80px 0;
	background-color: #1a2438;
}

.about-greglabs h2 {
	text-align: center;
	margin-bottom: 40px;
	color: #71808f;
	font-size: 2.5rem;
}

.about-content {
	max-width: 800px;
	margin: 0 auto;
	padding: 0 20px;
}

.about-text p {
	font-size: 1.1rem;
	line-height: 1.8;
	color: #ffffff;
	margin-bottom: 20px;
}

.about-text div {
	margin: 30px 0;
}

.about-text div p {
	font-weight: 600;
	color: #71808f;
	margin-bottom: 15px;
}

.about-text ul {
	margin: 20px 0;
	padding-left: 20px;
}

.about-text li {
	font-size: 1.1rem;
	line-height: 1.8;
	color: #ffffff;
	margin-bottom: 10px;
	list-style-type: none;
	position: relative;
	padding-left: 25px;
}

.about-text li::before {
	content: "→";
	color: #42b983;
	font-weight: bold;
	position: absolute;
	left: 0;
	top: 0;
}

/* Skills Section */
.skills {
	padding: 80px 20px;
	background-color: #1a2438;
}

.skills h2 {
	text-align: center;
	margin-bottom: 40px;
	color: #71808f;
}

.skills-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 30px;
}

.skill-card {
	background: #2c3c56;
	padding: 30px;
	border-radius: 10px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	text-align: center;
	transition: transform 0.3s ease;
}

.skill-card:hover {
  	transform: translateY(-5px);
}

.skill-card i {
	font-size: 2.5rem;
	color: #42b983;
	margin-bottom: 20px;
}

/* Projects Section */
.projects {
 	padding: 80px 0;
}

.projects h2 {
	text-align: center;
	margin-bottom: 40px;
	color: #71808f;
}

.projects-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 30px;
}

.project-card {
	background: #1a2438;
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.project-image img {
	width: 100%;
	height: 200px;
	object-fit: cover;
}

.project-content {
  	padding: 20px;
}

.project-tags {
  	margin: 15px 0;
}

.project-tags span {
	background: #2c3c56;
	padding: 5px 10px;
	border-radius: 15px;
	font-size: 0.8rem;
	margin-right: 5px;
}

/* Responsive Design */
@media (max-width: 768px) {
	.hero-content h1 {
		font-size: 2.5rem;
	}
	
	.subtitle {
		font-size: 1.2rem;
	}
	
	.description {
		font-size: 1rem;
	}
	
	.cta-buttons {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}
	
	.btn {
		margin: 0;
	}

	.about-greglabs h2 {
		font-size: 2rem;
	}

	.about-text p {
		font-size: 1rem;
	}

	.about-text li {
		font-size: 1rem;
	}
}
</style>