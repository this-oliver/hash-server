import express from "express";
import cors from "cors";
import morgan from "morgan";
import { hashPassword, comparePasswords } from './utils/crypto';

const app = express();

// middleware to enable cors
app.use(cors());

// middleware to parse json
app.use(express.json());

// middleware to log requests
app.use(morgan("dev"));

// configure routes
const router = express.Router();

router.get("/", function (req, res) {
	res.send("Hash Server!");
});

router.post("/hash", function (req, res) {
	const { sample } = req.body;

	try {
		if(!sample){
			throw 'missing sample property';
		}

		const hash = hashPassword(sample);
		return res.status(200).json({ hash });
	} catch (error) {
		return res.status(400).json({ error: (error as Error).message });
	}
});

router.post('/compare', function(req, res){
	const { sample, hash } = req.body;

	try{
		if(!sample){
			throw 'missing sample property';
		}

		if(!hash){
			throw 'missing hash property';
		}

		const match = comparePasswords(sample, hash);
		return res.status(200).json({ match });
	} catch(error){
		return res.status(400).json({ error: (error as Error).message });
	}
});

router.get("*", function (req, res) {
	res.status(404).send(`Path ${req.url} does not exist.`);
});

app.use(router);

export default app;
