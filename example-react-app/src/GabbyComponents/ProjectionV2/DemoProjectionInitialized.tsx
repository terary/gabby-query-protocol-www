/* eslint-disable import/prefer-default-export */
import { ProjectionInteractive } from "./ProjectionInteractive";
import { ProjectionItemCreator } from "./ProjectionItemCreator";
import { useTheme } from "@mui/system";
import { customStyles } from "../../Application/custom-styles";

export const DemoProjectionInitialized = (): JSX.Element => {
  const theme = useTheme();
  return (
    <div style={{ margin: "20px" }}>
      <div
        style={{
          borderRadius: "5px",
          backgroundColor: theme.palette.grey[100],
          border: `1px solid ${customStyles.sectionBorder}`,
        }}
      >
        <ProjectionItemCreator />
        <ProjectionInteractive />
      </div>
    </div>
  );
};
