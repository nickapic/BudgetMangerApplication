const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Transaction = require("../../models/transaction");

const auth = require("../../middleware/auth");

//@route    POST api/transaction
//@desc     Create a Transaction
//@access   Public (So anyone can access this )
router.post(
  "/",
  [
    auth,
    [
      check("text", "Text is required").isLength({ min: 2, max: 20 }),
      check("amount", "Amount should be a number").isFloat({
        min: -99999,
        max: 99999
      })
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newTransaction = new Transaction({
        text: req.body.text,
        amount: req.body.amount,
        user: req.user.id,
        category: req.body.category
      });
      const transaction = await newTransaction.save();
      return res.json(transaction);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("Server Error has Occured");
    }

    res.send("Transaction Route");
  }
);

//@route GET api/transactions
//@desc Get all transacions for the current user
//@acess Private
router.get("/", auth, async (req, res) => {
  try {
    const transacions = await Transaction.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(transacions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const transacion = await Transaction.findById(req.params.id);

    if (!transacion) {
      return res.status(404).json({ msg: "Transaction is not found" });
    }
    if (transacion.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User is not Auhtorized" });
    }

    await transacion.remove();
    res.json({ msg: "Post removed" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Transaction is not found" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
