var workspace = Blockly.inject('blocklyDiv', {
  toolbox: toolbox,
  scrollbars: true,
  trashcan: true
});

// for Generating JavaScript Code from Blocks
function generateCode() {
  const code = Blockly.JavaScript.workspaceToCode(workspace);
  document.getElementById("codeArea").value = code;
}


// for Running Generated Code
function runCode() {
  const code = document.getElementById("codeArea").value;
  const outputDiv = document.getElementById("output");

  outputDiv.innerHTML = "";

  let consoleOutput = "";
  const originalConsoleLog = console.log;

  try {
    console.log = function (message) {
      consoleOutput += message + "<br>";
    };

    eval(code);

    outputDiv.innerHTML = consoleOutput || "✔ Program executed successfully.";

  } catch (error) {
    outputDiv.innerHTML = "❌ Something went wrong. Please check your blocks.";

  } finally {
    console.log = originalConsoleLog;
  }
}


// for Clearing Workspace
function clearWorkspace() {
  workspace.clear();
  document.getElementById("codeArea").value = "";
  document.getElementById("output").innerHTML = "";
  delete window._marks;
}

