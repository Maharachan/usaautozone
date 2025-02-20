-- Create the database
CREATE DATABASE car_dealership;
USE car_dealership;
-------------------------------------------------------------------------------------------

-- Create the users table for login

CREATE TABLE admin (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO admin (username, password) VALUES ('admin', 'caradmin');

-------------------------------------------------------------------------------------------

-- Create the cars table with image URLs included

CREATE TABLE car_images (
  id INT AUTO_INCREMENT PRIMARY KEY,
  car_id INT NOT NULL,
  image_url VARCHAR(255) NOT NULL,
  FOREIGN KEY (car_id) REFERENCES cars(id) ON DELETE CASCADE
);

CREATE TABLE cars (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  conditions ENUM('New', 'Pre-Owned'),
  year INT,
  price DECIMAL(10, 2),
  owners INT,
  miles INT, 
  engineCC INT,
  color VARCHAR(50),
  bodyStyle VARCHAR(100),
  interiorStyle VARCHAR(100),
  driveType ENUM('FWD', 'RWD', 'AWD'),
  transmission ENUM('Automatic', 'Manual', 'Semi Automatic'),
  fuel ENUM('Electric', 'Diesel', 'Petrol','Gas'),
  trim VARCHAR(50),
  descriptions TEXT,
  features JSON,
  safetyFeatures JSON
);

-------------------------------------------------------------------------------------------