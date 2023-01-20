const { options } = require("joi");
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");

const sendEmail = async (email, subject, text, nama) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.HOST,
            service: process.env.SERVICE,
            port: 587,
            secure: true,
            auth: {
                user: process.env.USER,
                pass: process.env.PASS,
            },
        });

        await transporter.use(
            'compile',
            hbs(
                {
                    viewEngine: {
                      extname: '.hbs',
                      layoutsDir: 'utils/email/', // location of hbs templates
                      defaultLayout: 'email',
                    },
                    viewPath: 'utils/email/',
                    extName: '.hbs',
                }
            )
        );

        await transporter.sendMail({
            from: process.env.USER,
            to: email,
            subject: subject,
            template: "email",
            context: {
                nama: nama,
                token: text
            }
        });

        console.log("email sent sucessfully");
    } catch (error) {
        console.log(error, "email not sent");
    }
};

module.exports = sendEmail;