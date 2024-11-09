# Brewery App

## Getting Started

Welcome to the Brewery App! This application allows users to explore various breweries, search for specific ones, and view detailed information about each brewery.

### Live Demo

You can view the live application at: [Brewery App Live](https://denis-gocanvas.vercel.app/).

### Repository

The source code for this project can be found on GitHub: [Brewery App Repository](https://github.com/munaashe/denis-gocanvas.git).

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js**: A JavaScript runtime for building server-side applications.
- **npm** or **yarn**: A package manager for JavaScript.

### Installation Steps

1. **Clone the Repository**

   Start by cloning the repository to your local machine:

   ```bash
   git clone https://github.com/munaashe/denis-gocanvas.git
   cd denis-gocanvas
   ```

2. **Install Dependencies**

   Navigate to the project directory and install the required packages:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Create Environment Variables**

   Create a `.env` file in the root directory of your project. This file will contain environment variables necessary for the application. Use the following format as a template:

   ```plaintext
   REACT_APP_API_URL=https://api.openbrewerydb.org/breweries
   ```

   Ensure that the `REACT_APP_API_URL` points to the correct API endpoint for fetching brewery data.

4. **Run the Application**

   Start the application in development mode:

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

   The app will be available at `http://localhost:3000`.

5. **View in Your Browser**

   Open your web browser and navigate to `http://localhost:3000` to explore the Brewery App.

## Features

- **Search Functionality**: Easily search for breweries by name.
- **Filtering Options**: Filter breweries based on country.
- **Detailed Information**: Click on a brewery to view detailed information.
- **Responsive Design**: The application is designed for optimal viewing on various devices.

## Conclusion

The Brewery App provides a simple yet effective way to explore breweries. For a live experience, check out the [live demo](https://denis-gocanvas.vercel.app/), and feel free to explore the [source code](https://github.com/munaashe/denis-gocanvas.git) for further insights!