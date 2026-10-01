(function () {
  const container = document.getElementById('about-page');
  if (!container) return;

  container.innerHTML = `
    <div class='about-page'>

      <section class='about-hero'>
        <div class='about-hero-inner'>
          <div class='about-hero-copy'>
            <div class='about-eyebrow'>KASU COURSE BOOK</div>
            <h1>Turn your course materials into a digital course book your students can actually find and use.</h1>
            <p class='about-hero-text'>
              KASU Course Book is a proposed digital academic publishing and access platform designed to help lecturers publish structured digital course materials, reach their students directly, keep their content current and participate in the value created from authorized access.
            </p>
            <div class='about-hero-actions'>
              <a href='catalog.html' class='about-primary-action'>Explore the Library</a>
              <a href='courses.html' class='about-secondary-action'>Browse Courses</a>
            </div>
          </div>
        </div>
      </section>

      <section class='about-section about-pitch-section'>
        <div class='about-section-heading'>
          <div class='about-eyebrow'>WHY KASU COURSE BOOK</div>
          <h2>Your teaching should have a digital home.</h2>
          <p>
            Too much academic content ends up scattered across WhatsApp messages, email attachments and individual student copies. KASU Course Book proposes a different model: your course materials become structured digital academic resources that students can discover through the university course catalogue.
          </p>
        </div>

        <div class='about-principle-grid'>
          <article class='about-principle-card'>
            <span class='about-card-label'>PUBLISH</span>
            <h3>Turn lecture materials into digital books</h3>
            <p>
              Your lecture notes, course outlines, study guides and approved supporting materials can be organized into professional digital course books.
            </p>
          </article>

          <article class='about-principle-card'>
            <span class='about-card-label'>REACH</span>
            <h3>Put the material directly in front of your students</h3>
            <p>
              Students can discover materials through their college, faculty, department, course and lecturer instead of searching for scattered copies.
            </p>
          </article>

          <article class='about-principle-card'>
            <span class='about-card-label'>EARN</span>
            <h3>Turn academic content into an ongoing digital asset</h3>
            <p>
              Where the commercial model is approved, lecturers can participate in revenue generated through authorized student access and see the related reporting.
            </p>
          </article>
        </div>
      </section>

      <section class='about-section about-section-soft'>
        <div class='about-section-heading'>
          <div class='about-eyebrow'>FOR LECTURERS</div>
          <h2>Your course. Your name. Your academic content.</h2>
          <p>
            KASU Course Book is designed to let lecturers remain the academic owners and decision-makers around their materials while the platform handles the technical publishing environment.
          </p>
        </div>

        <div class='about-role-grid'>
          <article class='about-role-card about-role-card-featured'>
            <div class='about-role-label'>01 · PUBLISH</div>
            <h3>Professional digital publication</h3>
            <p>
              Convert lecture notes and course materials into structured digital books with chapters, sections, metadata and clear lecturer attribution.
            </p>
          </article>

          <article class='about-role-card'>
            <div class='about-role-label'>02 · UPDATE</div>
            <h3>Keep your material current</h3>
            <p>
              Correct errors, improve sections and issue revised editions without sending another replacement file around to students.
            </p>
          </article>

          <article class='about-role-card'>
            <div class='about-role-label'>03 · REPORT</div>
            <h3>Know how your material is being accessed</h3>
            <p>
              The proposed platform can provide lecturer reporting for publications, access, purchases and revenue associated with your materials.
            </p>
          </article>
        </div>

        <div class='about-lecturer-callout'>
          <strong>Prepare → Submit → Review → Approve → Publish → Earn</strong>
          <span>You provide the academic content. The platform handles the digital publishing infrastructure.</span>
        </div>
      </section>

      <section class='about-section'>
        <div class='about-section-heading'>
          <div class='about-eyebrow'>FOR STUDENTS</div>
          <h2>Your lecturer materials, where your courses are.</h2>
          <p>
            The student experience is simple: find the course, find the material, obtain authorized access and study from a structured digital resource.
          </p>
        </div>

        <div class='about-student-steps'>
          <div class='about-step'>
            <span>01</span>
            <div>
              <strong>Find your course</strong>
              <p>Browse through the university academic structure or search directly by title, lecturer or course code.</p>
            </div>
          </div>

          <div class='about-step'>
            <span>02</span>
            <div>
              <strong>Find the official course material</strong>
              <p>Discover course books, lecture notes, study guides and supporting resources associated with the course.</p>
            </div>
          </div>

          <div class='about-step'>
            <span>03</span>
            <div>
              <strong>Obtain authorized access</strong>
              <p>Access the material through the applicable university and KASU Course Book arrangements.</p>
            </div>
          </div>

          <div class='about-step'>
            <span>04</span>
            <div>
              <strong>Read and study</strong>
              <p>Read structured digital materials and, as the platform develops, use features such as search, bookmarks and reading progress.</p>
            </div>
          </div>
        </div>
      </section>

      <section class='about-section about-section-soft'>
        <div class='about-section-heading'>
          <div class='about-eyebrow'>WHAT CAN BE PUBLISHED</div>
          <h2>More than lecture notes</h2>
          <p>
            The proposed platform can support different forms of lecturer-approved academic content associated with a university course.
          </p>
        </div>

        <div class='about-feature-grid'>
          <article class='about-feature-card'>
            <h3>Digital Course Books</h3>
            <p>Structured editions of lecturer course materials, organized into chapters and sections for online study.</p>
          </article>

          <article class='about-feature-card'>
            <h3>Lecture Notes</h3>
            <p>Lecturer-prepared notes and teaching materials associated with specific courses.</p>
          </article>

          <article class='about-feature-card'>
            <h3>Study Guides</h3>
            <p>Academic guides, revision materials and other lecturer-approved resources that support independent study.</p>
          </article>

          <article class='about-feature-card'>
            <h3>Supporting Resources</h3>
            <p>References, supplementary materials and future academic resources approved for inclusion in the digital library.</p>
          </article>
        </div>
      </section>

      <section class='about-section'>
        <div class='about-section-heading'>
          <div class='about-eyebrow'>HOW YOUR MATERIAL BECOMES A COURSE BOOK</div>
          <h2>We handle the digital publishing work.</h2>
          <p>
            Lecturers should not have to learn web development, file conversion or digital publishing infrastructure just to put their course materials online.
          </p>
        </div>

        <div class='about-role-grid'>
          <article class='about-role-card'>
            <div class='about-role-number'>01</div>
            <h3>Prepare</h3>
            <p>You provide the course material, course information and author details.</p>
          </article>

          <article class='about-role-card'>
            <div class='about-role-number'>02</div>
            <h3>Submit</h3>
            <p>The material enters the agreed preparation and publishing workflow.</p>
          </article>

          <article class='about-role-card'>
            <div class='about-role-number'>03</div>
            <h3>Review and approve</h3>
            <p>The digital edition is reviewed and approved through the appropriate process before publication.</p>
          </article>

          <article class='about-role-card'>
            <div class='about-role-number'>04</div>
            <h3>Publish and maintain</h3>
            <p>The completed course book becomes part of the digital library and can be updated through future editions.</p>
          </article>
        </div>
      </section>

      <section class='about-section about-section-soft'>
        <div class='about-section-heading'>
          <div class='about-eyebrow'>THE THREE SIDES OF THE PLATFORM</div>
          <h2>Clear roles. One academic service.</h2>
        </div>

        <div class='about-role-grid'>
          <article class='about-role-card'>
            <div class='about-role-label'>KASU</div>
            <h3>Institutional framework</h3>
            <p>University participation, academic structure, programme and course context, institutional coordination and appropriate oversight.</p>
          </article>

          <article class='about-role-card about-role-card-featured'>
            <div class='about-role-label'>LECTURERS</div>
            <h3>Academic content</h3>
            <p>Course materials, academic accuracy, revisions, publication approval and the intellectual value created by the content.</p>
          </article>

          <article class='about-role-card'>
            <div class='about-role-label'>INFOSIGHTS</div>
            <h3>Digital infrastructure</h3>
            <p>Content preparation, publishing technology, student access, platform operations, reporting and the systems required to run the service.</p>
          </article>
        </div>
      </section>

      <section class='about-quote-section'>
        <div class='about-quote-label'>THE PROPOSITION</div>
        <blockquote>
          Your lecture materials should not disappear into scattered copies.<br>
          They should become part of a digital academic library.
        </blockquote>
        <p>
          KASU Course Book is designed to give lecturers a professional digital publishing channel and students a trusted way to find and access the materials for their courses.
        </p>
      </section>

      <section class='about-section about-section-soft'>
        <div class='about-section-heading'>
          <div class='about-eyebrow'>RESPONSIBLE UNIT</div>
          <h2>Infosights Consulting</h2>
          <p>
            Infosights Consulting is developing the digital infrastructure behind the proposed KASU Course Book platform, including content preparation, publishing, access systems, reporting and ongoing platform operations.
          </p>
        </div>
      </section>

      <section class='about-vision'>
        <div>
          <div class='about-eyebrow'>KASU DIGITAL LIBRARY</div>
          <h2>Your courses. Your lecturers. Your academic materials.</h2>
          <p>Explore the course books already being prepared for the KASU digital library.</p>
        </div>
        <a href='catalog.html' class='about-vision-button'>Explore Course Books</a>
      </section>

    </div>`;
})();
