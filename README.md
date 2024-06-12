# FitFinesse

FitFinesse is a comprehensive fitness class booking platform designed to help users find and book fitness classes that match their preferences and schedules. This platform includes an admin panel for managing trainers and class schedules, as well as a user interface for booking classes and tracking fitness progress.

## Admin Credentials

- **Username:** admin@admin.com
- **Password:** 123456

## Live Site URL

Visit the live site at [FitFinesse Live](https://fitfinesse.netlify.app/)

## Features

- **User Authentication:** Secure login and registration system for users.
- **Class Search:** Search for fitness classes by name.
- **Pagination:** Paginated list of classes, with six classes per page.
- **Class Booking:** Users can book available fitness classes.
- **Trainer Application:** Users can apply to become trainers.
- **Admin Approval:** Admin can approve or reject trainer applications.
- **Trainer Profile:** Detailed profiles for trainers including skills, availability, and bio.
- **Class Details:** View detailed information about each class.
- **Admin Dashboard:** Manage trainers, classes, and user roles.
- **Notifications:** Receive notifications for booking confirmations and status changes.

## How to Start the Application

1. **Clone the Repository**

    ```sh client-side
    git clone https://github.com/programming-hero-web-course1/b9a12-server-side-Sadek-1801.git
    cd fitfinesse
    ```

    ```sh server-side
    git clone https://github.com/programming-hero-web-course1/b9a12-server-side-Sadek-1801.git
    cd fitfinesse
    ```

2. **Install Dependencies**

    ```sh
    npm install
    ```

3. **Start the Development Server**

    ```sh
    nodemon index.js
    ```

4. **Build for Production**

    ```sh
    npm run build
    ```

5. **Deploy to Surge**

    ```sh
    surge ./build your-live-site-url.surge.sh
    ```

## Dependencies

- **Frontend:**
  - React: A JavaScript library for building user interfaces.
  - React Router: Declarative routing for React applications.
  - Axios: Promise-based HTTP client for the browser and Node.js.
  - React Query: Hooks for fetching, caching, and updating asynchronous data in React.
  - SweetAlert2: Beautiful, responsive, customizable replacement for JavaScript's popup boxes.
  - React-Hot-Toast: Beautiful, responsive, customizable replacement for JavaScript's notification/alert.
  - Tailwind CSS: A utility-first CSS framework for rapid UI development.
  - Headless UI: Unstyled, fully accessible UI components for React.

- **Backend:**
  - Express: Fast, unopinionated, minimalist web framework for Node.js.
  - MongoDB: NoSQL database for storing application data.
  - Mongoose: Elegant MongoDB object modeling for Node.js.
  - Cors: Middleware for enabling Cross-Origin Resource Sharing.
  - Dotenv: Module to load environment variables from a `.env` file.

## Additional Information

- **Environment Variables:**
  - Create a `.env.local` file in the root of your project in the clientside and add the following variables:
    ```plaintext
    VITE_APIKEY=Your firebase config file
    VITE_AUTHDOMAIN=Your firebase config file
    VITE_PROJECTID=Your firebase config file
    VITE_STORAGEBUCKET=Your firebase config file
    VITE_MESSAGINGSENDERID=Your firebase config file
    VITE_APPID=Your firebase config file
    VITE_SERVER='http://localhost:9000'
    VITE_IMG_KEY= your imageBB Api key
    ```
  - Create a `.env` file in the root of your project in the serverside and add the following variables:
    ```plaintext
    PORT=9000
    DB_USER=your database userName in MongoDB
    DB_PASS=your database password in MongoDB
    ```

- **Folder Structure:**
  - `client/`: Contains the React frontend code.
  - `server/`: Contains the Express backend code.

## Contributing

If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are welcome.

## License

This project is open-source and available under the [MIT License](LICENSE).

