const { app } = require('@azure/functions');

app.http('GetStatus', {
    methods: ['GET'],
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
                },

                recentAlerts: [
                    {
                        severity: "Critical",
                        message: "CPU usage exceeded 90%"
                    },
                    {
                        severity: "Warning",
                        message: "Storage usage reached 75%"
                    },
                    {
                        severity: "Info",
                        message: "Deployment completed successfully"
                    }
                ]
            }
        };
    }
});