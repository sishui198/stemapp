define({
  root: ({
    configText : "Define Your Filter Groups Below",
    labels : {
      groupName : "Filter Set Name:",
      groupNameTip : "Name of the filter that the user will select from.",
      groupDesc : "Description:",
      groupDescTip : "Description of the filter set.",
      groupOperator : "Preset Operator:",
      groupOperatorTip : "Option to predefine the operator of the filter. If no Preset Operator is selected, the filter will use the Equal operator.",
      groupDefault : "Preset Value:",
      groupDefaultTip : "Option to choose a value from an existing layer.",
      sameLayerAppend : "When a layer is listed more than once:",
      sameLayerConjunc : "Append Using:",
      caseSearch: "Perform an case sensitive search: "
    },
    buttons : {
      addNewGroup : "Add a New Group",
      addNewGroupTip : "Add a new filter set.",
      addLayer : "Add Layer",
      addLayerTip : "Add a layer to the filter set."
    },
    inputs : {
      groupName : "Give Your Group a Name",
      groupDesc : "Description for Your Group",
      groupDefault : "Enter a Predefined Value",
      sameLayerAny: "Match any expression",
      sameLayerAll: "Match all expression",
      simpleMode : "Start in Simple View",
      simpleModeTip : "Option to simplify the configured widget interface. When checked, the operator drop-down list and add criteria buttons are removed from the interface.",
      webmapAppendModeAny : "Append any expressions to existing map filter",
      webmapAppendModeAll : "Append all expressions to existing map filter",
      webmapAppendModeTip : "Option to append the filter set to an existing web map filter.",
      persistOnClose: "Persist After Widget is Closed",
      optionsMode : "Hide Widget Options",
      optionsModeTip : "Option to expose additional widget settings. If checked, saving and loading defined filters and persisting the filter after the widget is closed are removed from the interface.",
      optionOR : "OR",
      optionAND : "AND",
      optionEQUAL : "EQUALS",
      optionNOTEQUAL : "NOT EQUAL",
      optionGREATERTHAN : "GREATER THAN",
      optionGREATERTHANEQUAL : "GREATER THAN OR EQUAL",
      optionLESSTHAN : "LESS THAN",
      optionLESSTHANEQUAL : "LESS THAN OR EQUAL",
      optionSTART : "BEGINS WITH",
      optionEND : "ENDS WITH",
      optionLIKE : "CONTAINS",
      optionNOTLIKE : "DOES NOT CONTAIN",
      optionONORBEFORE: "IS ON OR BEFORE",
      optionONORAFTER: "IS ON OR AFTER",
      optionNONE : "NONE"
    },
    tables : {
      layer : "Layers",
      layerTip: "Name of the layer as defined in the map.",
      field : "Fields",
      fieldTip: "Field that the layer will be filtered on.",
      value : "Use Value",
      valueTip : "Option to use the drop-down list values from the layer. If no layer uses this parameter, a plain text box will be presented to the user.",
      zoom : "Zoom",
      zoomTip: "Option to zoom to the extent of the features after the filter is applied. Only one layer can be selected to zoom to.",
      action : "Delete",
      actionTip: "Remove layer from the filter set."
    },
    popup : {
      label : "Pick a Value"
    },
    errors : {
      noGroups : "You need at least one group.",
      noGroupName : "One or more group names are missing.",
      noDuplicates : "One or more group names are duplicated.",
      noRows : "You need at least one row in the table.",
      noLayers : "You have no layers in your map."
    },
    picker : {
      description: "Use this form to find a preset value for this group.",
      layer : "Select a Layer",
      layerTip : "Name of the layer as defined in the web map.",
      field : "Select a Field",
      fieldTip : "Field that the preset value will be set from.",
      value : "Select a Value",
      valueTip : "Value that will be the default of the widget."
    }
  }),
  "ar": 1,
  "bs": 1,
  "cs": 1,
  "da": 1,
  "de": 1,
  "el": 1,
  "es": 1,
  "et": 1,
  "fi": 1,
  "fr": 1,
  "he": 1,
  "hi": 1,
  "hr": 1,
  "it": 1,
  "id": 1,
  "ja": 1,
  "ko": 1,
  "lt": 1,
  "lv": 1,
  "nb": 1,
  "nl": 1,
  "pl": 1,
  "pt-br": 1,
  "pt-pt": 1,
  "ro": 1,
  "ru": 1,
  "sl": 1,
  "sr": 1,
  "sv": 1,
  "th": 1,
  "tr": 1,
  "vi": 1,
  "zh-cn": 1,
  "zh-hk": 1,
  "zh-tw": 1
});