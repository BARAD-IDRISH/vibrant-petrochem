import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      fullName,
      companyName,
      email,
      phone,
      productInterest,
      product,
      estimatedVolume,
      volumeMT,
      destinationPort,
      message,
      additionalNotes,
    } = body;

    // Standardize input field names for flexible compatibility
    const targetProduct = productInterest || product || 'General Inquiry';
    const targetVolume = estimatedVolume || volumeMT || 'Not Specified';
    const targetMessage = message || additionalNotes || 'No additional details provided.';

    // Mandatory fields check
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing mandatory fields (fullName, email, phone).' },
        { status: 400 }
      );
    }

    // Configure Nodemailer transporter using EMAIL_* environment variables
    const host = process.env.EMAIL_HOST || 'mail.vibrantpetro.com';
    const port = Number(process.env.EMAIL_PORT) || 465;
    const secure = process.env.EMAIL_SECURE ? process.env.EMAIL_SECURE === 'true' : port === 465;
    const user = process.env.EMAIL_USER || 'ashish@vibrantpetro.com';
    const pass = process.env.EMAIL_PASS;
    const recipient = process.env.EMAIL_TO || 'ashish@vibrantpetro.com';

    console.log(`[TRADE INQUIRY RECEIVED] From: ${fullName} (${email}), Company: ${companyName || 'N/A'}, Product: ${targetProduct}`);

    // If EMAIL_PASS is present, attempt live SMTP email transmission
    let messageId = 'logged-in-console';

    if (pass) {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure,
        auth: {
          user,
          pass,
        },
        tls: {
          rejectUnauthorized: false, // Prevents SSL certificate mismatches on custom cPanel hosts
        },
      });

      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #0f172a; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
            .header { background: #0f172a; color: #ffffff; padding: 24px; text-align: left; border-bottom: 3px solid #c5221f; }
            .header h1 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.5px; }
            .header p { margin: 4px 0 0 0; font-size: 12px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; }
            .content { padding: 24px; }
            .field-group { margin-bottom: 16px; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px; }
            .field-group:last-child { border-bottom: none; }
            .label { font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px; margin-bottom: 4px; }
            .value { font-size: 14px; font-weight: 600; color: #0f172a; }
            .notes-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; margin-top: 4px; font-size: 13px; color: #334155; white-space: pre-wrap; }
            .footer { background: #f8fafc; padding: 16px 24px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #64748b; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Vibrant Petrochem FZE</h1>
              <p>Official Website Commercial Inquiry</p>
            </div>
            <div class="content">
              <div class="field-group">
                <div class="label">Full Name</div>
                <div class="value">${fullName}</div>
              </div>
              <div class="field-group">
                <div class="label">Corporate Email</div>
                <div class="value"><a href="mailto:${email}" style="color: #c5221f; text-decoration: none;">${email}</a></div>
              </div>
              <div class="field-group">
                <div class="label">Company Name</div>
                <div class="value">${companyName || 'Not Provided'}</div>
              </div>
              <div class="field-group">
                <div class="label">Phone / WhatsApp</div>
                <div class="value">${phone}</div>
              </div>
              <div class="field-group">
                <div class="label">Product Category / Item</div>
                <div class="value" style="color: #c5221f;">${targetProduct}</div>
              </div>
              <div class="field-group">
                <div class="label">Volume Requirements</div>
                <div class="value">${targetVolume}</div>
              </div>
              <div class="field-group">
                <div class="label">Destination Discharge Port</div>
                <div class="value">${destinationPort || 'Not Specified'}</div>
              </div>
              <div class="field-group">
                <div class="label">Message / Specifications</div>
                <div class="notes-box">${targetMessage}</div>
              </div>
            </div>
            <div class="footer">
              Submitted at ${new Date().toISOString()} • Vibrant Petrochem Web Portal
            </div>
          </div>
        </body>
        </html>
      `;

      const mailOptions = {
        from: `"Website Desk" <${user}>`,
        to: recipient,
        replyTo: email,
        subject: `[INQUIRY] ${targetProduct} - ${fullName} ${companyName ? `(${companyName})` : ''}`,
        text: `New Inquiry from ${fullName} (${email}, ${phone}). Product: ${targetProduct}. Message: ${targetMessage}`,
        html: htmlContent,
      };

      const info = await transporter.sendMail(mailOptions);
      messageId = info.messageId;
      console.log(`[EMAIL DISPATCH SUCCESS] Message ID: ${info.messageId}`);
    } else {
      console.log('[SMTP NOTICE] EMAIL_PASS environment variable is not configured yet. Inquiry recorded in server logs.');
    }

    return NextResponse.json({ success: true, messageId });
  } catch (error: any) {
    console.error('[SEND EMAIL API ERROR]', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to dispatch email inquiry.' },
      { status: 500 }
    );
  }
}
