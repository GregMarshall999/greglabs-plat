<template>
  	<div class="home-page">

		<section class="hero">
			<div class="hero-content">
				<h1>Welcome to the Greglabs</h1>
				<p class="subtitle">Full Stack Developer & Software Engineer</p>
				<p class="description">
					Hi! I'm Greg, I'm a software engineer and I build modern web apps offering a good user experience and clean code. This is my Lab. Welcome! Make yourself comfortable and explore!
				</p>
				<div class="cta-buttons">
					<a href="#projects" class="btn primary">My Current work</a>
					<a href="#contact" class="btn secondary">Contact Me</a>
				</div>
			</div>
		</section>

		<section id="skills" class="skills">
			<h2>My Skills</h2>
			<div class="skills-grid">
				<div class="skill-card">
					<i class="fas fa-code"></i>
					<h3>Frontend Development</h3>
					<p>Vue.js, React, HTML5, CSS3, JavaScript</p>
				</div>
				<div class="skill-card">
				<i class="fas fa-server"></i>
				<h3>Backend Development</h3>
				<p>Node.js, Python, REST APIs, Database Design</p>
				</div>
				<div class="skill-card">
				<i class="fas fa-mobile-alt"></i>
				<h3>Mobile Development</h3>
				<p>React Native, Progressive Web Apps</p>
				</div>
				<div class="skill-card">
				<i class="fas fa-tools"></i>
				<h3>Tools & Technologies</h3>
				<p>Git, Docker, AWS, CI/CD</p>
				</div>
			</div>
		</section>

    <!-- Projects Section -->
    <section id="projects" class="projects">
      <h2>Featured Projects</h2>
      <div class="projects-grid">
        <div class="project-card">
          <div class="project-image">
            <img src="" alt="Project 1">
          </div>
          <div class="project-content">
            <h3>Project Name</h3>
            <p>Description of the project and technologies used.</p>
            <div class="project-tags">
              <span>Vue.js</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>
            <a href="#" class="btn">View Project</a>
          </div>
        </div>
        <!-- Add more project cards as needed -->
      </div>
    </section>
  	</div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Section */
.hero {
  min-height: 80vh;
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

/* Buttons */
.btn {
  display: inline-block;
  padding: 12px 30px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  margin: 0 10px;
  transition: all 0.3s ease;
}

.btn.primary {
  background-color: #42b983;
  color: white;
}

.btn.secondary {
  background-color: transparent;
  border: 2px solid #42b983;
  color: #42b983;
}

/* Skills Section */
.skills {
  padding: 80px 0;
  background-color: #f8f9fa;
}

.skills h2 {
  text-align: center;
  margin-bottom: 40px;
  color: #2c3e50;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.skill-card {
  background: white;
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
  color: #2c3e50;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.project-card {
  background: white;
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
  background: #f0f0f0;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.8rem;
  margin-right: 5px;
}

/* Contact Section */
.contact {
  padding: 80px 0;
  background-color: #f8f9fa;
}

.contact h2 {
  text-align: center;
  margin-bottom: 40px;
  color: #2c3e50;
}

.contact-content {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.contact-item {
  margin: 20px 0;
}

.contact-item i {
  color: #42b983;
  margin-right: 10px;
}

.social-links {
  margin-top: 30px;
}

.social-link {
  font-size: 1.5rem;
  color: #2c3e50;
  margin: 0 10px;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #42b983;
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
}
</style>