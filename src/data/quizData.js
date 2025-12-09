export const quizTopics = [
    { id: 'dsa', name: 'Data Structures', count: 15, difficulty: 'High' },
    { id: 'os', name: 'Operating Systems', count: 10, difficulty: 'Medium' },
    { id: 'dbms', name: 'DBMS & SQL', count: 12, difficulty: 'Medium' },
    { id: 'web', name: 'Web Technologies', count: 8, difficulty: 'Easy' },
];

export const quizzes = {
    dsa: [
        {
            id: 1,
            question: "What is the time complexity of searching in a balanced Binary Search Tree (BST)?",
            options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
            answer: 1, // Index 1: O(log n)
            explanation: "In a balanced BST (like AVL or Red-Black tree), the height is log(n), making search operations logarithmic."
        },
        {
            id: 2,
            question: "Which data structure is typically used to implement a recursive algorithm iteratively?",
            options: ["Queue", "Stack", "Linked List", "Tree"],
            answer: 1,
            explanation: "A Stack mimics the call stack used in recursion, allowing iterative implementation of DFS etc."
        },
        {
            id: 3,
            question: "In specialized Graph algorithms, what is Dijkstra's algorithm used for?",
            options: ["Topological Sorting", "Shortest Path (Weighted)", "Minimum Spanning Tree", "Cycle Detection"],
            answer: 1,
            explanation: "Dijkstra's is used for finding the shortest paths between nodes in a graph with non-negative edge weights."
        },
        {
            id: 4,
            question: "What is the worst-case complexity of QuickSort?",
            options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
            answer: 1,
            explanation: "QuickSort degrades to O(n²) when the pivot selection is poor (e.g., sorted array with first element pivot)."
        }
    ],
    os: [
        {
            id: 1,
            question: "Which of the following is NOT a state in the process lifecycle?",
            options: ["Running", "Blocked", "Deleted", "Ready"],
            answer: 2,
            explanation: "Processes are 'Terminated', not 'Deleted'. Deleted usually refers to files."
        },
        {
            id: 2,
            question: "What is 'Thrashing' in the context of OS memory management?",
            options: ["Excessive paging", "Disk failure", "CPU overheating", "Process deadlock"],
            answer: 0,
            explanation: "Thrashing occurs when the OS spends more time swapping pages in/out of memory than executing processes."
        },
        {
            id: 3,
            question: "Semaphore is a variable used for...?",
            options: ["Storing memory addresses", "Process Synchronization", "Deadlock creation", "File management"],
            answer: 1,
            explanation: "Semaphores are synchronization primitives used to control access to common resources."
        }
    ],
    dbms: [
        {
            id: 1,
            question: "Which normal form removes transitive dependencies?",
            options: ["1NF", "2NF", "3NF", "BCNF"],
            answer: 2,
            explanation: "3NF ensures that non-key attributes are not dependent on other non-key attributes (transitive dependency)."
        },
        {
            id: 2,
            question: "ACID properties stand for...?",
            options: [
                "Atomicity, Consistency, Isolation, Durability",
                "Availability, Consistency, Isolation, Durability",
                "Atomicity, Concurrency, Isolation, Database",
                "Atomicity, Consistency, Integration, Durability"
            ],
            answer: 0,
            explanation: "These are the standard properties that guarantee database transactions are processed reliably."
        }
    ],
    web: [
        {
            id: 1,
            question: "What does the Virtual DOM in React do?",
            options: [
                "Directly updates the HTML",
                "Minimizes direct DOM manipulation",
                "Is slower than real DOM",
                "Compiles JS to C++"
            ],
            answer: 1,
            explanation: "React updates the Virtual DOM first, compares it with the previous state (diffing), and only updates changed elements in the real DOM."
        }
    ]
}

export const getQuizByTopic = (topicId) => {
    return quizzes[topicId] || [];
}
