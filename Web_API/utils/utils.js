const nodemailer = require("nodemailer");
const sendOtpEmail = async (email, otp, userName) => {
  let Otp = otp.toString();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rohitflexsin123@gmail.com",
      pass: "mhhxonagyjtyrfni",
    },
  });

  let HTML = `<!DOCTYPE html>
<html>

<head>
    <meta name="viewport" content="width=device-width">
    <title>Co-Living</title>
    <style type="text/css">
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

        @media only screen and (max-width: 599px) {
            .tableCon {
                width: 100% !important;
            }
            .midText {padding: 15px !important; font-size: 16px !important; line-height: 26px !important;}
            .serviceCon {padding: 0 15px 15px 15px !important;}
            .serviceHd {font-size: 26px !important;}
            .serviceSubHd {font-size: 20px !important;}
        }
    </style>
</head>

<body style="margin:10px; background:#fff;">
    <table border="0" cellspacing="0" cellpadding="0" class="tableCon" width="800" align="center"
        style="font-family: 'Roboto', sans-serif; color: #000; border: 1px solid #eeeeee;">
        <tr>
            <td bgcolor="#404B60" align="center"><br></td>
        </tr>
       
        <tr>
            <td class="midText" style="padding: 35px; font-family: 'Roboto', sans-serif; color: #404B60; font-size: 20px; line-height: 30px;">
               
                Dear Mr. ${userName}<br><br>
                We are excited to welcome you to Co-Living, the leading mobile application for Property. We are committed to helping you enhance war knowledge.<br><br>
                Please use this OTP to verify your account: <br><br>
                OTP: <b color: #ff0000;>${Otp}</b><br><br>
                                We are constantly working to improve and expand our platform to better serve you. If you have any questions or feedback, please do not hesitate to reach out to us.<br><br>
                Thank you for choosing Co-Living, and we look forward to working with you.<br><br>
                Best regards,<br>
                The Co-Living Team
            </td>
        </tr>       
        <tr>
            <td bgcolor="#BA424D" style="padding: 20px 0;">
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                        <td align="center" style="padding-bottom: 10px;"><a href="#" style="font-family: 'Roboto', sans-serif; color: #fff; font-size: 16px; text-decoration: none;">Privacy Policy</a></td>
                    </tr>
                    <tr>
                        <td align="center" style="font-family: 'Roboto', sa" ns-serif; color: #fff; font-size: 16px;">Copyright &copy; 2023 Co-Living</td>
                    </tr>
                </table>

                
            </td>
        </tr>
    </table>

</body>

</html>`;

  const mailOptions = {
    from: "rohitflexsin123@gmail.com",
    to: email,
    subject:"Otp verification Email",
    html: HTML,
  };
  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("errors---------->", error);
    } else {
      console.log("Email sentASASS: " + info.response);
    }
    return info;
  });
};


const sendLoginOtp = async (email, otp, userName) => {
  let Otp = otp.toString();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rohitflexsin123@gmail.com",
      pass: "mhhxonagyjtyrfni",
    },
  });

  let HTML = `<!DOCTYPE html>
<html>

<head>
    <meta name="viewport" content="width=device-width">
    <title>Co-Living</title>
    <style type="text/css">
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

        @media only screen and (max-width: 599px) {
            .tableCon {
                width: 100% !important;
            }
            .midText {padding: 15px !important; font-size: 16px !important; line-height: 26px !important;}
            .serviceCon {padding: 0 15px 15px 15px !important;}
            .serviceHd {font-size: 26px !important;}
            .serviceSubHd {font-size: 20px !important;}
        }
    </style>
</head>

<body style="margin:10px; background:#fff;">
    <table border="0" cellspacing="0" cellpadding="0" class="tableCon" width="800" align="center"
        style="font-family: 'Roboto', sans-serif; color: #000; border: 1px solid #eeeeee;">
        <tr>
            <td bgcolor="#404B60" align="center"><br></td>
        </tr>
       
        <tr>
            <td class="midText" style="padding: 35px; font-family: 'Roboto', sans-serif; color: #404B60; font-size: 20px; line-height: 30px;">
               
                Dear Mr. ${userName}<br><br>
                <br><br>
                Please use this OTP to Login: <br><br>
                OTP: <b color: #ff0000;>${Otp}</b><br><br>
                                We are constantly working to improve and expand our platform to better serve you. If you have any questions or feedback, please do not hesitate to reach out to us.<br><br>
                Thank you for choosing Co-Living, and we look forward to working with you.<br><br>
                Best regards,<br>
                The Co-Living Team
            </td>
        </tr>       
        <tr>
            <td bgcolor="#BA424D" style="padding: 20px 0;">
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                        <td align="center" style="padding-bottom: 10px;"><a href="#" style="font-family: 'Roboto', sans-serif; color: #fff; font-size: 16px; text-decoration: none;">Privacy Policy</a></td>
                    </tr>
                    <tr>
                        <td align="center" style="font-family: 'Roboto', sa" ns-serif; color: #fff; font-size: 16px;">Copyright &copy; 2023 Co-Living</td>
                    </tr>
                </table>

                
            </td>
        </tr>
    </table>

</body>

</html>`;

  const mailOptions = {
    from: "rohitflexsin123@gmail.com",
    to: email,
    subject:"Co-Living: Login Otp",
    html: HTML,
  };
  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("errors---------->", error);
    } else {
      console.log("Email sentASASS: " + info.response);
    }
    return info;
  });
};

module.exports = {
  sendOtpEmail,
  sendLoginOtp
};
