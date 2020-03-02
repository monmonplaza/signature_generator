let form = document.querySelector("#form");
let fname = document.querySelector("#fname").value;
let pos = document.querySelector("#pos").value;
let email = document.querySelector("#mail").value;
let inputs = document.querySelectorAll(".inputs");

inputs.forEach(input => {
  input.addEventListener("change", e => {
    e.preventDefault();
    let html = `
          <style>
            a{text-decoration:none!important}
          </style>
            <table>
            <tr>
              <td colspan="2">
                <h2
                  style=" font-size: 18px; text-transform: uppercase; font-weight: bolder; margin-bottom: 0"
                >
                 ${document.querySelector("#fname").value}
                </h2>
                <h3
                  style=" font-size: 12px; font-weight: 400; color: #787878; font-weight: bold; text-transform:capitalize; margin-bottom: 0"
                >
                ${document.querySelector("#pos").value}
                </h3>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://demo.frontlinebusiness.com.ph/dev/fbs_logo.png"
                  alt=""
                  style="display: block; width: 160px; padding-right: 10px"
                />
              </td>
              <td style="border-left: 1px solid #ccc; padding-left: 10px">
                <a
                  href="mailto: ${document.querySelector("#mail").value}"
                  style="display: block; font-size: 12px; margin-bottom: 2px; font-weight: 400; color: #787878; text-decoration: none!important;"
                  >
                  ${document.querySelector("#mail").value}</a
                >
                <a
                  href="http://www.frontlinebusiness.com.ph"
                  target="blank"
                  style="display: block; font-size: 12px; margin-bottom: 2px; font-weight: 400; color: #787878; text-decoration: none!important; "
                  >
                  frontlinebusiness.com.ph</a
                >
                <p
                  style="display: block; font-size:12px;  font-weight: 400;  text-decoration: none"
                >
                   0922 123 1234
                </p>
              </td>
            </tr>
          </table>
            `;

    document.querySelector(".signature-box").innerHTML = html;
  });
});
