const Receiver = require("../models/receiverNameModel");

// Add Receiver
const addReceiver = async (req, res) => {
  try {
    const { receiver } = req.body;

    if (!receiver) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const receiverName = new Receiver({
      receiver,
    });

    await receiverName.save(); // Save the receiver

    return res.status(201).json({
      message: "Receiver added successfully",
      receiverName,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get all receivers
const getReceivers = async (req, res) => {
  try {
    const receivers = await Receiver.find();
    return res.status(200).json(receivers);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Edit a receiver by ID
const editReceiver = async (req, res) => {
  try {
    const { id } = req.params;
    const { receiver } = req.body;

    if (!receiver) {
      return res.status(400).json({ message: "Receiver name is required." });
    }

    const updatedReceiver = await Receiver.findByIdAndUpdate(
      id,
      { receiver },
      { new: true }
    );

    if (!updatedReceiver) {
      return res.status(404).json({ message: "Receiver not found" });
    }

    return res.status(200).json({
      message: "Receiver updated successfully",
      updatedReceiver,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete a receiver by ID
const deleteReceiver = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Receiver ID is required" });
    }

    const deletedReceiver = await Receiver.findByIdAndDelete(id);

    if (!deletedReceiver) {
      return res.status(404).json({ message: "Receiver not found" });
    }

    return res.status(200).json({ message: "Receiver deleted successfully", deletedReceiver });
  } catch (error) {
    console.error("Delete Receiver Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { addReceiver, getReceivers, editReceiver, deleteReceiver };
