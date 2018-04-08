console.log('loaded sublime custom.js');
require(["codemirror/keymap/sublime", "notebook/js/cell", "base/js/namespace"],
  function(sublime_keymap, cell, IPython) {
    cell.Cell.options_default.cm_config.keyMap = 'sublime';
    cell.Cell.options_default.cm_config.extraKeys['Cmd-Enter'] = function(){console.log('cmd-enter')};
    cell.Cell.options_default.cm_config.extraKeys['Ctrl-Enter'] = function(){console.log('ctrl-enter')};
    cell.Cell.options_default.cm_config.extraKeys['Shift-Enter'] = function(){};
    var cells = IPython.notebook.get_cells();
    for(var cl=0; cl< cells.length ; cl++){
      cells[cl].code_mirror.setOption('extraKeys',
      {
        "Cmd-Enter": function(){},
        "Ctrl-Enter": function(){}
      }
    );
    cells[cl].code_mirror.setOption('keyMap', 'sublime');
  }
}
);

