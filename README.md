# FirstBench Dashboard

This repository contains the code for the **FirstBench Dashboard**, a responsive and interactive dashboard application built using React.js and Tailwind CSS. The project is designed to showcase performance metrics and visualizations effectively.

## Project Structure

The project is organized into the following structure:

```
FirstBench/
├── public/                # Static files
├── src/                   # Main source code
│   ├── components/        # Reusable React components
│   │   ├── CompareAccuracyChart.js
│   │   ├── SubjectUnderstandingCard.js
│   │   ├── ResultsCard.js
│   │   ├── SuggestionsCard.js
│   │   ├── TimeComparisonBoxes.js
│   │   ├── TimeTakenScale.js
│   │   └── ApproachDataCard.js
│   ├── App.js             # Main App component
│   ├── index.js           # Entry point for React
│   └── styles/            # Tailwind and global styles
├── package.json           # Project metadata and dependencies
├── tailwind.config.js     # Tailwind CSS configuration
└── README.md              # Documentation (this file)
```

## Features

- **Responsive Design**: The dashboard is fully responsive, adapting to different screen sizes seamlessly.
- **Interactive Components**: Includes charts, cards, and comparison boxes to display data dynamically.
- **Reusable Components**: Modular and reusable component structure for scalability.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/siddhi22rachit/FirstBench.git
   cd FirstBench
   ```

2. **Install Dependencies**:

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

3. **Start the Development Server**:

   Using npm:

   ```bash
   npm start
   ```

   Or using yarn:

   ```bash
   yarn start
   ```

4. **Open the App**:

   The application will be available at [http://localhost:3000](http://localhost:3000).

## How to Run

1. Clone the repository and navigate to the project directory.
2. Install the required dependencies using `npm install` or `yarn install`.
3. Start the development server using `npm start` or `yarn start`.
4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Usage

The dashboard displays various components:

- **ResultsCard**: Highlights key results and metrics.
- **TimeComparisonBoxes**: Visualizes time-related comparisons.
- **SubjectUnderstandingCard**: Shows understanding levels across subjects.
- **ApproachDataCard**: Displays data about different approaches.
- **SuggestionsCard**: Provides actionable suggestions.
- **CompareAccuracyChart** and **TimeTakenScale**: Side-by-side charts to compare accuracy and time taken.

## Customization

- **Tailwind CSS**: Modify `tailwind.config.js` to customize the styles.
- **Components**: Add or modify components in the `src/components/` directory to extend functionality.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes. Contributions are welcome!

## License

This project is licensed under the [MIT License](LICENSE).

---

For further questions or support, please contact [siddhi22rachit](https://github.com/siddhi22rachit).
