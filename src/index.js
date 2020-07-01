const app = require('./app');
const db = require('./db/db-connection');

app.set('port', process.env.PORT || 4000);

async function main() {
    await db.connect((err)=>{
        // If err unable to connect to database
        // End application
        if(err){
            console.log('unable to connect to database');
            process.exit(1);
        }
        // Successfully connected to database
        // Start up our Express Application
        // And listen for Request
        else{
            app.listen(app.get('port'), () => {
                console.log(`Server on port: ${app.get('port')}`)
            });
        }
    });
    
}

main();