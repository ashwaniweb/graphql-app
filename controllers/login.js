const jwt = require('jsonwebtoken');
const model = require('./../models');
module.exports = async (req, res) => {
    debugger;
    const user = await model.User.findOne({
        where: {
            $or: [{
                email: req.body.authKey
            }, {
                userName: req.body.authKey
            }]
        }
    });
    if (user) {
        if (user.password === req.body.password) {
            const token = jwt.sign({
                id: user.id
            }, 'graphql-secret', {
                expiresIn: 60 * 60
            });
            return res.status(200).json({
                'token': token
            })
        }
        return res.status(400).json({
            'message': 'Invalid password'
        });
    }
    return res.status(400).json({
        'message': 'Email address is not registered'
    });
}