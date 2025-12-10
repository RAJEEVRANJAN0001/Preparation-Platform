// Topic Data with Real Content
export const topicsData = {
    'dynamic-programming': {
        id: 'dynamic-programming',
        title: 'Dynamic Programming Patterns',
        difficulty: 'Hard',
        category: 'DSA',
        time: '45 min',
        description: 'Master the most common DP patterns used in FAANG interviews',
        overview: 'Dynamic Programming is a method for solving complex problems by breaking them down into simpler subproblems. This topic covers the essential patterns you need to crack coding interviews.',
        keyPoints: [
            'Understanding optimal substructure',
            'Identifying overlapping subproblems',
            'Memoization vs Tabulation approaches',
            'Common patterns: Fibonacci, Knapsack, LCS, LIS'
        ],
        sections: [
            {
                title: '1. Introduction to DP',
                content: `Dynamic Programming is an algorithmic paradigm that solves complex problems by breaking them into simpler subproblems and storing the results to avoid redundant calculations.

**Key Characteristics:**
- Optimal Substructure: Optimal solution contains optimal solutions to subproblems
- Overlapping Subproblems: Same subproblems are solved multiple times

**When to Use DP:**
- Problem asks for optimization (min/max)
- Problem asks for counting total ways
- Problem involves making choices at each step`
            },
            {
                title: '2. Top DP Patterns',
                content: `**1. Fibonacci Pattern**
- Classic: Fibonacci numbers, Climbing Stairs
- Formula: dp[i] = dp[i-1] + dp[i-2]

**2. 0/1 Knapsack**
- Subset Sum, Partition Equal Subset Sum
- Choice: Include or exclude current item

**3. Unbounded Knapsack**
- Coin Change, Rod Cutting
- Unlimited use of items

**4. Longest Common Subsequence (LCS)**
- Edit Distance, Longest Palindromic Subsequence
- Compare two sequences

**5. Longest Increasing Subsequence (LIS)**
- Russian Doll Envelopes, Maximum Length of Pair Chain
- Find increasing order`
            },
            {
                title: '3. Memoization vs Tabulation',
                content: `**Memoization (Top-Down)**
\`\`\`python
def fib_memo(n, memo={}):
    if n in memo: return memo[n]
    if n <= 1: return n
    memo[n] = fib_memo(n-1, memo) + fib_memo(n-2, memo)
    return memo[n]
\`\`\`

**Tabulation (Bottom-Up)**
\`\`\`python
def fib_tab(n):
    if n <= 1: return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]
\`\`\`

**When to Use:**
- Memoization: Easier to write, handles sparse cases
- Tabulation: Better space optimization, no recursion overhead`
            }
        ],
        practiceProblems: [
            { title: 'Climbing Stairs', difficulty: 'Easy', link: 'https://leetcode.com/problems/climbing-stairs/' },
            { title: 'House Robber', difficulty: 'Medium', link: 'https://leetcode.com/problems/house-robber/' },
            { title: 'Coin Change', difficulty: 'Medium', link: 'https://leetcode.com/problems/coin-change/' },
            { title: 'Longest Increasing Subsequence', difficulty: 'Medium', link: 'https://leetcode.com/problems/longest-increasing-subsequence/' },
            { title: 'Edit Distance', difficulty: 'Hard', link: 'https://leetcode.com/problems/edit-distance/' }
        ],
        resources: [
            { title: 'Best DSA concepts for FAANG', type: 'PDF', link: '/PLACEMENT NOTES/Best DSA concepts for FAANG.pdf' },
            { title: 'DSA Complete Theory Notes', type: 'PDF', link: '/PLACEMENT NOTES/DSA in python complete theory hand writing notes (1).pdf' }
        ]
    },

    'system-design-caching': {
        id: 'system-design-caching',
        title: 'System Design: Caching Strategies',
        difficulty: 'Medium',
        category: 'System Design',
        time: '30 min',
        description: 'Learn caching strategies to build scalable systems',
        overview: 'Caching is a critical component of system design that dramatically improves performance and reduces database load. Master the strategies used by top tech companies.',
        keyPoints: [
            'Cache eviction policies (LRU, LFU, FIFO)',
            'Cache invalidation strategies',
            'Distributed caching with Redis/Memcached',
            'CDN and browser caching'
        ],
        sections: [
            {
                title: '1. Why Caching?',
                content: `**Benefits:**
- **Performance**: 10-100x faster than database queries
- **Scalability**: Reduces load on primary database
- **Cost**: Cheaper than scaling database servers
- **Availability**: Serves data even if DB is down

**Use Cases:**
- Frequently accessed data (user profiles, product catalogs)
- Expensive computations (recommendations, analytics)
- Static content (images, CSS, JS files)
- Session data (user authentication)`
            },
            {
                title: '2. Cache Eviction Policies',
                content: `**LRU (Least Recently Used)**
- Evicts least recently accessed items
- Best for: General purpose caching
- Implementation: HashMap + Doubly Linked List

**LFU (Least Frequently Used)**
- Evicts items with lowest access count
- Best for: Long-term popular items
- Implementation: HashMap + Min Heap

**FIFO (First In First Out)**
- Evicts oldest items first
- Best for: Time-sensitive data
- Implementation: Queue

**TTL (Time To Live)**
- Items expire after fixed duration
- Best for: Temporary data (OTPs, sessions)`
            },
            {
                title: '3. Cache Strategies',
                content: `**Cache-Aside (Lazy Loading)**
\`\`\`python
def get_user(user_id):
    # Check cache first
    user = cache.get(user_id)
    if user:
        return user
    # Cache miss - fetch from DB
    user = db.query(user_id)
    cache.set(user_id, user, ttl=3600)
    return user
\`\`\`

**Write-Through**
- Write to cache and DB simultaneously
- Pros: Data consistency
- Cons: Higher latency

**Write-Behind (Write-Back)**
- Write to cache immediately, DB asynchronously
- Pros: Fast writes
- Cons: Risk of data loss

**Read-Through**
- Cache loads data automatically on miss
- Pros: Simplified application code`
            },
            {
                title: '4. Distributed Caching',
                content: `**Redis**
- In-memory data structure store
- Supports strings, lists, sets, hashes
- Persistence options (RDB, AOF)
- Pub/Sub messaging

**Memcached**
- Simple key-value store
- Multi-threaded
- No persistence
- Faster for simple use cases

**Consistency Challenges:**
- Cache stampede: Multiple requests on cache miss
- Stale data: Cache not updated after DB write
- Solution: Cache warming, versioning, invalidation`
            }
        ],
        practiceProblems: [
            { title: 'LRU Cache Implementation', difficulty: 'Medium', link: 'https://leetcode.com/problems/lru-cache/' },
            { title: 'Design a Cache System', difficulty: 'Hard', link: 'https://www.geeksforgeeks.org/design-a-cache-system/' },
            { title: 'Implement LFU Cache', difficulty: 'Hard', link: 'https://leetcode.com/problems/lfu-cache/' }
        ],
        resources: [
            { title: 'System Design Basics', type: 'PDF', link: '/PLACEMENT NOTES/System Design Basics.pdf' }
        ]
    },

    'react-performance': {
        id: 'react-performance',
        title: 'React Performance Optimization',
        difficulty: 'Medium',
        category: 'Web Dev',
        time: '25 min',
        description: 'Optimize React apps for production-level performance',
        overview: 'Learn advanced techniques to make your React applications blazing fast, from code splitting to memoization strategies.',
        keyPoints: [
            'React.memo and useMemo hooks',
            'Code splitting with React.lazy',
            'Virtual scrolling for large lists',
            'Profiling with React DevTools'
        ],
        sections: [
            {
                title: '1. React Rendering Basics',
                content: `**When Does React Re-render?**
1. State changes (useState, useReducer)
2. Props changes
3. Parent component re-renders
4. Context value changes

**Performance Issues:**
- Unnecessary re-renders
- Large component trees
- Heavy computations on every render
- Unoptimized list rendering`
            },
            {
                title: '2. Memoization Techniques',
                content: `**React.memo (Component Level)**
\`\`\`javascript
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* Expensive render */}</div>
})
\`\`\`
Only re-renders if props change

**useMemo (Value Level)**
\`\`\`javascript
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b)
}, [a, b])
\`\`\`
Caches computed values

**useCallback (Function Level)**
\`\`\`javascript
const handleClick = useCallback(() => {
  doSomething(a, b)
}, [a, b])
\`\`\`
Prevents function recreation`
            },
            {
                title: '3. Code Splitting',
                content: `**React.lazy + Suspense**
\`\`\`javascript
const HeavyComponent = React.lazy(() => 
  import('./HeavyComponent')
)

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <HeavyComponent />
    </Suspense>
  )
}
\`\`\`

**Route-based Splitting**
\`\`\`javascript
const Dashboard = lazy(() => import('./Dashboard'))
const Profile = lazy(() => import('./Profile'))

<Routes>
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/profile" element={<Profile />} />
</Routes>
\`\`\`

**Benefits:**
- Smaller initial bundle size
- Faster page loads
- Better user experience`
            },
            {
                title: '4. List Optimization',
                content: `**Virtualization (react-window)**
\`\`\`javascript
import { FixedSizeList } from 'react-window'

<FixedSizeList
  height={600}
  itemCount={10000}
  itemSize={50}
>
  {({ index, style }) => (
    <div style={style}>Row {index}</div>
  )}
</FixedSizeList>
\`\`\`

**Key Prop Optimization**
- Use stable, unique keys
- Avoid index as key for dynamic lists
- Helps React identify which items changed`
            }
        ],
        practiceProblems: [
            { title: 'Optimize Re-renders', difficulty: 'Medium', link: 'https://react.dev/reference/react/memo' },
            { title: 'Implement Virtual Scrolling', difficulty: 'Hard', link: 'https://github.com/bvaughn/react-window' },
            { title: 'Code Split a Large App', difficulty: 'Medium', link: 'https://react.dev/reference/react/lazy' }
        ],
        resources: [
            { title: 'React Handwritten Notes', type: 'PDF', link: '/PLACEMENT NOTES/React-Handwritten-notes.pdf' },
            { title: '30 Days of React eBook', type: 'PDF', link: '/PLACEMENT NOTES/30-days-of-react-ebook-fullstackio.pdf' }
        ]
    },

    'database-indexing': {
        id: 'database-indexing',
        title: 'Database Indexing Strategies',
        difficulty: 'Hard',
        category: 'DBMS',
        time: '40 min',
        description: 'Master database indexing for query optimization',
        overview: 'Database indexes are crucial for query performance. Learn when and how to create indexes, and understand the trade-offs involved.',
        keyPoints: [
            'B-Tree and Hash indexes',
            'Composite indexes and index selectivity',
            'Covering indexes and index-only scans',
            'Index maintenance and overhead'
        ],
        sections: [
            {
                title: '1. What is an Index?',
                content: `**Definition:**
An index is a data structure that improves the speed of data retrieval operations on a database table.

**Analogy:**
Like a book's index - instead of reading every page to find a topic, you check the index and jump directly to the page.

**Types:**
- **Primary Index**: On primary key (unique, clustered)
- **Secondary Index**: On non-primary columns
- **Composite Index**: On multiple columns
- **Unique Index**: Ensures uniqueness
- **Full-Text Index**: For text search`
            },
            {
                title: '2. B-Tree Index',
                content: `**Structure:**
- Balanced tree structure
- Nodes contain keys and pointers
- Leaf nodes contain actual data pointers
- Self-balancing (O(log n) operations)

**When to Use:**
- Range queries (>, <, BETWEEN)
- Sorting (ORDER BY)
- Prefix matching (LIKE 'abc%')

**Example:**
\`\`\`sql
CREATE INDEX idx_user_email 
ON users(email);

-- Fast query
SELECT * FROM users 
WHERE email = 'user@example.com';
\`\`\``
            },
            {
                title: '3. Composite Indexes',
                content: `**Multi-Column Indexes:**
\`\`\`sql
CREATE INDEX idx_user_city_age 
ON users(city, age);
\`\`\`

**Index Order Matters:**
- Good: WHERE city = 'NYC' AND age > 25
- Good: WHERE city = 'NYC'
- Bad: WHERE age > 25 (can't use index)

**Leftmost Prefix Rule:**
Index on (A, B, C) can be used for:
- (A)
- (A, B)
- (A, B, C)
But NOT for (B), (C), or (B, C)

**Best Practices:**
- Put most selective column first
- Consider query patterns
- Avoid too many columns (3-4 max)`
            },
            {
                title: '4. Index Trade-offs',
                content: `**Pros:**
- Faster SELECT queries (10-100x)
- Efficient sorting and grouping
- Enforce uniqueness constraints

**Cons:**
- Slower INSERT/UPDATE/DELETE (index maintenance)
- Additional storage space (10-20% of table size)
- Memory overhead

**When NOT to Index:**
- Small tables (< 1000 rows)
- Columns with low cardinality (few unique values)
- Frequently updated columns
- Columns not used in WHERE/JOIN

**Monitoring:**
\`\`\`sql
-- Check index usage
SELECT * FROM pg_stat_user_indexes;

-- Find unused indexes
SELECT * FROM pg_stat_user_indexes 
WHERE idx_scan = 0;
\`\`\``
            }
        ],
        practiceProblems: [
            { title: 'Design Optimal Indexes', difficulty: 'Hard', link: 'https://www.w3resource.com/sql-exercises/movie-database-exercise/index.php' },
            { title: 'Query Optimization', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/sql-query-optimization/' },
            { title: 'Index vs Full Table Scan', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/indexing-in-databases-set-1/' }
        ],
        resources: [
            { title: 'DBMS Notes', type: 'PDF', link: '/PLACEMENT NOTES/DBMS_Notes (2).pdf' },
            { title: 'SQL Notes', type: 'PDF', link: '/PLACEMENT NOTES/SQL (notes) (1) (1).pdf' }
        ]
    }
}
