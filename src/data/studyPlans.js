// Comprehensive study plans for different roles
export const STUDY_PLANS = {
    'Frontend Developer': {
        duration: '6 weeks',
        intensity: 'High',
        totalHours: 120,
        difficulty: 'Intermediate',
        description: 'Master modern frontend development with React, JavaScript, and responsive design',
        weeks: [
            {
                week: 1,
                topic: 'JavaScript Fundamentals',
                focus: 'ES6+, Closures, Promises, Async/Await',
                hours: 20,
                dailyTasks: [
                    'Day 1-2: ES6 features (let/const, arrow functions, destructuring)',
                    'Day 3-4: Closures and scope chain deep dive',
                    'Day 5-6: Promises and async programming',
                    'Day 7: Practice problems and mini-project'
                ],
                resources: ['JavaScript.info', 'MDN Web Docs', 'FreeCodeCamp'],
                projects: ['Build a promise-based API wrapper'],
                assessment: 'Complete 20 JavaScript challenges on LeetCode'
            },
            {
                week: 2,
                topic: 'React Fundamentals',
                focus: 'Components, Hooks, State Management',
                hours: 22,
                dailyTasks: [
                    'Day 1-2: Components and JSX',
                    'Day 3-4: useState and useEffect hooks',
                    'Day 5: useContext and custom hooks',
                    'Day 6-7: Build a Todo app with React'
                ],
                resources: ['React Official Docs', 'React Beta Docs', 'Scrimba React Course'],
                projects: ['Todo App with local storage', 'Weather Dashboard'],
                assessment: 'Build a multi-page React application'
            },
            {
                week: 3,
                topic: 'Advanced React & State',
                focus: 'Redux, React Query, Performance',
                hours: 20,
                dailyTasks: [
                    'Day 1-2: Redux Toolkit basics',
                    'Day 3-4: React Query for data fetching',
                    'Day 5: Performance optimization (memo, useMemo)',
                    'Day 6-7: Build e-commerce cart with Redux'
                ],
                resources: ['Redux Toolkit Docs', 'TanStack Query', 'Kent C. Dodds Blog'],
                projects: ['Shopping cart with Redux', 'Data dashboard with React Query'],
                assessment: 'Optimize a slow React application'
            },
            {
                week: 4,
                topic: 'CSS & Responsive Design',
                focus: 'Flexbox, Grid, Mobile-First, Animations',
                hours: 18,
                dailyTasks: [
                    'Day 1-2: Flexbox mastery',
                    'Day 3-4: CSS Grid layouts',
                    'Day 5: Responsive design patterns',
                    'Day 6-7: Build responsive portfolio site'
                ],
                resources: ['CSS Tricks', 'Kevin Powell YouTube', 'Josh Comeau CSS'],
                projects: ['Responsive landing page', 'CSS Grid gallery'],
                assessment: 'Create a fully responsive website from Figma design'
            },
            {
                week: 5,
                topic: 'Performance & Accessibility',
                focus: 'Lighthouse, ARIA, Code Splitting, SEO',
                hours: 20,
                dailyTasks: [
                    'Day 1-2: Web Vitals and Lighthouse optimization',
                    'Day 3-4: Accessibility (ARIA, keyboard navigation)',
                    'Day 5: Code splitting and lazy loading',
                    'Day 6-7: SEO best practices'
                ],
                resources: ['web.dev', 'A11y Project', 'WebAIM'],
                projects: ['Optimize existing app for 90+ Lighthouse score'],
                assessment: 'Audit and fix accessibility issues in a web app'
            },
            {
                week: 6,
                topic: 'Portfolio & Interview Prep',
                focus: 'Build Projects, System Design, Behavioral',
                hours: 20,
                dailyTasks: [
                    'Day 1-3: Build capstone project',
                    'Day 4: Frontend system design basics',
                    'Day 5-6: Mock interviews',
                    'Day 7: Resume and portfolio polish'
                ],
                resources: ['Frontend Mentor', 'Pramp', 'Interviewing.io'],
                projects: ['Full-stack CRUD application', 'Personal portfolio website'],
                assessment: 'Complete 3 mock interviews successfully'
            }
        ]
    },
    'Backend Developer': {
        duration: '6 weeks',
        intensity: 'High',
        totalHours: 125,
        difficulty: 'Intermediate',
        description: 'Build scalable backend systems with Node.js, databases, and APIs',
        weeks: [
            {
                week: 1,
                topic: 'Node.js & Express Fundamentals',
                focus: 'Server setup, Routing, Middleware',
                hours: 20,
                dailyTasks: [
                    'Day 1-2: Node.js basics and npm',
                    'Day 3-4: Express server and routing',
                    'Day 5-6: Middleware and error handling',
                    'Day 7: Build REST API for blog'
                ],
                resources: ['Node.js Docs', 'Express.js Guide', 'Traversy Media'],
                projects: ['RESTful Blog API'],
                assessment: 'Create a CRUD API with proper error handling'
            },
            {
                week: 2,
                topic: 'Database Design & SQL',
                focus: 'PostgreSQL, Normalization, Indexing',
                hours: 22,
                dailyTasks: [
                    'Day 1-2: SQL fundamentals (SELECT, JOIN)',
                    'Day 3-4: Database normalization',
                    'Day 5: Indexing and query optimization',
                    'Day 6-7: Design and implement e-commerce schema'
                ],
                resources: ['PostgreSQL Tutorial', 'Use The Index Luke', 'SQLBolt'],
                projects: ['E-commerce database schema'],
                assessment: 'Design a normalized database for a complex system'
            },
            {
                week: 3,
                topic: 'Authentication & Security',
                focus: 'JWT, OAuth, Password Hashing, HTTPS',
                hours: 21,
                dailyTasks: [
                    'Day 1-2: Password hashing with bcrypt',
                    'Day 3-4: JWT authentication',
                    'Day 5: OAuth 2.0 integration',
                    'Day 6-7: Implement auth system'
                ],
                resources: ['Auth0 Docs', 'OWASP', 'JWT.io'],
                projects: ['Authentication system with JWT and refresh tokens'],
                assessment: 'Implement secure authentication with social login'
            },
            {
                week: 4,
                topic: 'Caching & Performance',
                focus: 'Redis, Query Optimization, Load Testing',
                hours: 20,
                dailyTasks: [
                    'Day 1-2: Redis basics and caching strategies',
                    'Day 3-4: Database query optimization',
                    'Day 5: Load testing with Artillery',
                    'Day 6-7: Optimize API performance'
                ],
                resources: ['Redis University', 'Artillery Docs', 'PostgreSQL Performance'],
                projects: ['Add Redis caching to existing API'],
                assessment: 'Reduce API response time by 50%'
            },
            {
                week: 5,
                topic: 'Microservices & Message Queues',
                focus: 'Service Architecture, RabbitMQ, Docker',
                hours: 22,
                dailyTasks: [
                    'Day 1-2: Microservices architecture patterns',
                    'Day 3-4: RabbitMQ message queues',
                    'Day 5: Docker containerization',
                    'Day 6-7: Build microservices system'
                ],
                resources: ['Martin Fowler Articles', 'RabbitMQ Tutorials', 'Docker Docs'],
                projects: ['Microservices-based order processing system'],
                assessment: 'Design and implement a microservices architecture'
            },
            {
                week: 6,
                topic: 'System Design & Interview Prep',
                focus: 'Scalability, Load Balancing, Mock Interviews',
                hours: 20,
                dailyTasks: [
                    'Day 1-2: System design fundamentals',
                    'Day 3-4: Design URL shortener and Twitter',
                    'Day 5-6: Mock interviews',
                    'Day 7: Portfolio and resume'
                ],
                resources: ['Grokking System Design', 'System Design Primer', 'Pramp'],
                projects: ['Design and document a scalable system'],
                assessment: 'Complete 3 system design mock interviews'
            }
        ]
    },
    'Full Stack Developer': {
        duration: '6 weeks',
        intensity: 'Very High',
        totalHours: 140,
        difficulty: 'Advanced',
        description: 'Master both frontend and backend development with modern tech stack',
        weeks: [
            {
                week: 1,
                topic: 'Full Stack Foundations',
                focus: 'React + Node.js Integration, REST APIs',
                hours: 24,
                dailyTasks: [
                    'Day 1-2: Set up full stack project structure',
                    'Day 3-4: Build REST API with Express',
                    'Day 5-6: Connect React frontend to backend',
                    'Day 7: Authentication flow (frontend + backend)'
                ],
                resources: ['Full Stack Open', 'Traversy Media', 'Net Ninja'],
                projects: ['Full stack authentication system'],
                assessment: 'Build a complete CRUD application'
            },
            {
                week: 2,
                topic: 'Database & State Management',
                focus: 'PostgreSQL, Redux, Data Flow',
                hours: 24,
                dailyTasks: [
                    'Day 1-2: Database design and migrations',
                    'Day 3-4: Redux for complex state',
                    'Day 5-6: Optimistic updates and caching',
                    'Day 7: Build real-time features'
                ],
                resources: ['PostgreSQL Docs', 'Redux Toolkit', 'Socket.io'],
                projects: ['Real-time chat application'],
                assessment: 'Implement complex state management'
            },
            {
                week: 3,
                topic: 'GraphQL & Modern APIs',
                focus: 'Apollo, GraphQL Schema, Resolvers',
                hours: 22,
                dailyTasks: [
                    'Day 1-2: GraphQL fundamentals',
                    'Day 3-4: Apollo Server setup',
                    'Day 5-6: Apollo Client integration',
                    'Day 7: Build GraphQL API'
                ],
                resources: ['Apollo Docs', 'GraphQL.org', 'How to GraphQL'],
                projects: ['GraphQL-based blog platform'],
                assessment: 'Convert REST API to GraphQL'
            },
            {
                week: 4,
                topic: 'Testing & CI/CD',
                focus: 'Jest, React Testing Library, GitHub Actions',
                hours: 23,
                dailyTasks: [
                    'Day 1-2: Unit testing with Jest',
                    'Day 3-4: Integration testing',
                    'Day 5: E2E testing with Playwright',
                    'Day 6-7: Set up CI/CD pipeline'
                ],
                resources: ['Testing Library Docs', 'Jest Docs', 'GitHub Actions'],
                projects: ['Add comprehensive tests to existing project'],
                assessment: 'Achieve 80%+ code coverage'
            },
            {
                week: 5,
                topic: 'Deployment & DevOps',
                focus: 'Docker, AWS/Vercel, Monitoring',
                hours: 24,
                dailyTasks: [
                    'Day 1-2: Docker containerization',
                    'Day 3-4: Deploy to AWS/Vercel',
                    'Day 5: Set up monitoring and logging',
                    'Day 6-7: Performance optimization'
                ],
                resources: ['Docker Docs', 'AWS Tutorials', 'Vercel Docs'],
                projects: ['Deploy full stack app to production'],
                assessment: 'Successfully deploy and monitor production app'
            },
            {
                week: 6,
                topic: 'Capstone Project & Interview Prep',
                focus: 'Build Production App, System Design',
                hours: 23,
                dailyTasks: [
                    'Day 1-4: Build capstone project',
                    'Day 5: System design practice',
                    'Day 6-7: Mock interviews and portfolio'
                ],
                resources: ['Frontend Mentor', 'Pramp', 'LeetCode'],
                projects: ['Production-ready full stack application'],
                assessment: 'Complete 5 mock interviews'
            }
        ]
    },
    'Data Analyst': {
        duration: '6 weeks',
        intensity: 'Medium',
        totalHours: 110,
        difficulty: 'Beginner to Intermediate',
        description: 'Master SQL, Python, and data visualization for analytics roles',
        weeks: [
            {
                week: 1,
                topic: 'SQL Mastery',
                focus: 'Joins, Aggregations, Window Functions',
                hours: 18,
                dailyTasks: [
                    'Day 1-2: SELECT, WHERE, GROUP BY',
                    'Day 3-4: JOINs (INNER, LEFT, RIGHT)',
                    'Day 5-6: Window functions and CTEs',
                    'Day 7: Complex SQL challenges'
                ],
                resources: ['Mode Analytics SQL', 'SQLZoo', 'LeetCode SQL'],
                projects: ['Sales analysis dashboard queries'],
                assessment: 'Solve 30 SQL problems'
            },
            {
                week: 2,
                topic: 'Python for Data Analysis',
                focus: 'Pandas, NumPy, Data Cleaning',
                hours: 20,
                dailyTasks: [
                    'Day 1-2: Python basics and NumPy',
                    'Day 3-4: Pandas DataFrames',
                    'Day 5-6: Data cleaning techniques',
                    'Day 7: Exploratory data analysis project'
                ],
                resources: ['Kaggle Learn', 'Python Data Science Handbook', 'Real Python'],
                projects: ['Clean and analyze messy dataset'],
                assessment: 'Complete Kaggle data cleaning course'
            },
            {
                week: 3,
                topic: 'Statistics & Probability',
                focus: 'Hypothesis Testing, Distributions, A/B Testing',
                hours: 18,
                dailyTasks: [
                    'Day 1-2: Descriptive statistics',
                    'Day 3-4: Probability distributions',
                    'Day 5-6: Hypothesis testing',
                    'Day 7: A/B test analysis'
                ],
                resources: ['Khan Academy Statistics', 'StatQuest YouTube', 'Coursera Statistics'],
                projects: ['A/B test analysis report'],
                assessment: 'Design and analyze an A/B test'
            },
            {
                week: 4,
                topic: 'Data Visualization',
                focus: 'Matplotlib, Seaborn, Tableau',
                hours: 18,
                dailyTasks: [
                    'Day 1-2: Matplotlib basics',
                    'Day 3-4: Seaborn for statistical plots',
                    'Day 5-6: Tableau dashboards',
                    'Day 7: Create comprehensive dashboard'
                ],
                resources: ['Matplotlib Docs', 'Seaborn Gallery', 'Tableau Public'],
                projects: ['Interactive sales dashboard'],
                assessment: 'Build a Tableau dashboard from scratch'
            },
            {
                week: 5,
                topic: 'Business Analytics',
                focus: 'Metrics, KPIs, Cohort Analysis',
                hours: 18,
                dailyTasks: [
                    'Day 1-2: Define business metrics',
                    'Day 3-4: Cohort analysis',
                    'Day 5-6: Funnel analysis',
                    'Day 7: Case study presentation'
                ],
                resources: ['Lean Analytics Book', 'DataCamp', 'StrataScratch'],
                projects: ['User retention cohort analysis'],
                assessment: 'Present business insights to stakeholders'
            },
            {
                week: 6,
                topic: 'Interview Preparation',
                focus: 'SQL Challenges, Case Studies, Behavioral',
                hours: 18,
                dailyTasks: [
                    'Day 1-3: SQL interview questions',
                    'Day 4-5: Take-home case studies',
                    'Day 6-7: Mock interviews'
                ],
                resources: ['StrataScratch', 'DataLemur', 'Interview Query'],
                projects: ['Complete 3 take-home assignments'],
                assessment: 'Pass 3 mock data analyst interviews'
            }
        ]
    },
    'DevOps Engineer': {
        duration: '6 weeks',
        intensity: 'High',
        totalHours: 130,
        difficulty: 'Intermediate to Advanced',
        description: 'Master CI/CD, containerization, cloud infrastructure, and automation',
        weeks: [
            {
                week: 1,
                topic: 'Linux & Shell Scripting',
                focus: 'Command Line, Bash Scripts, System Administration',
                hours: 22,
                dailyTasks: [
                    'Day 1-2: Linux fundamentals and file system',
                    'Day 3-4: Shell scripting basics',
                    'Day 5-6: Process management and networking',
                    'Day 7: Automation scripts'
                ],
                resources: ['Linux Journey', 'Bash Scripting Guide', 'OverTheWire'],
                projects: ['System monitoring bash script'],
                assessment: 'Write 10 useful automation scripts'
            },
            {
                week: 2,
                topic: 'Docker & Containerization',
                focus: 'Containers, Images, Docker Compose',
                hours: 22,
                dailyTasks: [
                    'Day 1-2: Docker basics and images',
                    'Day 3-4: Dockerfile best practices',
                    'Day 5-6: Docker Compose multi-container apps',
                    'Day 7: Containerize full stack application'
                ],
                resources: ['Docker Docs', 'Docker Mastery Course', 'Play with Docker'],
                projects: ['Dockerized microservices application'],
                assessment: 'Containerize and deploy an application'
            },
            {
                week: 3,
                topic: 'Kubernetes Fundamentals',
                focus: 'Pods, Services, Deployments, ConfigMaps',
                hours: 22,
                dailyTasks: [
                    'Day 1-2: Kubernetes architecture',
                    'Day 3-4: Pods and Services',
                    'Day 5-6: Deployments and scaling',
                    'Day 7: Deploy app to Kubernetes'
                ],
                resources: ['Kubernetes Docs', 'KodeKloud', 'Kubernetes the Hard Way'],
                projects: ['Deploy microservices on K8s cluster'],
                assessment: 'Pass CKA practice exam'
            },
            {
                week: 4,
                topic: 'CI/CD Pipelines',
                focus: 'GitHub Actions, Jenkins, GitLab CI',
                hours: 21,
                dailyTasks: [
                    'Day 1-2: Git workflows and branching',
                    'Day 3-4: GitHub Actions basics',
                    'Day 5-6: Build complete CI/CD pipeline',
                    'Day 7: Automated testing and deployment'
                ],
                resources: ['GitHub Actions Docs', 'Jenkins Tutorial', 'GitLab CI'],
                projects: ['Full CI/CD pipeline with tests and deployment'],
                assessment: 'Set up automated deployment pipeline'
            },
            {
                week: 5,
                topic: 'Infrastructure as Code',
                focus: 'Terraform, Ansible, Cloud Provisioning',
                hours: 22,
                dailyTasks: [
                    'Day 1-2: Terraform basics',
                    'Day 3-4: Provision AWS infrastructure',
                    'Day 5-6: Ansible configuration management',
                    'Day 7: Complete IaC project'
                ],
                resources: ['Terraform Docs', 'HashiCorp Learn', 'Ansible Docs'],
                projects: ['Provision cloud infrastructure with Terraform'],
                assessment: 'Deploy infrastructure using IaC'
            },
            {
                week: 6,
                topic: 'Monitoring & Interview Prep',
                focus: 'Prometheus, Grafana, System Design',
                hours: 21,
                dailyTasks: [
                    'Day 1-2: Prometheus monitoring',
                    'Day 3-4: Grafana dashboards',
                    'Day 5: DevOps system design',
                    'Day 6-7: Mock interviews'
                ],
                resources: ['Prometheus Docs', 'Grafana Tutorials', 'Pramp'],
                projects: ['Complete monitoring stack'],
                assessment: 'Complete 3 DevOps mock interviews'
            }
        ]
    }
};

// Add more roles with similar detailed structure
export const ROLE_CATEGORIES = {
    'Development': ['Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'Mobile Developer'],
    'Data & Analytics': ['Data Analyst', 'Data Scientist', 'ML Engineer', 'Business Analyst'],
    'Infrastructure': ['DevOps Engineer', 'Cloud Architect', 'System Administrator'],
    'Quality & Security': ['QA Engineer', 'Security Engineer'],
    'Design & Product': ['UI/UX Designer', 'Product Manager', 'Technical Writer']
};
