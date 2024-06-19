# Unsalad Documentation

## Overview

This document provides details about our API. The base domain is https://unsalad.rossiter.dev

## Endpoint

### POST /

#### Description

This endpoint accepts a JSON body containing a context and a query. It returns a JSON response with the requested code snippet formatted in markdown.

#### Request Format

- **Method:** POST
- **Content-Type:** application/json
- **Body:**
  ```json
  {
      "context": "CONTEXT: You are a helpful assistant and must return code only do not respond with anything but the code everything must be in markdown format only. Your task is to",
      "query": "write a bubble sort algorithm in javascript"
  }
  ```

#### Response Format

- **Content-Type:** application/json
- **Body:**
  ```json
  {
      "response": "```javascript\nfunction bubbleSort(arr) {\n  let swapped;\n  do {\n    swapped = false;\n    for (let i = 0; i < arr.length - 1; i++) {\n      if (arr[i] > arr[i + 1]) {\n        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];\n        swapped = true;\n      }\n    }\n  } while (swapped);\n  return arr;\n}\n```"
  }
  ```

## Example Usage

### Request

```bash
curl -X POST https://api.example.com/generate-code \
-H "Content-Type: application/json" \
-d '{
  "context": "CONTEXT: You are a helpful assistant and must return code only do not respond with anything but the code everything must be in markdown format only. Your task is to",
  "query": "write a bubble sort algorithm in javascript"
}'
```

### Response

```json
{
    "response": "```javascript\nfunction bubbleSort(arr) {\n  let swapped;\n  do {\n    swapped = false;\n    for (let i = 0; i < arr.length - 1; i++) {\n      if (arr[i] > arr[i + 1]) {\n        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];\n        swapped = true;\n      }\n    }\n  } while (swapped);\n  return arr;\n}\n```"
}
```

## Error Handling

In case of an error, the API will return a JSON response with the appropriate HTTP status code and a message describing the error.

### Example Error Response

- **Status Code:** 400 Bad Request
- **Content-Type:** application/json
- **Body:**
  ```json
  {
      "error": "Invalid request format. Please ensure your request matches the expected JSON structure."
  }
  ```

## Contact

For further assistance, please contact our support team at [support@example.com](mailto:support@example.com).

---

End of Documentation.
