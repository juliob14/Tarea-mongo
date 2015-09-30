//1) Baja el archivo grades.json y en la terminal ejecuta el siguiente comando:

mongoimport -d students -c grades < grades.json

//2) El conjunto de datos contiene 4 calificaciones de n estudiantes. Confirma que se importo correctamente la colección con los siguientes comandos en la terminal de mongo:

use students;
db.grades.count()

//cuantos registros arrojo el comando count?

//el registro arrojo 800 
db.grades.count()
//3) Encuentra todas las calificaciones del estudiante con el id numero 4
db['grades'].find( { "student_id": 4 } ).count()

//4 registros

//4) ¿Cuantos registros hay de tipo exam?
db['grades'].find( { "type": "exam" } ).count()
//200 registros


//5) ¿Cuantos registros hay de tipo homework?
db['grades'].find( { "type": "homework" } ).count()

//400 registros
//6) ¿Cuantos registros hay de tipo quiz?

db['grades'].find( { "type": "quiz" } ).count()
//200 registros

//7) Elimina todas las calificaciones del estudiante con el id numero 3
db['grades'].remove( { "_id": 3 } )
        //WriteResult({ "nRemoved" : 1 })
//8) ¿Que estudiantes obtuvieron 75.29561445722392 en una tarea ?
db['grades'].find( { "score": 75.29561445722392 } ).count()
//solo un alumno

//9) Actualiza las calificaciones del registro con el uuid 50906d7fa3c412bb040eb591 por 100 
db.grades.update({"_id": ObjectId("50906d7fa3c412bb040eb591")},{$set: {"score":100}});

// resultado WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1})

//10) A que estudiante pertenece esta calificación.

// resultado "student_id" : 6