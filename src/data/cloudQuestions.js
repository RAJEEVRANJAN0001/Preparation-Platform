// Comprehensive Cloud Computing Questions (200 questions)
export const cloudQuestions = [
    {
        id: 1,
        question: "For the ____ model, the security boundary may be defined for the vendor to include the software framework and middleware layer.",
        options: ["SaaS", "IaaS", "All of the mentioned options", "PaaS"],
        answer: 3,
        explanation: "In Platform as a Service (PaaS), the cloud provider manages the underlying infrastructure (hardware, OS) as well as the middleware and runtime environment. This means the security boundary for the vendor extends to include these layers, whereas in IaaS, the user is responsible for middleware and the OS."
    },
    {
        id: 2,
        question: "Which of the following allows you to create instances of the MySQL database to support your Web sites?",
        options: ["Amazon Simple Queue Service", "Amazon Simple Storage System", "Amazon Elastic Compute Cloud", "Amazon Relational Database Service"],
        answer: 3,
        explanation: "Amazon RDS (Relational Database Service) is a managed service that makes it easy to set up, operate, and scale a relational database in the cloud. It supports multiple database engines, including MySQL."
    },
    {
        id: 3,
        question: "Point out the correct statement.",
        options: ["PaaS systems offer a way to create user interfaces", "All of the mentioned options", "Platforms cannot be based on specific types of development languages, application frameworks, or other constructs", "In a CaaS model, customers may interact with the software to enter and retrieve data"],
        answer: 0,
        explanation: "Many PaaS offerings provide tools and frameworks (like drag-and-drop builders or specific UI libraries) to help developers create user interfaces for their applications."
    },
    {
        id: 4,
        question: "Which cloud computing feature allows for server consolidation resulting in increased asset utilization and decreased data center energy needs?",
        options: ["Automation", "Provisioning", "Virtualization", "Governance"],
        answer: 2,
        explanation: "Virtualization allows multiple virtual machines to run on a single physical server. This consolidation increases the utilization of hardware resources and reduces the number of physical servers needed, thereby lowering energy consumption."
    },
    {
        id: 5,
        question: "Which of the following system does not provision storage to most users?",
        options: ["PaaS", "SaaS", "IaaS", "CaaS"],
        answer: 1,
        explanation: "In Software as a Service (SaaS), the user consumes the application as a product. While the application uses storage, the user does not 'provision' raw storage resources (like allocating a hard drive) in the same way they would in IaaS or PaaS."
    },
    {
        id: 6,
        question: "An admin is planning to monitor the ELB. Which of the below mentioned services does not help the admin capture the monitoring information about the ELB activity?",
        options: ["ELB health check", "CloudWatch metrics", "ELB Access logs", "ELB API calls with CloudTrail"],
        answer: 3,
        explanation: "CloudTrail captures API calls made to *manage* the ELB (like creating or deleting it), but it does not monitor the traffic activity or performance of the ELB itself. CloudWatch and Access Logs are used for activity monitoring."
    },
    {
        id: 7,
        question: "An operating system running on a Type ____ VM is full virtualization.",
        options: ["3", "2", "1", "All of the mentioned options"],
        answer: 2,
        explanation: "Type 1 hypervisors (bare-metal) run directly on the hardware and are commonly associated with full virtualization in enterprise cloud environments, where the guest OS is fully isolated and unaware of the virtualization."
    },
    {
        id: 8,
        question: "Which of the following SaaS platform is with an exposed API?",
        options: ["amazon.com", "salesforce.com", "all of the mentioned options", "flipkart.com"],
        answer: 1,
        explanation: "Salesforce is a prime example of a SaaS platform that exposes a comprehensive API, allowing developers to extend its functionality and integrate it with other systems, effectively blurring the line with PaaS."
    },
    {
        id: 9,
        question: "____ allows your HTTP backend to control and accept only requests originating from Amazon API Gateway, even if the backend is publicly accessible.",
        options: ["Amazon EBS", "Amazon S3", "Client-Side SSL Certificates", "Amazon Cognito"],
        answer: 2,
        explanation: "API Gateway can generate a client-side SSL certificate and use it to sign requests to the backend. The backend can then verify this certificate to ensure the request originated from API Gateway."
    },
    {
        id: 10,
        question: "When you first create an Amazon Web Services (AWS) account, you begin with a single sign-in identity that has complete access to all AWS services and resources in the account. This identity is called the ____.",
        options: ["Super user", "None of the mentioned options", "Main user", "Root user"],
        answer: 3,
        explanation: "The initial identity created with an AWS account is the Root User. It has unrestricted access to all resources and billing information and should be secured immediately."
    },
    {
        id: 11,
        question: "What cloud computing service is commonly used to develop apps and deploy functions without maintaining a server?",
        options: ["Delta as a service", "Function as a service", "Serverless as a service", "Lambda as a service"],
        answer: 1,
        explanation: "Function as a Service (FaaS) allows developers to write and deploy code (functions) that run in response to events without provisioning or managing any servers."
    },
    {
        id: 12,
        question: "From the standpoint of a ____, it makes no sense to offer non-standard machine instances to customers.",
        options: ["PaaS", "CaaS", "IaaS", "AaaS"],
        answer: 2,
        explanation: "Infrastructure as a Service (IaaS) providers rely on economies of scale and automation. Offering standardized instance types allows them to manage their massive hardware fleets efficiently."
    },
    {
        id: 13,
        question: "Azure Storage plays the same role in Azure that ____ plays in Amazon Web Services.",
        options: ["S3", "EC2", "EC3", "All of the mentioned options"],
        answer: 0,
        explanation: "Azure Blob Storage is Microsoft Azure's object storage solution, which is the direct equivalent of Amazon S3 (Simple Storage Service)."
    },
    {
        id: 14,
        question: "In ____, the virtual machine simulates hardware, so it can be independent of the underlying system hardware.",
        options: ["Full virtualization", "Emulation", "None of the mentioned options", "Paravirtualization"],
        answer: 0,
        explanation: "In full virtualization, the hypervisor simulates the complete hardware environment for the guest OS. This allows the guest OS to run unmodified and be independent of the actual underlying hardware."
    },
    {
        id: 15,
        question: "Which of these types of application tasks make sense to run in a serverless environment?",
        options: ["Big data, analytics-heavy executions", "Rapid, reactive and event-based executions", "Monte Carlo simulations", "None of the above mentioned options"],
        answer: 1,
        explanation: "Serverless architectures (like AWS Lambda) are designed for short-lived, event-driven tasks. Long-running or constant-load tasks like big data analytics are often better suited for dedicated instances due to cost and timeout constraints."
    },
    {
        id: 16,
        question: "Which of the following is the most important area of concern in cloud computing?",
        options: ["All of the mentioned options", "Security", "Scalability", "Storage"],
        answer: 1,
        explanation: "While all factors are important, Security is consistently cited as the primary concern for organizations moving to the cloud due to the shared responsibility model and data privacy implications."
    },
    {
        id: 17,
        question: "What exactly constitutes the backbone of the cloud?",
        options: ["Regions and availability zones.", "AWS network that connects various datacenters, internet, AWS regions, private offices etc.,", "AWS support team", "Core services like compute, storage and RDS."],
        answer: 1,
        explanation: "The physical network infrastructure that interconnects data centers, availability zones, and regions is the fundamental backbone that enables cloud services to function."
    },
    {
        id: 18,
        question: "When building data center clouds, certain network performance characteristics should be closely evaluated. What are the two most important characteristics?",
        options: ["Network routing information loss", "Network security", "Network buffer overflow rate", "Network latency and Network packet loss rate"],
        answer: 3,
        explanation: "Latency (delay) and packet loss are critical metrics that directly impact the performance and reliability of cloud applications and data replication."
    },
    {
        id: 19,
        question: "Which AWS deployment model allows you to run your applications and store your data on the cloud, while still maintaining some components on-premises?",
        options: ["IaaS deployment", "PaaS deployment", "Hybrid deployment", "On-premises deployment"],
        answer: 2,
        explanation: "A Hybrid deployment connects cloud-based resources with on-premises infrastructure, allowing applications and data to be shared between them."
    },
    {
        id: 20,
        question: "Which of the following is an online backup and storage system?",
        options: ["Amazon Simple Storage System", "Amazon Simple Notification Service", "Amazon Simple Queue Service", "Amazon Elastic Compute Cloud"],
        answer: 0,
        explanation: "Amazon S3 (Simple Storage Service) is designed for online data storage and backup, offering high durability and availability."
    },
    {
        id: 21,
        question: "Which of the following is the simplest unmanaged cloud storage device?",
        options: ["antivirus utility", "online image utility", "None of the mentioned options", "file transfer utility"],
        answer: 3,
        explanation: "In the context of basic unmanaged storage, a simple file transfer utility (like FTP/SFTP tools) represents the most basic way to move data to a storage location without complex management features."
    },
    {
        id: 22,
        question: "Secure shell (SSH) network protocol is used for ____.",
        options: ["secure data communication", "remote command execution", "all of the mentioned", "remote command-line login"],
        answer: 2,
        explanation: "SSH is a versatile protocol used for secure remote login, executing commands on remote machines, and securing data communication (tunneling)."
    },
    {
        id: 23,
        question: "Which approach is generally considered the easiest when beginning to adopt a cloud computing deployment model?",
        options: ["Trying it out in a testing environment", "Trying it out at the beginning of a new project", "Trying it out directly in a production environment", "Trying it out in a staging environment"],
        answer: 0,
        explanation: "Starting with a testing environment minimizes risk and allows teams to learn and experiment with cloud technologies without affecting production systems."
    },
    {
        id: 24,
        question: "Point out the wrong statement.",
        options: ["Google uses hardware virtualization", "Load balancing virtualizes systems and resources by mapping a logical address to a physical address", "Multiple instances of various Google applications are running on different hosts", "All of the mentioned options"],
        answer: 0,
        explanation: "Historically, Google's infrastructure relied heavily on containerization (OS-level virtualization) rather than traditional hardware virtualization, making this statement the 'wrong' one in the context of classic cloud architecture questions."
    },
    {
        id: 25,
        question: "Which virtualization standard does the WebSphere Application Server Hypervisor Edition use?",
        options: ["Open Virtual Appliance", "Open Virtualization Format", "Interoperable Image Format", "Common Image Format"],
        answer: 1,
        explanation: "OVF (Open Virtualization Format) is a standard for packaging and distributing virtual appliances, used by WebSphere Hypervisor Edition."
    },
    {
        id: 26,
        question: "Which of the following type of virtualization is found in a hypervisor such as Microsoft's Hyper-V?",
        options: ["None of the mentioned above", "Paravirtualization", "Emulation", "Full virtualization"],
        answer: 3,
        explanation: "Hyper-V is a Type 1 hypervisor that supports full virtualization, allowing it to run unmodified guest operating systems. It also supports paravirtualization for optimized performance."
    },
    {
        id: 27,
        question: "Which of the following feature make cloud-based storage systems highly reliable?",
        options: ["Redundant name servers", "Replication", "Redundant networks", "All of the mentioned options"],
        answer: 1,
        explanation: "Replication involves storing multiple copies of data across different physical nodes or locations. This ensures that if one node fails, the data is still accessible from another."
    },
    {
        id: 28,
        question: "Scaling ____ indefinitely leads you to an architecture with a large number of servers.",
        options: ["out", "all of the mentioned options", "vertically", "in"],
        answer: 0,
        explanation: "Scaling out (horizontal scaling) involves adding more servers to the pool to handle increased load, as opposed to scaling up (vertical scaling) which adds power to a single server."
    },
    {
        id: 29,
        question: "Which of the following factor can be considered to determine WAN Capacity?",
        options: ["Network interconnect technologies", "Overall system traffic", "Routing and switching protocols", "All of the mentioned options"],
        answer: 3,
        explanation: "Determining WAN capacity requires considering the traffic load, the technologies used for interconnection, and the efficiency of routing protocols."
    },
    {
        id: 30,
        question: "Which of the following is a service that creates and manages virtual network interfaces.",
        options: ["VMware vCompute", "VMware vNetwork", "Application services", "VMware vStorage"],
        answer: 1,
        explanation: "VMware vNetwork provides the virtualization of networking components, including the creation and management of virtual network interfaces (vNICs) and switches."
    },
    {
        id: 31,
        question: "Which of the following is NOT a cloud service provider?",
        options: ["AWS", "GCP", "IBM Cloud", "Microsoft Gsuite"],
        answer: 3,
        explanation: "Microsoft G Suite (now Google Workspace, or Microsoft 365) is a SaaS productivity suite, not a Cloud Service Provider (CSP) platform like AWS, GCP, or IBM Cloud."
    },
    {
        id: 32,
        question: "Which of the following cloud deployment models does not provide the highest level of control over the infrastructure and security?",
        options: ["Hybrid cloud", "Public cloud", "Community cloud", "Private cloud"],
        answer: 1,
        explanation: "In a Public Cloud, resources are shared among multiple tenants and managed by the provider, offering the least amount of direct control over the underlying infrastructure compared to Private or Hybrid models."
    },
    {
        id: 33,
        question: "Which of the following statement is true?",
        options: ["Hybrid cloud deployment models offers the most control", "Private cloud deployment models offers the most control over the infrastructure", "Public cloud deployment models offers the most control", "Community cloud deployment models offers the most control"],
        answer: 1,
        explanation: "Private clouds are dedicated to a single organization, providing the highest level of control over security, compliance, and infrastructure configuration."
    },
    {
        id: 34,
        question: "Which form of virtualization allows multiple operating systems to run on a single physical machine?",
        options: ["Application virtualization", "Storage virtualization", "Server virtualization", "Network virtualization"],
        answer: 2,
        explanation: "Server virtualization partitions a physical server into multiple virtual servers, allowing multiple OS instances to run concurrently on the same hardware."
    },
    {
        id: 35,
        question: "Which of the following is a characteristic of the backbone of the cloud?",
        options: ["It is responsible for user authentication", "It provides end-users with local storage", "It provides high-speed connectivity between data centers", "It relies solely on physical hardware"],
        answer: 2,
        explanation: "The cloud backbone is the high-capacity network infrastructure that connects data centers, ensuring fast and reliable data transfer."
    },
    {
        id: 36,
        question: "What are some common use cases for IaaS?",
        options: ["Sales forecasting (SaaS)", "Email management (SaaS)", "Web hosting, application development, and disaster recovery", "Graphic design (SaaS)"],
        answer: 2,
        explanation: "IaaS provides the raw infrastructure (compute, storage, network) needed for hosting websites, building and testing applications, and storing backups for disaster recovery."
    },
    {
        id: 37,
        question: "Microsoft 365 is an example for which of the cloud service model?",
        options: ["Software as a Service", "Infrastructure as a Service", "Platform as a Service", "None"],
        answer: 0,
        explanation: "Microsoft 365 (formerly Office 365) provides productivity applications (Word, Excel, etc.) over the internet, which is the definition of SaaS."
    },
    {
        id: 38,
        question: "A company wants to use AWS to host its internal HR management system, but does not want to manage any of the underlying infrastructure. Which AWS best fit for this scenario?",
        options: ["Software as a Service (SaaS)", "None", "Platform as a Service (PaaS)", "Infrastructure as a Service (IaaS)"],
        answer: 2,
        explanation: "If they are hosting a custom application but want to avoid infrastructure management (OS, patching), PaaS is the correct model. If they were buying an HR app, it would be SaaS, but 'hosting' implies PaaS."
    },
    {
        id: 39,
        question: "A company wants to build a new web application but does not want to manage the underlying operating system or infrastructure. Which AWS service model fits?",
        options: ["None", "Platform as a Service (PaaS)", "Software as a Service (SaaS)", "Infrastructure as a Service (IaaS)"],
        answer: 1,
        explanation: "PaaS is designed specifically for building and deploying applications without the complexity of managing the underlying servers or operating systems."
    },
    {
        id: 40,
        question: "Which cloud service model allows users to access software applications over the internet?",
        options: ["PaaS", "CaaS", "IaaS", "SaaS"],
        answer: 3,
        explanation: "SaaS delivers software applications over the internet, usually via a web browser, eliminating the need for local installation."
    },
    {
        id: 41,
        question: "What is used to logically assign and separate physical resources such as memory and CPU in a cloud computing model?",
        options: ["A load balancer", "A hypervisor", "A blade chassis", "Bios"],
        answer: 1,
        explanation: "A hypervisor (or Virtual Machine Monitor) is the software layer that sits between the hardware and virtual machines, managing the allocation of physical resources like CPU and memory to the VMs."
    },
    {
        id: 42,
        question: "Which of the following is another name for the system virtual machine?",
        options: ["software virtual machine", "none of the mentioned options", "hardware virtual machine", "real machine"],
        answer: 2,
        explanation: "A system virtual machine (as opposed to a process VM) provides a complete system platform that supports the execution of a complete operating system, often called a hardware virtual machine."
    },
    {
        id: 43,
        question: "Which of the following is the most widely used technique for abstraction?",
        options: ["None of the mentioned options", "Load scaling", "Load scheduling", "Load balancing"],
        answer: 0,
        explanation: "The most widely used technique for abstraction in cloud computing is 'Virtualization'. Since it's not listed, 'None of the mentioned options' is correct."
    },
    {
        id: 44,
        question: "Which of the following is used to evaluate your own cloud application's network performance?",
        options: ["All of the mentioned options", "Path Cloud", "View Cloud", "PathView Cloud"],
        answer: 3,
        explanation: "PathView Cloud is a specific tool/service used for network performance management and evaluation in cloud environments."
    },
    {
        id: 45,
        question: "Which standard TCP port is assigned for contacting SSH servers?",
        options: ["port 24", "port 23", "port 21", "port 22"],
        answer: 3,
        explanation: "Port 22 is the standard default TCP port for the Secure Shell (SSH) protocol."
    },
    {
        id: 46,
        question: "Which of the following operating systems support operating system virtualization?",
        options: ["Windows NT", "Compliance", "Sun Solaris", "Windows XP"],
        answer: 2,
        explanation: "Sun Solaris was a pioneer in OS-level virtualization with its 'Solaris Zones' (Containers) technology."
    },
    {
        id: 47,
        question: "Which of the following provides system resource access to virtual machines?",
        options: ["VMC", "All of the mentioned", "VNM", "VMM"],
        answer: 3,
        explanation: "VMM stands for Virtual Machine Monitor, which is another name for a hypervisor. It is responsible for providing VMs with access to system resources."
    },
    {
        id: 48,
        question: "Which of the following types of virtualization is also characteristic of cloud computing?",
        options: ["CPU", "Application", "Storage", "All of the mentioned options"],
        answer: 3,
        explanation: "Cloud computing relies on the virtualization of all these resources: CPU (Compute), Storage, and Applications (SaaS)."
    },
    {
        id: 49,
        question: "How many types of Cloud are there in Deployment Models?",
        options: ["2", "4", "5", "3"],
        answer: 1,
        explanation: "There are 4 main cloud deployment models: Public, Private, Hybrid, and Community."
    },
    {
        id: 50,
        question: "The ____ allows systems and services to be accessible by a group of organizations.",
        options: ["public cloud", "hybrid cloud", "community cloud", "private cloud"],
        answer: 2,
        explanation: "A Community Cloud is shared by several organizations and supports a specific community that has shared concerns (e.g., mission, security requirements, policy)."
    }
];
