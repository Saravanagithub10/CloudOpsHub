const { app } = require('@azure/functions');

app.http('GetStatus', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        return {
            jsonBody: {
                project: 'CloudOps Hub',
                status: 'Running',
                message: 'Backend API is working successfully'
            }
        };
    }
});