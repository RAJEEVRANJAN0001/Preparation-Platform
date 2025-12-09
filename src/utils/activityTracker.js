// Activity Tracking Utility
export const ActivityTracker = {
    // Get today's date in YYYY-MM-DD format
    getTodayKey: () => {
        const today = new Date()
        return today.toISOString().split('T')[0]
    },

    // Log activity for today
    logActivity: (type = 'study') => {
        const key = 'activity_data'
        const data = JSON.parse(localStorage.getItem(key) || '{}')
        const today = ActivityTracker.getTodayKey()

        data[today] = (data[today] || 0) + 1
        localStorage.setItem(key, JSON.stringify(data))

        return data
    },

    // Get activity data for heatmap (last 365 days)
    getActivityData: () => {
        const key = 'activity_data'
        const data = JSON.parse(localStorage.getItem(key) || '{}')

        // Generate last 365 days
        const heatmapData = []
        const today = new Date()

        for (let i = 364; i >= 0; i--) {
            const date = new Date(today)
            date.setDate(date.getDate() - i)
            const dateKey = date.toISOString().split('T')[0]

            const count = data[dateKey] || 0
            let level = 0
            if (count > 0) level = 1
            if (count > 2) level = 2
            if (count > 5) level = 3
            if (count > 10) level = 4

            heatmapData.push({ date: dateKey, level, count })
        }

        return heatmapData
    },

    // Get current streak
    getStreak: () => {
        const data = JSON.parse(localStorage.getItem('activity_data') || '{}')
        let streak = 0
        const today = new Date()

        for (let i = 0; i < 365; i++) {
            const date = new Date(today)
            date.setDate(date.getDate() - i)
            const dateKey = date.toISOString().split('T')[0]

            if (data[dateKey]) {
                streak++
            } else {
                break
            }
        }

        return streak
    }
}

// Progress Tracking
export const ProgressTracker = {
    // Get learning path progress
    getProgress: () => {
        return JSON.parse(localStorage.getItem('learning_progress') || JSON.stringify({
            completed: ['Arrays & Hashing'],
            current: 'Trees & Graphs',
            currentProgress: 45, // percentage
            locked: ['System Design', 'Advanced Topics']
        }))
    },

    // Update progress
    updateProgress: (topic, progress) => {
        const data = ProgressTracker.getProgress()
        data.currentProgress = progress
        localStorage.setItem('learning_progress', JSON.stringify(data))
        return data
    },

    // Complete a topic
    completeTopic: (topic) => {
        const data = ProgressTracker.getProgress()
        if (!data.completed.includes(topic)) {
            data.completed.push(topic)
            data.currentProgress = 0

            // Move to next topic
            const allTopics = ['Arrays & Hashing', 'Trees & Graphs', 'System Design', 'Advanced Topics']
            const currentIndex = allTopics.indexOf(data.current)
            if (currentIndex < allTopics.length - 1) {
                data.current = allTopics[currentIndex + 1]
                data.locked = data.locked.filter(t => t !== data.current)
            }
        }
        localStorage.setItem('learning_progress', JSON.stringify(data))
        return data
    }
}

// Recent Activity
export const RecentActivity = {
    // Get recent items
    getRecent: () => {
        return JSON.parse(localStorage.getItem('recent_items') || JSON.stringify([
            { id: 1, title: 'Graph Algorithms: DFS', category: 'DSA', timeLeft: '15m', progress: 60 },
            { id: 2, title: 'ACID Properties', category: 'DBMS', timeLeft: '5m', progress: 85 },
            { id: 3, title: 'Vertical Scaling', category: 'System Design', timeLeft: 'Start', progress: 0 }
        ]))
    },

    // Add recent item
    addRecent: (item) => {
        const items = RecentActivity.getRecent()
        const exists = items.find(i => i.id === item.id)

        if (!exists) {
            items.unshift(item)
            if (items.length > 5) items.pop()
            localStorage.setItem('recent_items', JSON.stringify(items))
        }

        return items
    },

    // Update progress
    updateProgress: (id, progress) => {
        const items = RecentActivity.getRecent()
        const item = items.find(i => i.id === id)
        if (item) {
            item.progress = progress
            if (progress >= 100) {
                item.timeLeft = 'Done'
            }
            localStorage.setItem('recent_items', JSON.stringify(items))
        }
        return items
    }
}

// Stats
export const StatsTracker = {
    getStats: () => {
        return JSON.parse(localStorage.getItem('user_stats') || JSON.stringify({
            totalNotes: 17,
            quizzesTaken: 0,
            streak: 0,
            xp: 0
        }))
    },

    incrementQuiz: () => {
        const stats = StatsTracker.getStats()
        stats.quizzesTaken++
        stats.xp += 50
        localStorage.setItem('user_stats', JSON.stringify(stats))
        ActivityTracker.logActivity('quiz')
        return stats
    },

    addXP: (amount) => {
        const stats = StatsTracker.getStats()
        stats.xp += amount
        localStorage.setItem('user_stats', JSON.stringify(stats))
        return stats
    }
}
