   
import app from "./app";
import './database';

//arranca la aplicación
app.listen(app.get("port"));

console.log("Server on port", app.get('port'));