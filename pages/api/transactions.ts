import * as fs from "fs";
import { NextApiRequest } from "next";

const FILENAME = "transactions.json";

interface Transaction {
  what: string;
  type: string;
  amount: string;
  when: string;
  category: string;
}

const saveData = (transactions: Transaction[]) => {
  fs.writeFileSync(FILENAME, JSON.stringify({ transactions }));
};

const readData = () => {
  try {
    const data = JSON.parse(fs.readFileSync(FILENAME, "utf8")) as {
      transactions: Transaction[];
    };
    return data;
  } catch (error) {
    return { transactions: [] };
  }
};

export default function handler(req: NextApiRequest, res) {
  const { transactions } = req.body;
  const db = readData();

  switch (req.method) {
    case "POST":
      db.transactions = [...db.transactions, ...transactions];
      saveData(db.transactions);
      return res.status(200).end();

    case "GET":
      console.log(db);
      return res.status(200).json(db);
  }
}
