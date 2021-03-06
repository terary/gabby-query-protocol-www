import * as React from "react";
import Grid from "@mui/material/Grid";
import type {
  TPredicateProperties,
  TPredicatePropertiesArrayValue,
} from "gabby-query-protocol-lib";
// import { predicateFormulaContextUtils } from "../../GabbyQueryProtocol/PredicateFormula";
import { IconButtonRemove } from "../common/IconButtonRemove";
import { IconButtonsAdd } from "../common/IconButtonsAdd";
import { OptionSwitch } from "../common/OptionSwitch";
import { PredicateEditorPopover } from "../PredicateFormulaEditor";
import { SxProps, useTheme, Theme } from "@mui/system";
import { blue, green } from "@mui/material/colors";

import { PredicateFormulaHooks } from "../../GabbyQueryProtocol";
const { useJunctionProperties, usePredicateTreeUtilities } = PredicateFormulaHooks;

type Props = {
  predicateId: string;
  children?: React.ReactNode;
};
export const BranchView = ({ predicateId, children }: Props) => {
  const editorContainerRef = React.useRef(null);
  const theme = useTheme();
  const [isOpenNewPredicateEditor, setIsOpenNewPredicateEditor] = React.useState(false);

  const {
    appendPredicate,
    getJunctionProperties,
    isRoot,
    removeCurrentPredicateJunction,
    setConjunction,
    setDisjunction,
  } = useJunctionProperties(predicateId);
  const { makeEmptyPredicate } = usePredicateTreeUtilities();

  const bg = getJunctionProperties()?.operator === "$and" ? green[50] : blue[50];

  const handleJunctionSwitch = (operator: "$and" | "$or") => {
    if (operator === "$and") {
      setConjunction();
    } else {
      setDisjunction();
    }
  };

  const handleRemovePredicateJunction = () => {
    removeCurrentPredicateJunction();
  };

  const handleAddPredicateFinishClick = (
    newPredicate: TPredicateProperties | TPredicatePropertiesArrayValue
  ) => {
    // run validator?
    appendPredicate(newPredicate);
    setIsOpenNewPredicateEditor(false);
  };

  const handleAddPredicateClick = () => {
    setIsOpenNewPredicateEditor(true);
  };

  const handNewPredicateEditCancelClick = () => {
    setIsOpenNewPredicateEditor(false);
  };

  const ControlButtons = () => {
    return (
      <>
        <OptionSwitch
          operator={getJunctionProperties().operator === "$or" ? "$or" : "$and"}
          onChange={handleJunctionSwitch}
        />
        <IconButtonsAdd onClick={handleAddPredicateClick} />
        {!isRoot && <IconButtonRemove onClick={handleRemovePredicateJunction} />}
      </>
    );
  };

  const PredicateEditorWrapper = () => {
    return (
      <PredicateEditorPopover
        id={`${predicateId}-popover-editor`}
        initialPredicate={makeEmptyPredicate()}
        isOpen={isOpenNewPredicateEditor}
        onFinish={handleAddPredicateFinishClick}
        onCancel={handNewPredicateEditCancelClick}
        parentEl={editorContainerRef.current}
      />
    );
  };

  const sx = {
    // 'theme' didn't seem to work in from common utilities
    border: `1px solid ${theme.palette.text.secondary}`,
    borderRadius: "4px",
    textAlign: "center",
    backgroundColor: bg,
    height: "100%",
    m: "3px",
    p: "3px",
    width: "calc(100% - 4px)",
  } as SxProps<Theme>;

  return (
    <Grid container spacing={1} sx={sx}>
      <Grid item xs={12} ref={editorContainerRef}>
        <PredicateEditorWrapper />
        <ControlButtons />
      </Grid>
      {children}
    </Grid>
  );
};
BranchView.defaultProps = {
  children: [],
  bg: "#7FFF00",
};
