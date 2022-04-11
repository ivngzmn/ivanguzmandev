import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req: any, res: any) {
  try {
    const emails = [
      {
        to: 'hello@ivanguzman.dev', // Your email where you'll receive emails
        from: 'contact@ivanguzman.dev', // your website email address here
        subject: `[Lead from website] : ${req.body.subject}`,
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">

        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      <style>@import url('https://fonts.googleapis.com/css?family=Oxygen');</style>
        <link rel="stylesheet" href="css/styles.css?v=1.0">

      </head>

      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${req.body.firstname} ${req.body.lastname}, their email is: ✉️${req.body.email} and their phone is: 📞${req.body.phone}</h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${req.body.message}</p>
              <br>
              </div>

              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Best Regards,
              <br><br><table style="width:400px; height: 213px; padding-top:33px; padding-right:0; padding-bottom:38px; padding-left:10px; font-family: 'Oxygen', sans-serif; font-size: 12px">
        <tbody>
          <tr>
            <td style="width:110px; padding:0;">
              <img src="https://res.cloudinary.com/dbr8xxx2m/image/upload/v1627191346/Personal-Website/GitHubPic_ic42zy.png" alt="Ivan Guzman Headshot" style="width:92px; padding-right: 20px; margin-bottom: 6px;">
              <br>
              <a href="https://github.com/ivngzmn"><img src="https://res.cloudinary.com/dbr8xxx2m/image/upload/v1636976133/Personal-Website/github_1_done3u.png" width=20px alt="Ivan Guzman Github Link" style="padding-left:14px;"></a>
              <a href="https://www.linkedin.com/in/ivan-julian-guzman/"><img src="https://res.cloudinary.com/dbr8xxx2m/image/upload/v1636975928/Personal-Website/linkedin_1_o8olcg.png" width=20px alt="Ivan Guzman LinkedIn Link"></a>
              <a href="https://twitter.com/zaku_dev"><img src="https://res.cloudinary.com/dbr8xxx2m/image/upload/v1636975928/Personal-Website/twitter_1_qkofpp.png" width=20px alt="Ivan Guzman Twitter Link"></a>
              </td>
              <td style="border-left: 2px solid #6A72D9; width:22px; height:136px; padding: 0px; opacity:0.8"></td>
              <td style="padding:0px">
              <b>Ivan Guzman</b>
              <br>
              <a href="tel:714-773-2050" style="text-decoration:none; color:black;"> 714-773-2050</a>
              <br>
              <a href="https://ivanguzman.dev" style="text-decoration:none; color:black;"> ivanguzman.dev</a>
              <br>
              <br style="line-height:10px">
              <a href="https://ivanguzman.dev"><img src="https://res.cloudinary.com/dbr8xxx2m/image/upload/v1636969729/Personal-Website/ig-logo_y8shm2.png" alt="The logo for 'Ivan Guzman'" style="width:55px;"></a>
              <br>
              Software your way
          </td>
        </tr>
      </tbody>
      </table>
      </div>
      </div>
      </body>
      </html>`
      }
    ];
    await sendgrid.send(emails);
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
