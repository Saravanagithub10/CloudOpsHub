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
                ],

                incidentTimeline: [
                    {
                        time: "09:15 AM",
                        event: "CPU usage exceeded threshold"
                    },
                    {
                        time: "09:30 AM",
                        event: "Alert generated"
                    },
                    {
                        time: "09:45 AM",
                        event: "System stabilized"
                    }
                ],

                deploymentHistory: [
                    {
                        version: "v1.0",
                        date: "2026-06-20",
                        status: "Success"
                    },
                    {
                        version: "v0.9",
                        date: "2026-06-18",
                        status: "Success"
                    },
                    {
                        version: "v0.8",
                        date: "2026-06-15",
                        status: "Success"
                    }
                ]
                healthScore: "98%",

services: [
    {
        name: "Azure Static Web App",
        status: "Online"
    },
    {
        name: "Azure Function App",
        status: "Online"
    },
    {
        name: "Application Insights",
        status: "Online"
    },
    {
        name: "GitHub Actions",
        status: "Connected"
    }
]
            }
        };
    }
});