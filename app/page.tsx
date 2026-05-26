export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

          <h1 className="text-3xl tracking-wide font-light">
            Puja Sri
          </h1>

          <div className="flex gap-10 text-sm uppercase tracking-[0.2em] text-white/70">
            <a href="#about" className="font-semibold hover:text-white transition">
              About Me
            </a>

            <a href="#careheart" className="font-semibold hover:text-white transition">
              Why CareHeart❤️
            </a>

            <a href="#contact" className="font-semibold hover:text-white transition">
              Reach Me
            </a>
          </div>

        </div>
      </nav>
      

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-start px-8 pt-28"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          {/* Left Side */}
          <div className="relative mb-10" >
<div className="absolute w-72 h-72 bg-cyan-700/40 blur-3xl rounded-full" />

            <div className="w-72 h-72 rounded-full border border-cyan-200/10 overflow-hidden mb-10">
              <img
                src="/profileimg.jpeg"
                alt="Pujasri"
                className="w-full h-full object-cover grayscale"
              />
            </div>

            

            <h1 className="text-7xl leading-none font-light mb-6">
              PUJA SRI
              <br />
              MANDYAM SRINIVASULU
            </h1>
            <p className="uppercase tracking-[0.3em] text-sm text-cyan-400 mb-4">
              AI & Healthcare Research Enthusiast
            </p>

           <div className="space-y-4 text-white/70 text-lg leading-relaxed max-w-xl">

  <p>
    BS in Data Science and Applications at IIT Madras
    <br />
    BPharm at Sri Padmavati Mahila Visvavidyalayam
  </p>

  <div className="pt-2 border-l border-cyan-400/40 pl-4">
    <p className="text-white/90">
      Research Intern at ERNET India
    </p>

    <p className="text-sm text-white/50">
      IITM Research Park
    </p>
  </div>

</div>

          </div>

          {/* Right Side */}
          <div className="space-y-14">

            <div>
              <h2 className="text-4xl mb-5 font-light">
                Research Interests
              </h2>

              <div className="flex flex-wrap gap-4">

                {[
                  "Healthcare AI",
                  "Medical Imaging",
                  "Computer Vision",
                  "Explainable AI",
                  "Deep Learning",
                  "Biomedical Data Science",
                ].map((item) => (
                  <div
                    key={item}
                    className="px-5 py-2 rounded-full text-white/80 border border-white/20 
           transition-all duration-300 
            hover:text-white 
            hover:border-cyan-300/40 
            hover:bg-gradient-to-r hover:from-cyan-400/20 hover:via-white/10 hover:to-cyan-500/20 
            hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
                  >
                    {item}
                  </div>
                ))}

              </div>
            </div>

            <div>
              <h2 className="text-4xl mb-5 font-light">
                Skills
              </h2>

              <div className="grid grid-cols-2 gap-4 text-white/70">

                <p>Python</p>
                <p>Machine Learning</p>
                <p>DL Fundamentals</p>
                <p>Deep Learning</p>
                <p>Analytical Skills</p>
                <p>Strong English Proficiency</p>

              </div>
            </div>

             <div>
              <h2 className="text-4xl mb-5 font-light">
                Certifications
              </h2>

              <div className="grid grid gap-4 text-white/70">

                <p>Minor in GenAI (IITM)</p>
                <p>Band 8 (IELTS)</p>
                <p>Health Research Fundamentals (NPTEL)</p>
                <p>Data Mining (NPTEL)</p>
              </div>
            </div>
             <div>
              <h2 className="text-4xl mb-5 font-light">
                Recommendation
              </h2>
              <div className="grid gap-4 text-white/70">

  <div>
    <p>Dr. Paventhan (Sr. Director at ERNET India)</p>

    <a
      href="mailto:paventhan@ernet.in"
      className="text-cyan-400 hover:text-cyan-300 transition text-sm"
    >
      paventhan@ernet.in
    </a>
  </div>
</div>
            </div>

            <div className="flex gap-6 pt-6">

              <a
                href="/Puja Sri_CV.pdf"
                className="border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition"
              >
                Resume
              </a>

              <a
                href="https://github.com/Galatonic-rebel"
                className="border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/puja-sri-m-s-a5b798244/"
                className="border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition"
              >
                LinkedIn
              </a>

            </div>

          </div>

        </div>


      </section>
      {/* CareHeart Section */}
<section
  id="careheart"
  className="relative min-h-screen bg-black overflow-hidden"
>{/* Background Heading */}
<div className="absolute inset-0 flex items-center justify-center ">

  <h2 className="text-[10rem] md:text-[14rem] font-light text-white/[0.2]  blur-[2px] tracking-wide leading-none text-center">
    WHY
    <br />
    CAREHEART
  </h2>

</div>

  {/* Floating Heart */}
 <div className="absolute top-[45%] left-[45%] -translate-x-1/2 -translate-y-1/2 ">
  


    <div className="w-[300px] h-[300px] opacity-90">

       <iframe title="adult heart" allow="autoplay; fullscreen; xr-spatial-tracking" width="640" height="480" src="https://sketchfab.com/models/9c6868474bc74a6ebb580b94853fd743/embed?autostart=1&transparent=1&ui_animations=0&ui_infos=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_theme=dark"> </iframe>

    </div>

  </div>
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">

  <a href="#careheart-content">

    <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:border-white transition">
      ↓
    </div>

  </a>

