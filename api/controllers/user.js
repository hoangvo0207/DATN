import { User } from '../models/User.js';

export const updateUser = async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
        }

        try {
            const updateUser = await User.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body
                },
                {
                    new: true
                }
            );
            res.status(200).json(updateUser);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json('You can update only your account');
    }
};

export const deleteUser = async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json('User deleted');
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json('You can delete only your account');
    }
};

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        const { password, ...info } = user._doc;
        res.status(200).json(info);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getUsers = async (req, res) => {
    const query = req.query.new;
    if (req.user.isAdmin) {
        try {
            const users = query ? await User.find().limit(10) : await User.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json('You are not allowed to see all users');
    }
};