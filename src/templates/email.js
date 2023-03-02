exports.users_html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="x-apple-disable-message-reformatting" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title></title>
  <head>
  </head>
  <style type="text/css" rel="stylesheet" media="all">
    @import url("https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&amp;display=swap");
    #custom_body {
      font-size: 9px !important;
      width: 100% !important;
      height: 100%;
      margin: 0;
      -webkit-text-size-adjust: none;
      background-color: #ebf3fa;
      color: #6b8a99 !important;
      font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
    }
    a.links {
      color: #00da93
    }
    table th,
    table td {
      font-size: 8px;
      font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
      font-size: 16px;
    }
    table td div>div {
      padding: 6px 1px !important;
    }
    .f-fallback{
      color: #6b8a99;
    }
    p.sub {
      font-size: 13px;
    }
    .align-right {
      text-align: right;
    }
    .align-left {
      text-align: left;
    }
    .align-center {
      text-align: center;
    }
    .social {
      width: auto;
    }
    .social td {
      padding: 0;
      width: auto;
    }
    .social_icon {
      height: 20px;
      margin: 0 8px 10px 8px;
      padding: 0;
    }
    .email-wrapper {
      width: 100%;
      margin: 0;
      padding: 0;
      -premailer-width: 100%;
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
    }
    .email-content {
      width: 100%;
      margin: 0;
      padding: 0;
      -premailer-width: 100%;
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
    }

    .email-body {
      width: 100%;
      margin: 0;
      padding: 0;
      -premailer-width: 100%;
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
    }
    .email-body_inner {
      width: 570px;
      margin: 0 auto;
      padding: 0;
      -premailer-width: 570px;
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
    }
    .email-footer {
      width: 570px;
      margin: 0 auto;
      padding: 0;
      -premailer-width: 570px;
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
      text-align: center;
    }
    .email-footer p {
      color: #A8AAAF;
    }
    .body-action {
      width: 100%;
      margin: 30px auto;
      padding: 0;
      -premailer-width: 100%;
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
      text-align: center;
    }
    .body-sub {
      margin-top: 25px;
      padding-top: 25px;
      border-top: 1px solid #EAEAEC;
    }
    .content-cell {
      padding: 35px;
    }    
    .content-cell-main{
      background-color: #fff; word-break: break-word; font-family: Nunito Sans, Helvetica, Arial, sans-serif; font-size: 16px; padding: 35px;
    }
  </style>
