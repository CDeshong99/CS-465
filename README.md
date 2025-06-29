# CS 465 Final Portfolio
# Architecture
In my full stack project, I implemented two different types of frontend development:

Customer-facing site: Built with Express and Handlebars (HTML templates). This approach renders pages server-side, making it simple and SEO-friendly. It's great for static content and ensures users always get the latest version from the server without worrying about client-side state.

Admin Single Page Application (SPA): Built with Angular. This SPA offers a dynamic, component-based UI with client-side routing, letting admins manage trips without full page reloads. It’s fast, interactive, and ideal for forms, secure login, and CRUD operations on data.

Regarding the backend, I chose MongoDB, a NoSQL database, because it stores data as flexible JSON-like documents. This schema-less approach is perfect for our variable trip data and aligns naturally with JavaScript, making it easy to work with in Node.js.
# Functionality
How is JSON different from JavaScript? How does it tie frontend and backend?

JSON is a data-interchange format derived from JavaScript but strictly structured (no functions or variables—just data).

It is language-independent and used to serialize data to transfer between frontend and backend.

In my project, JSON responses from the Express API allow the Angular SPA to dynamically render and manage trip data.

Refactored code examples and benefits from UI components:

I refactored the Angular SPA to use reusable components for trip lists and editing forms.

This meant less duplicate code, easier maintenance, and more consistency in UI.

For example, I used the same form component for both creating and editing trips, ensuring validation and styling stay consistent.
# Testing
In a full stack application, request and retrieval require different API testing methods:

GET requests: Verified with Postman to ensure the API returns correct JSON data for all trips and single trip lookups.

POST/PUT/DELETE requests: Tested to ensure the backend correctly added, updated, or removed trips in the MongoDB database.

I also tested authentication:

Used Postman to test the secure /api/auth/login endpoint.

Verified that secured routes required a valid JWT in the Authorization header.

This added security layer ensures only logged-in admins can change trip data, protecting the system from unauthorized access.
# Reflection
This course helped me reach my professional goals by giving me real-world experience in building a full stack application from scratch. I learned:

How to design a modular backend API with Express and MongoDB.

How to secure endpoints with Passport and JWTs.

How to build a modern SPA with Angular, using components, services, and client-side routing.

How to use Postman for thorough API testing.

These skills make me a more marketable candidate, as they match what employers expect in a modern web developer role. I can now confidently approach full stack projects, design secure APIs, and build responsive, maintainable frontends using industry-standard tools and practices.
