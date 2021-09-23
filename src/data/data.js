export const portfolioData = {
  welcome: {
    main_title: "Hi, I Am",
    main_title_sub: "Full-Stack Developer",
    sub_title: ["React", "MySQL", "REST API Specialist", "Amazon Web Services"],
  },
  name: "Aierfan",
  about: {
    specialties: [
      {
        title: "Web Application",
        body: "A great specialty and passion of mine is to develop powerful, efficient and beautiful web applications that impacts  user's day-to-day lives. To do so, I am pleased to have accumulated various experiences in React, JavaScript, HTML, and CSS",
      },
      {
        title: "Relational Database",
        body: "With various expeirences in many data related technologies such as Big Data Processing, MySQL, and NoSQL, My biggest strength is in developing optimized relational database using MySQL following all the best normalization practices and optimize with hardware in mind.",
      },
      {
        title: "REST API",
        body: " To bring front-end and back-end together, I have extended experience in developing REST APIs that are not only optimized, but also built following best practices to reduce the need to check documentation. I am also familiar with various related tech such as AWS Lambda & API Gateway",
      },
    ],
    paragraphs: [
      "Hi, I am Aierfan, a full-stack developer passionate in creating software applications that impacts people's day-to-day life.",
      "I graduated with a masters degree in Computer Engineering from University of California, Riverside.",
      "Now, I am working at Neoboard Inc as a Backend Developer & Database Constructor Intern, and utilize technologies such as MySQL, AWS Lambda, API Gateway, and AWS RDS to configure database and REST APIs.",
    ],
  },
  work: [
    {
      title: "Back-end Developer",
      company: "Neoboard Inc.",
      type: "Intern",
      start: "May 2021",
      end: "Current",
      des: [
        "Construct backend and API architecture to store and process user, institution, and chat data using AWS, Python, OAuth2 and MySQL",
        "Develop over 34 REST API to perform CRUD database operations through AWS API Gateway and Lambda using Python scripts",
        "Configure, maintain, and migrated MySQL databases to AWS Aurora Database Server using AWS RDS and Workbench 8.0",
        "Implement OAuth2 authorization to access and interact with user’s data like Google Calendar and create Zoom meetings",
        "Participate in weekly Agile spring meetings and partner with the team to frame front end development within project context",
      ],
    },
    {
      title: "Frontend Developer",
      company: "University of California Riverside",
      type: "Part Time",
      start: "Jan 2020",
      end: "Dec 2020",
      des: [
        "Developed and maintained 36 web pages for International Affairs Department complying client requirements by HTML, CSS, JavaScript, and Drupal",
        "Performed Search Engine Optimization with keyword and hyperlink tracking and increased domain traffic by 120% in a year",
        "Built and pitched interactive prototypes using Adobe XD Design with unified style, theme, and fonts across the web pages",
        "Collaborated with sub-departments and performed user testing to maximize user experience and client satisfaction",
      ],
    },
    {
      title: "IT Support Technician",
      company: "SUNY College at Buffalo",
      type: "Part Time",
      start: "Jan 2016",
      end: "May 2019",
      des: [
        "Delivered technical support to campus community and resolved over 9,000 technical issues over three years",
        "Identified, troubleshot, and resolved a variety of hardware, software, login, and network issues via phone and in person",
      ],
    },
  ],
  projects: [
    
    {
      title_short: "PlanCatcher",
      title: "Productivity Analyzer & Tracker – PlanCatcher",
      logo_img: "./img/PlanCatcherLogoTrans.png",
      tech: [
        "AWS, MySQL, REST API, JavaScript, React.js, Sass, HTML/CSS,Swift, Core Data, MVC",
      ],
      end: "June 2021",
      imgs: ["./img/pc1.png","./img/pc2.png","./img/pc3.png","./img/pc4.png"],
      type: "Fullstack, Web App, iOS App",
      des: [
        "Web Version:",
        "Developed a full-stack, interactive react web app to track and analyze users’ daily / monthly / yearly goals and percentage progress",
        "Constructed relational database through AWS RDS to merge and share user’s data with the iOS version of the application with MySQL",
        "Built MySQL relational database and accessed user data through REST APIs using AWS Lambda, API Gateway, and Python",
        "--------------------------------------------",
        "iOS Version:",
        "Published a full-stack iOS app that tracks, categorize, manages users’ plans and accomplish goals using UIKit, Swift, XCode",
        "Built persistent data storage using Core Data to store users’ categories and short-term, mid-term, and long-term plans",
        "Deployed app to App Store and performed App Store Optimization with Keyword Mining and Conversion Rate Analysis"
      
      
      ],
      links: [{ title: "iOS App Store", type: "ios", url: "https://apps.apple.com/us/app/plancatcher-simple-planner/id1447855937" }]
    },
    {
      title_short: "ZombieRun",
      title: "ZombieRun - Pathfinding Visulization & Simulator",
      logo_img: "./img/ZombieRunLogoTrans.png",
      tech: "React, JavaScript, HTML, CSS",
      end: "July 2021",
      imgs: ["./img/zombiePath1.png"],
      type: "Frontend, Algorithms",
      des: [
        "Built React app to visualize and compare pathfinding algorithms by zombie chase simulation with React, JavaScript, and HTML / CSS",
        "Implemented Dijkstra Algorithm, A* Algorithm, and KNN Algorithm to path-find to humans, and visualized process using animations",
      ],
      links: [
        { title: "Website", type: "website", url: "https://zombiepath.com/" },
        {
          title: "Github",
          type: "git",
          url: "https://github.com/amaie003/zombiepath",
        },
      ],
    },
    {
      title_short: "GPU Parallel Computing",
      title: "GPU Parallel Programming - Image Edge Detection ",
      logo_img: "./img/GPULogoTrans.png",
      tech: "C,CUDA, OpenCV, Sobel & Canny Edge Detection",
      end: "Dec 2020",
      imgs: ["./img/gpu1.png"],
      type: "Parallel Programming, Algorithm, Optimization, Computer Graphics",
      des: ["Implemented and compared parallelized Sobel and Canny Edge Detection Techniques on GPU in C using CUDA",
      "Achieved an increase in speed over 400% compared to the non-parallelized approach of the same edge detection techniques",
      "Implemented image processing techniques like Gaussian Blur, Non-Max Suppression and Double Threshold"],
      links: [{ title: "Github", type: "git", url: "https://github.com/amaie003/Sobel-Canny-Cuda-Edge-Detection" }],
    },
    {
      title_short: "Immersive Lighting System",
      title: "Home Immersive Lighting Environment",
      logo_img: "./img/PiLogoTrans.png",
      tech: "Raspberry Pi, Python, TCP Socket, OpenCV",
      end: "May 2021",
      imgs: ["./img/pi1.png"],
      type:"Computer Graphics, Network Protocol",
      des: ["Built room LED lighting to display most dominant color on a monitor in real time using Raspberry Pi, TCP Socket, Python, and OpenCV","Detected dominant color through pyautogui screenshots, OpenCV image processing, and KMean Clustering to merge similar colors"],
      links: [{ title: "Demo", type: "website", url: "https://drive.google.com/file/d/1uRw08jq9ExpX84cDYYbfVQjV8gGF545-/view?usp=sharing" }],
    },
    {
      title_short: "Feedback Sentiment Analysis",
      title: "Geospatial Customer Feedback Sentiment Analysis",
      logo_img: "./img/SentimentLogoTrans.png",
      tech: "Python, Twitter API, Hadoop, Spark, and Naive Bayes Classifier",
      end: "Jan 2020",
      type:"Big Data, Distributed Systems, Deep Learning, Visulization",
      des: ["Performed and visualized sentiment analysis on 20,000 Tweets using Python, Twitter API, Hadoop, Spark, and Naive Bayes Classifier","Spearheaded the visualization stage to display sentiment relationship between each major cities to user given keywords using Python with GeoPanda and Bokeh"],
      imgs:["./img/sentiment1.png","./img/sentiment2.png"],
      links: [{ title: "Github", type: "git", url: "https://github.com/amaie003/Twitter-Geospatial-Sentiment-Analysis" }],
    },
    {
      title_short: "Twitter Search Engine",
      title: "Twitter Search Engine",
      logo_img: "./img/SearchLogoTrans.png",
      tech: "Java, React, Hadoop, and Twitter API",
      end: "Mar 2020",
      type:"Big Data, Distributed Systems, Web Crawling",
      imgs:[],
      des: ["Built a web app to crawl and index over 30,000 tweets and rank by search relevance with Java, React, Hadoop, and Twitter API","Ranked search results using natural language processing techniques like Vector Space Model and TF-IDF Frequency Model"],
      links: [],
    },
  ],
};