</div>
</section>
<section id='careheart-content'  className="relative z-10 max-w-7xl mx-auto px-8 py-20">
    <div className="max-w-7xl mx-auto">

    {/* Section Header */}

    {/* Main Content */}
    <h2 className="uppercase tracking-[0.2em] text-5xl text-cyan-400 mb-8">
        Application for Junior Research Associate (JRA) @ MIT, AI-COE
      </h2>

    <div className="grid md:grid-cols-2 gap-24">

      {/* Left */}
      <div className="space-y-10">

        <div>
          <h3 className="text-3xl mb-5 font-light">
            Why This Project
          </h3>

          <p className="text-white/70 leading-relaxed text-lg">
             What particularly draws me to the CareHeart project is its
  intersection of healthcare, medical imaging, and impactful AI
  systems designed for real-world accessibility. Coming from a
  background in both pharmaceutical sciences and data science, I
  have naturally developed a strong interest in applying AI within
  the healthcare domain. My background in pharmacy has made me more
  aware of the importance of early diagnosis, clinical decision
  support, and accessible healthcare systems, which is why projects
  like CareHeart feel especially meaningful to me. <br /><br />

  I also believe my interdisciplinary background allows me to act as
a bridge between the clinical and technical aspects of the project,
helping connect healthcare understanding with AI-driven system
development in a more practical and collaborative manner.<br /><br />

  Alongside this, my current experience as a Research Intern at
  ERNET India has further strengthened my interest in applied AI
  research and collaborative problem solving within technical
  environments. Through this experience, I have gained exposure to
  research-oriented workflows.<br /><br />

  To better understand the medical imaging landscape, we also visited
a diagnostic center in Chennai and interacted with a radiologist to gain
practical insight into imaging workflows and scan interpretation
environments. <br /><br />

  What makes the CareHeart initiative particularly exciting to me is
  its focus on scalable and non-invasive AI-assisted diagnosis using
  CTCA imaging. The possibility of contributing to technology that
  can support clinicians and improve access to diagnostic care,
  especially in resource-limited settings, is something I find both
  technically and personally motivating.

          </p>
        </div>

        <div>
          <h3 className="text-3xl mb-5 font-light">
            What I’ve Done to Prepare
          </h3>

          <div className="space-y-4 text-white/70">

            {[
              "Prepared a workflow for CareHeart project",
              "Explored DICOM handling using pydicom",
              "Developing an understanding of Grad-CAM based explainability",
              "Implemented CNN-based medical imaging workflow",
              "Explored existing research literature on AI-assisted CAD diagnosis",
            
            ].map((item) => (
              <div
                key={item}
                className="border border-white/10 p-4 rounded-2xl backdrop-blur-sm"
              >
                {item}
              </div>
            ))}

          </div>
        </div>

      </div>

      {/* Right */}
      <div className="space-y-10">

        <div>
          <h3 className="text-3xl mb-5 font-light">
            How I Can Contribute
          </h3>

          <p className="text-white/70 leading-relaxed text-lg">
           I have created a proposed workflow for the CareHeart project, which outlines the key steps and components involved in developing an AI-assisted CAD diagnosis system using CTCA imaging.
          </p> <br />
          <a
  href="https://mermaid.ai/d/421340e6-04c2-471f-ac34-deaf01602d18"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-cyan-400/30 px-5 py-3 rounded-xl 
             text-cyan-300 hover:bg-cyan-400 hover:text-black 
             transition-all duration-300 inline-block"
>
  CareHeart proposed workflow
</a>
          
        </div>

        {/* Project */}
        <div className="border border-white/10 rounded-3xl overflow-hidden">

          <img
            src="/project_img.jpg"
            alt="Medical Imaging"
            className="w-full h-72 object-cover"
          />

          <div className="p-8">

            <p className="uppercase text-xs tracking-[0.3em] text-cyan-400 mb-4">
              Project
            </p>

            <h3 className="text-4xl mb-4 font-light">
              Medical Imaging Classification
            </h3>

            <p className="text-white/70 leading-relaxed mb-6">
              CNN-based medical imaging workflow with
              Grad-CAM explainability for diagnostic
              visualization and model interpretation.
            </p>

            <div className="flex gap-4">

              <a
                href="https://github.com/Galatonic-rebel/PneumoniaClassification"
                className="border border-white/20 px-5 py-3 hover:bg-white hover:text-black transition"
              >
                GitHub
              </a>

              
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* Contact Section */}
<section
  id="contact"
  className="relative border-t border-white/10 px-8 py-32"
>

  <div className="max-w-5xl mx-auto text-center">

    <p className="uppercase tracking-[0.2em] text-cyan-400 text-sm mb-6">
      Reach Me
    </p>

    <h2 className="text-6xl font-light mb-12">
      Looking Forward to Contributing
    </h2>

    <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed mb-20">
      Passionate about healthcare AI, medical imaging,
and collaborative interdisciplinary research.
    </p>

    <div className="space-y-10">

      {/* Email */}
      <div>

  <p className="text-white/40 uppercase tracking-[0.2em] text-sm mb-4">
    Email
  </p>

  <div className="space-y-3">

    <a
      href="mailto:21f1004587@ds.study.iitm.ac.in"
      className="block text-2xl hover:text-cyan-400 transition"
    >
      21f1004587@ds.study.iitm.ac.in
    </a>

    <a
      href="mailto:pujasrimandyam01@gmail.com"
      className="block text-xl text-white/60 hover:text-cyan-400 transition"
    >
      pujasrimandyam01@gmail.com
    </a>

  </div>

</div>
      {/* Phone */}
      <div>

        <p className="text-white/40 uppercase tracking-[0.2em] text-sm mb-3">
          Mobile No
        </p>

        <p className="text-3xl text-white/80">
          +91 9652882165
        </p>

      </div>

    </div>
<p className="text-white/40 text-sm mt-32">
  Designed & Developed by Puja Sri Mandyam Srinivasulu 
</p>
  </div>
  

</section>

    </main>
  );
}