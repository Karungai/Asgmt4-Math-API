# Product Requirements Document: Math API

## 1. Overview
The goal of this project is to build a simple Node.js (Express) web API that performs basic mathematical operations. The initial release will focus entirely on a single endpoint for addition.

## 2. Requirements

### 2.1 Functional Requirements
- The API must expose an endpoint at `GET /add`.
- The endpoint must accept two query parameters: `a` and `b`.
- The endpoint must calculate the sum of `a` and `b`.
- The endpoint must return the result as a formatted JSON object: `{ "result": <sum> }`.
- The calculation must correctly handle floating-point decimals.

### 2.2 Non-Functional Requirements
- **Validations**: If either parameter `a` or `b` is missing, or is not a valid number (e.g., text), the API MUST return a `400 Bad Request` HTTP status.
- **Framework**: Express.js is the required web framework.
- **Testing**: The application must be developed using a Test-Driven Development (TDD) approach using a standard framework like `jest`.

## 3. Scope
**Out of Scope for Initial Release:**
- Subtract, Multiply, and Divide endpoints.
- Authentication or rate limiting.
- Front-end UI.
