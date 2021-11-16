/* eslint-disable import/prefer-default-export */
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import { AppTitleBarStyled } from "./AppTitleBarStyled";
import { useApplicationUtilities } from "../../AppContextProviders/hooks";
import { LanguageSwitcher } from "./LanguageSwitcher";
interface IAppBarProps {
  isOpen: boolean;
  titleText: string;
  subtitleText: string;
  toggleDrawer: () => void;
}
export const AppTitleBar = ({
  isOpen,
  titleText,
  subtitleText,
  toggleDrawer,
}: IAppBarProps): JSX.Element => {
  const { t, getCurrentLocale } = useApplicationUtilities();
  const currentLocale = getCurrentLocale();

  const TitleText = () => {
    return (
      <Typography component="h1" variant="h4" color="inherit" noWrap sx={{ flexGrow: 1 }}>
        {titleText}
        <Typography
          component="h4"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1, ml: "3%" }}
        >
          {subtitleText}
        </Typography>
      </Typography>
    );
  };

  const RtlToolBar = () => {
    return (
      <Toolbar
        sx={{
          pr: "24px", // keep right padding when drawer closed
        }}
      >
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <TitleText />
        <LanguageSwitcher />
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginLeft: "36px",
            ...(isOpen && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    );
  };

  const LtrToolBar = () => {
    return (
      <Toolbar
        sx={{
          pr: "24px", // keep right padding when drawer closed
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: "36px",
            ...(isOpen && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <TitleText />
        <LanguageSwitcher />
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    );
  };

  return (
    <AppTitleBarStyled open={isOpen} dir="ltr">
      {currentLocale.languageDir === "ltr" && <LtrToolBar />}
      {currentLocale.languageDir === "rtl" && <RtlToolBar />}
    </AppTitleBarStyled>
  );
};
