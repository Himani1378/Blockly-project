var workspace = Blockly.inject('blocklyDiv', {
  toolbox: toolbox,
  scrollbars: true,
  trashcan: true,

  horizontalLayout: false,
  toolboxPosition: 'start',

  zoom: {
    controls: true,
    wheel: true,
    pinch: true,
    startScale: 1,
    maxScale: 3,
    minScale: 0.4
  }
});

const wrapper = document.getElementById('blocklyWrapper');

const resizeObserver = new ResizeObserver(() => {
  Blockly.svgResize(workspace);
});

resizeObserver.observe(wrapper);

function generateCode() {
  const code = Blockly.JavaScript.workspaceToCode(workspace);
  document.getElementById("codeArea").value = code;
}

function runCode() {
  const code = document.getElementById("codeArea").value;
  const outputDiv = document.getElementById("output");

  outputDiv.innerHTML = "";
  let consoleOutput = "";

  const originalConsoleLog = console.log;

  try {
    console.log = function (...args) {
      consoleOutput += args.join(" ") + "<br>";
    };

    eval(code);

    outputDiv.innerHTML = consoleOutput || "✔ Program executed successfully";

  } catch (err) {
    outputDiv.innerHTML = "❌ Error: " + err.message;
  } finally {
    console.log = originalConsoleLog;
  }
}

function clearWorkspace() {
  workspace.clear();
  document.getElementById("codeArea").value = "";
  document.getElementById("output").innerHTML = "";

  delete window._marks;
  delete window._percentage;
  delete window._grade;
  delete window._result;
}


