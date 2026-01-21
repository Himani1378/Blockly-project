// input marks block
Blockly.Blocks['input_marks'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Enter Marks (0 - 100)");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip("Takes validated marks input from user");
  }
};

// calculate percentage block
Blockly.Blocks['calculate_percentage'] = {
  init: function () {
    this.appendValueInput("MARKS")
      .setCheck("Number")
      .appendField("Calculate Percentage of");
    this.appendDummyInput()
      .appendField("out of 100");
    this.setOutput(true, "Number");
    this.setColour(180);
    this.setTooltip("Calculates percentage from marks");
  }
};

// grade checking block
Blockly.Blocks['grade_checker'] = {
  init: function () {
    this.appendValueInput("PERCENT")
      .setCheck("Number")
      .appendField("Get Grade for");
    this.setOutput(true, "String");
    this.setColour(120);
    this.setTooltip("Returns grade based on percentage");
  }
};

// pass_fail block
Blockly.Blocks['pass_fail'] = {
  init: function () {
    this.appendValueInput("PERCENT")
      .setCheck("Number")
      .appendField("Pass or Fail for");
    this.setOutput(true, "String");
    this.setColour(300);
    this.setTooltip("Checks whether student passed or failed");
  }
};

// show output block
Blockly.Blocks['show_output'] = {
  init: function () {
    this.appendValueInput("TEXT")
      .appendField("Show Output");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip("Prints output to console");
  }
};

//alert block
Blockly.Blocks['alert_block'] = {
  init: function () {
    this.appendValueInput("TEXT")
      .appendField("Alert");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip("Shows alert popup");
  }
};


Blockly.JavaScript.forBlock['input_marks'] = function (block, generator) {
  return [
`(function(){
  if (typeof window._marks === "undefined") {
    let m = Number(prompt("Enter marks (0 - 100):"));
    if (isNaN(m) || m < 0 || m > 100) {
      alert("Invalid marks entered!");
      m = 0;
    }
    window._marks = m;
  }
  return window._marks;
})()`,
generator.ORDER_NONE
];
};


Blockly.JavaScript.forBlock['calculate_percentage'] = function (block, generator) {
  const marks = generator.valueToCode(block, 'MARKS', generator.ORDER_NONE);
  return [`(${marks} / 100) * 100`, generator.ORDER_NONE];
};

Blockly.JavaScript.forBlock['grade_checker'] = function (block, generator) {
  const percent = generator.valueToCode(block, 'PERCENT', generator.ORDER_NONE);

  return [`
(function() {
  if (${percent} >= 90) return "Grade A+";
  else if (${percent} >= 75) return "Grade A";
  else if (${percent} >= 60) return "Grade B";
  else if (${percent} >= 40) return "Grade C";
  else return "You failed";
})()
`, generator.ORDER_NONE];
};

Blockly.JavaScript.forBlock['pass_fail'] = function (block, generator) {
  const percent = generator.valueToCode(block, 'PERCENT', generator.ORDER_NONE);

  return [`
(function() {
  if (${percent} >= 40) return "You passed";
  else return "You failed";
})()
`, generator.ORDER_NONE];
};

Blockly.JavaScript.forBlock['show_output'] = function (block, generator) {
  const text = generator.valueToCode(block, 'TEXT', generator.ORDER_NONE) || '""';
  return `console.log(${text});\n`;
};

Blockly.JavaScript.forBlock['alert_block'] = function (block, generator) {
  const text = generator.valueToCode(block, 'TEXT', generator.ORDER_NONE) || '""';
  return `alert(${text});\n`;
};

var toolbox = {
  "kind": "flyoutToolbox",
  "contents": [
    { "kind": "block", "type": "input_marks" },
    { "kind": "block", "type": "calculate_percentage" },
    { "kind": "block", "type": "grade_checker" },
    { "kind": "block", "type": "pass_fail" },
    { "kind": "block", "type": "show_output" },
    { "kind": "block", "type": "alert_block" }
  ]
};
