export const sql50Data = [
    {
        "title": "Select",
        "description": `The **SELECT** statement is the foundation of SQL. It is used to select data from a database. The data returned is stored in a result table, called the result-set.

**Key Concepts:**
- **SELECT *:** Selects all columns from a table.
- **SELECT column1, column2:** Selects specific columns.
- **WHERE:** Filters records that fulfill a specified condition.
- **DISTINCT:** Returns only distinct (different) values.
- **AND, OR, NOT:** Operators to combined conditions in a WHERE clause.`,
        "totalProblems": 5,
        "subtopics": [
            {
                "title": "Basic Select",
                "problems": [
                    {
                        "title": "1757. Recyclable and Low Fat Products",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/recyclable-and-low-fat-products/",
                        "companies": ["Facebook", "Amazon"]
                    },
                    {
                        "title": "584. Find Customer Referee",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/find-customer-referee/",
                        "companies": ["Amazon", "Google"]
                    },
                    {
                        "title": "595. Big Countries",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/big-countries/",
                        "companies": ["Facebook", "Bloomberg"]
                    },
                    {
                        "title": "1148. Article Views I",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/article-views-i/",
                        "companies": ["LinkedIn", "Amazon"]
                    },
                    {
                        "title": "1683. Invalid Tweets",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/invalid-tweets/",
                        "companies": ["Twitter", "Amazon"]
                    }
                ]
            }
        ]
    },
    {
        "title": "Basic Joins",
        "description": `A **JOIN** clause is used to combine rows from two or more tables, based on a related column between them.

**Types of Joins:**
- **(INNER) JOIN:** Returns records that have matching values in both tables.
- **LEFT (OUTER) JOIN:** Returns all records from the left table, and the matched records from the right table.
- **RIGHT (OUTER) JOIN:** Returns all records from the right table, and the matched records from the left table.
- **FULL (OUTER) JOIN:** Returns all records when there is a match in either left or right table.
- **CROSS JOIN:** Returns the Cartesian product of the set of records from the two or more joined tables.

**Date & Time Functions (Commonly used with Joins):**
- **DATEDIFF(date1, date2):** Returns the number of days between two dates.
  - *Example:* \`DATEDIFF('2023-01-02', '2023-01-01')\` returns \`1\`.
- **TIMESTAMPDIFF(unit, datetime1, datetime2):** Returns the difference between two date/time expressions.
- **CURRENT_DATE() / CURDATE():** Returns the current date.
- **NOW():** Returns current date and time. It is useful for time-sensitive queries.

**Pro Tips for this Section:**
- **Self Joins:** Useful for comparing rows within the same table (e.g., finding yesterday's temperature vs today's).
- **Handling NULLs:** When using \`LEFT JOIN\`, rows with no match will have \`NULL\`. Use \`IS NULL\` to find non-matches.`,
        "totalProblems": 9,
        "subtopics": [
            {
                "title": "Joins",
                "problems": [
                    {
                        "title": "1378. Replace Employee ID With The Unique Identifier",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier",
                        "companies": ["Amazon", "Uber"]
                    },
                    {
                        "title": "1068. Product Sales Analysis I",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/product-sales-analysis-i/",
                        "companies": ["Amazon", "Adobe"]
                    },
                    {
                        "title": "1581. Customer Who Visited but Did Not Make Any Transactions",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/",
                        "companies": ["Amazon", "Google"]
                    },
                    {
                        "title": "197. Rising Temperature",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/rising-temperature/",
                        "companies": ["Adobe", "Google"]
                    },
                    {
                        "title": "1661. Average Time of Process per Machine",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/average-time-of-process-per-machine/",
                        "companies": ["Facebook", "Amazon"]
                    },
                    {
                        "title": "577. Employee Bonus",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/employee-bonus/",
                        "companies": ["Amazon", "Microsoft"]
                    },
                    {
                        "title": "1280. Students and Examinations",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/students-and-examinations/",
                        "companies": ["Amazon", "Uber"]
                    },
                    {
                        "title": "570. Managers with at Least 5 Direct Reports",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/managers-with-at-least-5-direct-reports",
                        "companies": ["Bloomberg", "Amazon"]
                    },
                    {
                        "title": "1934. Confirmation Rate",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/confirmation-rate/",
                        "companies": ["Amazon", "Facebook"]
                    }
                ]
            }
        ]
    },
    {
        "title": "Basic Aggregate Functions",
        "description": `Aggregate functions perform a calculation on a set of values and return a single value.

**Common Functions:**
- **COUNT():** Returns the number of rows.
- **SUM():** Returns the total sum of a numeric column.
- **AVG():** Returns the average value of a numeric column.
- **MIN():** Returns the smallest value of the selected column.
- **MAX():** Returns the largest value of the selected column.

These are often used with the **GROUP BY** statement.`,
        "totalProblems": 7,
        "subtopics": [
            {
                "title": "Aggregations",
                "problems": [
                    {
                        "title": "620. Not Boring Movies",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/not-boring-movies",
                        "companies": ["Amazon", "Netflix"]
                    },
                    {
                        "title": "1251. Average Selling Price",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/average-selling-price/",
                        "companies": ["Amazon", "Adobe"]
                    },
                    {
                        "title": "1075. Project Employees I",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/project-employees-i",
                        "companies": ["Facebook", "Amazon"]
                    },
                    {
                        "title": "1633. Percentage of Users Attended a Contest",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/percentage-of-users-attended-a-contest",
                        "companies": ["Facebook", "Amazon"]
                    },
                    {
                        "title": "1211. Queries Quality and Percentage",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/queries-quality-and-percentage",
                        "companies": ["Google", "Facebook"]
                    },
                    {
                        "title": "1193. Monthly Transactions I",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/monthly-transactions-i/",
                        "companies": ["Alibaba", "Amazon"]
                    },
                    {
                        "title": "1174. Immediate Food Delivery II",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/immediate-food-delivery-ii/",
                        "companies": ["DoorDash", "Uber"]
                    },
                    {
                        "title": "550. Game Play Analysis IV",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/game-play-analysis-iv/",
                        "companies": ["GSN Games", "Amazon"]
                    }
                ]
            }
        ]
    },
    {
        "title": "Sorting and Grouping",
        "description": `Organizing your data is crucial for analysis.

**GROUP BY:**
Groups rows that have the same values into summary rows, e.g., 'find the number of customers in each country'.

**HAVING:**
The **HAVING** clause was added to SQL because the **WHERE** keyword could not be used with aggregate functions. It filters groups.

**ORDER BY:**
Used to sort the result-set in ascending or descending order.`,
        "totalProblems": 6,
        "subtopics": [
            {
                "title": "Group By & Order By",
                "problems": [
                    {
                        "title": "2356. Number of Unique Subjects Taught by Each Teacher",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/number-of-unique-subjects-taught-by-each-teacher",
                        "companies": ["Amazon", "Google"]
                    },
                    {
                        "title": "1141. User Activity for the Past 30 Days I",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/user-activity-for-the-past-30-days-i/",
                        "companies": ["Facebook", "Zoom"]
                    },
                    {
                        "title": "1070. Product Sales Analysis III",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/product-sales-analysis-iii/",
                        "companies": ["Amazon", "Adobe"]
                    },
                    {
                        "title": "596. Classes More Than 5 Students",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/classes-more-than-5-students/",
                        "companies": ["Amazon", "Coursera"]
                    },
                    {
                        "title": "1729. Find Followers Count",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/find-followers-count/",
                        "companies": ["Facebook", "Amazon"]
                    },
                    {
                        "title": "619. Biggest Single Number",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/biggest-single-number/",
                        "companies": ["Amazon", "Google"]
                    },
                    {
                        "title": "1045. Customers Who Bought All Products",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/customers-who-bought-all-products/",
                        "companies": ["Amazon", "Google"]
                    }
                ]
            }
        ]
    },
    {
        "title": "Advanced Select and Joins",
        "description": `Advanced querying involves more complex relationships.

**Self Join:**
A regular join, but the table is joined with itself. Useful for hierarchical data (e.g., Employees and Managers in the same table).

**Complex Conditions:**
Using **CASE WHEN** logic inside SELECT or WHERE clauses to create conditional columns or filters based on dynamic criteria.`,
        "totalProblems": 5,
        "subtopics": [
            {
                "title": "Adv. Operations",
                "problems": [
                    {
                        "title": "1731. The Number of Employees Which Report to Each Employee",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/the-number-of-employees-which-report-to-each-employee/",
                        "companies": ["Amazon", "Google"]
                    },
                    {
                        "title": "1789. Primary Department for Each Employee",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/primary-department-for-each-employee/",
                        "companies": ["Amazon", "Facebook"]
                    },
                    {
                        "title": "610. Triangle Judgement",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/triangle-judgement/",
                        "companies": ["Amazon", "Facebook"]
                    },
                    {
                        "title": "180. Consecutive Numbers",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/consecutive-numbers/",
                        "companies": ["Amazon", "Facebook"]
                    },
                    {
                        "title": "1164. Product Price at a Given Date",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/product-price-at-a-given-date",
                        "companies": ["Amazon", "Uber"]
                    }
                ]
            }
        ]
    },
    {
        "title": "Subqueries",
        "description": `A **Subquery** is a query nested inside another query.

**Types:**
- **Scalar Subquery:** Returns a single value.
- **Row Subquery:** Returns a single row.
- **Table Subquery:** Returns a table.

**Common Uses:**
- In the **WHERE** clause (e.g., \`WHERE salary > (SELECT AVG(salary)...)\`)
- In the **FROM** clause (Derived Tables)
- **CTEs (Common Table Expressions):** Using **WITH** clause to create temporary named result sets for readability.`,
        "totalProblems": 5,
        "subtopics": [
            {
                "title": "Nested Queries",
                "problems": [
                    {
                        "title": "1978. Employees Whose Manager Left the Company",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/employees-whose-manager-left-the-company",
                        "companies": ["Amazon", "Google"]
                    },
                    {
                        "title": "626. Exchange Seats",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/exchange-seats/",
                        "companies": ["Amazon", "Bloomberg"]
                    },
                    {
                        "title": "1341. Movie Rating",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/movie-rating/",
                        "companies": ["Netflix", "Amazon"]
                    },
                    {
                        "title": "1321. Restaurant Growth",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/restaurant-growth/",
                        "companies": ["Yelp", "Amazon"]
                    },
                    {
                        "title": "602. Friend Requests II: Who Has the Most Friends",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends",
                        "companies": ["Facebook", "Amazon"]
                    },
                    {
                        "title": "585. Investments in 2016",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/investments-in-2016",
                        "companies": ["Amazon", "Twitter"]
                    },
                    {
                        "title": "185. Department Top Three Salaries",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/department-top-three-salaries",
                        "companies": ["Amazon", "Microsoft"]
                    }
                ]
            }
        ]
    },
    {
        "title": "Advanced String Functions / Regex / Clause",
        "description": `String manipulation and pattern matching are vital for cleaning and analyzing text data.

**Functions:**
- **CONCAT():** Adds two or more strings together.
- **UPPER() / LOWER():** Converts string case.
- **SUBSTRING() / LEFT() / RIGHT():** Extracts parts of a string.

**Pattern Matching:**
- **LIKE:** Simple pattern matching using \`%\` (wildcard) and \`_\` (single char).
- **REGEXP:** Use Regular Expressions for complex pattern matching.`,
        "totalProblems": 9,
        "subtopics": [
            {
                "title": "String functions",
                "problems": [
                    {
                        "title": "1667. Fix Names in a Table",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/fix-names-in-a-table",
                        "companies": ["Amazon", "Google"]
                    },
                    {
                        "title": "1527. Patients With a Condition",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/patients-with-a-condition",
                        "companies": ["Adyen", "Google"]
                    },
                    {
                        "title": "196. Delete Duplicate Emails",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/delete-duplicate-emails",
                        "companies": ["Amazon", "Google"]
                    },
                    {
                        "title": "176. Second Highest Salary",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/second-highest-salary",
                        "companies": ["Amazon", "Microsoft"]
                    },
                    {
                        "title": "1484. Group Sold Products By The Date",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/group-sold-products-by-the-date/",
                        "companies": ["Amazon", "Adobe"]
                    },
                    {
                        "title": "1327. List the Products Ordered in a Period",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/list-the-products-ordered-in-a-period/",
                        "companies": ["Amazon", "Etsy"]
                    },
                    {
                        "title": "1517. Find Users With Valid E-Mails",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/find-users-with-valid-e-mails",
                        "companies": ["Amazon", "Facebook"]
                    }
                ]
            }
        ]
    }
];
