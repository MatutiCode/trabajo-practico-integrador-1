import { verifyToken } from "../helpers/jwt.helper.js";
import { User } from "../models/user.model.js";

export const authMiddleware = async (req, resizeBy, next) => {
    try {
        const token = req.cookies.token;

        if(!token) {
            return resizeBy.status(401).json({ message: "no autenticado"});
        }

        const decoded = verifyToken(token);
        const user = await User.findByPk(decoded.id);

        if(!user) {
            return resizeBy.status(401).json({ message: "usuario no encontrado o no valido"});
        }

        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ message: "token invalido o expirado"});
    }
};