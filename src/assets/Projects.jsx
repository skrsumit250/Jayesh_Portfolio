function Project() {
    const projects = [
        {
            title: "Adobe Behavior Simulation Challenge, Inter IIT Tech Meet 12.0, IIT Madras",
            dates: "Nov 2023 - Dec 2023",
            githubLink: "https://github.com/JAYESH1304/Adobe-Behavior-Simulation-Challenge",
            description: [
                "The challenge focused on behavior and content simulation to enhance user engagement on social media. Utilized Deep Learning and Generative AI to predict and increase interaction metrics like likes, retweets, and comments on platforms such as Twitter and Instagram.",
                "Developed two critical tasks: 1. Predicting tweet engagement (likes) using DistilBERT for classification and regression within engagement levels with inference time of 1 s, and 2. Content generation by merging AI-generated media captions with tweet metadata, employing PaddleOCR and a fine-tuned Llama2 model for text generation, with average inference time 5.4 s."
            ],
            logo: "/adobelogo.jpeg"
        },
        {
            title: "QuizCrafter, AI Quiz Generator",
            dates: "June 2024",
            githubLink: "https://github.com/JAYESH1304/QuizCrafter",
            description: [
                "Developed an automated MCQ quiz generation system using Llama3 models, supporting both topic-based and custom PDF-based inputs.",
                "Implemented a dual-model setup with Llama3 for MCQ generation and hallucination checks, ensuring quality and accuracy via LangChain integration.",
                "Utilized ChromaDB for vector storage of custom data, enabling Retrieval-augmented generation(RAG), and deployed the solution using Gradio for user interaction and test evaluation."

            ],
            logo: "/Screenshot 2024-07-03 195341.png"
        },
        
        {
            title: "Cloudphysician’s The Vital Extraction Challenge, Inter IIT Tech Meet 11.0, IIT Kanpur",
            dates: "Jan 2023 - Feb 2023",
            githubLink: "https://github.com/JAYESH1304/CloudPhysician-s-Vital-Extraction-Challenge",
            description: [
                "Developed a system for monitoring patient vitals, allowing professionals to track vital signs like heart rate, blood pressure, and oxygen levels. Extracting these from ECG machine images is a core problem statement.",
                "The proposed pipeline consists of a total of four stages: Screen Extraction, Digit Localization, Digit Recognition, and Vital Mapping.",
                "The whole pipeline is made such that it can work in two modes: Fast and Accurate. The Fast mode ensures that the whole pipeline runs under 2 seconds on CPU, while the Accurate mode ensures maximum accuracy at each stage, thus ensuring the best overall performance."
            ],
            logo: "/cldphy_logo.png"
        },
    ];
  
    return (
      <section id="projects">
        <h3>Projects</h3>
        {projects.map((project) => (
          <div className="inner" key={project.title}>
            <div className="logo">
              <img src={project.logo} alt={project.title} />
            </div>
            <div className="description">
              <h6>{project.title}</h6>
              <p>{project.dates}</p>
              <a href={project.githubLink}>Github link</a>
              <br></br><br></br>
              <ul>
                {project.description.map((descItem) => (
                  <li key={descItem}>{descItem}</li>
                ))}
              </ul>
              <br></br>
              <br></br>
            </div>
          </div>
        ))}
      </section>
    );
  }
  
  export default Project;
  
