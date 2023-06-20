import Drawflow from "drawflow";

var example = document.getElementById("drawflow");
const editor = new Drawflow(example);
editor.reroute = true;
editor.drawflow = {
  drawflow: {
    // Home: {
    //   data: {
    //     "1": {
    //       id: 1,
    //       name: "welcome",
    //       data: {},
    //       class: "welcome",
    //       html:
    //         '\n    <div>\n      <div class="title-box">👏 Welcome!!</div>\n      <div class="box">\n        <p>Simple flow library <b>demo</b>\n        <a href="https://github.com/jerosoler/Drawflow" target="_blank">Drawflow</a> by <b>Jero Soler</b></p><br>\n\n        <p>Multiple input / outputs<br>\n           Data sync nodes<br>\n           Import / export<br>\n           Modules support<br>\n           Simple use<br>\n           Type: Fixed or Edit<br>\n           Events: view console<br>\n           Pure Javascript<br>\n        </p>\n        <br>\n        <p><b><u>Shortkeys:</u></b></p>\n        <p>🎹 <b>Delete</b> for remove selected<br>\n        💠 Mouse Left Click == Move<br>\n        ❌ Mouse Right == Delete Option<br>\n        🔍 Ctrl + Wheel == Zoom<br>\n        📱 Mobile support<br>\n        ...</p>\n      </div>\n    </div>\n    ',
    //       typenode: false,
    //       inputs: {},
    //       outputs: {},
    //       pos_x: 50,
    //       pos_y: 50
    //     },
    //     "2": {
    //       id: 2,
    //       name: "slack",
    //       data: {},
    //       class: "slack",
    //       html:
    //         '\n          <div>\n            <div class="title-box"><i class="fab fa-slack"></i> Slack chat message</div>\n          </div>\n          ',
    //       typenode: false,
    //       inputs: {
    //         input_1: { connections: [{ node: "7", input: "output_1" }] }
    //       },
    //       outputs: {},
    //       pos_x: 1028,
    //       pos_y: 87
    //     },
    //     "3": {
    //       id: 3,
    //       name: "telegram",
    //       data: { channel: "channel_2" },
    //       class: "telegram",
    //       html:
    //         '\n          <div>\n            <div class="title-box"><i class="fab fa-telegram-plane"></i> Telegram bot</div>\n            <div class="box">\n              <p>Send to telegram</p>\n              <p>select channel</p>\n              <select df-channel>\n                <option value="channel_1">Channel 1</option>\n                <option value="channel_2">Channel 2</option>\n                <option value="channel_3">Channel 3</option>\n                <option value="channel_4">Channel 4</option>\n              </select>\n            </div>\n          </div>\n          ',
    //       typenode: false,
    //       inputs: {
    //         input_1: { connections: [{ node: "7", input: "output_1" }] }
    //       },
    //       outputs: {},
    //       pos_x: 1032,
    //       pos_y: 184
    //     },
    //     "4": {
    //       id: 4,
    //       name: "email",
    //       data: {},
    //       class: "email",
    //       html:
    //         '\n            <div>\n              <div class="title-box"><i class="fas fa-at"></i> Send Email </div>\n            </div>\n            ',
    //       typenode: false,
    //       inputs: {
    //         input_1: { connections: [{ node: "5", input: "output_1" }] }
    //       },
    //       outputs: {},
    //       pos_x: 1033,
    //       pos_y: 439
    //     },
    //     "5": {
    //       id: 5,
    //       name: "template",
    //       data: { template: "Write your template" },
    //       class: "template",
    //       html:
    //         '\n            <div>\n              <div class="title-box"><i class="fas fa-code"></i> Template</div>\n              <div class="box">\n                Ger Vars\n                <textarea df-template></textarea>\n                Output template with vars\n              </div>\n            </div>\n            ',
    //       typenode: false,
    //       inputs: {
    //         input_1: { connections: [{ node: "6", input: "output_1" }] }
    //       },
    //       outputs: {
    //         output_1: {
    //           connections: [
    //             { node: "4", output: "input_1" },
    //             { node: "11", output: "input_1" }
    //           ]
    //         }
    //       },
    //       pos_x: 607,
    //       pos_y: 304
    //     },
    //     "6": {
    //       id: 6,
    //       name: "github",
    //       data: { name: "https://github.com/jerosoler/Drawflow" },
    //       class: "github",
    //       html:
    //         '\n          <div>\n            <div class="title-box"><i class="fab fa-github "></i> Github Stars</div>\n            <div class="box">\n              <p>Enter repository url</p>\n            <input type="text" df-name>\n            </div>\n          </div>\n          ',
    //       typenode: false,
    //       inputs: {},
    //       outputs: {
    //         output_1: { connections: [{ node: "5", output: "input_1" }] }
    //       },
    //       pos_x: 341,
    //       pos_y: 191
    //     },
    //     "7": {
    //       id: 7,
    //       name: "facebook",
    //       data: {},
    //       class: "facebook",
    //       html:
    //         '\n        <div>\n          <div class="title-box"><i class="fab fa-facebook"></i> Facebook Message</div>\n        </div>\n        ',
    //       typenode: false,
    //       inputs: {},
    //       outputs: {
    //         output_1: {
    //           connections: [
    //             { node: "2", output: "input_1" },
    //             { node: "3", output: "input_1" },
    //             { node: "11", output: "input_1" }
    //           ]
    //         }
    //       },
    //       pos_x: 347,
    //       pos_y: 87
    //     },
    //     "11": {
    //       id: 11,
    //       name: "log",
    //       data: {},
    //       class: "log",
    //       html:
    //         '\n            <div>\n              <div class="title-box"><i class="fas fa-file-signature"></i> Save log file </div>\n            </div>\n            ',
    //       typenode: false,
    //       inputs: {
    //         input_1: {
    //           connections: [
    //             { node: "5", input: "output_1" },
    //             { node: "7", input: "output_1" }
    //           ]
    //         }
    //       },
    //       outputs: {},
    //       pos_x: 1031,
    //       pos_y: 363
    //     }
    //   }
    // },
    Other: {
      data: {
        "8": {
          id: 8,
          name: "personalized",
          data: {},
          html:
            "<div style='background: black !important;'>Personalizeed</div>",
          typenode: false,
          inputs: {
            input_1: {
              connections: [
                { node: "12", input: "output_1" },
                { node: "12", input: "output_2" },
                { node: "12", input: "output_3" },
                { node: "12", input: "output_4" }
              ]
            }
          },
          outputs: {
            output_1: { connections: [{ node: "9", output: "input_1" }] }
          },
          pos_x: 764,
          pos_y: 227
        },
        "9": {
          id: 9,
          name: "dbclick",
          data: { name: "Hello World!!" },
          class: "dbclick",
          html:
            '\n            <div>\n            <div class="title-box"><i class="fas fa-mouse"></i> Db Click</div>\n              <div class="box dbclickbox" ondblclick="showpopup(event)">\n                Db Click here\n                <div class="modal" style="display:none">\n                  <div class="modal-content">\n                    <span class="close" onclick="closemodal(event)">&times;</span>\n                    Change your variable {name} !\n                    <input type="text" df-name>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n            ',
          typenode: false,
          inputs: {
            input_1: { connections: [{ node: "8", input: "output_1" }] }
          },
          outputs: {
            output_1: { connections: [{ node: "12", output: "input_2" }] }
          },
          pos_x: 209,
          pos_y: 38
        },
        "12": {
          id: 12,
          name: "multiple",
          data: {},
          class: "multiple",
          html:
            '\n            <div>\n              <div class="box">\n                Multiple!\n              </div>\n            </div>\n            ',
          typenode: false,
          inputs: {
            input_1: { connections: [] },
            input_2: { connections: [{ node: "9", input: "output_1" }] },
            input_3: { connections: [] }
          },
          outputs: {
            output_1: { connections: [{ node: "8", output: "input_1" }] },
            output_2: { connections: [{ node: "8", output: "input_1" }] },
            output_3: { connections: [{ node: "8", output: "input_1" }] },
            output_4: { connections: [{ node: "8", output: "input_1" }] }
          },
          pos_x: 179,
          pos_y: 272
        }
      }
    }
  }
};

