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
                lastDeployment: new Date().toLocaleString(),
                frontendHealth: "Healthy",
                backendHealth: "Healthy",

                uptime: "99.9%",
                activeUsers: 128,

                alerts: {
                    critical: 0,
                    warning: 2,
                    info: 5
                }
            }
        };
    }
});