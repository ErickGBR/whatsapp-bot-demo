WhatsApp Bot Demo
Minimal demo of a customer service automation bot using WhatsApp Cloud API with Node.js + TypeScript.

This demo includes:
Sending messages via WhatsApp Cloud API
Backend with Node.js + TypeScript + Express
Connection to MariaDB using Sequelize + Sequelize-Typescript
Basic reading of Markdown (.md) files

Unit tests using Jest
```plaintext
🗂 Folder Structure
whatsapp-bot-demo/
├─ src/
│  ├─ controllers/          # Route controllers
│  ├─ services/             # Business logic and services
│  ├─ models/               # Database models
│  ├─ routes/               # Express routes
│  ├─ config/               # Database configuration
│  ├─ app.ts
│  └─ server.ts
├─ md-files/                # Example Markdown files
├─ tests/                   # Jest unit tests
├─ .env                     # Environment variables
├─ package.json
├─ tsconfig.json
└─ README.md
```

⚙️ Installation


Clone the repository:

```bash
   git clone https://github.com/yourusername/whatsapp-bot-demo.git
    cd whatsapp-bot-demo
   ```

Install dependencies:

  ```bash
   npm install
   ```


Configure environment variables in .env:

 ```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=1234
DB_NAME=whatsapp_demo

WHATSAPP_TOKEN=YOUR_META_ACCESS_TOKEN
WHATSAPP_PHONE_NUMBER_ID=YOUR_PHONE_NUMBER_ID

PORT=3000
   ```


Start MariaDB and create the database whatsapp_demo.
🚀 Running the Demo

- `npm start`: Start the server using Node.js.


Server will run at http://localhost:3000.

- ** 📬 Endpoints**
    - 1. Send WhatsApp Message
        - POST /whatsapp/send
            - Content-Type: application/json
            - Request
            ```json{
               "to": "5211234567890",
                "message": "Hello, this is a demo"
              }
            ```

- 2. Read Markdown File
  - GET /whatsapp/md/:filename

Example: /whatsapp/md/example.md
Returns the Markdown file content as JSON.

🧪 Unit Tests
Run tests with:
 ```bash
   npm test
   ```



Includes basic tests for:
Markdown file reader function
WhatsApp message sending (mocked)

📂 Example Markdown File

md-files/example.md:

# Demo Product
Description of the demo product.

💡 Notes

This is a minimal demo.
Designed to test integration with WhatsApp Cloud API and extend to more complex flows.
Intended as a foundation for a hybrid AI + human bot.