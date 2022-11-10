import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2";
import imgUrl from "./assets/1U2A5485.png";
export const Home = () => {
  return (
    <>
      <Paper sx={{ display: "flex" }}>
        <Grid2 container>
          <Grid2
            sx={{ bgcolor: "primary.main" }}
            xs={12}
            sm={12}
            md={6}
            order={{ xs: 2, sm: 2, md: 1 }}
          >
            <CardContent>
              <Box
                borderRadius={0}
                component="label"
                sx={{
                  bgcolor: "primary.light",
                  typography: "h5",
                  display: "inline-block",
                }}
              >
                Gør som 930.000 andre danskere
              </Box>
              <Box sx={{ color: "primary.contrastText", typography: "h6" }}>
                Et godt liv – hele livet. Alder er noget alle har, men ingen er
                kun deres alder. Nogle har brug for støtte og omsorg. Andre kan
                ikke finde timer nok i døgnet til alt det, de skal nå. Ældre
                Sagen skaber rum for gode liv – uanset alder. Vær med sammen med
                930.000 andre danskere. Du er velkommen. Bliv medlem af Ældre
                Sagen
              </Box>
              <Button variant="contained" color="error">
                Bliv medlem nu
              </Button>
            </CardContent>
          </Grid2>
          <Grid2 xs={12} sm={12} md={6} order={{ xs: 1, sm: 1 }}>
            <CardMedia component="img" sx={{ maxWidth: 960 }} image={imgUrl} />
          </Grid2>
        </Grid2>
      </Paper>
      <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
        <Grid2 container sx={{ sm: { margin: "calc(20 / -2)" } }}>
          <Grid2 xs={12}>
            <Box sx={{ typography: "h4" }}>Få gode råd</Box>
          </Grid2>
          <Grid2 md={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Box sx={{ marginBottom: "1rem" }}>
                <Box sx={{ typography: "h6" }}>Folkepension</Box>{" "}
                <Box sx={{ typography: "h5" }}>
                  Din ægtefælles arbejdsindtægt påvirker ikke din folkepension
                </Box>
                <Box>
                  Fra den 1. januar 2023 bliver din ægtefælle, eller samlevers,
                  arbejdsindtægt ikke modregnet, hvis du modtager folkepension,
                  førtidspension eller seniorpension.
                </Box>
              </Box>
              <Box>
                <Button variant="outlined" color="primary">
                  Læs om nye regler
                </Button>
              </Box>
            </Box>
          </Grid2>
          <Grid2 md={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Box sx={{ marginBottom: "1rem" }}>
                <Box sx={{ typography: "h6" }}>Ældrecheck</Box>{" "}
                <Box sx={{ typography: "h5" }}>
                  5000 kr. i ekstra ældrecheck som pensionist
                </Box>
                <Box>
                  Læs her hvor meget du får i ekstra ældrecheck og hvornår den
                  ekstra ældrecheck bliver udbetalt – hvis forslaget vedtages.
                </Box>
              </Box>
              <Box>
                <Button variant="outlined" color="primary">
                  Læs om nye regler
                </Button>
              </Box>
            </Box>
          </Grid2>
          <Grid2 md={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Box sx={{ marginBottom: "1rem" }}>
                <Box sx={{ typography: "h6" }}>Bolig</Box>{" "}
                <Box sx={{ typography: "h5" }}>
                  Spar energi – og penge – i din bolig med disse 7 gode råd
                </Box>
                <Box>
                  Prisen på el og varme er steget meget. Heldigvis kan du selv
                  gøre noget for, at dine udgifter til el, vand og varme bliver
                  mindre.
                </Box>
              </Box>
              <Box>
                <Button variant="outlined" color="primary">
                  Læs om nye regler
                </Button>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </>
  );
};
