const app = require('./config/express');
const { port, env } = require('./config/vars');

app.listen(port || 3000, () => {
    console.log(`Server is running on port ${port} (${env})`);
});