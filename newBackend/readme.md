# Car Dealership API Endpoints

# Do not forget to install NPM Packages - cmd - `npm i`

## Demo Endpoints

- **Test API**
  - **URL:** `/demo/test`
  - **Method:** `GET`
  - **Description:** Verifies that the API is working.
  - **Response Example:**
    ```json
    {
      "success": true,
      "message": "Demo API is working!"
    }
    ```

---

## Admin Endpoints

_(Note: Krishna this is for only creating new admin so if needed then use .)_

- **Create Admin User**

  - **URL:** `/api/admin/create-admin`
  - **Method:** `POST`
  - **Description:** Creates a new admin user.
  - **Request Body Example:**
    ```json
    {
      "username": "admin",
      "password": "password123"
    }
    ```
  - **Response Example:**
    ```json
    {
      "success": true,
      "message": "Admin user created successfully!"
    }
    ```

- **Admin Login**
  - **URL:** `/api/admin/login`
  - **Method:** `POST`
  - **Description:** Authenticates an admin user.
  - **Request Body Example:**
    ```json
    {
      "username": "admin",
      "password": "password123"
    }
    ```
  - **Response Example:**
    ```json
    {
      "success": true,
      "message": "Login successful!"
    }
    ```

---

## Car Endpoints

- **Get All Cars**

  - **URL:** `/api/cars`
  - **Method:** `GET`
  - **Description:** Fetches all cars along with their first available image.
  - **Response Example:**
    ```json
    {
      "success": true,
      "cars": [
        {
          "id": 1,
          "name": "Car Name",
          "price": 20000,
          "transmission": "Automatic",
          "trim": "Sport",
          "miles": 15000,
          "image_url": "https://cloudinary.com/car-image.jpg"
        }
      ]
    }
    ```

- **Create a New Car**

  - **URL:** `/api/cars/create`
  - **Method:** `POST`
  - **Description:** Creates a new car and uploads up to 5 images.
  - **Request:**
    - **Headers:** `Content-Type: multipart/form-data`
    - **Body:** Contains a field [data](http://_vscodecontentref_/0) (with car details in JSON format) and up to 5 image files in the [images](http://_vscodecontentref_/1) field.
  - **Response Example:**
    ```json
    {
      "success": true,
      "message": "Car created successfully!",
      "carId": 1,
      "imageUrls": [
        "https://cloudinary.com/car-image1.jpg",
        "https://cloudinary.com/car-image2.jpg"
      ]
    }
    ```

- **Get Car Details by (Single car) ID**
  - **URL:** `/api/cars/:id`
  - **Method:** `GET`
  - **Description:** Retrieves a single car's details by its ID, including all images.
  - **Response Example:**
    ```json
    {
      "success": true,
      "car": {
        "id": 1,
        "name": "Car Name",
        "conditions": "New",
        "year": 2022,
        "price": 20000,
        "owners": 1,
        "miles": 15000,
        "engineCC": 2000,
        "color": "Red",
        "bodyStyle": "Sedan",
        "exteriorStyle": "Sport",
        "interiorStyle": "Leather",
        "driveType": "AWD",
        "transmission": "Automatic",
        "fuel": "Gasoline",
        "trim": "Sport",
        "descriptions": "A great car.",
        "features": ["Feature1", "Feature2"],
        "safetyFeatures": ["SafetyFeature1", "SafetyFeature2"],
        "images": [
          "https://cloudinary.com/car-image1.jpg",
          "https://cloudinary.com/car-image2.jpg"
        ]
      }
    }
    ```
