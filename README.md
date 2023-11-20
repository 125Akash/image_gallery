# Image Gallery Project

## Overview

Welcome to the Image Gallery project! This web application is built using Express.js, Node.js, JavaScript, HTML, CSS, and Bootstrap. The database used for storing images is MongoDB. This project allows users to upload images and view their own uploaded images in a gallery format.

## Features

1. **Image Upload:** Users can upload images to the gallery. The uploaded images are stored in the MongoDB database.

2. **Gallery View:** Users can view their uploaded images in a gallery format on the web application.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/125Akash/image_gallery.git
   ```

2. Navigate to the project directory:

   ```bash
   cd image-gallery
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up MongoDB:
   - Ensure MongoDB is running on your machine.
   - Configure the MongoDB connection in the `config/db.js` file.

5. Start the server:

   ```bash
   npm start
   ```

6. Open your web browser and go to [http://localhost:3000](http://localhost:3000) to use the Image Gallery application.

## Project Structure

- **`app.js`**: Main entry point of the application.
- **`config/`**: Configuration files, including MongoDB connection settings.
- **`models/`**: MongoDB schema models for image data.
- **`public/`**: Static files such as CSS and client-side JavaScript.
- **`routes/`**: Express.js route definitions.
- **`views/`**: HTML templates using EJS.

## Technologies Used

- **Express.js**: A web application framework for Node.js.
- **Node.js**: A JavaScript runtime for server-side development.
- **MongoDB**: A NoSQL database for storing image data.
- **HTML, CSS, Bootstrap**: Front-end technologies for building the user interface.

## Contributing

If you would like to contribute to the project, feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Enjoy using the Image Gallery! If you have any questions or feedback, please don't hesitate to contact us.
