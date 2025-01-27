CREATE TABLE cars (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  conditions ENUM('New', 'Used'),
  year INT,
  price DECIMAL(10, 2),
  owners INT,
  miles INT,
  engineCC INT,
  color VARCHAR(50),
  bodyStyle VARCHAR(100),
  exteriorStyle VARCHAR(100),
  interiorStyle VARCHAR(100),
  driveType ENUM('FWD', 'RWD', 'AWD'),
  transmission ENUM('Automatic', 'Manual', 'Semi Automatic'),
  fuel ENUM('Electric', 'Diesel', 'Petrol'),
  trim VARCHAR(50),
  descriptions TEXT,
  features JSON,
  safetyFeatures JSON
);