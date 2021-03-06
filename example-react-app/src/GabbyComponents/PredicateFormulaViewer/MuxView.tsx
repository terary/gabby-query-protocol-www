import * as React from "react";
import Grid from "@mui/material/Grid";

// import { predicateFormulaContextUtils } from "../../GabbyQueryProtocol/PredicateFormula";
import { BranchView } from "./BranchView";
import { LeafView } from "./LeafView";

import { PredicateFormulaHooks } from "../../GabbyQueryProtocol";
// import { usePredicateTreeUtilities } from "../../GabbyQueryProtocol/PredicateFormula/hooks/usePredicateTreeUtilities";
const { usePredicateTreeUtilities } = PredicateFormulaHooks;

type Props = {
  predicateId: string;
  numberOfChildren: number;
  childIndex: number;
};

export const MuxView = ({ predicateId, numberOfChildren, childIndex }: Props) => {
  // const { getChildIdsOf, isBranchNode } = usePredicateUtilities(predicateId);
  // const { getChildIdsOf, isBranchNode } = useJunctionProperties(predicateId);
  const { getChildrenIds, testIsBranchNode } = usePredicateTreeUtilities();
  const childrenIds = getChildrenIds(predicateId);
  const [containerWidth, setContainerWidth] = React.useState(-1);
  const editorContainerRef = React.useRef(null);

  React.useEffect(() => {
    setContainerWidth(
      // @ts-ignore
      editorContainerRef.current ? editorContainerRef.current.offsetWidth : 0
    );
  }, [editorContainerRef.current]);

  const BranchingNode = () => {
    return (
      <Grid item sm direction="row-reverse">
        <BranchView predicateId={predicateId}>
          {childrenIds.map((childId, idx) => (
            <MuxView
              predicateId={childId}
              numberOfChildren={childrenIds.length}
              childIndex={idx}
            />
          ))}
        </BranchView>
      </Grid>
    );
  };

  const SingleNode = () => {
    return (
      <LeafView
        predicateId={predicateId}
        // numberOfChildren={numberOfChildren}
        // childIndex={childIndex}
      />
    );
  };
  return (
    <>
      {testIsBranchNode(predicateId) && <BranchingNode />}
      {!testIsBranchNode(predicateId) && <SingleNode />}
    </>
  );
};
