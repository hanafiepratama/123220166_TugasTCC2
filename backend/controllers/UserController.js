import Note from "../models/UserModel.js";

export const getNotes = async(req, res) => {
    try {
        const response = await Note.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getNoteById = async(req, res) => {
    try {
        const response = await Note.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createNote = async(req, res) => {
    console.log("Incoming request data:", req.body); // Log incoming data
    try {
        await Note.create(req.body);
        res.status(201).json({msg: "Note Created"});
        console.log("Note created successfully"); // Log success
    } catch (error) {
        console.log("Error creating note:", error.message); // Log error
    }
}

export const updateNote = async(req, res) => {
    try {
        await Note.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Note Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteNote = async(req, res) => {
    try {
        await Note.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Note Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}
