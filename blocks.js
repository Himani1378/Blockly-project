// ---------------- START PROGRAM ----------------
Blockly.Blocks['start_program'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Start Program");

    this.setNextStatement(true, null);
    this.setColour(10);
    this.setDeletable(false);
  }
};

// ---------------- ENTER MARKS ----------------
Blockly.Blocks['enter_marks'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Enter Marks (0 - 100)");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
  }
};

// ---------------- CALCULATE PERCENTAGE ----------------
Blockly.Blocks['calculate_percentage'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Calculate Percentage");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
  }
};

// ---------------- GET GRADE ----------------
Blockly.Blocks['get_grade'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Get Grade");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
  }
};

// ---------------- PASS / FAIL ----------------
Blockly.Blocks['pass_fail'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Pass or Fail");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
  }
};

// ---------------- SHOW OUTPUT ----------------
Blockly.Blocks['show_output'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Show Output");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
  }
};

// ---------------- ALERT ----------------
Blockly.Blocks['alert_block'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Alert Result");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
  }
};


// Start Program
Blockly.JavaScript.forBlock['start_program'] = function () {
  return `
window._marks = undefined;
window._percentage = undefined;
window._grade = "";
window._result = "";
`;
};

// Enter Marks
Blockly.JavaScript.forBlock['enter_marks'] = function () {
  return `
if (window._marks === undefined) {
  const m = Number(prompt("Enter marks (0 - 100):"));
  if (isNaN(m) || m < 0 || m > 100) {
    alert("Invalid marks!");
    throw new Error("Invalid Marks");
  }
  window._marks = m;
}
`;
};

// Calculate Percentage
Blockly.JavaScript.forBlock['calculate_percentage'] = function () {
  return `
window._percentage = (window._marks / 100) * 100;
`;
};

// Get Grade
Blockly.JavaScript.forBlock['get_grade'] = function () {
  return `
if (window._percentage >= 90) window._grade = "Grade A+";
else if (window._percentage >= 75) window._grade = "Grade A";
else if (window._percentage >= 60) window._grade = "Grade B";
else if (window._percentage >= 40) window._grade = "Grade C";
else window._grade = "Fail";
`;
};

// Pass / Fail
Blockly.JavaScript.forBlock['pass_fail'] = function () {
  return `
window._result = window._percentage >= 40 ? "Passed" : "Failed";
`;
};

// Show Output
Blockly.JavaScript.forBlock['show_output'] = function () {
  return `
console.log("Marks:", window._marks);
console.log("Percentage:", window._percentage + "%");
console.log("Grade:", window._grade);
`;
};

// Alert
Blockly.JavaScript.forBlock['alert_block'] = function () {
  return `
alert(
  "Marks: " + window._marks +
  "\\nPercentage: " + window._percentage + "%" +
  "\\nGrade: " + window._grade +
  "\\nResult: " + window._result
);
`;
};

// ---------------- TOOLBOX ----------------
var toolbox = {
  kind: "flyoutToolbox",
  contents: [
    { kind: "block", type: "start_program" },
    { kind: "block", type: "enter_marks" },
    { kind: "block", type: "calculate_percentage" },
    { kind: "block", type: "get_grade" },
    { kind: "block", type: "pass_fail" },
    { kind: "block", type: "show_output" },
    { kind: "block", type: "alert_block" }
  ]
};
