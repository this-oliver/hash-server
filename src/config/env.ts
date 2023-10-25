import dotenv from "dotenv";

if (process.env.NODE_ENV === "testing") {
	// get .env.test file
	dotenv.config({ path: ".env.test" });
} else {
	// get .env file
	dotenv.config();
}

const NODE_ENV = process.env.NODE_ENV || "production";
const PORT = process.env.PORT || "3000";

export { NODE_ENV, PORT };
