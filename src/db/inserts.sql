
INSERT INTO Student (name, last_name, DNI, phone) VALUES
('Laura', 'Gómez', 121111111, 666111222),
('Javier', 'Rodríguez', 22222222, 777222333),
('María', 'Martín', 33333333, 888333444),
('David', 'Hernández', 44444444, 999444555),
('Ana', 'Pérez', 55555555, 111555666),
('Carlos', 'Gutiérrez', 66666666, 222666777),
('Sofía', 'Dominguez', 77777777, 333777888),
('Manuel', 'Vargas', 88888888, 444888999),
('Elena', 'Morales', 99999999, 555999000),
('Pablo', 'Romero', 12345678, 666000111);


INSERT INTO Category (name) VALUES ('Cardio'), ('Pesas'), ('Yoga');

INSERT INTO Product (img, name, price, stock, id_category) VALUES
('https://github.com/JesusDiazDeveloper/AtlasGym/blob/main/assets/products/remera_blanca.png?raw=true', 'Remera + Gorra (Blanco)', 30000, 100, 1),
('https://github.com/JesusDiazDeveloper/AtlasGym/blob/main/assets/products/remera_roja.png?raw=true', 'Remera + Gorra (Rojo)', 64, 100, 1),
('https://github.com/JesusDiazDeveloper/AtlasGym/blob/main/assets/products/remera_negra.png?raw=true', 'Remera + Gorra (Negro)', 96, 100, 1),
('https://github.com/JesusDiazDeveloper/AtlasGym/blob/main/assets/products/remera_violeta.png?raw=true', 'Remera + Gorra (Violeta)', 22, 100, 1),
('https://github.com/JesusDiazDeveloper/AtlasGym/blob/main/assets/products/guantes_rosa.png?raw=true', 'Guantes Rosas', 15000, 100, 2),
('https://github.com/JesusDiazDeveloper/AtlasGym/blob/main/assets/products/vaso_blanco.png?raw=true', 'Vaso Everlast (Blanco)', 10000, 100, 3),
('https://github.com/JesusDiazDeveloper/AtlasGym/blob/main/assets/products/vaso_negro.png?raw=true', 'Vaso Everlast (Negro)', 10000, 100, 3),
('https://github.com/JesusDiazDeveloper/AtlasGym/blob/main/assets/products/vaso_rosa.png?raw=true', 'Vaso Everlast (Blanco)', 10000, 100, 3);


INSERT INTO Instructor (name, last_name, phone) VALUES ('Juan', 'García', 123456789), ('María', 'López', 987654321), ('Carlos', 'Martínez', 555444333);

INSERT INTO Class (name, id_instructor, description)
VALUES ('Zumba', 1, 'Clase de baile con ritmos latinos.'),
('Body Pump', 2, 'Entrenamiento con pesas para tonificar y fortalecer.'),
('Yoga Matinal', 3, 'Clase de yoga para comenzar el día relajado.'),
('CrossFit Intenso', 1, 'Entrenamiento funcional de alta intensidad.'),
('AquaGym', 2, 'Ejercicios en el agua para mejorar resistencia.'),
('Pilates Avanzado', 3, 'Ejercicios de control y fuerza para todos los niveles.'),
('Spinning Extremo',1, 'Clase de ciclismo indoor para quemar calorías.'),
('Kickboxing',2, 'Entrenamiento de defensa personal y cardio.'),
('Entrenamiento Funcional', 3, 'Clase variada de ejercicios funcionales.'),
('Tai Chi', 1, 'Técnica de meditación en movimiento para equilibrio.');


INSERT INTO Student_Class (id_student, id_class) VALUES (1, 1);
