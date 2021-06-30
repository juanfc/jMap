

CREATE TABLE IF NOT EXISTS entrenamientos (
	id_entrenamiento INTEGER PRIMARY KEY AUTOINCREMENT,
	distancia INTEGER DEFAULT 0,
	pasos INTEGER  DEFAULT 0,
    pasos_acumulados INTEGER  DEFAULT 0,
    start text DEFAULT '',
    stop text DEFAULT '',
    tiempo text DEFAULT '',
    user text DEFAULT '',
    velocidad text DEFAULT '',
    velocidad_promedio INTEGER DEFAULT 0

);

CREATE TABLE IF NOT EXISTS entrenamientos_locations (
	id_entrenamiento INTEGER DEFAULT 0,
	accuracy INTEGER DEFAULT 0,
	altitude REAL  DEFAULT 0,
    latitude REAL  DEFAULT 0,
    longitude REAL  DEFAULT 0,
    speed REAL  DEFAULT 0,
    bearing REAL  DEFAULT 0,    
    time INTEGER DEFAULT '',
);
INSERT into entrenamientos_locations (1,14.642999649047852,709.1518431983941,-31.3888555,-64.4949422,0.13397806882858276,188.10256958007812,1624566627581);

INSERT into entrenamientos (user) values('juan');
SELECT last_insert_rowid();
select * from entrenamientos;

accuracy: 14.642999649047852
altitude: 709.1518431983941
bearing: 188.10256958007812
id: 215
isFromMockProvider: false
latitude: -31.3888555
locationProvider: 1
longitude: -64.4949422
mockLocationsEnabled: false
provider: "fused"
speed: 0.13397806882858276
time: 1624566627581


distancia: "7.70"
fecha: "24 de junio de 2021"
fecha_corta: "jun. 24"
inArea: false
pasos: 0
pasos_acumulados: 0
paused: false
paused_time: 4
saved: true
start: 1624566626921
started: false
stop: 1624569477782
tiempo: "00:47:26"
user: "Juanfc"
velocidad: "29.27 K/h"
velocidad_promedio: 8131.833324295371
