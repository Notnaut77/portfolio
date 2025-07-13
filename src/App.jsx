import React, { useState } from 'react';

// Navbar Component
const Navbar = ({ currentPage, setCurrentPage }) => {
  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Blog', id: 'blog' }
  ];

  return (
    <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => setCurrentPage('home')}
            className="text-xl font-mono font-medium text-gray-900 hover:text-gray-600"
          >
            Induj Tyagi
          </button>
          <div className="flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-sm font-mono ${
                  currentPage === item.id 
                    ? 'text-gray-900 font-medium' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

// Home Page Component
const Home = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-serif font-light text-gray-900 mb-8">
          Hello, I'm Induj Tyagi
        </h1>
        
        <div className="text-lg text-gray-700 leading-relaxed space-y-6 font-serif">
          <p>
            I'm a mechanical engineering student at IIT Jammu with a deep fascination for the intersection 
            of artificial intelligence, cryptography, and distributed systems. My work centers around 
            building intelligent systems that respect privacy while delivering meaningful insights.
          </p>
          
          <p>
            Currently, I'm exploring how machine learning models can operate effectively on encrypted data, 
            particularly in sensitive domains like genomics and finance. This involves working with 
            zero-knowledge proofs, homomorphic encryption, and differential privacy — technologies that 
            I believe will fundamentally reshape how we handle private information in the digital age.
          </p>
          
          <p>
            When I'm not coding, I think about the philosophical implications of artificial intelligence, 
            the economics of decentralized systems, and the subtle beauty of mathematical proofs. 
            I believe the most interesting problems lie at the boundaries between disciplines — where 
            computer science meets cryptography, where machine learning meets privacy, and where 
            theory meets practice.
          </p>
          
          <p>
            This site contains my thoughts, projects, and ongoing research. Feel free to explore, 
            and don't hesitate to reach out if something resonates with you.
          </p>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-serif font-light text-gray-900 mb-6">Recent Work</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-mono text-gray-900 font-medium">Aistox: AI-Driven Stock Prediction</h3>
              <p className="text-gray-600 font-serif">
                An ensemble pipeline integrating financial fundamentals with real-time sentiment analysis, 
                achieving 81.7% directional accuracy across 500+ equities.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-mono text-gray-900 font-medium">Privacy-Preserving Blockchain Systems</h3>
              <p className="text-gray-600 font-serif">
                Developing blockchain-based systems with differential privacy and zero-knowledge proofs 
                for decentralized machine learning applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// About Page Component
const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-serif font-light text-gray-900 mb-8">About Me</h1>
        
        <div className="text-lg text-gray-700 leading-relaxed space-y-6 font-serif">
          <p>
            I'm a second-year mechanical engineering student at the Indian Institute of Technology Jammu, 
            though my interests have been gravitating toward the computational and theoretical aspects of 
            engineering. My coursework in Computer Architecture, Comparison of Learning Algorithms, 
            and Computational Theory has shaped my thinking about how systems can be designed to be 
            both efficient and principled.
          </p>
          
          <p>
            My research interests lie at the intersection of machine learning, cryptography, and 
            distributed systems. I'm particularly drawn to privacy-preserving computation — the idea 
            that we can extract insights from data without compromising individual privacy. This has 
            led me to explore zero-knowledge proofs, homomorphic encryption, and differential privacy 
            in the context of machine learning systems.
          </p>
          
          <p>
            Beyond the technical work, I'm interested in the broader implications of these technologies. 
            How do we build systems that are not just efficient, but also ethical? How do we balance 
            the benefits of data-driven insights with the fundamental right to privacy? These questions 
            drive much of my thinking and research.
          </p>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-serif font-light text-gray-900 mb-6">Current Focus</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-mono text-gray-900 font-medium mb-2">Research Areas</h3>
              <ul className="text-gray-600 font-serif space-y-1">
                <li>• Privacy-preserving machine learning</li>
                <li>• Zero-knowledge proof systems</li>
                <li>• Blockchain and distributed systems</li>
                <li>• Differential privacy</li>
                <li>• Homomorphic encryption</li>
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-gray-900 font-medium mb-2">Technical Skills</h3>
              <ul className="text-gray-600 font-serif space-y-1">
                <li>• Languages: C++, Rust, Python, JavaScript</li>
                <li>• ML/DS: TensorFlow, scikit-learn, NumPy</li>
                <li>• Blockchain: Ethereum, Solana, Hardhat</li>
                <li>• Tools: Git, Docker, Linux</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
  <h2 className="text-2xl font-serif font-light text-gray-900 mb-6">Contact</h2>
  <div className="font-mono text-gray-600 space-y-2">
    <p>Email: indujtyagi@gmail.com</p>
    <p>GitHub: @Notnaut77</p>
    <p>LinkedIn: Induj Tyagi</p>
    <p>
      CV: <a 
        href="/static/Tech_Based CV.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline"
      >
        Download CV
      </a>
    </p>
  </div>
