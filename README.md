# DSA Journey

A lightweight web-based tracker for maintaining consistency in Data Structures and Algorithms (DSA) practice.

The application provides a calendar-based interface for logging daily DSA practice, tracking study streaks, recording topic progress, and maintaining daily notes.

**Live Demo:**  
https://akriti-bhardwaj.github.io/dsa-journey/

---

## Overview

DSA Journey was developed as a personal productivity tool to make daily DSA practice easier to track and maintain consistently.

Users can:

- Log daily DSA practice
- Track other academic/study activities
- Record topics covered
- Add notes for individual days
- Monitor practice streaks
- View monthly activity
- Track overall consistency
- Mark completed DSA topics

The application is completely client-side and uses the browser's `localStorage` API for data persistence.

---

## Features

### Practice Tracking

- Mark individual days as DSA completed
- Track non-DSA academic activities separately
- Record both DSA and other study activities on the same day
- Navigate between different months
- Update or undo daily activity status

### Progress Tracking

- Current practice streak
- Total DSA practice days
- Monthly activity
- Overall consistency percentage
- Calendar-based progress visualization

### Daily Notes

Users can add notes to individual dates to record:

- Problems solved
- Concepts studied
- Topics revised
- Additional observations

### Topic Tracker

The application includes a predefined list of C++ DSA topics that can be marked as completed.

This provides a simple way to monitor progress across different areas of DSA.

### User Interface

- Responsive calendar interface
- Visual indicators for different study activities
- Animated motivational elements
- Interactive corner companion
- Cursor effects
- Completion feedback and animations

---

## Technology Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Application structure |
| CSS3 | Styling, layout and animations |
| JavaScript | Application logic and state management |
| SVG | Interactive visual elements |
| LocalStorage API | Client-side data persistence |
| GitHub Pages | Deployment |

The project does not require a frontend framework or backend server.

---

## Project Structure

```text
dsa-journey/
│
├── index.html        # Main application page
├── style.css         # Styling and animations
├── app.js            # Application logic
├── .nojekyll         # GitHub Pages configuration
└── README.md         # Project documentation
