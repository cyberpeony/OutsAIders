CREATE TABLE Usuarios (
  id_usuario SERIAL PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  correo_electronico VARCHAR(255) UNIQUE NOT NULL,
  contrasena VARCHAR(255) NOT NULL,
  fecha_nacimiento DATE,
  ciudad VARCHAR(255),
  universidad VARCHAR(255),
  tipo_usuario VARCHAR(255),
  foto_perfil VARCHAR(255)
  preferencias TEXT,
);

CREATE TABLE Publicaciones (
  id_publicacion SERIAL PRIMARY KEY,
  id_usuario INT NOT NULL,
  titulo VARCHAR(255) NOT NULL,
  descripcion TEXT,
  tipo_publicacion VARCHAR(255) NOT NULL,
  fecha_publicacion TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  precio DECIMAL,
  ubicacion VARCHAR(255),
  estado VARCHAR(255),
  FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
);

CREATE TABLE Promociones (
  id_promocion SERIAL PRIMARY KEY,
  nombre_tienda VARCHAR(255) NOT NULL,
  descripcion TEXT NOT NULL,
  tipo_promocion VARCHAR(255) NOT NULL,
  fecha_inicio DATE NOT NULL,
  fecha_fin DATE NOT NULL,
  url_promocion VARCHAR(255) NOT NULL
);

CREATE TABLE Mensajes (
  id_mensaje SERIAL PRIMARY KEY,
  id_usuario_emisor INT NOT NULL,
  id_usuario_receptor INT NOT NULL,
  contenido TEXT NOT NULL,
  fecha_envio TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_usuario_emisor) REFERENCES Usuarios(id_usuario),
  FOREIGN KEY (id_usuario_receptor) REFERENCES Usuarios(id_usuario)
);

CREATE TABLE Finanzas (
  id_finanza SERIAL PRIMARY KEY,
  id_usuario INT NOT NULL,
  tipo_finanza VARCHAR(255) NOT NULL,
  concepto VARCHAR(255) NOT NULL,
  monto DECIMAL NOT NULL,
  fecha_finanza DATE NOT NULL,
  FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
);

CREATE TABLE Preferencias (
  id_preferencia SERIAL PRIMARY KEY,
  id_usuario INT NOT NULL,
  categoria VARCHAR(255) NOT NULL,
  valor VARCHAR(255) NOT NULL,
  FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
);
