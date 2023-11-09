import userModel from "../model/userSchema.js"
import bcrypt from 'bcrypt';


export const createUser = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            res.status(400).json('Bad request')
        }

        // if (password.length < 8 && password.includes(/^0-9/)) {
        //     res.status(400).json('Password must have 8 chacter and one number')
        // }

        const passwordhas = await bcrypt.hash(password, 16);
        console.log(passwordhas);

        console.log('start creating');
        const result = await userModel.create({
            email, password: passwordhas
        })
        console.log('done');



        return res.status(200).json('Account create succeful');




    } catch (error) {
        console.log(error);
    }
}