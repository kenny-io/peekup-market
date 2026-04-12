import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const BRAND = {
  orange: '#f97316',
  orangeLight: '#ffead7',
  dark: '#0f172a',
  gray: '#475569',
  grayLight: '#f5f2eb',
  white: '#ffffff',
  logoUrl: 'https://usepeekup.com/logo-transparentbg-light.png',
  siteUrl: 'https://usepeekup.com',
}

function emailLayout(content: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="light" />
  <meta name="supported-color-schemes" content="light" />
  <title>Peekup</title>
</head>
<body style="margin:0;padding:0;background-color:${BRAND.grayLight};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BRAND.grayLight};">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;">

          <!-- Logo -->
          <tr>
            <td align="center" style="padding-bottom:32px;">
              <a href="${BRAND.siteUrl}" target="_blank">
                <img src="${BRAND.logoUrl}" alt="Peekup" width="120" height="40" style="display:block;border:0;height:auto;" />
              </a>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background-color:${BRAND.white};border-radius:16px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.06);">
              ${content}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:32px 0 0;text-align:center;">
              <p style="margin:0;font-size:12px;line-height:18px;color:${BRAND.gray};">
                &copy; ${new Date().getFullYear()} Peekup · 450 Ogui Road, Enugu
              </p>
              <p style="margin:8px 0 0;font-size:12px;line-height:18px;">
                <a href="${BRAND.siteUrl}" style="color:${BRAND.orange};text-decoration:none;">usepeekup.com</a>
                &nbsp;&middot;&nbsp;
                <a href="${BRAND.siteUrl}/privacy" style="color:${BRAND.gray};text-decoration:none;">Privacy</a>
                &nbsp;&middot;&nbsp;
                <a href="${BRAND.siteUrl}/terms" style="color:${BRAND.gray};text-decoration:none;">Terms</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export function buildAmbassadorConfirmationEmail(firstName: string, institution: string) {

  const content = `
    <!-- Orange accent bar -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td style="height:4px;background:linear-gradient(90deg,${BRAND.orange},${BRAND.orangeLight});font-size:0;line-height:0;">&nbsp;</td>
      </tr>
    </table>

    <!-- Body -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td style="padding:40px 36px;">

          <!-- Badge -->
          <table role="presentation" cellpadding="0" cellspacing="0">
            <tr>
              <td style="background-color:${BRAND.orangeLight};border-radius:20px;padding:6px 14px;">
                <span style="font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:${BRAND.orange};">Application Received</span>
              </td>
            </tr>
          </table>

          <h1 style="margin:24px 0 0;font-size:26px;font-weight:700;line-height:1.3;color:${BRAND.dark};">
            Welcome to the team, ${firstName}.
          </h1>

          <p style="margin:16px 0 0;font-size:15px;line-height:1.7;color:${BRAND.gray};">
            Your application to become a <strong style="color:${BRAND.dark};">Peekup Founding Ambassador</strong> at ${institution} has been received. We&rsquo;re reviewing applications on a rolling basis and only selecting 3 ambassadors per campus.
          </p>

          <!-- What happens next -->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
            <tr>
              <td style="background-color:${BRAND.grayLight};border-radius:12px;padding:24px;">
                <p style="margin:0 0 12px;font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:${BRAND.orange};">What happens next</p>

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:8px 0;vertical-align:top;width:28px;">
                      <div style="width:22px;height:22px;border-radius:6px;background-color:${BRAND.dark};color:${BRAND.white};font-size:11px;font-weight:700;text-align:center;line-height:22px;">1</div>
                    </td>
                    <td style="padding:8px 0 8px 12px;font-size:14px;line-height:1.5;color:${BRAND.gray};">
                      <strong style="color:${BRAND.dark};">Review</strong> &mdash; Our team reads every application carefully.
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;vertical-align:top;width:28px;">
                      <div style="width:22px;height:22px;border-radius:6px;background-color:${BRAND.dark};color:${BRAND.white};font-size:11px;font-weight:700;text-align:center;line-height:22px;">2</div>
                    </td>
                    <td style="padding:8px 0 8px 12px;font-size:14px;line-height:1.5;color:${BRAND.gray};">
                      <strong style="color:${BRAND.dark};">Call or WhatsApp</strong> &mdash; Shortlisted candidates hear from us within 5&ndash;7 days.
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;vertical-align:top;width:28px;">
                      <div style="width:22px;height:22px;border-radius:6px;background-color:${BRAND.dark};color:${BRAND.white};font-size:11px;font-weight:700;text-align:center;line-height:22px;">3</div>
                    </td>
                    <td style="padding:8px 0 8px 12px;font-size:14px;line-height:1.5;color:${BRAND.gray};">
                      <strong style="color:${BRAND.dark};">Onboarding</strong> &mdash; Selected ambassadors get merch, a stipend, and a campus kit.
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>

          <!-- Stipend highlight -->
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;">
            <tr>
              <td style="border-left:3px solid ${BRAND.orange};padding:12px 0 12px 16px;">
                <p style="margin:0;font-size:14px;line-height:1.5;color:${BRAND.gray};">
                  Selected ambassadors receive a <strong style="color:${BRAND.dark};">&nbsp;&#8358;10,000&ndash;&#8358;20,000 monthly stipend</strong>, branded merch, and first-in-line access to future paid roles at Peekup.
                </p>
              </td>
            </tr>
          </table>

          <p style="margin:28px 0 0;font-size:15px;line-height:1.7;color:${BRAND.gray};">
            In the meantime, make sure your phone and WhatsApp are reachable. If you submitted a voice note, you&rsquo;re already ahead &mdash; those applications are reviewed first.
          </p>

          <p style="margin:24px 0 0;font-size:15px;line-height:1.7;color:${BRAND.gray};">
            Welcome aboard,<br/>
            <strong style="color:${BRAND.dark};">The Peekup Team</strong>
          </p>

          <!-- CTA -->
          <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:28px;">
            <tr>
              <td style="background-color:${BRAND.orange};border-radius:12px;">
                <a href="https://join.slack.com/t/peekupworkspace/shared_invite/zt-3ve7uxo0g-34L5Yia60yRV~U45E9~p4g" target="_blank" style="display:inline-block;padding:14px 28px;font-size:14px;font-weight:600;color:${BRAND.white};text-decoration:none;letter-spacing:0.01em;">
                  Join Peekup on Slack &rarr;
                </a>
              </td>
            </tr>
          </table>

        </td>
      </tr>
    </table>`

  return emailLayout(content)
}

export async function sendAmbassadorConfirmationEmail(
  to: string,
  firstName: string,
  institution: string,
) {
  const html = buildAmbassadorConfirmationEmail(firstName, institution)

  try {
    const { data, error } = await resend.emails.send({
      from: 'Peekup <hello@usepeekup.com>',
      to,
      subject: `You're in the running, ${firstName}! — Peekup Ambassador Application`,
      html,
    })

    if (error) {
      console.error('Resend error:', error)
      return { success: false, error }
    }

    return { success: true, data }
  } catch (err) {
    console.error('Email send error:', err)
    return { success: false, error: err }
  }
}
