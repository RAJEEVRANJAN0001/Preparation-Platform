export const interviewRoles = [
    {
        id: 'frontend',
        title: 'Frontend Developer',
        description: 'Focus on React, CSS, JavaScript, and web performance.',
        questions: [
            "Explain the difference between state and props in React.",
            "What is the Virtual DOM and how does it improve performance?",
            "Explain the concept of closures in JavaScript with an example.",
            "What are the differences between CSS Grid and Flexbox?",
            "How do you handle asynchronous operations in JavaScript?",
            "What is the purpose of the useEffect hook?",
            "Explain the Box Model in CSS.",
            "What are Web Vitals and why do they matter?"
        ]
    },
    {
        id: 'backend',
        title: 'Backend Developer',
        description: 'Focus on Node.js, databases, API design, and server architecture.',
        questions: [
            "Explain the difference between SQL and NoSQL databases.",
            "What is RESTful API design? What are its key principles?",
            "How does Node.js handle concurrency?",
            "Explain the concept of middleware in Express.js.",
            "What is database indexing and how does it help?",
            "How do you secure a REST API?",
            "What is the difference between horizontal and vertical scaling?",
            "Explain the ACID properties in databases."
        ]
    },
    {
        id: 'fullstack',
        title: 'Full Stack Developer',
        description: 'Combined knowledge of frontend, backend, and deployment.',
        questions: [
            "How do you manage state between frontend and backend?",
            "What is CORS and how do you handle it?",
            "Explain the concept of Microservices vs Monolithic architecture.",
            "How would you optimize a slow-loading web application?",
            "What is GraphQL and how does it differ from REST?",
            "How do you handle authentication and authorization in a web app?",
            "Explain the CI/CD pipeline.",
            "What strategies do you use for database schema migrations?"
        ]
    },
    {
        id: 'devops',
        title: 'DevOps Engineer',
        description: 'Focus on CI/CD, cloud infrastructure, containerization, and monitoring.',
        questions: [
            "What is Docker and how is it different from a Virtual Machine?",
            "Explain the concept of Infrastructure as Code (IaC).",
            "What is Kubernetes and what are its main components?",
            "How do you ensure high availability in a distributed system?",
            "What is the difference between Blue-Green and Canary deployment?",
            "Explain the command 'git rebase' vs 'git merge'.",
            "How do you monitor a production system?",
            "What is the role of a reverse proxy?"
        ]
    },
    {
        id: 'datascientist',
        title: 'Data Scientist',
        description: 'Focus on statistics, machine learning, and data analysis.',
        questions: [
            "What is the difference between Supervised and Unsupervised learning?",
            "Explain the Bias-Variance tradeoff.",
            "How do you handle missing data in a dataset?",
            "What is feature engineering and why is it important?",
            "Explain the concept of Overfitting and how to prevent it.",
            "What is a Confusion Matrix?",
            "Difference between L1 and L2 regularization.",
            "Explain the Central Limit Theorem."
        ]
    },
    {
        id: 'productmanager',
        title: 'Product Manager',
        description: 'Focus on product lifecycle, user needs, and prioritization.',
        questions: [
            "How do you prioritize features for a roadmap?",
            "How do you handle a conflict between engineering and design teams?",
            "How do you measure the success of a product?",
            "Describe a time you had to say 'no' to a stakeholder.",
            "What frameworks do you use for decision making?",
            "How do you conduct user research?",
            "What is an MVP and why is it important?",
            "How do you handle a product launch failure?"
        ]
    },
    {
        id: 'uiux',
        title: 'UI/UX Designer',
        description: 'Focus on user experience, design principles, and prototyping.',
        questions: [
            "What is the difference between UI and UX?",
            "Explain the user-centered design process.",
            "How do you conduct usability testing?",
            "What is a design system and why is it useful?",
            "How do you handle accessibility in your designs?",
            "What tools do you use for wireframing and prototyping?",
            "Explain the Gestalt principles of design.",
            "How do you collaborate with developers?"
        ]
    },
    {
        id: 'mobile',
        title: 'Mobile Developer',
        description: 'Focus on iOS, Android, React Native, and mobile app development.',
        questions: [
            "What are the differences between native and cross-platform development?",
            "Explain the mobile app lifecycle.",
            "How do you handle offline functionality in mobile apps?",
            "What is the difference between AsyncStorage and SQLite?",
            "How do you optimize mobile app performance?",
            "Explain push notifications and how they work.",
            "What are the key differences between iOS and Android development?",
            "How do you handle different screen sizes and orientations?"
        ]
    },
    {
        id: 'qa',
        title: 'QA Engineer',
        description: 'Focus on testing strategies, automation, and quality assurance.',
        questions: [
            "What is the difference between unit testing and integration testing?",
            "Explain the testing pyramid.",
            "How do you write effective test cases?",
            "What is regression testing and when do you use it?",
            "Explain the difference between black-box and white-box testing.",
            "What tools do you use for test automation?",
            "How do you test APIs?",
            "What is continuous testing in CI/CD?"
        ]
    },
    {
        id: 'security',
        title: 'Security Engineer',
        description: 'Focus on cybersecurity, threat detection, and secure coding practices.',
        questions: [
            "What is the OWASP Top 10?",
            "Explain SQL injection and how to prevent it.",
            "What is Cross-Site Scripting (XSS)?",
            "How does HTTPS work?",
            "What is the principle of least privilege?",
            "Explain the difference between encryption and hashing.",
            "What is a DDoS attack and how do you mitigate it?",
            "How do you implement secure authentication?"
        ]
    },
    {
        id: 'cloudarchitect',
        title: 'Cloud Architect',
        description: 'Focus on AWS, Azure, GCP, and cloud infrastructure design.',
        questions: [
            "What are the main differences between IaaS, PaaS, and SaaS?",
            "Explain the concept of auto-scaling in cloud environments.",
            "How do you design a highly available cloud architecture?",
            "What is serverless computing and when would you use it?",
            "Explain the shared responsibility model in cloud security.",
            "What is a CDN and how does it improve performance?",
            "How do you manage costs in cloud infrastructure?",
            "What is multi-region deployment and why is it important?"
        ]
    },
    {
        id: 'mlengineer',
        title: 'ML Engineer',
        description: 'Focus on machine learning deployment, MLOps, and model optimization.',
        questions: [
            "What is the difference between a Data Scientist and ML Engineer?",
            "How do you deploy a machine learning model to production?",
            "Explain model versioning and why it's important.",
            "What is A/B testing for ML models?",
            "How do you monitor model performance in production?",
            "What is model drift and how do you detect it?",
            "Explain the concept of feature stores.",
            "How do you optimize model inference time?"
        ]
    },
    {
        id: 'businessanalyst',
        title: 'Business Analyst',
        description: 'Focus on requirements gathering, data analysis, and stakeholder management.',
        questions: [
            "How do you gather requirements from stakeholders?",
            "What is the difference between functional and non-functional requirements?",
            "Explain how you would create a business case.",
            "What tools do you use for data visualization?",
            "How do you handle conflicting requirements?",
            "What is gap analysis?",
            "How do you measure ROI for a project?",
            "Explain the Agile methodology from a BA perspective."
        ]
    },
    {
        id: 'technicalwriter',
        title: 'Technical Writer',
        description: 'Focus on documentation, API docs, and technical communication.',
        questions: [
            "How do you approach documenting a new API?",
            "What makes good technical documentation?",
            "How do you handle documentation for different audiences?",
            "What tools do you use for creating documentation?",
            "How do you keep documentation up to date?",
            "Explain the difference between user guides and developer docs.",
            "How do you document complex technical concepts simply?",
            "What is your process for reviewing and editing technical content?"
        ]
    },
    {
        id: 'sysadmin',
        title: 'System Administrator',
        description: 'Focus on server management, networking, and system maintenance.',
        questions: [
            "How do you troubleshoot a server that's running slow?",
            "Explain the difference between TCP and UDP.",
            "What is DNS and how does it work?",
            "How do you secure a Linux server?",
            "What is load balancing and why is it important?",
            "Explain the concept of RAID.",
            "How do you perform system backups and disaster recovery?",
            "What monitoring tools do you use for servers?"
        ]
    }
];