editor.start();

/*
var welcome = `
<div>
  <div class="title-box">👏 Welcome!!</div>
  <div class="box">
    <p>Simple flow library <b>demo</b>
    <a href="https://github.com/jerosoler/Drawflow" target="_blank">Drawflow</a> by <b>Jero Soler</b></p><br>

    <p>Multiple input / outputs<br>
       Data sync nodes<br>
       Import / export<br>
       Modules support<br>
       Simple use<br>
       Type: Fixed or Edit<br>
       Events: view console<br>
       Pure Javascript<br>
    </p>
    <br>
    <p><b><u>Shortkeys:</u></b></p>
    <p>🎹 <b>Delete</b> for remove selected<br>
    💠 Mouse Left Click == Move<br>
    ❌ Mouse Right == Delete Option<br>
    🔍 Ctrl + Wheel == Zoom<br>
    📱 Mobile support<br>
    ...</p>
  </div>
</div>
`;
*/

//editor.addNode(name, inputs, outputs, posx, posy, class, data, html);
/*editor.addNode('welcome', 0, 0, 50, 50, 'welcome', {}, welcome );
editor.addModule('Other');
*/

// Events!
editor.on("nodeCreated", function (id) {
  console.log("Node created " + id);
});

editor.on("nodeRemoved", function (id) {
  console.log("Node removed " + id);
});

editor.on("nodeSelected", function (id) {
  console.log("Node selected " + id);
});

editor.on("moduleCreated", function (name) {
  console.log("Module Created " + name);
});

editor.on("moduleChanged", function (name) {
  console.log("Module Changed " + name);
});

editor.on("connectionCreated", function (connection) {
  console.log("Connection created");
  console.log(connection);
});

editor.on("connectionRemoved", function (connection) {
  console.log("Connection removed");
  console.log(connection);
});

editor.on("mouseMove", function (position) {
  console.log("Position mouse x:" + position.x + " y:" + position.y);
});

editor.on("nodeMoved", function (id) {
  console.log("Node moved " + id);
});

editor.on("zoom", function (zoom) {
  console.log("Zoom level " + zoom);
});

editor.on("translate", function (position) {
  console.log("Translate x:" + position.x + " y:" + position.y);
});

editor.on("addReroute", function (id) {
  console.log("Reroute added " + id);
});

editor.on("removeReroute", function (id) {
  console.log("Reroute removed " + id);
});

/* DRAG EVENT */

/* Mouse and Touch Actions */

var elements = document.getElementsByClassName("drag-drawflow");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("touchend", drop, false);
  elements[i].addEventListener("touchmove", positionMobile, false);
  elements[i].addEventListener("touchstart", drag, false);
}

var mobile_item_selec = "";
var mobile_last_move = null;
function positionMobile(ev) {
  mobile_last_move = ev;
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  if (ev.type === "touchstart") {
    mobile_item_selec = ev.target
      .closest(".drag-drawflow")
      .getAttribute("data-node");
  } else {
    ev.dataTransfer.setData("node", ev.target.getAttribute("data-node"));
  }
}

function drop(ev) {}
