import { GlassButton } from "../landingPage/heroArea";
import { GlassContainer } from "../layout/container";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Box } from "@mui/system";

export default function ConnnectWalletUi({ handleWalletConnection }) {
  return (
    <GlassContainer
      sx={{
        minHeight: "80vh",
        minWidth: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "4rem",
      }}
    >
      <Box>
        <GlassButton
          variant='contained'
          size='large'
          endIcon={<AccountBalanceWalletIcon />}
          onClick={handleWalletConnection}
        >
          Connect your wallet
        </GlassButton>
      </Box>
    </GlassContainer>
  );
}
