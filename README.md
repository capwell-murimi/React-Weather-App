# React Weather App

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A simple React-based weather application that allows users to check the current weather conditions for a given city.

![Weather App Screenshot](screenshot.png)

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Key](#api-key)
- [Contributing](#contributing)
- [License](#license)

## Demo

You can see a live demo of the React Weather App [here](https://capweather.netlify.app).

## Features

- Real-time weather data for any city.
- Displays temperature (in Celsius and Fahrenheit), weather description, wind speed, and wind direction.
- Simple and intuitive user interface.
- Responsive design for desktop and mobile.

## Installation

To run this React Weather App on your local machine, follow these steps:

1. Clone this repository:

```bash
git clone https://github.com/your-username/react-weather-app.git
```

2. Change to the project directory:

```bash
cd react-weather-app
```

3. Install dependencies:

```bash
npm install
```

## Usage

1. Start the development server:

```bash
npm start
```

2. Open your web browser and navigate to `http://localhost:3000` to view the app.

3. Enter the name of a city in the search bar and click the "Search" button to get the current weather information for that city.

## API Key

This application uses the Weather API to fetch weather data. To make it work, you need to obtain an API key from Weather API and insert it into the source code. Follow these steps:

1. Visit [Weather API](https://www.weatherapi.com/) to create an account and obtain an API key.

2. In your project, locate the API request in the `Weather.js` file and replace `YOUR_API_KEY` with the actual API key you obtained.

```javascript
const apiUrl = `https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${city}`;
```

**Note:** Make sure to keep your API key secure and do not share it publicly.

## Contributing

Contributions are welcome! If you'd like to improve this project, please fork the repository and create a pull request. If you find issues or have suggestions, please open an issue.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
