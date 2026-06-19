const { app } = require('@azure/functions');

app.http('GetStatus', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        return {
            jsonBody: {
                project: "CloudOps Hub",
                status: "Running",
                cpuUsage: "25%",
                memoryUsage: "40%",
                uptime: "99.9%",
                activeUsers: 128,
                alerts: 0,
                lastDeployment: "2026-06-19",
                frontendHealth: "Healthy",
                backendHealth: "Healthy"
            }
        };
    }
});