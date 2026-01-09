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
                        "companies": ["Facebook", "Amazon"],
                        "tips": "Filter using **WHERE** clause with two conditions joined by **AND**. Check for 'Y' in both typical columns."
                    },
                    {
                        "title": "584. Find Customer Referee",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/find-customer-referee/",
                        "companies": ["Amazon", "Google"],
                        "tips": "Remember that `!= 2` will filtering out NULLs? You need to explicitly handle NULLs using `OR referee_id IS NULL`."
                    },
                    {
                        "title": "595. Big Countries",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/big-countries/",
                        "companies": ["Facebook", "Bloomberg"],
                        "tips": "Use **OR** to combine the two conditions (area threshold or population threshold)."
                    },
                    {
                        "title": "1148. Article Views I",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/article-views-i/",
                        "companies": ["LinkedIn", "Amazon"],
                        "tips": "Select distinctive author_ids where `author_id` equals `viewer_id`. Don't forget to **ORDER BY** id if required."
                    },
                    {
                        "title": "1683. Invalid Tweets",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/invalid-tweets/",
                        "companies": ["Twitter", "Amazon"],
                        "tips": "Use `LENGTH(content)` or `CHAR_LENGTH(content)` to check if strict length exceeds 15."
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
                        "companies": ["Amazon", "Uber"],
                        "tips": "Use **LEFT JOIN** starting starting from Employees table to ensuring all employees are listed even if they don't have a unique ID."
                    },
                    {
                        "title": "1068. Product Sales Analysis I",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/product-sales-analysis-i/",
                        "companies": ["Amazon", "Adobe"],
                        "tips": "Join Sales and Product tables on `product_id`. Select product_name, year, and price."
                    },
                    {
                        "title": "1581. Customer Who Visited but Did Not Make Any Transactions",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/",
                        "companies": ["Amazon", "Google"],
                        "tips": "Use **LEFT JOIN** Visits with Transactions. Filter where `transaction_id IS NULL`. Then COUNT(*) and GROUP BY customer_id."
                    },
                    {
                        "title": "197. Rising Temperature",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/rising-temperature/",
                        "companies": ["Adobe", "Google"],
                        "tips": "Perform a **Self Join**. Join the table with itself on `DATEDIFF(w1.recordDate, w2.recordDate) = 1` AND `w1.temperature > w2.temperature`."
                    },
                    {
                        "title": "1661. Average Time of Process per Machine",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/average-time-of-process-per-machine/",
                        "companies": ["Facebook", "Amazon"],
                        "tips": "Self join the table. Match machine_id and process_id, where one is 'start' and other is 'end'. Calculate AVG(end - start) grouping by machine_id."
                    },
                    {
                        "title": "577. Employee Bonus",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/employee-bonus/",
                        "companies": ["Amazon", "Microsoft"],
                        "tips": "Use **LEFT JOIN** Employee with Bonus. Filter where `bonus < 1000` **OR** `bonus IS NULL`."
                    },
                    {
                        "title": "1280. Students and Examinations",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/students-and-examinations/",
                        "companies": ["Amazon", "Uber"],
                        "tips": "**CROSS JOIN** Students and Subjects to get all possible combinations. Then **LEFT JOIN** with Examinations. Group by student and subject, counting exams."
                    },
                    {
                        "title": "570. Managers with at Least 5 Direct Reports",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/managers-with-at-least-5-direct-reports",
                        "companies": ["Bloomberg", "Amazon"],
                        "tips": "Join Employee table with itself or use a subquery to count reports. Filter where `count >= 5`."
                    },
                    {
                        "title": "1934. Confirmation Rate",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/confirmation-rate/",
                        "companies": ["Amazon", "Facebook"],
                        "tips": "Use **LEFT JOIN** Signups with Confirmations. Calculate rate using `AVG(IF(action='confirmed', 1, 0))`. Default to 0 using IFNULL if needed, though AVG usually handles it or round it."
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
                        "companies": ["Amazon", "Netflix"],
                        "tips": "Filter where `id % 2 = 1` (odd) AND description != 'boring'. Order by rating descending."
                    },
                    {
                        "title": "1251. Average Selling Price",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/average-selling-price/",
                        "companies": ["Amazon", "Adobe"],
                        "tips": "Join Prices and UnitsSold on product_id AND date range (`purchase_date BETWEEN start_date AND end_date`). Use `SUM(price*units) / SUM(units)`. Handle null with IFNULL."
                    },
                    {
                        "title": "1075. Project Employees I",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/project-employees-i",
                        "companies": ["Facebook", "Amazon"],
                        "tips": "Join Project and Employee. Group by `project_id`. Calculate `AVG(experience_years)` rounded to 2 decimals."
                    },
                    {
                        "title": "1633. Percentage of Users Attended a Contest",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/percentage-of-users-attended-a-contest",
                        "companies": ["Facebook", "Amazon"],
                        "tips": "Count users per contest in Register table. Divide by total count of users from Users table (scalar subquery). Multiply by 100 and Round."
                    },
                    {
                        "title": "1211. Queries Quality and Percentage",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/queries-quality-and-percentage",
                        "companies": ["Google", "Facebook"],
                        "tips": "Group by query_name. Quality: `AVG(rating/position)`. Poor query percentage: `AVG(IF(rating < 3, 1, 0)) * 100`."
                    },
                    {
                        "title": "1193. Monthly Transactions I",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/monthly-transactions-i/",
                        "companies": ["Alibaba", "Amazon"],
                        "tips": "Format date to YYYY-MM (`DATE_FORMAT`). Group by month and country. Calculate counts and sums for all vs 'approved' (`SUM(IF(state='approved', amount, 0))`)."
                    },
                    {
                        "title": "1174. Immediate Food Delivery II",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/immediate-food-delivery-ii/",
                        "companies": ["DoorDash", "Uber"],
                        "tips": "Filter for first orders: compare `order_date` with `MIN(order_date)` for each customer. Then calc % of immediate orders."
                    },
                    {
                        "title": "550. Game Play Analysis IV",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/game-play-analysis-iv/",
                        "companies": ["GSN Games", "Amazon"],
                        "tips": "Identify first login date for each player. Look for a login exactly 1 day after the first login. Count distinct players meeting criteria / total players."
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
                        "companies": ["Amazon", "Google"],
                        "tips": "Group by `teacher_id`. Count distinct subjects: `COUNT(DISTINCT subject_id)`."
                    },
                    {
                        "title": "1141. User Activity for the Past 30 Days I",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/user-activity-for-the-past-30-days-i/",
                        "companies": ["Facebook", "Zoom"],
                        "tips": "Filter `activity_date` within the 30-day window ending 2019-07-27. Group by date. Count distinct `user_id`."
                    },
                    {
                        "title": "1070. Product Sales Analysis III",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/product-sales-analysis-iii/",
                        "companies": ["Amazon", "Adobe"],
                        "tips": "Find `(product_id, MIN(year))` for first year. Join back to Sales or use tuple filtering `WHERE (product_id, year) IN ...`."
                    },
                    {
                        "title": "596. Classes More Than 5 Students",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/classes-more-than-5-students/",
                        "companies": ["Amazon", "Coursera"],
                        "tips": "Group by `class`. Filter using **HAVING** `COUNT(student) >= 5`."
                    },
                    {
                        "title": "1729. Find Followers Count",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/find-followers-count/",
                        "companies": ["Facebook", "Amazon"],
                        "tips": "Group by `user_id`. Simple `COUNT(follower_id)`. Order by `user_id`."
                    },
                    {
                        "title": "619. Biggest Single Number",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/biggest-single-number/",
                        "companies": ["Amazon", "Google"],
                        "tips": "Find numbers appearing once (`GROUP BY num HAVING COUNT(*)=1`). Select `MAX(num)` from a subquery of these numbers."
                    },
                    {
                        "title": "1045. Customers Who Bought All Products",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/customers-who-bought-all-products/",
                        "companies": ["Amazon", "Google"],
                        "tips": "Group by `customer_id`. **HAVING** `COUNT(DISTINCT product_key)` equals the count of all products in Product table."
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
                        "companies": ["Amazon", "Google"],
                        "tips": "Self Join Employees E1 (managers) with E2 (reports) on `E1.employee_id = E2.reports_to`. Group by E1.id."
                    },
                    {
                        "title": "1789. Primary Department for Each Employee",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/primary-department-for-each-employee/",
                        "companies": ["Amazon", "Facebook"],
                        "tips": "Use **UNION**. 1) Select where `primary_flag='Y'`. 2) Select where employee count is 1 (employees with only one dept)."
                    },
                    {
                        "title": "610. Triangle Judgement",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/triangle-judgement/",
                        "companies": ["Amazon", "Facebook"],
                        "tips": "Use **CASE WHEN** (x+y>z AND x+z>y AND y+z>x) THEN 'Yes' ELSE 'No'."
                    },
                    {
                        "title": "180. Consecutive Numbers",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/consecutive-numbers/",
                        "companies": ["Amazon", "Facebook"],
                        "tips": "Self join 3 instances of Logs l1, l2, l3. `l1.id = l2.id-1` AND `l2.id = l3.id-1` AND `l1.num = l2.num = l3.num`."
                    },
                    {
                        "title": "1164. Product Price at a Given Date",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/product-price-at-a-given-date",
                        "companies": ["Amazon", "Uber"],
                        "tips": "Two parts: 1) Find last price before/on date (2019-08-16) using `MAX(change_date)`. 2) Find products with NO price change before date and default to 10."
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
                        "companies": ["Amazon", "Google"],
                        "tips": "Filter `salary < 30000`. Use `manager_id NOT IN (SELECT employee_id FROM Employees)` to find missing managers."
                    },
                    {
                        "title": "626. Exchange Seats",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/exchange-seats/",
                        "companies": ["Amazon", "Bloomberg"],
                        "tips": "Use **CASE WHEN**. If id is odd and not last, `id+1`. If id is even, `id-1`. Else keep id (last odd)."
                    },
                    {
                        "title": "1341. Movie Rating",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/movie-rating/",
                        "companies": ["Netflix", "Amazon"],
                        "tips": "Use **UNION ALL**. Query 1: Find user with most ratings (Order by count desc, name asc, Limit 1). Query 2: Find movie with highest Feb avg rating."
                    },
                    {
                        "title": "1321. Restaurant Growth",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/restaurant-growth/",
                        "companies": ["Yelp", "Amazon"],
                        "tips": "Self join or window functions. Sum amount for `visited_on` between `date - 6` and `date`. Filter results having full 7-day window."
                    },
                    {
                        "title": "602. Friend Requests II: Who Has the Most Friends",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends",
                        "companies": ["Facebook", "Amazon"],
                        "tips": "Union `requester_id` and `accepter_id` into one list of `id`. Count occurrence of each `id`. Order by count desc, Limit 1."
                    },
                    {
                        "title": "585. Investments in 2016",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/investments-in-2016",
                        "companies": ["Amazon", "Twitter"],
                        "tips": "Two conditions: 1) `TIV_2015` in list of duplicates. 2) `(LAT, LON)` NOT in list of duplicates (unique location)."
                    },
                    {
                        "title": "185. Department Top Three Salaries",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/department-top-three-salaries",
                        "companies": ["Amazon", "Microsoft"],
                        "tips": "Use `DENSE_RANK() OVER (PARTITION BY DepartmentId ORDER BY Salary DESC)` in a subquery/CTE. Select where rank <= 3."
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
                        "companies": ["Amazon", "Google"],
                        "tips": "`CONCAT(UPPER(LEFT(name, 1)), LOWER(SUBSTRING(name, 2)))`."
                    },
                    {
                        "title": "1527. Patients With a Condition",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/patients-with-a-condition",
                        "companies": ["Adyen", "Google"],
                        "tips": "Use **LIKE**. `conditions LIKE 'DIAB1%' OR conditions LIKE '% DIAB1%'` (start of string or specific code)."
                    },
                    {
                        "title": "196. Delete Duplicate Emails",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/delete-duplicate-emails",
                        "companies": ["Amazon", "Google"],
                        "tips": "Delete from Person p1 where exists p2 with `p1.email = p2.email` AND `p1.id > p2.id`."
                    },
                    {
                        "title": "176. Second Highest Salary",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/second-highest-salary",
                        "companies": ["Amazon", "Microsoft"],
                        "tips": "Take the MAX of salaries where salary < (SELECT MAX(salary)...). Or `LIMIT 1 OFFSET 1` (careful with null handling)."
                    },
                    {
                        "title": "1484. Group Sold Products By The Date",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/group-sold-products-by-the-date/",
                        "companies": ["Amazon", "Adobe"],
                        "tips": "Group by `sell_date`. `COUNT(DISTINCT product)`. Use `GROUP_CONCAT(DISTINCT product ORDER BY product)` for the list."
                    },
                    {
                        "title": "1327. List the Products Ordered in a Period",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/list-the-products-ordered-in-a-period/",
                        "companies": ["Amazon", "Etsy"],
                        "tips": "Filter orders in '2020-02'. Group by product. Sum(unit) >= 100."
                    },
                    {
                        "title": "1517. Find Users With Valid E-Mails",
                        "platform": "LeetCode",
                        "link": "https://leetcode.com/problems/find-users-with-valid-e-mails",
                        "companies": ["Amazon", "Facebook"],
                        "tips": "Use **REGEXP**. Pattern: `^[a-zA-Z][a-zA-Z0-9_.-]*@leetcode\\.com$`."
                    }
                ]
            }
        ]
    }
];
