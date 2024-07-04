function Experience() {
    const experiences = [
      {
        logo: "/deepsoft_logo.jpeg",
        title: "Data Science Intern, DeepSoft Technologies",
        date: "April 2024",
        description: [
          "Leveraged Pinecone Vector Databases, Sentence Transformer e5-small, and Streamlit to develop a custom search engine featuring a user-friendly interface for text data input and indexing.",
          "Implemented a system to process user queries and return the top 5 relevant results, optimizing performance for diverse text datasets."
        ]
      },
      {
        logo: "/Uit_logo.png",
        title: "Machine Learning Intern under Dr.Anowarul habib, UiT- The Arctic University of Norway",
        date: "Jan 2024 - Present",
        description: [
          "Developed an innovative library for reconstructing image data from sparse wavefield signals of piezoelectric sensors based on Optimal sensor placement.",
          "Fine-tuned ResNet50 for damage detection and created a novel approach for localizing damage, leveraging wavefield signal data for precise and efficient analysis."
        ]
      },
      {
        logo: "/UNSWlogo-opengraph-squaresafe.png",
        title: "NLP Research Intern under Dr.Rohitash Chandra, University of New South Wales, Sydney",
        date: "Jan 2024 - Present",
        description: [
          "Fine-tuned BERT on SenWave dataset of tweets for multi-label sentiment classification in 11 categories. Conducted inference and analysis on the Global COVID-19 Twitter Dataset, specifically targeting anti-vaxxer sentiments.",
          "Analysis identified a strong correlation between tweet volume, COVID-19 case numbers, and mean sentiment polarity scores (range: -1 to 1), which normalized towards 0 post-vaccine rollout."
        ]
      }
    ];
  
    return (
      <section id="experience">
        <h3>Experience</h3>
        {experiences.map((experience) => (
          <div className="inner" key={experience.title}>
            <div className="logo">
              <img src={experience.logo} alt={experience.title} />
            </div>
            <div className="description">
              <h6>{experience.title}</h6>
              <p>{experience.date}</p>
              <br />
              <ul>
                {experience.description.map((descItem) => (
                  <li key={descItem}>{descItem}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    );
  }
  
  export default Experience;
  