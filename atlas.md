# MongoDB Atlas Setup

1. Create an account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Pick the 'Shared' (free) plan
3. Select a provider and region (I picked Google Cloud Platform and Iowa but it doesn't matter)
4. Don't change the cluster tier or additional settings
5. Name the cluster
6. Click on 'Database Access' under the Security heading on the left then click on 'Add New Database User'
7. Enter a username and password (remember it - we'll need it later)
8. Select 'Read and write to any database' as the user privilege and click 'Add User'
9. Click on 'Network Access' on the left column, then 'Add IP Address', then 'Allow Access From Anywhere', then 'Confirm'
10. Click on 'Clusters' under the Deployment heading on the left then click on 'Connect', then 'Connect your application'
11. Copy the connection string. It should look something like `mongodb+srv://<username>:<password>@cluster0.amg28.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`. Replace the `<password>` part with the password you made for the database user. You can also replace the `myFirstDatabase` part with whatever you want to call the database.
12. Copy your full connection string to `.env` under `uri`