</div>
      </div>
    </div>
  );
};

// Projects Page Component
const Projects = () => {
  const projects = [
    {
      title: "Aistox: AI-Driven Stock Prediction Platform",
      description: "An ensemble pipeline integrating financial fundamentals, technical indicators, macroeconomic data, and real-time sentiment analysis from 15,000+ news sources.",
      highlights: [
        "81.7% directional accuracy across 500+ equities",
        "Sharpe ratio of 1.52 using transformer-based NLP",
        "Real-time BERT sentiment analysis with 94.3% F1-score",
        "Processing 50,000+ social media posts per hour"
      ],
      tech: ["Python", "TensorFlow", "scikit-learn", "NLTK", "Redis", "Alpha Vantage API"],
      status: "Completed"
    },
    {
      title: "Customer Segmentation via Unsupervised Learning",
      description: "Applied K-Means clustering and Principal Component Analysis on 12,000+ customer records with 43 behavioral and demographic features.",
      highlights: [
        "Identified 6 optimal customer segments",
        "87.4% variance explained by top 11 principal components",
        "Enhanced CLV prediction accuracy by 42.6%",
        "3.2x improvement in targeted marketing conversions"
      ],
      tech: ["Python", "scikit-learn", "pandas", "matplotlib", "seaborn"],
      status: "Completed"
    },
    {
      title: "Cryptographic Digital Signing Application",
      description: "Built an RSA-2048 and SHA-256 based digital signing system with an intuitive drag-and-drop interface for real-time document verification.",
      highlights: [
        "40ms average signing time",
        "Zero private key exposure",
        "99.94% accuracy in signature integrity validation",
        "Verified 75,000+ documents"
      ],
      tech: ["JavaScript", "Node.js", "Express.js", "Web Crypto API"],
      status: "Completed"
    },
    {
      title: "Privacy-Preserving Blockchain Systems",
      description: "Developing blockchain-based systems incorporating differential privacy, zero-knowledge proofs, and homomorphic encryption protocols.",
      highlights: [
        "Targeting decentralized ML applications",
        "Focus on sensitive genomic datasets",
        "Privacy-compliant machine learning",
        "Cryptographic protocol implementation"
      ],
      tech: ["Rust", "Solidity", "ZK libraries", "Differential privacy frameworks"],
      status: "In Development"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-serif font-light text-gray-900 mb-8">Projects</h1>
        
        <p className="text-lg text-gray-700 leading-relaxed font-serif mb-12">
          A selection of projects spanning machine learning, cryptography, and distributed systems. 
          Each represents an exploration of how computational techniques can be applied to real-world 
          problems while maintaining principled approaches to privacy and security.
        </p>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-6">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-2xl font-mono font-medium text-gray-900">{project.title}</h2>
                <span className={`text-sm font-mono px-2 py-1 rounded ${
                  project.status === 'Completed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-gray-700 font-serif mb-4">{project.description}</p>
              
              <div className="mb-4">
                <h3 className="font-mono text-gray-900 font-medium mb-2">Key Achievements</h3>
                <ul className="text-gray-600 font-serif space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <li key={i}>• {highlight}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-mono text-gray-900 font-medium mb-2">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Blog Overview Page Component
const Blog = ({ setCurrentPage, setSelectedPost }) => {
  const blogPosts = [
    {
      title: "On Privacy-Preserving Machine Learning",
      date: "2025-07-12",
      excerpt: "Exploring the intersection of differential privacy and federated learning in the context of sensitive healthcare data. How can we extract meaningful insights while maintaining individual privacy?",
      slug: "privacy-preserving-ml",
      tags: ["Privacy", "Machine Learning", "Cryptography"],
      content: `The tension between extracting useful insights from data and preserving individual privacy has become one of the most fascinating challenges in modern machine learning. As we've seen with healthcare data, financial records, and personal communications, the most valuable datasets are often the most sensitive.

Traditional approaches to privacy in machine learning have relied on simple techniques like data anonymization or k-anonymity. But as researchers like Latanya Sweeney have shown, these methods are often insufficient against sophisticated re-identification attacks. We need stronger guarantees.

This is where differential privacy enters the picture. Rather than trying to hide specific individuals in the dataset, differential privacy provides a mathematical framework for quantifying and limiting the privacy risk of any analysis. The key insight is that we can add carefully calibrated noise to our computations in a way that preserves statistical utility while providing strong privacy guarantees.

But differential privacy is just one piece of the puzzle. Federated learning allows us to train models across distributed datasets without centralizing the data. Homomorphic encryption enables computation on encrypted data. Zero-knowledge proofs let us verify computations without revealing the underlying data.

The real challenge is combining these techniques in ways that are both theoretically sound and practically deployable. Each adds overhead and complexity, but the potential benefits—enabling machine learning on previously inaccessible datasets while respecting privacy—make this one of the most important research directions in the field.

As I've been working on privacy-preserving blockchain systems, I've come to appreciate how these different cryptographic tools can work together. The future of machine learning may well depend on our ability to build systems that are private by design, not as an afterthought.`
    },
    {
      title: "Zero-Knowledge Proofs: A Philosophical Perspective",
      date: "2025-07-07",
      excerpt: "Beyond the technical mechanics, what do zero-knowledge proofs tell us about the nature of knowledge itself? An exploration of cryptographic protocols through the lens of epistemology.",
      slug: "zk-proofs-philosophy",
      tags: ["Zero-Knowledge", "Philosophy", "Cryptography"],
      content: `Zero-knowledge proofs represent one of the most elegant concepts in cryptography, but their implications extend far beyond their technical applications. At their core, they challenge our intuitions about what it means to "know" something and how knowledge can be communicated.

The basic idea is counterintuitive: I can prove to you that I know something without revealing what that something is. This seems to violate a fundamental principle of communication—that to convey knowledge, one must share information. Yet zero-knowledge proofs demonstrate that this intuition is wrong.

Consider the classic example of the cave with two paths. Alice knows the secret word that opens a door between the paths. To prove this to Bob without revealing the word, she can repeatedly enter the cave from a random side and exit from the side Bob requests. After enough iterations, Bob becomes convinced that Alice knows the secret, even though he's learned nothing about what the secret actually is.

This has profound implications for how we think about knowledge and proof. In traditional mathematics, a proof is a sequence of logical steps that can be verified by anyone. The proof itself contains all the information needed to establish the truth of a statement. But zero-knowledge proofs separate the act of proving from the act of teaching.

From an epistemological perspective, this suggests that knowledge and the ability to demonstrate knowledge are fundamentally different. Alice's knowledge of the secret word is a private fact, but her ability to prove this knowledge is a public performance. The proof doesn't transfer the knowledge; it merely establishes its existence.

This distinction becomes crucial when we consider privacy-preserving systems. In many contexts, we want to verify that someone has certain credentials or satisfies certain conditions without learning anything else about them. Zero-knowledge proofs provide a formal framework for this kind of selective disclosure.

But there's a deeper philosophical question here: if knowledge can be proven without being shared, what does this tell us about the nature of truth itself? Are there truths that can be known but not communicated directly? Zero-knowledge proofs suggest that the answer is yes, and that this might be a feature, not a bug, of how knowledge works.

As I've been implementing ZK protocols in my blockchain work, I've been struck by how these systems embody a kind of cryptographic humility. They acknowledge the limits of what we can and should know about each other while still enabling the verification we need for trust and cooperation.

Perhaps the most beautiful aspect of zero-knowledge proofs is that they resolve a fundamental tension in cryptography: the need to prove authenticity while maintaining privacy. In doing so, they offer a new model for how knowledge can be shared—or rather, how its existence can be established without its contents being revealed.

This has applications far beyond cryptography. In a world where privacy is increasingly scarce, zero-knowledge proofs offer a vision of how we might verify trust without sacrificing autonomy. They suggest that the future of privacy isn't about hiding information, but about sharing knowledge in more sophisticated ways.`
    },
    {
      title: "The Economics of Decentralized Systems",
      date: "2025-07-01",
      excerpt: "How do incentive structures in blockchain networks align with traditional economic theory? A deep dive into mechanism design in distributed systems.",
      slug: "economics-decentralized-systems",
      tags: ["Blockchain", "Economics", "Game Theory"],
      content: `Blockchain networks represent a fascinating intersection of computer science and economics. They're essentially distributed systems where coordination is achieved not through centralized control, but through carefully designed incentive structures. This raises fundamental questions about how economic principles apply in decentralized contexts.

The key insight is that blockchain networks are essentially games in the game-theoretic sense. Participants (miners, validators, users) are strategic actors with their own objectives, and the network's security and functionality depend on aligning these individual incentives with the collective good. This is a classic problem in mechanism design: how do we structure rules and incentives to achieve desired outcomes?

Consider Bitcoin's mining mechanism. Miners compete to solve computationally expensive puzzles, and the winner gets to add a block to the chain and receive a reward. This creates an incentive for miners to invest in computational resources, which in turn makes the network more secure. But it also creates a tension: miners want to maximize their profits, while the network needs them to behave honestly.

The genius of Bitcoin's design is that it makes honest behavior the most profitable strategy. Attempting to cheat (by mining on a minority chain or including invalid transactions) is not just technically difficult—it's economically irrational. This is mechanism design at its finest: the system's security emerges from the rational self-interest of its participants.

But these incentive structures are more complex than they initially appear. Take the phenomenon of mining pools, where individual miners combine their computational power to reduce variance in their rewards. This wasn't part of Bitcoin's original design, but it emerged naturally from the economic incentives. Pools create efficiency gains for miners, but they also introduce new risks—if a pool controls too much of the network's hash rate, it could potentially attack the system.

This illustrates a broader principle: complex systems often exhibit emergent behaviors that weren't anticipated by their designers. The challenge in blockchain design is to create incentive structures that remain stable even as the system evolves and new strategies emerge.

Ethereum's transition from proof-of-work to proof-of-stake represents a different approach to this problem. Instead of incentivizing computational work, proof-of-stake systems incentivize holding and "staking" tokens. Validators are chosen to create new blocks based on their stake, and they can lose their tokens if they behave dishonestly. This creates a more direct alignment between a validator's wealth and the network's security.

From an economic perspective, this is interesting because it changes the nature of the commitment validators make to the network. In proof-of-work systems, miners' commitment is their ongoing investment in electricity and hardware. In proof-of-stake systems, validators' commitment is their locked-up tokens. This has different implications for security, decentralization, and energy efficiency.

The broader lesson here is that decentralized systems require us to think differently about economic coordination. Traditional economics often assumes the existence of institutions—governments, companies, legal systems—that can enforce agreements and resolve disputes. But blockchain networks operate in a trustless environment where these institutions don't exist or aren't trusted.

This creates opportunities for new forms of economic organization. Decentralized autonomous organizations (DAOs) attempt to encode governance structures directly into smart contracts. Prediction markets can aggregate information about future events without requiring a central authority. These systems are still experimental, but they point toward new ways of organizing economic activity.

As I've been working on blockchain systems, I've been struck by how these networks embody principles from different schools of economic thought. The emphasis on individual rationality and market mechanisms reflects Austrian economics, while the focus on mechanism design and game theory draws from more mathematical traditions.

Perhaps most importantly, blockchain systems demonstrate that economic incentives can be a powerful tool for coordination in distributed systems. By carefully aligning individual incentives with collective objectives, we can create systems that are both decentralized and functional. This has implications not just for cryptocurrencies, but for any system where coordination is needed without centralized control.

The challenge moving forward will be to design these systems to be not just technically sound, but economically sustainable. This requires understanding not just how incentives work in theory, but how they evolve in practice as systems scale and adapt to new challenges.`
    },
    {
      title: "Thoughts on AI Alignment in Financial Markets",
      date: "2025-06-28",
      excerpt: "Building the Aistox platform raised interesting questions about AI decision-making in financial contexts. How do we ensure our models are aligned with human values?",
      slug: "ai-alignment-finance",
      tags: ["AI Alignment", "Finance", "Ethics"],
      content: `Working on the Aistox stock prediction platform has given me a unique window into the practical challenges of AI alignment in financial contexts. While the technical aspects of building accurate models are well-documented, the question of how to ensure these models are aligned with human values is much more complex.

The most obvious alignment challenge in financial AI is the potential for unintended consequences. A model trained to maximize returns might discover strategies that are technically profitable but socially harmful—market manipulation, exploiting regulatory loopholes, or amplifying harmful market dynamics. Even if we don't explicitly program these behaviors, they can emerge from the optimization process.

This is particularly concerning in finance because financial markets are not zero-sum games in isolation. They're embedded in broader economic systems that affect real people's lives. A model that treats the market as a pure optimization problem might miss these broader implications.

Consider the case of high-frequency trading algorithms. These systems are highly optimized for profit, and they've achieved remarkable success by traditional metrics. But they've also been implicated in market flash crashes and may contribute to increased market volatility. The algorithms are "aligned" with their narrow objective of making money, but they're not necessarily aligned with the broader goal of maintaining stable, efficient markets.

The challenge is that alignment in financial contexts isn't just about preventing obvious harms—it's about understanding the complex web of relationships and incentives that make markets function. A truly aligned financial AI system would need to consider not just immediate profits, but long-term market stability, fairness to other participants, and broader economic welfare.

In building Aistox, we've tried to address some of these concerns through careful model design and validation. We don't just optimize for raw returns; we also consider risk-adjusted metrics, diversification, and the stability of our predictions over time. We've built in constraints to prevent the model from taking positions that could manipulate smaller markets or exploit obvious information asymmetries.

But this raises deeper questions about what we want from AI systems in financial contexts. Should they be purely profit-maximizing agents, or should they be designed to serve broader social goals? How do we balance the interests of the system's users with the interests of other market participants and society as a whole?

One approach is to think about AI alignment in finance as a multi-stakeholder problem. Rather than optimizing for a single objective, we need to consider the interests of investors, other market participants, regulators, and the broader economy. This requires building models that can reason about these different stakeholder groups and their potentially conflicting interests.

Another approach is to focus on transparency and interpretability. If we can understand how our models make decisions, we can better evaluate whether those decisions are aligned with our values. This is particularly important in finance, where model decisions can have significant real-world consequences.

But perhaps the most important lesson from working on Aistox is that alignment isn't just a technical problem—it's a social and economic one. The values we want our AI systems to embody are often contested and context-dependent. What counts as "fair" or "beneficial" in financial markets depends on your perspective and your position in the economic system.

This suggests that AI alignment in finance requires ongoing dialogue between technologists, regulators, market participants, and society more broadly. We can't solve alignment problems in isolation; we need to understand the broader context in which our systems operate and the values of the communities they serve.

As AI systems become more powerful and more prevalent in financial markets, these alignment challenges will only become more pressing. The stakes are high—poorly aligned AI systems could destabilize markets, exacerbate inequality, or undermine trust in financial institutions. But the potential benefits of well-aligned systems are enormous: more efficient markets, better risk management, and more accessible financial services.

The key is to approach these challenges with humility and a commitment to ongoing learning. AI alignment isn't a problem we can solve once and forget about; it's an ongoing process of understanding how our systems interact with the world and continuously improving them to better serve human values.

This experience has convinced me that the future of AI in finance will depend not just on technical advances, but on our ability to build systems that are aligned with human values and social good. This is one of the most important challenges facing the field, and it will require collaboration across disciplines to address effectively.`
    }
  ];

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setCurrentPage('blog-post');
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-serif font-light text-gray-900 mb-8">Blog</h1>
        
        <p className="text-lg text-gray-700 leading-relaxed font-serif mb-12">
          Thoughts on artificial intelligence, cryptography, and the philosophical implications of 
          computational systems. These posts explore the intersection of technology and ideas, 
          often wandering into questions about privacy, ethics, and the nature of knowledge itself.
        </p>
        
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="border-b border-gray-200 pb-8">
              <div className="mb-2">
                <span className="text-sm font-mono text-gray-500">
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              
              <button 
                onClick={() => handlePostClick(post)}
                className="block hover:bg-gray-50 -mx-4 px-4 py-2 rounded transition-colors text-left w-full"
              >
                <h2 className="text-2xl font-serif font-medium text-gray-900 mb-3 hover:text-blue-600">
                  {post.title}
                </h2>
                <p className="text-gray-700 font-serif leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, i) => (
                    <span key={i} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

// Individual Blog Post Component
const BlogPost = ({ selectedPost, setCurrentPage }) => {
  if (!selectedPost) return null;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="prose prose-lg max-w-none">
        <div className="mb-8">
          <span className="text-sm font-mono text-gray-500">
            {new Date(selectedPost.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </span>
          <h1 className="text-4xl font-serif font-light text-gray-900 mt-2 mb-4">
            {selectedPost.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-8">
            {selectedPost.tags.map((tag, i) => (
              <span key={i} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm font-mono">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="text-lg text-gray-700 leading-relaxed space-y-6 font-serif">
          {selectedPost.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <button 
            onClick={() => setCurrentPage('blog')}
            className="text-blue-600 hover:text-blue-800 font-mono text-sm"
          >
            ← Back to all posts
          </button>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPost, setSelectedPost] = useState(null);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'blog':
        return <Blog setCurrentPage={setCurrentPage} setSelectedPost={setSelectedPost} />;
      case 'blog-post':
        return <BlogPost selectedPost={selectedPost} setCurrentPage={setCurrentPage} />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderCurrentPage()}
      </main>
      
      <footer className="border-t border-gray-200 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center text-gray-600 font-mono text-sm">
            <p>© 2025 Induj Tyagi. Built with React and a love for clean design.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;