</head>
<body id="custom_body">
  <table class="email-wrapper">
    <tr>
      <td align="center">
        <table class="email-content">
          <tr style="text-align: center;">
            </br>
            <img class="align-center" src="https://cdn-smsmasivos.sfo2.digitaloceanspaces.com/email-marketing/logos/smsmasivos.png"
              alt="SMS Masivos" width="300" style="padding: 20px 5px;">
          </tr>
          <tr>
            <td class="email-body">
              <table class="email-body_inner">
                <tr>
                  <td class="content-cell content-cell-main">
                    <div class="f-fallback">
                    <div style="text-align:center">    
                    Resumen de tu cuenta
                    <br/>
                    <br/><br/>
                    <strong style="color:#14477e;font-size:20px;margin-bottom:25px">
                    Hola, {{usuario}}
                    </strong><br/><br/>
                    Tu crédito disponible es: 
                    <br/>
                    <strong style="color:#14477e;margin-bottom:25px">
                    {{credito}}
                    </strong><br/><br/>
                    Créditos restablecidos hoy: 
                    <br/>
                    <strong style="color:#14477e;margin-bottom:25px">
                    {{restituidos_total}}
                    </strong><br/><br/>
                    Reporte del: {{fecha}}, <br/>Ciudad de México
                    <br/><br/>
                    <table summary="estadisticas" style="border-bottom:1px solid #f2f6f7;border-collapse:collapse;border-top:1px solid #f2f6f7;margin:auto;text-align:center;max-width:100%"><thead><tr>
                    <th scope="col" style="background:#f2f6f7;color:#6b8a99;font-weight:400;padding:8px;text-align:center; width:104px;">
                    Mensajes <br />totales
                    </th>
                    <th scope="col" style="background:#f2f6f7;color:#6b8a99;font-weight:400;padding:8px;text-align:center; width:104px;">
                    Enviados <br />al operador
                    </th>
                    <th scope="col" style="background:#f2f6f7;color:#6b8a99;font-weight:400;padding:8px;text-align:center; width:104px;">
                    Entrega <br />confirmada
                    </th>
                    <th scope="col" style="background:#f2f6f7;color:#6b8a99;font-weight:400;padding:8px;text-align:center; width:104px;">
                    Mensajes <br />fallidos
                    </th>
                    <th scope="col" style="background:#f2f6f7;color:#6b8a99;font-weight:400;padding:8px;text-align:center; width:104px;">
                    Mensajes <br /> no cobrados
                    </th>
                    </tr></thead><tbody><tr>
                    <td style="border-left: 1px solid #f2f6f7;background: #fff; border-right: 1px solid #f2f6f7; color:#14477e; font-weight: 600; padding: 8px">
                    {{total}}
                    </td>
                    <td style="border-left: 1px solid #f2f6f7;background: #fff; border-right: 1px solid #f2f6f7; color: #fcb140; font-weight: 600; padding: 8px;">
                    {{pendientes}}
                    </td>
                    <td style="border-left: 1px solid #f2f6f7;background: #fff; border-right: 1px solid #f2f6f7; color:#78c89e; font-weight: 600; padding: 8x;">
                    {{entregados}}
                    </td>
                    <td style="border-left: 1px solid #f2f6f7;background: #fff; border-right: 1px solid #f2f6f7; color:#eb5653; font-weight: 600; padding: 8px;">
                    {{fallidos}}
                    </td>
                    <td style="border-left: 1px solid #f2f6f7;background: #fff; border-right: 1px solid #f2f6f7; color:#67757c; font-weight: 600; padding: 8px;">
                    {{restituidos}}
                    </td>
                    </tr></tbody></table>
                    <br/><br>
                    
                    <table summary="estadisticas" style="border-bottom:1px solid #f2f6f7;border-collapse:collapse;border-top:1px solid #f2f6f7;margin:auto;text-align:center;max-width:100%"><thead><tr>
                    <th scope="col" style="background:#f2f6f7;color:#6b8a99;font-weight:400;padding:8px;text-align:center; width:155px;">
                    Mensajes de Whatsapp<br />totales
                    </th>
                    <th scope="col" style="background:#f2f6f7;color:#6b8a99;font-weight:400;padding:8px;text-align:center; width:155px;">
                    Entrega de Whatsapp <br />confirmada
                    </th>
                    <th scope="col" style="background:#f2f6f7;color:#6b8a99;font-weight:400;padding:8px;text-align:center; width:155px;">
                    Mensajes de Whatsapp <br />fallidos
                    </th>
                    <th scope="col" style="background:#f2f6f7;color:#6b8a99;font-weight:400;padding:8px;text-align:center; width:155px;">
                    Mensajes de Whatsapp <br /> no cobrados
                    </th>
                    </tr></thead><tbody><tr>
                    <td style="border-left: 1px solid #f2f6f7;background: #fff; border-right: 1px solid #f2f6f7; color:#14477e; font-weight: 600; padding: 8px">
                    {{total_wa}}
                    </td>
                    <td style="border-left: 1px solid #f2f6f7;background: #fff; border-right: 1px solid #f2f6f7; color:#78c89e; font-weight: 600; padding: 8x;">
                    {{entregados_wa}}
                    </td>
                    <td style="border-left: 1px solid #f2f6f7;background: #fff; border-right: 1px solid #f2f6f7; color:#eb5653; font-weight: 600; padding: 8px;">
                    {{fallidos_wa}}
                    </td>
                    <td style="border-left: 1px solid #f2f6f7;background: #fff; border-right: 1px solid #f2f6f7; color:#67757c; font-weight: 600; padding: 8px;">
                    {{restituidos_wa}}
                    </td>
                    </tr></tbody></table>
                    <br/><br>
                    Para acceder a tu cuenta haz click aquí: 
                    <br><br><br>
                    <a class="links" href="https://app.smsmasivos.com.mx" style="background-color:#00DA93;border:#fff;border-radius:7px;color:#fff;font-size:21px;height:44px;width:15rem;line-height: 1;padding: 10px;text-decoration: none;">
                    Acceder a cuenta
                    </a>
                  </div>
                      <table class="body-sub" role="presentation"
                        style="margin-top: 25px; padding-top: 25px; border-top-width: 1px; border-top-color: #EAEAEC; border-top-style: solid;">
                        <tr>
                          <td
                            style="word-break: break-word; font-family: Nunito Sans, Helvetica, Arial, sans-serif; font-size: 16px;">
                            <p class="f-fallback sub" align="center"
                              style="font-size: 13px; line-height: 1.625; margin: .4em 0 1.1875em;">
                              Si quieres dejar de recibir estos correos, entra a tu panel en la sección de "Mi cuenta" para desactivarlos.  
                            </p>
                            <p class="f-fallback sub" align="center"
                              style="font-size: 13px; line-height: 1.625; margin: .4em 0 1.1875em;">Para
                              cualquier duda o comentario al correo: <a class="links"
                                href="mailto:hola@smsmasivos.com.mx"><span class="__cf_email__"
                                  data-cfemail="e58d8a8984a59688968884968c938a96cb868a88cb889d">[email&#160;protected]</span></a>
                              <br>Para acceder a más detalles de la cuenta, ingrese a: <a class="links"
                                href="https://app.smsmasivos.com.mx">https://app.smsmasivos.com.mx</a></p>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td
              style="word-break: break-word; font-family: Nunito Sans, Helvetica, Arial, sans-serif; font-size: 16px;">
              <table class="email-footer" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation"
                style="width: 570px; -premailer-width: 570px; -premailer-cellpadding: 0; -premailer-cellspacing: 0; text-align: center; margin: 0 auto; padding: 0;">
                <tr>
                  <td class="content-cell" align="center"
                    style="word-break: break-word; font-family: Nunito Sans, Helvetica, Arial, sans-serif; font-size: 16px; padding: 35px;">
                    <div style="display: inline-flex; margin: 0px 10px 20px 0px;">
                      <a title="facebook" href="https://www.facebook.com/smsmasivos.com.mx"><img
                          src="https://cdn-smsmasivos.sfo2.digitaloceanspaces.com/email-marketing/logos/facebook.png"
                          alt="SMS Masivos" width="25" style="margin: 10px 10px;"></a>
                      <a title="twitter" href="https://twitter.com/smsmasivosmx"><img
                          src="https://cdn-smsmasivos.sfo2.digitaloceanspaces.com/email-marketing/logos/twitter.png"
                          alt="SMS Masivos" width="25" style="margin: 10px 10px;"></a>
                      <a title="youtube" href="https://www.youtube.com/channel/UCeIe3OItm6_cxIMtPh6Iizg"><img
                          src="https://cdn-smsmasivos.sfo2.digitaloceanspaces.com/email-marketing/logos/youtube.png"
                          alt="SMS Masivos" width="25" style="margin: 10px 10px;"></a>
                      <a title="whatsapp" href="https://wa.me/525585250355"><img
                          src="https://cdn-smsmasivos.sfo2.digitaloceanspaces.com/email-marketing/logos/whatsapp.png"
                          alt="SMS Masivos" width="25" style="margin: 10px 10px;"></a>
                    </div>
                    <p class="f-fallback sub align-center"
                      style="font-size: 13px; line-height: 1.625; text-align: center; color: #6b8a99; margin: .4em 0 1.1875em;"
                      align="center"><strong>SMS Masivos</strong>
                      <br><a class="links" href="https://app.smsmasivos.com.mx">https://app.smsmasivos.com.mx</a>
                      <br>Correo electrónico de ventas: <a class="links" href="mailto:hola@smsmasivos.com.mx"><span
                          class="__cf_email__"
                          data-cfemail="d6beb9bab796a5bba5bbb7a5bfa0b9a5f8b5b9bbf8bbae">[email&#160;protected]</span></a>
                      <br>Tel: 55 85261493 (México)
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
  <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
</body>
</html>`;

exports.dists_html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="x-apple-disable-message-reformatting" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title></title>
  <head>
  </head>
  <style type="text/css" rel="stylesheet" media="all">
    @import url("https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&amp;display=swap");
    #custom_body {
      font-size: 9px !important;
      width: 100% !important;
      height: 100%;
      margin: 0;
      -webkit-text-size-adjust: none;
      background-color: #ebf3fa;
      color: #6b8a99 !important;
      font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
    }
    a.links {
      color: #00da93
    }
    table th,
    table td {
      font-size: 8px;
      font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
      font-size: 16px;
    }
    table td div>div {
      padding: 6px 1px !important;
    }
    .f-fallback{
      color: #6b8a99;
    }
    p.sub {
      font-size: 13px;
    }
    .align-right {
      text-align: right;
    }
    .align-left {
      text-align: left;
    }
    .align-center {
      text-align: center;
    }
    .social {
      width: auto;
    }
    .social td {
      padding: 0;
      width: auto;
    }
    .social_icon {
      height: 20px;
      margin: 0 8px 10px 8px;
      padding: 0;
    }
    .email-wrapper {
      width: 100%;
      margin: 0;
      padding: 0;
      -premailer-width: 100%;
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
    }
    .email-content {
      width: 100%;
      margin: 0;
      padding: 0;
      -premailer-width: 100%;
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
    }

    .email-body {
      width: 100%;
      margin: 0;
      padding: 0;
      -premailer-width: 100%;
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
    }
    .email-body_inner {
      width: 870px;
      margin: 0 auto;
      padding: 0;
      -premailer-width: 570px;
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
    }
    .email-footer {
      width: 570px;
      margin: 0 auto;
      padding: 0;
      -premailer-width: 570px;
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
      text-align: center;
    }
    .email-footer p {
      color: #A8AAAF;
    }
    .body-action {
      width: 100%;
      margin: 30px auto;
      padding: 0;
      -premailer-width: 100%;
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
      text-align: center;
    }
    .body-sub {
      margin-top: 25px;
      padding-top: 25px;
      border-top: 1px solid #EAEAEC;
    }
    .content-cell {
      padding: 35px;
    }    
    .content-cell-main{
      background-color: #fff; word-break: break-word; font-family: Nunito Sans, Helvetica, Arial, sans-serif; font-size: 16px; padding: 35px;
    }
  </style>
</head>
<body id="custom_body">
  <table class="email-wrapper">
    <tr>
      <td align="center">
        <table class="email-content">
          <tr style="text-align: center;">
            </br>
            <img class="align-center" src="https://cdn-smsmasivos.sfo2.digitaloceanspaces.com/email-marketing/logos/smsmasivos.png"
              alt="SMS Masivos" width="300" style="padding: 20px 5px;">
          </tr>
          <tr>
            <td class="email-body">
              <table class="email-body_inner">
                <tr>
                  <td class="content-cell content-cell-main">
                    <div class="f-fallback">
                    <div style="text-align:center">    
                    Resumen de tu cuenta
                  <br/>
                  <br/><br/>
                  <strong style="color:#14477e;font-size:20px;margin-bottom:25px">
                  Hola, {{distribuidor}}
                  </strong><br/><br/>
                  Tu crédito de administrador: 
                  <br/>
                  <strong style="color:#14477e;margin-bottom:25px">
                  {{credito}}
                  </strong><br/><br/>
                  Créditos restablecidos hoy: 
                  <br/>
                  <strong style="color:#14477e;margin-bottom:25px">
                  {{restituidos_total}}
                  </strong><br/><br/>
                  Reporte del: {{fecha}}, <br/>Ciudad de México
                  <br/><br/>
                  
                  
                  <table summary="estadisticas" style="border-bottom:1px solid #f2f6f7;border-collapse:collapse;border-top:1px solid #f2f6f7;margin:auto;text-align:center;max-width:100%"><thead><tr>
                  <th scope="col" style="background:#f2f6f7;color:#6b8a99;font-weight:400;padding:8px;text-align:center; width:104px;">
                  Usuario
                  </th>
                  <th scope="col" style="background:#f2f6f7;color:#6b8a99;font-weight:400;padding:8px;text-align:center; width:104px;">
                  Mensajes <br />totales
                  </th>
                  <th scope="col" style="background:#f2f6f7;color:#6b8a99;font-weight:400;padding:8px;text-align:center; width:104px;">
                  Enviados <br />al operador
                  </th>
                  <th scope="col" style="background:#f2f6f7;color:#6b8a99;font-weight:400;padding:8px;text-align:center; width:104px;">
                  Entrega <br />confirmada
                  </th>
                  <th scope="col" style="background:#f2f6f7;color:#6b8a99;font-weight:400;padding:8px;text-align:center; width:104px;">
                  Mensajes <br />fallidos
                  </th>
                  <th scope="col" style="background:#f2f6f7;color:#6b8a99;font-weight:400;padding:8px;text-align:center; width:104px;">
                  Mensajes <br /> no cobrados
                  </th>
                  </tr></thead><tbody>
                  {{rows_usuarios}}
                  
                  <!-- START TOTAL ROW -->
                  <tr style="border:1px solid #14477e">
                  <td>TOTAL</td>
                  <td style="border-left: 1px solid #f2f6f7;background: #fff; border-right: 1px solid #f2f6f7; color:#14477e; font-weight: 600; padding: 8px">
                  {{total}}
                  </td>
                  <td style="border-left: 1px solid #f2f6f7;background: #fff; border-right: 1px solid #f2f6f7; color: #fcb140; font-weight: 600; padding: 8px;">
                  {{pendientes}}
                  </td>
                  <td style="border-left: 1px solid #f2f6f7;background: #fff; border-right: 1px solid #f2f6f7; color:#78c89e; font-weight: 600; padding: 8x;">
                  {{entregados}}
                  </td>
                  <td style="border-left: 1px solid #f2f6f7;background: #fff; border-right: 1px solid #f2f6f7; color:#eb5653; font-weight: 600; padding: 8px;">
                  {{fallidos}}
                  </td>
                  <td style="border-left: 1px solid #f2f6f7;background: #fff; border-right: 1px solid #14477e; color:#67757c; font-weight: 600; padding: 8px;">
                  {{restituidos}}
                  </td>
                  </tr>


                  <!-- END TOTAL ROW -->
                  </tbody></table>
                  
                  <br/><br>
                  <table summary="creditos" style="border-bottom:1px solid #f2f6f7;border-collapse:collapse;border-top:1px solid #f2f6f7;margin:auto;text-align:center;max-width:100%"><thead><tr>
                  <th scope="col" style="background:#f2f6f7;color:#6b8a99;font-weight:400;padding:8px;text-align:center; width:104px;">
                  Usuario
                  </th>
                  <th scope="col" style="background:#f2f6f7;color:#6b8a99;font-weight:400;padding:8px;text-align:center; width:104px;">
                  Créditos restantes
                  </th>
                  </tr></thead>
                  <tbody>
                  </tbody>
                  {{rows_usuarios_creditos}}
                  </table>
                  <br><br>
                  Para acceder a tu cuenta haz click aquí: 
                  <br><br><br>
                  <a class="links" href="https://manager.smsmasivos.com.mx" style="background-color:#00DA93;border:#fff;border-radius:7px;color:#fff;font-size:21px;height:44px;width:15rem;line-height: 1;padding: 10px;text-decoration: none;">
                  Acceder a cuenta
                  </a>
                  </div>
                      <table class="body-sub" role="presentation"
                        style="margin-top: 25px; padding-top: 25px; border-top-width: 1px; border-top-color: #EAEAEC; border-top-style: solid;margin-left:auto;margin-right:auto">
                        <tr>
                          <td
                            style="word-break: break-word; font-family: Nunito Sans, Helvetica, Arial, sans-serif; font-size: 16px;">
                            <p class="f-fallback sub" align="center"
                              style="font-size: 13px; line-height: 1.625; margin: .4em 0 1.1875em;">
                              Si quieres dejar de recibir estos correos, entra a tu panel en la sección de "Mi cuenta" para desactivarlos  
                            </p>
                            <br>
                            <p class="f-fallback sub" align="center"
                              style="font-size: 13px; line-height: 1.625; margin: .4em 0 1.1875em;">Para
                              cualquier duda o comentario al correo: <a class="links"
                                href="mailto:hola@smsmasivos.com.mx"><span class="__cf_email__"
                                  data-cfemail="e58d8a8984a59688968884968c938a96cb868a88cb889d">[email&#160;protected]</span></a>
                              <br>Para acceder a más detalles de la cuenta, ingrese a: <a class="links"
                                href="https://manager.smsmasivos.com.mx">https://manager.smsmasivos.com.mx</a></p>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td
              style="word-break: break-word; font-family: Nunito Sans, Helvetica, Arial, sans-serif; font-size: 16px;">
              <table class="email-footer" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation"
                style="width: 570px; -premailer-width: 570px; -premailer-cellpadding: 0; -premailer-cellspacing: 0; text-align: center; margin: 0 auto; padding: 0;">
                <tr>
                  <td class="content-cell" align="center"
                    style="word-break: break-word; font-family: Nunito Sans, Helvetica, Arial, sans-serif; font-size: 16px; padding: 35px;">
                    <div style="display: inline-flex; margin: 0px 10px 20px 0px;">
                      <a title="facebook" href="https://www.facebook.com/smsmasivos.com.mx"><img
                          src="https://cdn-smsmasivos.sfo2.digitaloceanspaces.com/email-marketing/logos/facebook.png"
                          alt="SMS Masivos" width="25" style="margin: 10px 10px;"></a>
                      <a title="twitter" href="https://twitter.com/smsmasivosmx"><img
                          src="https://cdn-smsmasivos.sfo2.digitaloceanspaces.com/email-marketing/logos/twitter.png"
                          alt="SMS Masivos" width="25" style="margin: 10px 10px;"></a>
                      <a title="youtube" href="https://www.youtube.com/channel/UCeIe3OItm6_cxIMtPh6Iizg"><img
                          src="https://cdn-smsmasivos.sfo2.digitaloceanspaces.com/email-marketing/logos/youtube.png"
                          alt="SMS Masivos" width="25" style="margin: 10px 10px;"></a>
                      <a title="whatsapp" href="https://wa.me/525585250355"><img
                          src="https://cdn-smsmasivos.sfo2.digitaloceanspaces.com/email-marketing/logos/whatsapp.png"
                          alt="SMS Masivos" width="25" style="margin: 10px 10px;"></a>
                    </div>
                    <p class="f-fallback sub align-center"
                      style="font-size: 13px; line-height: 1.625; text-align: center; color: #6b8a99; margin: .4em 0 1.1875em;"
                      align="center"><strong>SMS Masivos</strong>
                      <br><a class="links" href="https://manager.smsmasivos.com.mx">https://manager.smsmasivos.com.mx</a>
                      <br>Correo electrónico de ventas: <a class="links" href="mailto:hola@smsmasivos.com.mx"><span
                          class="__cf_email__"
                          data-cfemail="d6beb9bab796a5bba5bbb7a5bfa0b9a5f8b5b9bbf8bbae">[email&#160;protected]</span></a>
                      <br>Tel: 55 85261493 (México)
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
  <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
</body>
</html>`;

exports.api_html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="x-apple-disable-message-reformatting" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title></title>
  <head>
  </head>
  <style type="text/css" rel="stylesheet" media="all">
    @import url("https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&amp;display=swap");
    #custom_body {
      font-size: 9px !important;
      width: 100% !important;
      height: 100%;
      margin: 0;
      -webkit-text-size-adjust: none;
      background-color: #ebf3fa;
      color: #6b8a99 !important;
      font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
    }
    a.links {
      color: #00da93
    }
    table th,
    table td {
      font-size: 8px;
      font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
      font-size: 16px;
    }
    table td div>div {
      padding: 6px 1px !important;
    }
    .f-fallback{
      color: #6b8a99;
    }
    p.sub {
      font-size: 13px;
    }
    .align-right {
      text-align: right;
    }
    .align-left {
      text-align: left;
    }
    .align-center {
      text-align: center;
    }
    .social {
      width: auto;
    }
    .social td {
      padding: 0;
      width: auto;
    }
    .social_icon {
      height: 20px;
      margin: 0 8px 10px 8px;
      padding: 0;
    }
    .email-wrapper {
      width: 100%;
      margin: 0;
      padding: 0;
      -premailer-width: 100%;
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
    }
    .email-content {
      width: 100%;
      margin: 0;
      padding: 0;
      -premailer-width: 100%;
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
    }

    .email-body {
      width: 100%;
      margin: 0;
      padding: 0;
      -premailer-width: 100%;
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
    }
    .email-body_inner {
      width: 570px;
      margin: 0 auto;
      padding: 0;
      -premailer-width: 570px;
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
    }
    .email-footer {
      width: 570px;
      margin: 0 auto;
      padding: 0;
      -premailer-width: 570px;
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
      text-align: center;
    }
    .email-footer p {
      color: #A8AAAF;
    }
    .body-action {
      width: 100%;
      margin: 30px auto;
      padding: 0;
      -premailer-width: 100%;
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
      text-align: center;
    }
    .body-sub {
      margin-top: 25px;
      padding-top: 25px;
      border-top: 1px solid #EAEAEC;
    }
    .content-cell {
      padding: 35px;
    }    
    .content-cell-main{
      background-color: #fff; word-break: break-word; font-family: Nunito Sans, Helvetica, Arial, sans-serif; font-size: 16px; padding: 35px;
    }
  </style>
</head>
<body id="custom_body">
  <table class="email-wrapper">
    <tr>
      <td align="center">
        <table class="email-content">
          <tr style="text-align: center;">
            </br>
            <img class="align-center" src="https://cdn-smsmasivos.sfo2.digitaloceanspaces.com/email-marketing/logos/smsmasivos.png"
              alt="SMS Masivos" width="300" style="padding: 20px 5px;">
          </tr>
          <tr>
            <td class="email-body">
              <table class="email-body_inner">
                <tr>
                  <td class="content-cell content-cell-main">
                    <div class="f-fallback">
                    <h2 style="margin-top: 0; font-size: 20px; font-weight: bold; text-align: left;" align="left">¡Hola, {{usuario}}!</h2>
                    <p style="font-size: 16px; line-height: 1.625; margin: .4em 0 1.1875em;">Al parecer, no hemos recibido una respuesta de tu servidor mientras enviábamos datos a tu callback, esto pudo ser ocasionado por diversas razones.  <br/>De forma preventiva, hemos deshabilitado el envío de información a tu servidor. <br/>Por favor, asegúrate que todo funciona forma adeacuadamente y vuelve a habilitar tu URL en nuestro panel.</p>
                      <table class="body-sub" role="presentation"
                        style="margin-top: 25px; padding-top: 25px; border-top-width: 1px; border-top-color: #EAEAEC; border-top-style: solid;">
                        <tr>
                          <td
                            style="word-break: break-word; font-family: Nunito Sans, Helvetica, Arial, sans-serif; font-size: 16px;">
                            <p class="f-fallback sub" align="center"
                              style="font-size: 13px; line-height: 1.625; margin: .4em 0 1.1875em;">Para
                              cualquier duda o comentario al correo: <a class="links"
                                href="mailto:hola@smsmasivos.com.mx"><span class="__cf_email__"
                                  data-cfemail="e58d8a8984a59688968884968c938a96cb868a88cb889d">[email&#160;protected]</span></a>
                              <br>Para acceder a más detalles de la cuenta, ingrese a: <a class="links"
                                href="https://app.smsmasivos.com.mx">https://app.smsmasivos.com.mx</a></p>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td
              style="word-break: break-word; font-family: Nunito Sans, Helvetica, Arial, sans-serif; font-size: 16px;">
              <table class="email-footer" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation"
                style="width: 570px; -premailer-width: 570px; -premailer-cellpadding: 0; -premailer-cellspacing: 0; text-align: center; margin: 0 auto; padding: 0;">
                <tr>
                  <td class="content-cell" align="center"
                    style="word-break: break-word; font-family: Nunito Sans, Helvetica, Arial, sans-serif; font-size: 16px; padding: 35px;">
                    <div style="display: inline-flex; margin: 0px 10px 20px 0px;">
                      <a title="facebook" href="https://www.facebook.com/smsmasivos.com.mx"><img
                          src="https://cdn-smsmasivos.sfo2.digitaloceanspaces.com/email-marketing/logos/facebook.png"
                          alt="SMS Masivos" width="25" style="margin: 10px 10px;"></a>
                      <a title="twitter" href="https://twitter.com/smsmasivosmx"><img
                          src="https://cdn-smsmasivos.sfo2.digitaloceanspaces.com/email-marketing/logos/twitter.png"
                          alt="SMS Masivos" width="25" style="margin: 10px 10px;"></a>
                      <a title="youtube" href="https://www.youtube.com/channel/UCeIe3OItm6_cxIMtPh6Iizg"><img
                          src="https://cdn-smsmasivos.sfo2.digitaloceanspaces.com/email-marketing/logos/youtube.png"
                          alt="SMS Masivos" width="25" style="margin: 10px 10px;"></a>
                      <a title="whatsapp" href="https://wa.me/525585250355"><img
                          src="https://cdn-smsmasivos.sfo2.digitaloceanspaces.com/email-marketing/logos/whatsapp.png"
                          alt="SMS Masivos" width="25" style="margin: 10px 10px;"></a>
                    </div>
                    <p class="f-fallback sub align-center"
                      style="font-size: 13px; line-height: 1.625; text-align: center; color: #6b8a99; margin: .4em 0 1.1875em;"
                      align="center"><strong>SMS Masivos</strong>
                      <br><a class="links" href="https://app.smsmasivos.com.mx">https://app.smsmasivos.com.mx</a>
                      <br>Correo electrónico de ventas: <a class="links" href="mailto:hola@smsmasivos.com.mx"><span
                          class="__cf_email__"
                          data-cfemail="d6beb9bab796a5bba5bbb7a5bfa0b9a5f8b5b9bbf8bbae">[email&#160;protected]</span></a>
                      <br>Tel: 55 85261493 (México)
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
  <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
</body>
</html>`;
